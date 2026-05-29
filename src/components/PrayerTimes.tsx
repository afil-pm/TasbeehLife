"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Clock, MapPin, Compass, AlertCircle } from "lucide-react";

interface PrayerTimeSet {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export const PrayerTimes: React.FC = () => {
  const { t, language } = useLanguage();
  const [method, setMethod] = useState<string>("MWL");
  const [lat, setLat] = useState<string>("10.8505");
  const [lng, setLng] = useState<string>("76.2711");
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimeSet>({
    Fajr: "04:55",
    Sunrise: "06:12",
    Dhuhr: "12:28",
    Asr: "15:45",
    Maghrib: "18:42",
    Isha: "19:58",
  });
  const [nextPrayerName, setNextPrayerName] = useState<string>("Maghrib");
  const [nextPrayerTime, setNextPrayerTime] = useState<string>("18:42");
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00");
  const [activePrayer, setActivePrayer] = useState<string>("Asr");

  const methodsList = t("methods");

  useEffect(() => {
    const clock = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(clock);
  }, []);

  useEffect(() => {
    calculateTimes();
  }, [method, lat, lng]);

  useEffect(() => {
    updateCountdown();
  }, [currentTime, prayerTimes]);

  const calculateTimes = () => {
    let parsedLat = parseFloat(lat);
    let parsedLng = parseFloat(lng);

    if (isNaN(parsedLat)) parsedLat = 10.85;
    if (isNaN(parsedLng)) parsedLng = 76.27;

    let baseFajr = 4.8;
    let baseSun = 6.0;
    let baseDhuhr = 12.2;
    let baseAsr = 15.5;
    let baseMagh = 18.2;
    let baseIsha = 19.5;

    const meridian = 82.5;
    const dev = (meridian - parsedLng) * 4 / 60;

    const latAdjust = (parsedLat / 90) * 0.5;

    let methodOffsetFajr = 0;
    let methodOffsetIsha = 0;
    if (method === "Makkah") {
      methodOffsetFajr = -0.15;
      methodOffsetIsha = 0.25;
    } else if (method === "Karachi") {
      methodOffsetFajr = -0.05;
      methodOffsetIsha = 0.05;
    } else if (method === "ISNA") {
      methodOffsetFajr = 0.1;
      methodOffsetIsha = -0.1;
    }

    const formatDecimalTime = (dec: number) => {
      let h = Math.floor(dec);
      let m = Math.round((dec - h) * 60);
      if (m >= 60) {
        h += 1;
        m -= 60;
      }
      if (h >= 24) h -= 24;
      if (h < 0) h += 24;
      const hh = h.toString().padStart(2, "0");
      const mm = m.toString().padStart(2, "0");
      return `${hh}:${mm}`;
    };

    setPrayerTimes({
      Fajr: formatDecimalTime(baseFajr + dev - latAdjust + methodOffsetFajr),
      Sunrise: formatDecimalTime(baseSun + dev - latAdjust * 0.5),
      Dhuhr: formatDecimalTime(baseDhuhr + dev),
      Asr: formatDecimalTime(baseAsr + dev + latAdjust * 0.2),
      Maghrib: formatDecimalTime(baseMagh + dev + latAdjust),
      Isha: formatDecimalTime(baseIsha + dev + latAdjust * 1.5 + methodOffsetIsha),
    });
  };

  const updateCountdown = () => {
    const now = new Date();
    const currentH = now.getHours();
    const currentM = now.getMinutes();
    const currentS = now.getSeconds();
    const currentTotalSec = currentH * 3600 + currentM * 60 + currentS;

    const timeToSeconds = (tStr: string) => {
      const [h, m] = tStr.split(":").map(Number);
      return h * 3600 + m * 60;
    };

    const prayers = [
      { name: "Fajr", sec: timeToSeconds(prayerTimes.Fajr) },
      { name: "Sunrise", sec: timeToSeconds(prayerTimes.Sunrise) },
      { name: "Dhuhr", sec: timeToSeconds(prayerTimes.Dhuhr) },
      { name: "Asr", sec: timeToSeconds(prayerTimes.Asr) },
      { name: "Maghrib", sec: timeToSeconds(prayerTimes.Maghrib) },
      { name: "Isha", sec: timeToSeconds(prayerTimes.Isha) },
    ];

    let nextP = prayers[0];
    let isNextDay = true;

    for (let i = 0; i < prayers.length; i++) {
      if (currentTotalSec < prayers[i].sec) {
        nextP = prayers[i];
        isNextDay = false;
        break;
      }
    }

    let active = "Isha";
    if (currentTotalSec >= prayers[0].sec && currentTotalSec < prayers[1].sec) active = "Fajr";
    else if (currentTotalSec >= prayers[1].sec && currentTotalSec < prayers[2].sec) active = "Sunrise";
    else if (currentTotalSec >= prayers[2].sec && currentTotalSec < prayers[3].sec) active = "Dhuhr";
    else if (currentTotalSec >= prayers[3].sec && currentTotalSec < prayers[4].sec) active = "Asr";
    else if (currentTotalSec >= prayers[4].sec && currentTotalSec < prayers[5].sec) active = "Maghrib";

    setActivePrayer(active);
    setNextPrayerName(nextP.name);
    setNextPrayerTime(
      Object.entries(prayerTimes).find(([name]) => name === nextP.name)?.[1] || "00:00"
    );

    let diffSec = 0;
    if (isNextDay) {
      diffSec = (24 * 3600 - currentTotalSec) + nextP.sec;
    } else {
      diffSec = nextP.sec - currentTotalSec;
    }

    const h = Math.floor(diffSec / 3600);
    const m = Math.floor((diffSec % 3600) / 60);
    const s = diffSec % 60;

    const hh = h.toString().padStart(2, "0");
    const mm = m.toString().padStart(2, "0");
    const ss = s.toString().padStart(2, "0");

    setTimeLeft(`${hh}:${mm}:${ss}`);
  };

