"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Search, Volume2, Play, Pause, Bookmark, Star } from "lucide-react";

export const DuaSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedDua, setExpandedDua] = useState<string | null>(null);
  const [playingDua, setPlayingDua] = useState<string | null>(null);
  const [playProgress, setPlayProgress] = useState<number>(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const categories = t("duaCategories");
  const duas = t("duasData");

  const filteredDuas = useMemo(() => {
    return duas.filter((dua) => {
      const matchCategory = selectedCategory === "all" || dua.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchSearch =
        dua.title.toLowerCase().includes(query) ||
        dua.desc.toLowerCase().includes(query) ||
        dua.arabic.includes(query) ||
        dua.translit.toLowerCase().includes(query) ||
        dua.translation.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });
  }, [duas, selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedDua(expandedDua === id ? null : id);
    if (expandedDua === id && playingDua === id) {
      stopAudio();
    }
  };

  const handleAudioSim = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    
    if (playingDua === id) {
      stopAudio();
    } else {
      if (timerId) clearInterval(timerId);
      setPlayingDua(id);
      setPlayProgress(0);
      
      const interval = setInterval(() => {
        setPlayProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setPlayingDua(null);
            return 0;
          }
          return prev + 5;
        });
      }, 250);
      setTimerId(interval);
    }
  };

  const stopAudio = () => {
    if (timerId) clearInterval(timerId);
    setPlayingDua(null);
    setPlayProgress(0);
  };

  return (
    <section className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden transition-all duration-300">

      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          {t("duasTitle")}
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
          {t("duasSubtitle")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t("duaSearchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full bg-white border border-gray-200 rounded-2xl py-3 px-12 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all ${
              language === "ar" ? "text-right pr-12 pl-4" : ""
            }`}
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`py-2 px-4 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                selectedCategory === key
                  ? "bg-sky-50 text-sky-600 border-sky-200 shadow-sm"
                  : "bg-white text-gray-500 border-gray-200 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {filteredDuas.length > 0 ? (
          filteredDuas.map((dua) => {
            const isExpanded = expandedDua === dua.id;
            const isPlaying = playingDua === dua.id;

            return (
              <div
                key={dua.id}
                onClick={() => toggleExpand(dua.id)}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-300 cursor-pointer shadow-sm ${
                  isExpanded ? "border-gray-300 shadow-md" : "border-gray-200"
                }`}
              >
                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gray-100 border border-gray-200 text-blue-500">
                      <Bookmark className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block">
                        {dua.category}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-gray-800 mt-0.5">
                        {dua.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleAudioSim(e, dua.id)}
                      className={`w-9 h-9 flex items-center justify-center rounded-lg border transition ${
                        isPlaying
                          ? "bg-blue-50 text-blue-600 border-blue-200"
                          : "bg-gray-100 text-gray-500 border-gray-200 hover:text-gray-700 hover:bg-gray-200"
                      }`}
                      title="Listen audio recitation"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 animate-pulse" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {isPlaying && (
                  <div className="h-1 bg-gray-100 w-full relative">
                    <div
                      className="absolute h-full bg-blue-500 transition-all duration-200"
                      style={{ width: `${playProgress}%` }}
                    />
                  </div>
                )}

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-gray-200 space-y-5 animate-fade-in bg-gray-50/50">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {dua.desc}
                    </p>

                    <div className="bg-white p-5 rounded-2xl text-center border border-gray-200">
                      <p className="text-2xl md:text-3xl font-serif text-blue-700 font-semibold leading-relaxed py-2 select-all">
                        {dua.arabic}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-200">
                        <span className="text-xs font-mono text-gray-400 block mb-1">
                          {language === "ml" ? "ഉച്ചാരണം (Transliteration)" : "Pronunciation / Transliteration"}
                        </span>
                        <p className="text-sm text-sky-600 font-medium italic leading-relaxed">
                          {dua.translit}
                        </p>
                      </div>

                      <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-200">
                        <span className="text-xs font-mono text-gray-400 block mb-1">
                          {language === "ml" ? "അർത്ഥം (Translation)" : "Meaning / Translation"}
                        </span>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {dua.translation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white border border-gray-200 rounded-3xl shadow-sm">
            <p className="text-gray-500 text-sm">
              {language === "ar" ? "لم يتم العثور على نتائج للبحث." : "No results found matching your search."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
