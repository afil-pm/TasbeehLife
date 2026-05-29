"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ShieldAlert, CheckCircle2, User, UserCheck } from "lucide-react";

export const DressGuide: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedGender, setSelectedGender] = useState<"male" | "female">("male");

  const maleRules = t("dressMaleRules");
  const femaleRules = t("dressFemaleRules");

  return (
    <section className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden transition-all duration-300">

      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          {t("dressTitle")}
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
          {t("dressSubtitle")}
        </p>
      </div>

      {/* Gender selector toggles */}
      <div className="flex gap-4 max-w-sm mx-auto mb-8 bg-gray-100 p-1.5 rounded-xl border border-gray-200">
        <button
          onClick={() => setSelectedGender("male")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition ${
            selectedGender === "male"
              ? "bg-white text-sky-600 border border-gray-200 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <User className="w-4 h-4" />
          {language === "ar" ? "ذكر" : language === "ml" ? "പുരുഷൻ" : "Male"}
        </button>
        <button
          onClick={() => setSelectedGender("female")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition ${
            selectedGender === "female"
              ? "bg-white text-sky-600 border border-gray-200 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <UserCheck className="w-4 h-4" />
          {language === "ar" ? "أنثى" : language === "ml" ? "സ്ത്രീ" : "Female"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        {/* Silhouette visualization */}
        <div className="flex justify-center order-2 lg:order-1 bg-gray-50/80 border border-gray-200 rounded-3xl p-6 relative">
          {selectedGender === "male" ? (
            <div className="text-center space-y-4">
              {/* Male silhouette */}
              <svg className="w-48 h-72 text-gray-300" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="20" r="10" stroke="#94a3b8" strokeWidth="2.5" />
                <path d="M50 30V35M40 38H60" stroke="#94a3b8" strokeWidth="2.5" />
                <path d="M40 38V80M60 38V80" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M42 95V140M58 95V140" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="36" y="55" width="28" height="40" rx="3" fill="#0EA5E9" fillOpacity="0.25" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M40 38V95H60V38" stroke="#94a3b8" strokeWidth="2.5" />
                <text x="50" y="77" fill="#0EA5E9" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                  {language === "ar" ? "العورة المغلظة" : language === "ml" ? "ഔറത്ത്" : "Awrah Area"}
                </text>
              </svg>
              <span className="text-xs text-gray-500 font-medium block">
                {language === "ar" ? "يجب تغطية المنطقة المحددة بالأخضر" : language === "ml" ? "പച്ച നിറത്തിൽ അടയാളപ്പെടുത്തിയ ഭാഗം നിർബന്ധമായും മറക്കണം" : "The blue zone must be fully covered"}
              </span>
            </div>
          ) : (
            <div className="text-center space-y-4">
              {/* Female silhouette */}
              <svg className="w-48 h-72 text-gray-300" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="20" r="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="28" cy="80" r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="72" cy="80" r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
                <path d="M50 28C40 28 32 35 32 45V140H68V45C68 35 60 28 50 28Z" fill="#0EA5E9" fillOpacity="0.25" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M32 45L28 77M68 45L72 77" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M40 10L60 10M50 10V28" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="3 3" />
                <text x="50" y="85" fill="#0EA5E9" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                  {language === "ar" ? "مستور بالكامل" : language === "ml" ? "മുഴുവനായി മറക്കണം" : "Fully Covered"}
                </text>
              </svg>
              <span className="text-xs text-gray-500 font-medium block">
                {language === "ar" ? "يستر كامل البدن عدا الوجه والكفين" : language === "ml" ? "മുഖവും മുൻകൈയും ഒഴികെ ശരീരം മുഴുവൻ മറക്കണം" : "Covers everything except the face and hands"}
              </span>
            </div>
          )}
        </div>

        {/* Rules details */}
        <div className="order-1 lg:order-2 space-y-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-sky-500" />
            {selectedGender === "male" ? t("dressMale") : t("dressFemale")}
          </h3>

          <div className="space-y-4">
            {(selectedGender === "male" ? maleRules : femaleRules).map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white border border-gray-200 p-4 rounded-xl hover:border-gray-300 transition shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>

          {/* Taharah caution warning */}
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-700 uppercase tracking-wider">
                {t("dressNoteTitle")}
              </h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                {t("dressNoteDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
