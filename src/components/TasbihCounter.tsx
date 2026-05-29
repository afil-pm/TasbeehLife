"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Plus, RotateCcw, Save, Trash2, HelpCircle, CheckCircle } from "lucide-react";

interface DhikrLog {
  id: string;
  time: string;
  phrase: string;
  count: number;
  target: string;
}

export const TasbihCounter: React.FC = () => {
  const { t, language } = useLanguage();
  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<string>("33");
  const [customPhrase, setCustomPhrase] = useState<string>("");
  const [selectedPhrase, setSelectedPhrase] = useState<string>("");
  const [logs, setLogs] = useState<DhikrLog[]>([]);
  const [isClicking, setIsClicking] = useState<boolean>(false);

  const phrases = t("tasbihPhrases");

  useEffect(() => {
    const savedLogs = localStorage.getItem("tasbih_logs");
    if (savedLogs) {
      try {
        setLogs(JSON.parse(savedLogs));
      } catch (e) {
        console.error(e);
      }
    }
    if (phrases && phrases.length > 0) {
      setSelectedPhrase(phrases[0].text);
    }
  }, []);

  const saveLogsToStorage = (newLogs: DhikrLog[]) => {
    setLogs(newLogs);
    localStorage.setItem("tasbih_logs", JSON.stringify(newLogs));
  };

  const playWebSound = (type: "tick" | "success") => {
    if (typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === "tick") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(1000, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } else if (type === "success") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(660, ctx.currentTime);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(880, ctx.currentTime);
        gain2.gain.setValueAtTime(0.06, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
        osc2.start();
        osc2.stop(ctx.currentTime + 0.5);
      }
    } catch (err) {
      console.warn("Web Audio API not allowed or supported yet.", err);
    }
  };

  const handleIncrement = () => {
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 120);

    const nextCount = count + 1;
    const limit = parseInt(target);

    if (!isNaN(limit) && nextCount === limit) {
      setCount(nextCount);
      playWebSound("success");
    } else {
      setCount(nextCount);
      playWebSound("tick");
    }
  };

  const handleReset = () => {
    setCount(0);
    playWebSound("tick");
  };

  const currentDhikrText = customPhrase || selectedPhrase;

  const handleSaveLog = () => {
    if (count === 0) return;

    const newLog: DhikrLog = {
      id: Math.random().toString(36).substring(2, 9),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      phrase: currentDhikrText || "Dhikr / Remembrence",
      count: count,
      target: target === "free" ? "∞" : target,
    };

    const newLogs = [newLog, ...logs];
    saveLogsToStorage(newLogs);
    setCount(0);
    playWebSound("success");
  };

  const handleDeleteLog = (id: string) => {
    const updated = logs.filter((log) => log.id !== id);
    saveLogsToStorage(updated);
  };

  const handleClearAllLogs = () => {
    if (confirm("Clear all dhikr logs?")) {
      saveLogsToStorage([]);
    }
  };

  const isTargetMet = target !== "free" && count >= parseInt(target);

  return (
    <section className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden transition-all duration-300">

      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          {t("tasbihTitle")}
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
          {t("tasbihSubtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Settings panel */}
        <div className="lg:col-span-4 space-y-6 bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
              {language === "ar" ? "اختر الذكر" : language === "ml" ? "ദിക്റുകൾ തിരഞ്ഞെടുക്കാം" : "Select Dhikr"}
            </label>
            <div className="space-y-1">
              {phrases.map((phrase, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedPhrase(phrase.text);
                    setCustomPhrase("");
                  }}
                  className={`w-full flex justify-between items-center p-3 rounded-xl transition ${
                    selectedPhrase === phrase.text && !customPhrase
                      ? "bg-gray-100 text-blue-600 border border-gray-200"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  <span className="text-lg font-serif">{phrase.text}</span>
                  <span className="text-xs text-gray-400">{phrase.translation}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-gray-200">
            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
              {t("tasbihCustomDhikr")}
            </label>
            <input
              type="text"
              placeholder="..."
              value={customPhrase}
              onChange={(e) => {
                setCustomPhrase(e.target.value);
                setSelectedPhrase("");
              }}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition"
            />
          </div>

          <div className="space-y-2 pt-2 border-t border-gray-200">
            <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
              {t("tasbihTarget")}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {["33", "99", "100", "free"].map((val) => (
                <button
                  key={val}
                  onClick={() => {
                    setTarget(val);
                    setCount(0);
                  }}
                  className={`py-2 rounded-lg text-xs font-mono border transition ${
                    target === val
                      ? "bg-sky-50 text-sky-600 border-sky-200"
                      : "bg-white text-gray-500 border-gray-200 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {val === "free" ? "∞" : val}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Counter Display Clicker */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-3xl p-6 md:p-12 relative min-h-[440px] shadow-sm">
          <div className="text-center mb-6">
            <p className="text-3xl md:text-4xl font-serif text-blue-700 py-1 leading-normal font-semibold">
              {currentDhikrText || "سُبْحَانَ اللهِ"}
            </p>
            <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">
              {target !== "free" ? `${t("tasbihTarget")}: ${target}` : "Free Mode"}
            </p>
          </div>

          <button
            onClick={handleIncrement}
            className={`w-52 h-52 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-gray-50 to-white border-4 flex flex-col items-center justify-center relative cursor-pointer select-none transition-all duration-150 ${
              isClicking ? "scale-95 shadow-inner" : "scale-100"
            } ${
              isTargetMet
                ? "border-sky-500 shadow-[0_0_30px_rgba(14,165,233,0.3)] bg-sky-50/30"
                : "border-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:border-gray-300"
            }`}
          >
            {isTargetMet && (
              <div className="absolute inset-0.5 rounded-full border border-sky-400/50 animate-ping opacity-25" />
            )}

            <span className="text-5xl md:text-6xl font-bold font-mono tracking-tight text-gray-800">
              {count}
            </span>

            <span className="text-xs text-sky-600 mt-2 font-mono flex items-center gap-1">
              {isTargetMet ? (
                <>
                  <CheckCircle className="w-3 h-3 text-sky-500" />
                  Done
                </>
              ) : (
                "TAP HERE"
              )}
            </span>
          </button>

          <div className="flex gap-4 mt-8 w-full max-w-sm">
            <button
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-gray-500 bg-gray-100 border border-gray-200 hover:bg-gray-200 hover:text-gray-700 transition shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              {t("tasbihReset")}
            </button>
            <button
              onClick={handleSaveLog}
              disabled={count === 0}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 transition shadow-sm disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              {t("tasbihSave")}
            </button>
          </div>
        </div>
      </div>

      {logs.length > 0 && (
        <div className="max-w-5xl mx-auto mt-10 pt-8 border-t border-gray-200 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-sky-500" />
              {language === "ar" ? "سجل الأذكار" : language === "ml" ? "ചെയ്ത ദിക്റുകളുടെ റെക്കോർഡ്" : "Tasbih History Logs"}
            </h3>
            <button
              onClick={handleClearAllLogs}
              className="text-xs text-rose-500 hover:text-rose-400 flex items-center gap-1 py-1 px-2.5 rounded bg-rose-50 border border-rose-200 transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
              {language === "ar" ? "مسح السجل" : language === "ml" ? "എല്ലാം നീക്കം ചെയ്യുക" : "Clear All"}
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-400 uppercase tracking-wider font-semibold bg-gray-50">
                    <th className="py-3.5 px-4">{language === "ar" ? "الوقت" : "Time"}</th>
                    <th className="py-3.5 px-4">{language === "ar" ? "الذكر" : "Dhikr Phrase"}</th>
                    <th className="py-3.5 px-4 text-center">{language === "ar" ? "الهدف" : "Target"}</th>
                    <th className="py-3.5 px-4 text-center">{language === "ar" ? "المجموع" : "Count"}</th>
                    <th className="py-3.5 px-4 text-center"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  {logs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50 transition">
                      <td className="py-3 px-4 font-mono text-gray-400">{log.time}</td>
                      <td className="py-3 px-4 text-sm font-serif text-blue-700">{log.phrase}</td>
                      <td className="py-3 px-4 text-center text-gray-400 font-mono">{log.target}</td>
                      <td className="py-3 px-4 text-center font-bold font-mono text-sky-600 text-sm">{log.count}</td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleDeleteLog(log.id)}
                          className="text-gray-400 hover:text-rose-500 p-1 transition"
                          title="Delete entry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
