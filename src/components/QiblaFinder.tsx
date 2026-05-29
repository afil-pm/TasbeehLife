"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Compass, RotateCw, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export const QiblaFinder: React.FC = () => {
  const { t, language } = useLanguage();
  const [heading, setHeading] = useState<number>(120);
  const [qiblaAngle, setQiblaAngle] = useState<number>(292);
  const [isSensorActive, setIsSensorActive] = useState<boolean>(false);
  const [hasSensorError, setHasSensorError] = useState<string | null>(null);

  const kaabaLat = 21.4225;
  const kaabaLng = 39.8262;

  const rotateLeft = () => {
    setHeading((prev) => (prev - 10 < 0 ? 350 : prev - 10));
  };
  const rotateRight = () => {
    setHeading((prev) => (prev + 10 >= 360 ? 0 : prev + 10));
  };

  useEffect(() => {
    if (!isSensorActive) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      const webkitHeading = (e as any).webkitCompassHeading;
      const alphaHeading = e.alpha;

      if (webkitHeading !== undefined) {
        setHeading(webkitHeading);
      } else if (alphaHeading !== null) {
        setHeading(360 - alphaHeading);
      }
    };

    if (typeof window !== "undefined" && "DeviceOrientationEvent" in window) {
      const requestPermission = (DeviceOrientationEvent as any).requestPermission;
      if (typeof requestPermission === "function") {
        requestPermission()
          .then((response: string) => {
            if (response === "granted") {
              window.addEventListener("deviceorientation", handleOrientation, true);
            } else {
              setHasSensorError("Permission denied for sensor access");
              setIsSensorActive(false);
            }
          })
          .catch((err: any) => {
            setHasSensorError("Could not request sensor access");
            setIsSensorActive(false);
          });
      } else {
        window.addEventListener("deviceorientation", handleOrientation, true);
      }
    } else {
      setHasSensorError("Device orientation not supported on this browser");
      setIsSensorActive(false);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, [isSensorActive]);

  const relativeAngle = (qiblaAngle - heading + 360) % 360;

  const isAligned = relativeAngle <= 6 || relativeAngle >= 354;

  return (
    <section className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden transition-all duration-300">

      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          {t("qiblaTitle")}
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
          {t("qiblaSubtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
        <div className="lg:col-span-5 space-y-6">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {t("qiblaDesc")}
          </p>

          <div className="bg-white border border-gray-200 p-4 rounded-2xl space-y-2.5 shadow-sm">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-400">{language === "ar" ? "إحداثيات الكعبة:" : "Kaaba Location:"}</span>
              <span className="text-sky-600">{kaabaLat.toFixed(4)}° N, {kaabaLng.toFixed(4)}° E</span>
            </div>
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-400">{language === "ar" ? "زاوية القبلة:" : "Qibla Heading:"}</span>
              <span className="text-blue-600">{qiblaAngle}° {language === "ar" ? "من الشمال" : "from North"}</span>
            </div>
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-400">{language === "ar" ? "التوجيه الحالي:" : "Current Heading:"}</span>
              <span className="text-gray-800 font-bold">{Math.round(heading)}°</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setIsSensorActive(!isSensorActive)}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold border transition-all duration-300 ${
                isSensorActive
                  ? "bg-sky-50 text-sky-600 border-sky-200"
                  : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
              }`}
            >
              <Compass className={`w-4 h-4 ${isSensorActive ? "animate-spin" : ""}`} />
              {isSensorActive
                ? language === "ar" ? "إيقاف الحساس" : "Stop Device Compass"
                : language === "ar" ? "تفعيل الحساس" : "Activate Phone Compass"}
            </button>

            {hasSensorError && (
              <p className="text-[10px] text-rose-500 text-center font-mono">{hasSensorError}</p>
            )}

            <div className="flex items-center justify-between gap-4 pt-2">
              <span className="text-[10px] text-gray-400 font-mono uppercase">
                {t("qiblaCompassAlign")}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={rotateLeft}
                  className="p-2 rounded bg-white hover:bg-gray-50 border border-gray-200 text-gray-500 hover:text-gray-700 transition"
                >
                  <RotateCw className="w-3.5 h-3.5 transform -scale-x-100" />
                </button>
                <button
                  onClick={rotateRight}
                  className="p-2 rounded bg-white hover:bg-gray-50 border border-gray-200 text-gray-500 hover:text-gray-700 transition"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            
            <input
              type="range"
              min="0"
              max="359"
              value={heading}
              onChange={(e) => setHeading(Number(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-sky-500 mt-2"
            />
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4">
          <div
            className={`w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-white to-gray-50 border-4 flex items-center justify-center relative shadow-lg transition-all duration-500 ${
              isAligned
                ? "border-sky-500 shadow-[0_0_35px_rgba(14,165,233,0.3)]"
                : "border-gray-200"
            }`}
          >
            <div
              className="absolute inset-4 rounded-full border border-gray-200 transition-transform duration-300"
              style={{ transform: `rotate(${-heading}deg)` }}
            >
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-rose-500 font-mono">N</span>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-mono">E</span>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 font-mono">S</span>
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-mono">W</span>
              
              <div className="absolute inset-4 border border-dashed border-gray-200 rounded-full" />
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-300 pointer-events-none"
              style={{ transform: `rotate(${relativeAngle}deg)` }}
            >
              <div className="h-full w-1 flex flex-col items-center justify-between py-2">
                <div className="flex flex-col items-center -mt-5">
                  <svg className={`w-8 h-8 ${isAligned ? "text-sky-500 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" : "text-blue-500"}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 9h20L12 2zm0 4a2 2 0 11-4 0 2 2 0 014 0z" />
                    <rect x="4" y="9" width="16" height="11" rx="1" />
                    <path d="M8 20v-5h8v5" />
                  </svg>
                  <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-sky-500 mt-1" />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              </div>
            </div>

            <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm z-10">
              <Compass className={`w-6 h-6 ${isAligned ? "text-sky-500" : "text-gray-400"}`} />
            </div>

            <div className="absolute bottom-4 bg-white border border-gray-200 px-3 py-1 rounded-full text-[10px] font-mono text-gray-500">
              {relativeAngle}° {language === "ar" ? "يسار" : "diff"}
            </div>
          </div>

          {isAligned && (
            <div className="mt-6 flex items-center gap-2 bg-sky-50 border border-sky-200 px-5 py-2.5 rounded-full text-sky-600 font-bold text-sm shadow-sm animate-bounce">
              <Sparkles className="w-4 h-4" />
              <span>{t("qiblaFound")}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
