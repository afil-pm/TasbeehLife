"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { PrayerGuide } from "../components/PrayerGuide";
import { DressGuide } from "../components/DressGuide";
import { DuaSection } from "../components/DuaSection";
import { TasbihCounter } from "../components/TasbihCounter";
import { PrayerTimes } from "../components/PrayerTimes";
import { QiblaFinder } from "../components/QiblaFinder";
import { SupportSection } from "../components/SupportSection";
import { 
  LayoutDashboard,
  BookOpen, 
  Layers, 
  Glasses, 
  Bookmark, 
  Fingerprint, 
  Compass, 
  Clock, 
  HeartHandshake,
  Globe,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  User,
  Heart,
  Calendar,
  Volume2
} from "lucide-react";

export default function Home() {
  const { t, language, setLanguage, dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState<string>("");
  const [hijriDate, setHijriDate] = useState<string>("");

  // Sync dates
  useEffect(() => {
    const updateDates = () => {
      const now = new Date();
      // Format Gregorian Date
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      setCurrentDate(now.toLocaleDateString(language === "ml" ? "ml-IN" : language === "ar" ? "ar-SA" : "en-US", options));

      // Simulate a Hijri Date calculation (simplistic mock Hijri formatting)
      // DHul-Hijjah / Muharram 1447 estimate
      const hijriMonthsEn = [
        "Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani", 
        "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban", 
        "Ramadan", "Shawwal", "Dhu al-Qidah", "Dhu al-Hijjah"
      ];
      const hijriMonthsMl = [
        "മുഹറം", "സഫർ", "റബീഉൽ അവ്വൽ", "റബീഉൽ ആഖിർ",
        "ജമാദുൽ അവ്വൽ", "ജമാദുൽ ആഖിർ", "റജബ്", "ശഅ്ബാൻ",
        "റമളാൻ", "ശവ്വാൽ", "ദുൽഖഅദ്", "ദുൽഹിജ്ജ"
      ];
      const hijriMonthsAr = [
        "محرم", "صفر", "ربيع الأول", "ربيع الآخر", 
        "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", 
        "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
      ];
      
      const hijriYear = 1447;
      const hijriMonthIdx = 11; // Dhu al-Hijjah
      const hijriDay = 11; // Simulated day
      
      if (language === "ar") {
        setHijriDate(`${hijriDay} ${hijriMonthsAr[hijriMonthIdx]} ${hijriYear} هـ`);
      } else if (language === "ml") {
        setHijriDate(`ദുൽഹിജ്ജ ${hijriDay}, ${hijriYear} ഹിജ്റ`);
      } else {
        setHijriDate(`${hijriMonthsEn[hijriMonthIdx]} ${hijriDay}, ${hijriYear} AH`);
      }
    };
    updateDates();
  }, [language]);

  // Sidebar navigation mapping
  const menuItems = [
    { id: "dashboard", label: language === "ar" ? "لوحة التحكم" : language === "ml" ? "ഡാഷ്‌ബോർഡ്" : "Dashboard", icon: LayoutDashboard },
    { id: "salah", label: t("tabSalah"), icon: BookOpen },
    { id: "wudu", label: t("tabWudu"), icon: Layers },
    { id: "dress", label: t("tabDress"), icon: Glasses },
    { id: "duas", label: t("tabDuas"), icon: Bookmark },
    { id: "tasbih", label: t("tabTasbih"), icon: Fingerprint },
    { id: "qibla", label: t("tabQibla"), icon: Compass },
    { id: "times", label: t("tabTimes"), icon: Clock },
    { id: "support", label: t("tabSupport"), icon: HeartHandshake },
  ];

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col relative text-gray-800 bg-gray-50 font-sans selection:bg-sky-500/30 selection:text-sky-600">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-2xl border-b border-gray-200/80 z-40 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-all duration-200"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className={`flex flex-col ${dir === "rtl" ? "text-right" : "text-left"}`}>
              <h1 className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent flex items-center gap-2">
                <span className="text-2xl">🕌</span>
                {t("navTitle")}
              </h1>
              <span className="text-[10px] md:text-xs text-gray-400 font-medium tracking-wide">
                {t("navSubtitle")}
              </span>
            </div>
          </div>

          {/* Language selection panel */}
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-gray-400 hidden sm:inline" />
            <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200">
              {[
                { id: "en", label: t("langEn") },
                { id: "ml", label: t("langMl") },
                { id: "ar", label: t("langAr") }
              ].map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setLanguage(lang.id as any)}
                  className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all duration-200 ${
                    language === lang.id 
                      ? "bg-white text-sky-600 shadow-sm border border-gray-200" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Core Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8 items-start relative">
        
        {/* Pro Desktop Sticky Sidebar */}
        <aside className="w-64 flex-shrink-0 sticky top-28 hidden lg:block bg-white/90 border border-gray-200/90 p-5 rounded-3xl backdrop-blur-2xl shadow-lg">
          <nav className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`w-full flex items-center gap-3 py-3 px-4 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                    dir === "rtl" ? "text-right justify-start" : "text-left"
                  } ${
                    isActive
                      ? "bg-gradient-to-r from-sky-50 to-blue-50/50 text-sky-700 border-l-4 border-sky-500 font-bold"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-sky-500" : "text-gray-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Sidebar Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden animate-fade-in">
            <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            
            <div className={`fixed inset-y-0 ${dir === "rtl" ? "right-0" : "left-0"} max-w-xs w-full bg-white border-r border-gray-200 p-6 flex flex-col gap-6 shadow-2xl`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                  Navigation Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="space-y-1 overflow-y-auto flex-1 custom-scrollbar pr-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleTabChange(item.id)}
                      className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-semibold transition ${
                        dir === "rtl" ? "text-right justify-start" : "text-left"
                      } ${
                        isActive
                          ? "bg-sky-50 text-sky-700 border-l-4 border-sky-500 font-bold"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-sky-500" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        )}

        {/* Responsive Content Core */}
        <main className="flex-1 w-full max-w-full overflow-hidden">
          <div className="space-y-8 animate-fade-in">
            
            {/* HOME DASHBOARD OVERVIEW VIEW */}
            {activeTab === "dashboard" && (
              <div className="space-y-8 animate-fade-in">
                
                {/* Stunning Premium Welcome Header Banner */}
                <div className="bg-gradient-to-r from-sky-50 via-white to-blue-50 border border-gray-200 p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                  
                  <div className="space-y-2 text-center md:text-left">
                    <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-sky-600 uppercase bg-sky-50 border border-sky-200 py-1.5 px-3 rounded-full">
                      ✨ Assalamu Alaikum
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mt-2">
                      {language === "ar" ? "مرحباً بكم في TasbeehLife" : language === "ml" ? "TasbeehLife-ലേക്ക് സ്വാഗതം" : "Welcome to TasbeehLife"}
                    </h2>
                    <p className="text-gray-500 text-xs md:text-sm max-w-xl">
                      {language === "ar" ? 
                        "بوابتك الإلكترونية المتكاملة لتعليم الصلاة، الوضوء، السنن اليومية، وتتبع أذكارك." : 
                        language === "ml" ? 
                        "നമസ്കാരം, വുദു, പ്രധാന ദുആകൾ എന്നിവ ലളിതമായി പഠിക്കാനും ദിക്റുകൾ കണക്കാക്കാനുമുള്ള മികച്ച സഹായി." : 
                        "Your interactive, multilingual companion to establish prayers, learn ablution, memorize duas, and track dhikr."}
                    </p>
                  </div>

                  {/* Gregorian & Hijri Date Cards */}
                  <div className="flex flex-col gap-2 items-center md:items-end w-full md:w-auto">
                    <div className="bg-white border border-gray-200 px-5 py-3 rounded-2xl flex items-center gap-3 w-full md:w-auto shadow-sm">
                      <Calendar className="w-4 h-4 text-sky-500" />
                      <div className="text-left font-mono">
                        <span className="text-[10px] text-gray-400 block uppercase">Calendar Date</span>
                        <span className="text-xs text-gray-700 font-bold block">{currentDate}</span>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 px-5 py-3 rounded-2xl flex items-center gap-3 w-full md:w-auto shadow-sm">
                      <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                      <div className="text-left font-mono">
                        <span className="text-[10px] text-gray-400 block uppercase">Hijri Date</span>
                        <span className="text-xs text-blue-600 font-bold block">{hijriDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Modular Overview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Widget 1: Quick Prayer Times Overview */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-5 hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group shadow-sm">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">Prayer Schedule</span>
                        <Clock className="w-4 h-4 text-sky-500" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Next Prayer Time</h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        Follow the countdown and establish prayers on time. Adjust your coordinates for local accuracy.
                      </p>
                      
                      {/* Simple mock summary info to glance */}
                      <div className="bg-gray-50 rounded-2xl p-3.5 border border-gray-200 flex justify-between items-center mb-4">
                        <div>
                          <span className="text-[9px] font-mono text-gray-400 uppercase">Maghrib (Kerala)</span>
                          <span className="text-sm font-bold text-gray-800 block mt-0.5">06:42 PM</span>
                        </div>
                        <span className="text-xs font-bold text-sky-600 bg-sky-50 border border-sky-200 px-2 py-1 rounded-lg">
                          Next Up
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleTabChange("times")}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-bold border border-gray-200 hover:border-gray-300 transition"
                    >
                      <span>{language === "ar" ? "شاهد الجدول الكامل" : language === "ml" ? "സമയവിവരം കാണുക" : "View Full Times"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Widget 2: Quick Tasbih Counter Clicker */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-5 hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group shadow-sm">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">Dhikr Beads</span>
                        <Fingerprint className="w-4 h-4 text-sky-500" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Tasbih Clicker</h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        Start your daily remembrance instantly. Tap to count; counts sync dynamically.
                      </p>

                      <div className="flex justify-center py-2.5">
                        <button
                          onClick={() => handleTabChange("tasbih")}
                          className="w-20 h-20 rounded-full bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 flex flex-col items-center justify-center text-xs text-gray-500 shadow-sm group-hover:border-sky-300 transition-all duration-300"
                        >
                          <span className="text-lg font-bold font-mono text-gray-700">📿</span>
                          <span className="text-[8px] text-gray-400 tracking-wider">TAP</span>
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleTabChange("tasbih")}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-bold border border-gray-200 hover:border-gray-300 transition mt-4"
                    >
                      <span>{language === "ar" ? "افتح المسبحة" : language === "ml" ? "കൗണ്ടർ തുറക്കുക" : "Open Tasbih Counter"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Widget 3: Quick Qibla Finder Compass */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-5 hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group shadow-sm">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">Kaaba Direction</span>
                        <Compass className="w-4 h-4 text-sky-500" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Qibla Compass</h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        Calibrate your mobile phone sensors or manually rotate compass to locate Makkah coordinates.
                      </p>

                      <div className="flex justify-center items-center py-2.5">
                        <div className="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm animate-pulse">
                          <Compass className="w-7 h-7 text-sky-500" />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleTabChange("qibla")}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-bold border border-gray-200 hover:border-gray-300 transition mt-4"
                    >
                      <span>{language === "ar" ? "حدد الاتجاه" : language === "ml" ? "ദിശ പരിശോധിക്കുക" : "Find Direction"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Widget 4: Featured Dua Card */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-5 hover:border-gray-300 transition flex flex-col justify-between col-span-1 md:col-span-2 shadow-sm">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">Featured Supplication</span>
                        <Bookmark className="w-4 h-4 text-blue-500" />
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-base font-bold text-gray-800">Dua for Parents (പിതാക്കൾക്കായുള്ള ദുആ)</h4>
                        
                        <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200 text-center">
                          <p className="text-xl font-serif text-blue-700 font-medium">رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا</p>
                        </div>
                        
                        <p className="text-xs text-gray-500 italic font-mono">
                          "Rabbi-rhamhuma kama rabbayanee sagheera."
                        </p>
                        <p className="text-xs text-gray-600">
                          "My Lord! Bestow on them Your mercy even as they cherished and reared me in childhood."
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleTabChange("duas")}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-bold border border-gray-200 hover:border-gray-300 transition mt-4"
                    >
                      <span>{language === "ar" ? "تصفح جميع الأدعية" : language === "ml" ? "മറ്റു ദുആകൾ കാണുക" : "Browse More Duas"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Widget 5: Quick Learn Links */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-5 hover:border-gray-300 transition flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">Tutorials</span>
                        <BookOpen className="w-4 h-4 text-sky-500" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">Learning Center</h3>
                      
                      <div className="space-y-2">
                        <button
                          onClick={() => handleTabChange("wudu")}
                          className="w-full flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-left transition"
                        >
                          <span className="text-xs font-bold text-gray-700">1. Learn Wudu (വുദു)</span>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        </button>
                        <button
                          onClick={() => handleTabChange("salah")}
                          className="w-full flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-left transition"
                        >
                          <span className="text-xs font-bold text-gray-700">2. Learn Salah Positions</span>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        </button>
                        <button
                          onClick={() => handleTabChange("dress")}
                          className="w-full flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-left transition"
                        >
                          <span className="text-xs font-bold text-gray-700">3. Dress Rules (ഔറത്ത്)</span>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    <span className="text-[9px] text-gray-400 font-mono tracking-wide mt-4 text-center block">
                      Establish Salah, purify your soul.
                    </span>
                  </div>

                </div>

                {/* Footer Quick Support Pitch */}
                <div className="bg-white border border-gray-200 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
                  <div className="flex items-center gap-3 text-center md:text-left">
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-500/20" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Support educational open source projects</h4>
                      <p className="text-xs text-gray-500">TasbeehLife is a free platform built with love. Share feedback or donate to support hosting.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleTabChange("support")}
                    className="py-2 px-5 bg-sky-500 hover:bg-sky-400 text-white rounded-xl text-xs font-bold transition shadow-sm"
                  >
                    Feedback & Support
                  </button>
                </div>

              </div>
            )}

            {/* FULL MODULE VIEWS */}
            {activeTab === "salah" && <PrayerGuide />}
            {activeTab === "wudu" && <PrayerGuide />} 
            {activeTab === "dress" && <DressGuide />}
            {activeTab === "duas" && <DuaSection />}
            {activeTab === "tasbih" && <TasbihCounter />}
            {activeTab === "qibla" && <QiblaFinder />}
            {activeTab === "times" && <PrayerTimes />}
            {activeTab === "support" && <SupportSection />}
          </div>
        </main>
      </div>

      {/* Developer footer */}
      <footer className="py-8 bg-white border-t border-gray-200 mt-12 text-center text-xs text-gray-400 font-mono space-y-2">
        <p>© 2026 TasbeehLife. All rights reserved.</p>
        <p className="flex justify-center items-center gap-1.5 hover:text-sky-500 transition cursor-pointer" onClick={() => handleTabChange("support")}>
          <span>Made for the Global Ummah with Next.js 15 & TailwindCSS v4</span>
        </p>
      </footer>
    </div>
  );
}
