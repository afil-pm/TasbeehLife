"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronLeft, ChevronRight, BookOpen, Layers, Award } from "lucide-react";

export const PrayerGuide: React.FC = () => {
  const { t, language } = useLanguage();
  const [wuduStep, setWuduStep] = useState(0);
  const [salahStep, setSalahStep] = useState(0);
  const [activeTab, setActiveTab] = useState<"wudu" | "salah" | "rakah">("salah");

  const wuduSteps = t("wuduStepsData");
  const salahSteps = t("salahStepsData");

  const renderSalahSVG = (stepIndex: number) => {
    if (stepIndex === 2) {
      return (
        <svg className="w-48 h-48 mx-auto text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="8" stroke="currentColor" strokeWidth="3" />
          <path d="M35 32H70M70 32V68M70 68L80 90M70 68L60 90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M35 32L48 55M48 55H70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="15" y1="95" x2="85" y2="95" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );
    }
    if (stepIndex === 4 || stepIndex === 6) {
      return (
        <svg className="w-48 h-48 mx-auto text-sky-500 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="80" r="7" stroke="currentColor" strokeWidth="3" />
          <path d="M68 80C68 62 48 55 35 75M35 75L22 80M35 75C35 75 42 85 50 85M50 85H60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="15" y1="95" x2="85" y2="95" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );
    }
    if (stepIndex === 5 || stepIndex === 7 || stepIndex === 8) {
      return (
        <svg className="w-48 h-48 mx-auto text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="35" r="8" stroke="currentColor" strokeWidth="3" />
          <path d="M50 43V68M50 68H25M25 68L20 85M25 68L35 85" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M42 50H58M42 50C42 50 50 54 52 54C54 54 58 50 58 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="15" y1="95" x2="85" y2="95" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );
    }
    return (
      <svg className="w-48 h-48 mx-auto text-sky-500 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)] animate-pulse" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="20" r="8" stroke="currentColor" strokeWidth="3" />
        <path d="M50 28V65M50 65L40 90M50 65L60 90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 38H60M40 38C40 38 48 42 50 42C52 42 60 38 60 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="15" y1="95" x2="85" y2="95" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    );
  };

  const nextWudu = () => {
    if (wuduStep < wuduSteps.length - 1) setWuduStep(wuduStep + 1);
  };
  const prevWudu = () => {
    if (wuduStep > 0) setWuduStep(wuduStep - 1);
  };

  const nextSalah = () => {
    if (salahStep < salahSteps.length - 1) setSalahStep(salahStep + 1);
  };
  const prevSalah = () => {
    if (salahStep > 0) setSalahStep(salahStep - 1);
  };

  return (
    <section className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden transition-all duration-300">

      {/* Tabs Menu */}
      <div className="flex flex-wrap gap-2 md:gap-4 mb-8 bg-gray-100 p-2 rounded-2xl max-w-lg mx-auto border border-gray-200">
        <button
          onClick={() => setActiveTab("salah")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
            activeTab === "salah"
              ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-200"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-200"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          {t("tabSalah")}
        </button>
        <button
          onClick={() => setActiveTab("wudu")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
            activeTab === "wudu"
              ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-200"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Layers className="w-4 h-4" />
          {t("tabWudu")}
        </button>
        <button
          onClick={() => setActiveTab("rakah")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
            activeTab === "rakah"
              ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-200"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Award className="w-4 h-4" />
          {language === "ar" ? "الركعات" : language === "ml" ? "റക്അത്തുകൾ" : "Rak'ahs"}
        </button>
      </div>

      {/* SALAH TEACHING MODULE */}
      {activeTab === "salah" && (
        <div className="space-y-8 animate-fade-in">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              {t("salahTitle")}
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
              {t("salahSubtitle")}
            </p>
          </div>

          {/* Stepper controls */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Steps list panel */}
            <div className="lg:col-span-4 bg-gray-50/80 border border-gray-200 rounded-2xl p-4 max-h-[480px] overflow-y-auto custom-scrollbar">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
                {t("salahStepsTitle")}
              </h3>
              <div className="space-y-1">
                {salahSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSalahStep(idx)}
                    className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                       language === "ar" ? "text-right" : ""
                     } ${
                       salahStep === idx
                         ? "bg-gray-100 text-blue-600 font-medium border-l-2 border-sky-500"
                         : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                     }`}
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-xs text-gray-500">
                      {idx + 1}
                    </span>
                    <span className="text-sm truncate">{step.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step display slide */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 relative shadow-sm">
              <span className="absolute top-4 right-4 bg-gray-100 text-sky-600 text-xs font-mono font-bold px-3 py-1 rounded-full border border-gray-200">
                {t("salahStepName")} {salahStep + 1} / {salahSteps.length}
              </span>

              {/* Graphic/Illustration area */}
              <div className="py-6 flex items-center justify-center min-h-[220px]">
                {renderSalahSVG(salahStep)}
              </div>

              {/* Text contents */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs text-blue-500 font-mono tracking-widest uppercase block mb-1">
                    {salahSteps[salahStep].position}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800">
                    {salahSteps[salahStep].title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    {salahSteps[salahStep].desc}
                  </p>
                </div>

                {/* Recitations block */}
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <div className="bg-gray-50 p-4 rounded-xl text-center space-y-3 relative group overflow-hidden border border-gray-200">
                    <span className="absolute top-2 left-2 text-[10px] uppercase font-mono tracking-wider text-gray-400">
                      {t("salahRecitation")}
                    </span>
                    <p className="text-2xl md:text-3xl font-serif text-blue-700 font-medium py-2 leading-relaxed select-all">
                      {salahSteps[salahStep].arabic}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-200">
                      <span className="text-xs font-mono text-gray-400 block mb-1">
                        {t("salahTransliteration")}
                      </span>
                      <p className="text-sm text-sky-600 italic font-mono">
                        {salahSteps[salahStep].translit}
                      </p>
                    </div>
                    <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-200">
                      <span className="text-xs font-mono text-gray-400 block mb-1">
                        {t("salahTranslation")}
                      </span>
                      <p className="text-sm text-gray-600">
                        {salahSteps[salahStep].translation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide controls */}
              <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
                <button
                  onClick={prevSalah}
                  disabled={salahStep === 0}
                  className="flex items-center gap-1 py-2 px-4 rounded-lg bg-gray-100 text-gray-500 border border-gray-200 hover:text-gray-700 hover:bg-gray-200 transition disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {language === "ar" ? "السابق" : "Prev"}
                </button>
                <button
                  onClick={nextSalah}
                  disabled={salahStep === salahSteps.length - 1}
                  className="flex items-center gap-1 py-2 px-4 rounded-lg bg-sky-500 text-white hover:bg-sky-400 transition shadow-sm disabled:opacity-20 disabled:cursor-not-allowed"
                >
                  {language === "ar" ? "التالي" : "Next"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WUDU TEACHING MODULE */}
      {activeTab === "wudu" && (
        <div className="space-y-8 animate-fade-in">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              {t("wuduTitle")}
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
              {t("wuduSubtitle")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl p-6 md:p-8 relative shadow-sm">
            <span className="absolute top-4 right-4 bg-gray-100 text-sky-600 text-xs font-mono font-bold px-3 py-1 rounded-full border border-gray-200">
              {t("wuduStep")} {wuduStep + 1} / {wuduSteps.length}
            </span>

            {/* Wudu Illustrations as schematic SVG */}
            <div className="py-6 flex items-center justify-center min-h-[160px]">
              <svg className="w-36 h-36 text-sky-500 drop-shadow-[0_0_12px_rgba(14,165,233,0.2)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simulated dynamic water ripple paths depending on step */}
                <path d="M50 15V85M15 50H85" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" className="animate-spin" style={{ animationDuration: '40s' }} />
                
                {/* Standard beautiful droplet */}
                <path d="M50 25C50 25 35 45 35 55C35 63.2843 41.7157 70 50 70C58.2843 70 65 63.2843 65 55C65 45 50 25 50 25Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.5" />
                <path d="M45 50C45 47 48 44 50 44" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="text-center space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {wuduSteps[wuduStep].title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                {wuduSteps[wuduStep].desc}
              </p>

              {wuduSteps[wuduStep].arabic && (
                <div className="bg-gray-50 p-4 rounded-2xl max-w-xl mx-auto border border-gray-200">
                  <p className="text-xl md:text-2xl font-serif text-blue-700 leading-relaxed font-medium">
                    {wuduSteps[wuduStep].arabic}
                  </p>
                </div>
              )}
            </div>

            {/* Stepper Controls */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200">
              <button
                onClick={prevWudu}
                disabled={wuduStep === 0}
                className="flex items-center gap-1 py-2 px-4 rounded-lg bg-gray-100 text-gray-500 border border-gray-200 hover:text-gray-700 hover:bg-gray-200 transition disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                {language === "ar" ? "السابق" : "Prev"}
              </button>
              
              <div className="hidden md:flex gap-1.5">
                {wuduSteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setWuduStep(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      wuduStep === idx ? "bg-sky-500 scale-125" : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextWudu}
                disabled={wuduStep === wuduSteps.length - 1}
                className="flex items-center gap-1 py-2 px-4 rounded-lg bg-sky-500 text-white hover:bg-sky-400 transition shadow-sm disabled:opacity-20 disabled:cursor-not-allowed"
              >
                {language === "ar" ? "التالي" : "Next"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RAK'AH CHART MODULE */}
      {activeTab === "rakah" && (
        <div className="space-y-8 animate-fade-in">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              {t("salahTableTitle")}
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
              {t("salahTableSub")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-500 font-medium">
                    <th className="py-4 px-4">{language === "ar" ? "الصلاة" : language === "ml" ? "നമസ്കാരം" : "Salah (Prayer)"}</th>
                    <th className="py-4 px-4">{language === "ar" ? "وقت الصلاة" : language === "ml" ? "സമയം" : "Approx. Time"}</th>
                    <th className="py-4 px-4 text-center">{t("salahFard")}</th>
                    <th className="py-4 px-4 text-center">{t("salahSunnah")}</th>
                    <th className="py-4 px-4 text-center font-bold text-blue-600">{language === "ar" ? "المجموع" : language === "ml" ? "ആകെ" : "Total"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-4 px-4 font-bold text-gray-800">{language === "ar" ? "الفجر" : language === "ml" ? "സുബഹി (Fajr)" : "Fajr"}</td>
                    <td className="py-4 px-4 text-gray-500">{language === "ar" ? "الفجر الصادق" : language === "ml" ? "പ്രഭാതം" : "Dawn"}</td>
                    <td className="py-4 px-4 text-center font-semibold text-sky-600">2</td>
                    <td className="py-4 px-4 text-center">2 {language === "ar" ? "قبل" : "Before"}</td>
                    <td className="py-4 px-4 text-center font-bold text-blue-600">4</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-4 px-4 font-bold text-gray-800">{language === "ar" ? "الظهر" : language === "ml" ? "ളുഹർ (Dhuhr)" : "Dhuhr"}</td>
                    <td className="py-4 px-4 text-gray-500">{language === "ar" ? "الزوال" : language === "ml" ? "ഉച്ചയ്ക്ക്" : "Midday"}</td>
                    <td className="py-4 px-4 text-center font-semibold text-sky-600">4</td>
                    <td className="py-4 px-4 text-center">4 {language === "ar" ? "قبل" : "Before"} + 2 {language === "ar" ? "بعد" : "After"}</td>
                    <td className="py-4 px-4 text-center font-bold text-blue-600">10</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-4 px-4 font-bold text-gray-800">{language === "ar" ? "العصر" : language === "ml" ? "അസർ (Asr)" : "Asr"}</td>
                    <td className="py-4 px-4 text-gray-500">{language === "ar" ? "مساءً" : language === "ml" ? "വൈകുന്നേരം" : "Late Afternoon"}</td>
                    <td className="py-4 px-4 text-center font-semibold text-sky-600">4</td>
                    <td className="py-4 px-4 text-center">4 {language === "ar" ? "قبل (مستحب)" : "Before (Recommended)"}</td>
                    <td className="py-4 px-4 text-center font-bold text-blue-600">8</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-4 px-4 font-bold text-gray-800">{language === "ar" ? "المغرب" : language === "ml" ? "മഗ്രിബ് (Maghrib)" : "Maghrib"}</td>
                    <td className="py-4 px-4 text-gray-500">{language === "ar" ? "الغروب" : language === "ml" ? "സൂര്യാസ്തമയം" : "Sunset"}</td>
                    <td className="py-4 px-4 text-center font-semibold text-sky-600">3</td>
                    <td className="py-4 px-4 text-center">2 {language === "ar" ? "بعد" : "After"}</td>
                    <td className="py-4 px-4 text-center font-bold text-blue-600">5</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-4 px-4 font-bold text-gray-800">{language === "ar" ? "العشاء" : language === "ml" ? "ഇഷാ (Isha)" : "Isha"}</td>
                    <td className="py-4 px-4 text-gray-500">{language === "ar" ? "العتمة" : language === "ml" ? "രാത്രി" : "Night"}</td>
                    <td className="py-4 px-4 text-center font-semibold text-sky-600">4</td>
                    <td className="py-4 px-4 text-center">2 {language === "ar" ? "بعد" : "After"} + 3 {language === "ar" ? "وتر" : "Witr"}</td>
                    <td className="py-4 px-4 text-center font-bold text-blue-600">9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
