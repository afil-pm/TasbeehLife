"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Mail, Gift, Heart, Send, CheckCircle, Github, MessageSquare, Terminal } from "lucide-react";

interface LocalFeedback {
  id: string;
  name: string;
  email: string;
  msg: string;
  date: string;
}

export const SupportSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [localFeedbacks, setLocalFeedbacks] = useState<LocalFeedback[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("feedback_history");
    if (saved) {
      try {
        setLocalFeedbacks(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");

        const newFeedback: LocalFeedback = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email,
          msg: message,
          date: new Date().toLocaleDateString(),
        };

        const updated = [newFeedback, ...localFeedbacks];
        setLocalFeedbacks(updated);
        localStorage.setItem("feedback_history", JSON.stringify(updated));
      } else {
        alert("Failed to submit feedback. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error contacting the feedback server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden transition-all duration-300">

      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          {t("supportTitle")}
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
          {t("supportSubtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-br from-sky-50 to-white border border-sky-100 p-6 rounded-2xl relative overflow-hidden">
            <div className="flex items-center gap-3 text-sky-600 font-bold mb-3">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500/20" />
              <h4>{t("supportDonateTitle")}</h4>
            </div>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-5">
              {t("supportDonateDesc")}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {["$10", "$25", "$50"].map((amt) => (
                <button
                  key={amt}
                  onClick={() => alert(`Thank you! Simulated payment flow for ${amt} initiated.`)}
                  className="py-2 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white transition shadow-sm"
                >
                  {amt}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 text-gray-800 font-bold mb-3">
              <Terminal className="w-5 h-5 text-blue-500" />
              <h4>{t("supportDevTitle")}</h4>
            </div>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
              {t("supportDevDesc")}
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono text-gray-500">
              <span className="bg-gray-100 px-2.5 py-1.5 rounded-md border border-gray-200">Next.js 15</span>
              <span className="bg-gray-100 px-2.5 py-1.5 rounded-md border border-gray-200">React 19</span>
              <span className="bg-gray-100 px-2.5 py-1.5 rounded-md border border-gray-200">TailwindCSS</span>
              <span className="bg-gray-100 px-2.5 py-1.5 rounded-md border border-gray-200">TypeScript</span>
              <span className="bg-gray-100 px-2.5 py-1.5 rounded-md border border-gray-200">HTML5 Audio</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 relative shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-sky-500" />
            <h3 className="text-base font-bold text-gray-800">
              {t("supportFormTitle")}
            </h3>
          </div>

          {success ? (
            <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl text-center space-y-4 animate-fade-in">
              <CheckCircle className="w-12 h-12 text-sky-500 mx-auto" />
              <p className="text-sm text-sky-600 font-medium">
                {t("supportFormSuccess")}
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="py-2 px-5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 rounded-xl text-xs font-semibold transition"
              >
                {language === "ar" ? "إرسال رسالة أخرى" : "Send Another Message"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-400 font-mono block uppercase">
                    {t("supportFormName")}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-sky-500 transition"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-400 font-mono block uppercase">
                    {t("supportFormEmail")}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-sky-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-400 font-mono block uppercase">
                  {t("supportFormMsg")}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-sky-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isLoading
                  ? language === "ar" ? "جاري الإرسال..." : "Submitting..."
                  : t("supportFormSubmit")}
              </button>
            </form>
          )}
        </div>
      </div>

      {localFeedbacks.length > 0 && (
        <div className="max-w-5xl mx-auto mt-10 pt-8 border-t border-gray-200 animate-fade-in">
          <h3 className="text-sm font-bold text-gray-500 mb-4 flex items-center gap-2">
            <span className="w-1 h-4 rounded bg-gray-300" />
            {language === "ar" ? "رسائلك المرسلة مؤخراً (محاكاة)" : "Your Recently Sent Feedback (Simulated)"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {localFeedbacks.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-4 space-y-2 shadow-sm">
                <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono">
                  <span className="font-bold text-gray-600">{item.name} ({item.email})</span>
                  <span>{item.date}</span>
                </div>
                <p className="text-xs text-gray-600 font-sans italic">"{item.msg}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
