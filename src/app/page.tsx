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
  const [showDates, setShowDates] = useState(false);

  useEffect(() => {
    const updateDates = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      setCurrentDate(now.toLocaleDateString(language === "ml" ? "ml-IN" : language === "ar" ? "ar-SA" : "en-US", options));

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
      const hijriMonthIdx = 11;
      const hijriDay = 11;
      
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

  const menuItems = [
    { id: "dashboard", label: language === "ar" ? "الرئيسية" : language === "ml" ? "ഡാഷ്‌ബോർഡ്" : "Home", icon: LayoutDashboard },
    { id: "salah", label: t("tabSalah"), icon: BookOpen },
    { id: "wudu", label: t("tabWudu"), icon: Layers },
    { id: "dress", label: t("tabDress"), icon: Glasses },
    { id: "duas", label: t("tabDuas"), icon: Bookmark },
    { id: "tasbih", label: t("tabTasbih"), icon: Fingerprint },
    { id: "qibla", label: t("tabQibla"), icon: Compass },
    { id: "times", label: t("tabTimes"), icon: Clock },
    { id: "support", label: t("tabSupport"), icon: HeartHandshake },
  ];

  const bottomNavItems = menuItems.slice(0, 5);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col relative text-gray-800 bg-gray-50 font-sans selection:bg-sky-500/30 selection:text-sky-600">
      
      {/* Top Header Navigation - Compact on mobile */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-2xl border-b border-gray-200/80 z-40 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 md:h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-all duration-200 active:scale-95"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className={`flex flex-col ${dir === "rtl" ? "text-right" : "text-left"}`}>
              <h1 className="text-lg md:text-2xl font-black tracking-tight bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent flex items-center gap-1.5">
                <span className="text-lg md:text-2xl">🕌</span>
                <span className="truncate max-w-[120px] sm:max-w-none">{t("navTitle")}</span>
              </h1>
              <span className="hidden md:block text-[10px] md:text-xs text-gray-400 font-medium tracking-wide">
                {t("navSubtitle")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Globe className="w-3.5 h-3.5 text-gray-400 hidden sm:inline" />
            <div className="flex bg-gray-100 p-0.5 rounded-xl border border-gray-200">
              {[
                { id: "en", label: language === "ar" ? "EN" : "EN" },
                { id: "ml", label: "ML" },
                { id: "ar", label: "AR" }
              ].map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setLanguage(lang.id as any)}
                  className={`py-1 px-2 md:py-1.5 md:px-3 rounded-lg text-[10px] md:text-xs font-bold transition-all duration-200 ${
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
      <div className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 md:py-8 flex gap-8 items-start relative pb-20 md:pb-8">
        
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
            
            <div className={`fixed inset-y-0 ${dir === "rtl" ? "right-0" : "left-0"} max-w-xs w-[85vw] bg-white border-r border-gray-200 p-5 flex flex-col gap-5 shadow-2xl`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                  {language === "ar" ? "القائمة" : "Menu"}
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-700 active:scale-95"
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
                      className={`w-full flex items-center gap-3 py-3.5 px-4 rounded-xl text-sm font-semibold transition active:scale-[0.98] ${
                        dir === "rtl" ? "text-right justify-start" : "text-left"
                      } ${
                        isActive
                          ? "bg-sky-50 text-sky-700 border-l-4 border-sky-500 font-bold"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-sky-500" : "text-gray-400"}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 font-mono text-center">TasbeehLife</p>
              </div>
            </div>
          </div>
        )}

        {/* Responsive Content Core */}
        <main className="flex-1 w-full max-w-full overflow-hidden">
          <div className="space-6 md:space-y-8 animate-fade-in">
            
            {/* HOME DASHBOARD OVERVIEW VIEW */}
            {activeTab === "dashboard" && (
              <div className="space-y-4 md:space-y-8 animate-fade-in">
                
                {/* Welcome Header - mobile optimized */}
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 p-4 md:p-8 shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="inline-block text-[10px] md:text-xs font-bold tracking-widest text-white/80 uppercase bg-white/15 border border-white/20 py-1 px-3 rounded-full">
                          ✨ Assalamu Alaikum
                        </span>
                        <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">
                          {language === "ar" ? "مرحباً بكم في TasbeehLife" : language === "ml" ? "TasbeehLife-ലേക്ക് സ്വാഗതം" : "Welcome to TasbeehLife"}
                        </h2>
                      </div>
                      <button
                        onClick={() => setShowDates(!showDates)}
                        className="md:hidden p-2 bg-white/15 border border-white/20 rounded-xl text-white active:scale-90 transition"
                      >
                        <Calendar className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-xs md:text-sm text-white/70 mt-2 max-w-xl leading-relaxed">
                      {language === "ar" ? 
                        "بوابتك الإلكترونية المتكاملة لتعليم الصلاة، الوضوء، السنن اليومية، وتتبع أذكارك." : 
                        language === "ml" ? 
                        "നമസ്കാരം, വുദു, പ്രധാന ദുആകൾ എന്നിവ ലളിതമായി പഠിക്കാനും ദിക്റുകൾ കണക്കാക്കാനുമുള്ള മികച്ച സഹായി." : 
                        "Your interactive, multilingual companion to establish prayers, learn ablution, memorize duas, and track dhikr."}
                    </p>

                    {/* Date Cards - collapsible on mobile */}
                    <div className={`${showDates ? 'flex' : 'hidden'} md:flex flex-col sm:flex-row gap-2 mt-4`}>
                      <div className="bg-white/15 border border-white/20 px-4 py-2.5 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                        <Calendar className="w-4 h-4 text-white" />
                        <div className="text-left">
                          <span className="text-[9px] text-white/60 block">Calendar</span>
                          <span className="text-xs text-white font-bold block truncate max-w-[200px]">{currentDate}</span>
                        </div>
                      </div>
                      <div className="bg-white/15 border border-white/20 px-4 py-2.5 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                        <div className="text-left">
                          <span className="text-[9px] text-white/60 block">Hijri</span>
                          <span className="text-xs text-yellow-200 font-bold block">{hijriDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Pills - mobile horizontal scroll */}
                <div className="flex gap-2 overflow-x-auto pb-2 md:hidden scrollbar-none">
                  {bottomNavItems.slice(1).map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleTabChange(item.id)}
                        className="flex-shrink-0 flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-full text-xs font-semibold text-gray-600 shadow-sm hover:border-gray-300 active:scale-95 transition"
                      >
                        <Icon className="w-4 h-4 text-sky-500" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Dashboard Modular Overview Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                  
                  {/* Widget 1: Quick Prayer Times Overview */}
                  <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-5 hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group shadow-sm active:scale-[0.99]">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[9px] md:text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">Prayer Schedule</span>
                        <Clock className="w-4 h-4 text-sky-500" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">Next Prayer Time</h3>
                      <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed mb-3">
                        Follow the countdown and establish prayers on time. Adjust your coordinates for local accuracy.
                      </p>
                      
                      <div className="bg-gray-50 rounded-xl md:rounded-2xl p-3 md:p-3.5 border border-gray-200 flex justify-between items-center mb-3">
                        <div>
                          <span className="text-[8px] md:text-[9px] font-mono text-gray-400 uppercase">Maghrib (Kerala)</span>
                          <span className="text-sm md:text-base font-bold text-gray-800 block mt-0.5">06:42 PM</span>
                        </div>
                        <span className="text-[10px] md:text-xs font-bold text-sky-600 bg-sky-50 border border-sky-200 px-2 py-1 rounded-lg">
                          Next Up
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleTabChange("times")}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-bold border border-gray-200 hover:border-gray-300 transition active:scale-[0.98]"
                    >
                      <span>{language === "ar" ? "شاهد الجدول الكامل" : language === "ml" ? "സമയവിവരം കാണുക" : "View Full Times"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Widget 2: Quick Tasbih Counter Clicker */}
                  <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-5 hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group shadow-sm active:scale-[0.99]">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[9px] md:text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">Dhikr Beads</span>
                        <Fingerprint className="w-4 h-4 text-sky-500" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">Tasbih Clicker</h3>
                      <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed mb-3">
                        Start your daily remembrance instantly. Tap to count; counts sync dynamically.
                      </p>

                      <div className="flex justify-center py-2">
                        <button
                          onClick={() => handleTabChange("tasbih")}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 flex flex-col items-center justify-center text-xs text-gray-500 shadow-sm group-hover:border-sky-300 transition-all duration-300 active:scale-90"
                        >
                          <span className="text-lg md:text-xl font-bold text-gray-700">📿</span>
                          <span className="text-[7px] md:text-[8px] text-gray-400 tracking-wider">TAP</span>
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleTabChange("tasbih")}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-bold border border-gray-200 hover:border-gray-300 transition mt-2 active:scale-[0.98]"
                    >
                      <span>{language === "ar" ? "افتح المسبحة" : language === "ml" ? "കൗണ്ടർ തുറക്കുക" : "Open Tasbih Counter"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Widget 3: Quick Qibla Finder Compass */}
                  <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-5 hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group shadow-sm active:scale-[0.99]">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[9px] md:text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">Kaaba Direction</span>
                        <Compass className="w-4 h-4 text-sky-500" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1.5">Qibla Compass</h3>
                      <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed mb-3">
                        Calibrate your mobile phone sensors or manually rotate compass to locate Makkah coordinates.
                      </p>

                      <div className="flex justify-center items-center py-2">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                          <Compass className="w-5 h-5 md:w-7 md:h-7 text-sky-500" />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleTabChange("qibla")}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-bold border border-gray-200 hover:border-gray-300 transition mt-2 active:scale-[0.98]"
                    >
                      <span>{language === "ar" ? "حدد الاتجاه" : language === "ml" ? "ദിശ പരിശോധിക്കുക" : "Find Direction"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Widget 4: Featured Dua Card */}
                  <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-5 hover:border-gray-300 transition flex flex-col justify-between sm:col-span-2 shadow-sm active:scale-[0.99]">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[9px] md:text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">Featured Supplication</span>
                        <Bookmark className="w-4 h-4 text-blue-500" />
                      </div>
                      
                      <div className="space-y-2.5">
                        <h4 className="text-sm md:text-base font-bold text-gray-800">Dua for Parents</h4>
                        
                        <div className="bg-gray-50 p-3 md:p-3.5 rounded-xl md:rounded-2xl border border-gray-200 text-center">
                          <p className="text-base md:text-xl font-serif text-blue-700 font-medium leading-relaxed">رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا</p>
                        </div>
                        
                        <p className="text-[11px] md:text-xs text-gray-500 italic font-mono leading-relaxed">
                          "Rabbi-rhamhuma kama rabbayanee sagheera."
                        </p>
                        <p className="text-[11px] md:text-xs text-gray-600">
                          "My Lord! Bestow on them Your mercy even as they cherished and reared me in childhood."
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleTabChange("duas")}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-bold border border-gray-200 hover:border-gray-300 transition mt-3 active:scale-[0.98]"
                    >
                      <span>{language === "ar" ? "تصفح جميع الأدعية" : language === "ml" ? "മറ്റു ദുആകൾ കാണുക" : "Browse More Duas"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Widget 5: Quick Learn Links */}
                  <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-5 hover:border-gray-300 transition flex flex-col justify-between shadow-sm active:scale-[0.99]">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[9px] md:text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">Tutorials</span>
                        <BookOpen className="w-4 h-4 text-sky-500" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Learning Center</h3>
                      
                      <div className="space-y-2">
                        <button
                          onClick={() => handleTabChange("wudu")}
                          className="w-full flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-left transition active:scale-[0.98]"
                        >
                          <span className="text-xs font-bold text-gray-700">1. Learn Wudu</span>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        </button>
                        <button
                          onClick={() => handleTabChange("salah")}
                          className="w-full flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-left transition active:scale-[0.98]"
                        >
                          <span className="text-xs font-bold text-gray-700">2. Learn Salah Positions</span>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        </button>
                        <button
                          onClick={() => handleTabChange("dress")}
                          className="w-full flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-left transition active:scale-[0.98]"
                        >
                          <span className="text-xs font-bold text-gray-700">3. Dress Rules</span>
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
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 p-4 md:p-6 rounded-2xl md:rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-3 text-center sm:text-left">
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-500/20 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Support open source</h4>
                      <p className="text-xs text-gray-500">Share feedback or donate to support hosting.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleTabChange("support")}
                    className="py-2.5 px-5 bg-sky-500 hover:bg-sky-400 text-white rounded-xl text-xs font-bold transition shadow-sm active:scale-95 w-full sm:w-auto"
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

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 z-50 pb-safe">
        <div className="flex items-center justify-around py-1">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all duration-200 active:scale-90 ${
                  isActive ? "text-sky-600" : "text-gray-400"
                }`}
              >
                <div className={`p-1.5 rounded-lg transition-colors ${
                  isActive ? "bg-sky-50" : ""
                }`}>
                  <Icon className={`w-5 h-5 ${isActive ? "text-sky-500" : ""}`} />
                </div>
                <span className={`text-[9px] font-semibold ${isActive ? "text-sky-600" : "text-gray-400"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer - hidden on mobile (replaced by bottom nav) */}
      <footer className="hidden md:block py-8 bg-white border-t border-gray-200 mt-12 text-center text-xs text-gray-400 font-mono space-y-2">
        <p>© 2026 TasbeehLife. All rights reserved.</p>
        <p className="flex justify-center items-center gap-1.5 hover:text-sky-500 transition cursor-pointer" onClick={() => handleTabChange("support")}>
          <span>Made for the Global Ummah with Next.js 15 & TailwindCSS v4</span>
        </p>
      </footer>
    </div>
  );
}