  const getLocalizedPrayerName = (name: string) => {
    if (language === "ar") {
      switch (name) {
        case "Fajr": return "الفجر";
        case "Sunrise": return "الشروق";
        case "Dhuhr": return "الظهر";
        case "Asr": return "العصر";
        case "Maghrib": return "المغرب";
        case "Isha": return "العشاء";
        default: return name;
      }
    } else if (language === "ml") {
      switch (name) {
        case "Fajr": return "സുബഹി (Fajr)";
        case "Sunrise": return "സൂര്യോദയം (Sunrise)";
        case "Dhuhr": return "ളുഹർ (Dhuhr)";
        case "Asr": return "അസർ (Asr)";
        case "Maghrib": return "മഗ്രിബ് (Maghrib)";
        case "Isha": return "ഇഷാ (Isha)";
        default: return name;
      }
    }
    return name;
  };

  return (
    <section className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden transition-all duration-300">

      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          {t("timesTitle")}
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
          {t("timesSubtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        <div className="lg:col-span-8 bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-600 uppercase bg-sky-50 border border-sky-200 py-1.5 px-3 rounded-full">
              {t("timesNextPrayer")}
            </span>
            <h3 className="text-3xl font-extrabold text-gray-800 flex items-center justify-center md:justify-start gap-3 mt-2">
              {getLocalizedPrayerName(nextPrayerName)}
              <span className="text-xl font-medium text-blue-600 font-mono">({nextPrayerTime})</span>
            </h3>
            <p className="text-xs text-gray-400 font-mono flex items-center justify-center md:justify-start gap-1">
              <Clock className="w-3.5 h-3.5" />
              {language === "ar" ? "الوقت الحالي:" : "Current Time:"} {currentTime.toLocaleTimeString()}
            </p>
          </div>

          <div className="text-center bg-white border border-gray-200 px-6 py-4 rounded-2xl min-w-[200px] shadow-sm">
            <span className="text-[10px] text-gray-400 font-mono block uppercase tracking-widest mb-1">
              {t("timesTimeLeft")}
            </span>
            <span className="text-3xl font-mono font-bold text-blue-600 tracking-tight block">
              {timeLeft}
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white border border-gray-200 p-5 rounded-2xl space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4 text-sky-500" />
            <span>{language === "ar" ? "تحديد الموقع" : "Settings / Location"}</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] text-gray-400 font-mono block uppercase">Lat</label>
              <input
                type="number"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-700 focus:outline-none focus:border-sky-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-gray-400 font-mono block uppercase">Lng</label>
              <input
                type="number"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-700 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          <div className="space-y-1 pt-2">
            <label className="text-[10px] text-gray-400 font-mono block uppercase">
              {t("timesCalcMethod")}
            </label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600 focus:outline-none focus:border-sky-500"
            >
              {Object.entries(methodsList).map(([key, label]) => (
                <option key={key} value={key} className="bg-white">
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-6 gap-4">
          {Object.entries(prayerTimes).map(([name, time]) => {
            const isActive = activePrayer === name;
            const isSunrise = name === "Sunrise";

            return (
              <div
                key={name}
                className={`border rounded-2xl p-4 text-center transition-all duration-300 relative group overflow-hidden ${
                  isActive
                    ? "bg-sky-50 border-sky-300 shadow-[0_0_20px_rgba(14,165,233,0.1)] scale-105"
                    : isSunrise
                    ? "bg-white border-gray-200 hover:border-blue-200"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                {isActive && (
                  <span className="absolute top-2 right-2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                )}

                <span
                  className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${
                    isActive
                      ? "text-sky-600"
                      : isSunrise
                      ? "text-blue-500/80"
                      : "text-gray-400"
                  }`}
                >
                  {getLocalizedPrayerName(name)}
                </span>
                
                <span className={`text-2xl font-bold font-mono tracking-tight block ${
                  isActive ? "text-gray-800" : isSunrise ? "text-blue-600" : "text-gray-600"
                }`}>
                  {time}
                </span>

                {isSunrise && (
                  <span className="text-[9px] text-blue-400/60 font-mono tracking-wide mt-1 block">
                    {language === "ar" ? "نهاية وقت الفجر" : "No Salah"}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-12 flex items-start gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-400 leading-relaxed">
            {language === "ar" ? 
              "تنبيه: مواقيت الصلاة الظاهرة هي حسابات تقديرية فلكية. يرجى مطابقتها بالتقاويم المحلية الرسمية لبلدكم للاحتياط للعبادة." : 
              "Disclaimer: Calculated prayer times are astronomical approximations. Please verify with official local calendars for exact times in your community."}
          </p>
        </div>
      </div>
    </section>
  );
};
