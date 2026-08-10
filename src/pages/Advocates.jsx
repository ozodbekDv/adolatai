import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Star,
  MapPin,
  ChevronRight,
  SlidersHorizontal,
  CheckCircle2,
  UserCheck,
  X,
} from "lucide-react";

import { useI18n } from "../hooks/useI18n";

export const mockAdvocates = [
  {
    id: "1",
    name: {
      uz: "Alisher Rustamov",
      uzKr: "Алишер Рустамов",
      ru: "Алишер Рустамов",
      en: "Alisher Rustamov",
    },
    title: {
      uz: "Katta Huquqshunos & Advokat",
      uzKr: "Катта Ҳуқуқшунос & Адвокат",
      ru: "Старший Юрист и Адвокат",
      en: "Senior Lawyer & Advocate",
    },
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
    rating: 4.9,
    reviewsCount: 124,
    experienceYears: 12,
    hourlyRate: 350000,
    categoryKey: "civil",
    location: {
      uz: "Toshkent sh., Yakkasaroy t.",
      uzKr: "Тошкент ш., Яккасарой т.",
      ru: "г. Ташкент, Яккасарайский р-н",
      en: "Tashkent city, Yakkasaray dist.",
    },
    casesWon: 280,
    licenseNo: "ADV-2014-089",
    specialties: {
      uz: ["Mulk nizolari", "Shartnomalar", "Oila huquqi"],
      uzKr: ["Мулк низолари", "Шартномалар", "Оила ҳуқуқи"],
      ru: ["Имущественные споры", "Договоры", "Семейное право"],
      en: ["Property disputes", "Contracts", "Family law"],
    },
  },
  {
    id: "2",
    name: {
      uz: "Malika Sharipova",
      uzKr: "Малика Шарипова",
      ru: "Малика Шарипова",
      en: "Malika Sharipova",
    },
    title: {
      uz: "Biznes va Korporativ Huquq Eksperti",
      uzKr: "Бизнес ва Корпоратив Ҳуқуқ Эксперти",
      ru: "Эксперт по корпоративному праву",
      en: "Corporate Law Expert",
    },
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    rating: 4.8,
    reviewsCount: 98,
    experienceYears: 8,
    hourlyRate: 500000,
    categoryKey: "corporate",
    location: {
      uz: "Toshkent sh., Mirobod t.",
      uzKr: "Тошкент ш., Миробод т.",
      ru: "г. Ташкент, Мирабадский р-н",
      en: "Tashkent city, Mirabad dist.",
    },
    casesWon: 195,
    licenseNo: "ADV-2018-112",
    specialties: {
      uz: ["Biznesni himoya qilish", "M&A Bitimlar", "Soliq konsultasiyasi"],
      uzKr: ["Бизнесни ҳимоя қилиш", "M&A Битимлар", "Солиқ консультацияси"],
      ru: ["Защита бизнеса", "Сделки M&A", "Налоговые консультации"],
      en: ["Business protection", "M&A Deals", "Tax consulting"],
    },
  },
  {
    id: "3",
    name: {
      uz: "Javohir Qodirov",
      uzKr: "Жавоҳир Қодиров",
      ru: "Джавохир Кадыров",
      en: "Javohir Qodirov",
    },
    title: {
      uz: "Jinoyat Ishlari Bo'yicha Advokat",
      uzKr: "Жиноят Ишлари Бўйича Адвокат",
      ru: "Адвокат по уголовным делам",
      en: "Criminal Defense Attorney",
    },
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    rating: 4.7,
    reviewsCount: 86,
    experienceYears: 15,
    hourlyRate: 400000,
    categoryKey: "criminal",
    location: {
      uz: "Samarqand sh.",
      uzKr: "Самарқанд ш.",
      ru: "г. Самарканд",
      en: "Samarkand city",
    },
    casesWon: 310,
    licenseNo: "ADV-2011-043",
    specialties: {
      uz: ["Iqtisodiy jinoyatlar", "Tergovda himoya", "Sud himoyasi"],
      uzKr: ["Иқтисодий жиноятлар", "Терговда ҳимоя", "Суд ҳимояси"],
      ru: [
        "Экономические преступления",
        "Защита на следствии",
        "Защита в суде",
      ],
      en: ["Economic crimes", "Pre-trial defense", "Court defense"],
    },
  },
  {
    id: "4",
    name: {
      uz: "Nigora Umarova",
      uzKr: "Нигора Умарова",
      ru: "Нигора Умарова",
      en: "Nigora Umarova",
    },
    title: {
      uz: "Oila va Mehnat Huquqi Mutaxassisi",
      uzKr: "Оила ва Меҳнат Ҳуқуқи Мутахассиси",
      ru: "Специалист по семейному и трудовому праву",
      en: "Family & Labor Law Specialist",
    },
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
    rating: 4.9,
    reviewsCount: 150,
    experienceYears: 6,
    hourlyRate: 250000,
    categoryKey: "family",
    location: {
      uz: "Toshkent sh., Chilonzor t.",
      uzKr: "Тошкент ш., Чилонзор т.",
      ru: "г. Ташкент, Чиланзарский р-н",
      en: "Tashkent city, Chilanzar dist.",
    },
    casesWon: 140,
    licenseNo: "ADV-2020-301",
    specialties: {
      uz: ["Nikohni bekor qilish", "Aliment undirish", "Mehnat nizolari"],
      uzKr: ["Никоҳни бекор қилиш", "Алимент ундириш", "Меҳнат низолари"],
      ru: ["Расторжение брака", "Взыскание алиментов", "Трудовые споры"],
      en: ["Divorce proceedings", "Alimony recovery", "Labor disputes"],
    },
  },
];

export default function Advocates() {
  const { t, lang } = useI18n();

  // Til kodi "ru-RU", "uz-UZ" yoki har xil ko'rinishda kelgan bo'lsa uni normallashtirish
  const currentLang = (() => {
    const probe = String(t("advocatesPage.filters.title") || "")
      .trim()
      .toLowerCase();

    // Russian
    if (probe === "фильтры" || probe.includes("фильтр")) {
      return "ru";
    }

    // English
    if (probe === "filters" || probe.includes("filter")) {
      return "en";
    }

    // Uzbek Cyrillic
    if (probe === "фильтрлар" || probe.includes("фильтрлар")) {
      return "uzKr";
    }

    // Uzbek Latin
    return "uz";
  })();

  // Maydonlarni to'g'ri tilda olish funksiyasi
  const getField = (fieldObj, fallback = "") => {
    if (fieldObj == null) return fallback;

    if (typeof fieldObj === "string") {
      return fieldObj;
    }

    const value = fieldObj[currentLang];

    if (value !== undefined && value !== null) {
      return value;
    }

    return fallback;
  };

  const categories = [
    { key: "all", label: t("advocatesPage.categories.all") },
    { key: "civil", label: t("advocatesPage.categories.civil") },
    { key: "corporate", label: t("advocatesPage.categories.corporate") },
    { key: "criminal", label: t("advocatesPage.categories.criminal") },
    { key: "family", label: t("advocatesPage.categories.family") },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("all");
  const [maxPrice, setMaxPrice] = useState(600000);
  const [minExperience, setMinExperience] = useState(0);
  const [sortBy, setSortBy] = useState("rating");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategoryKey("all");
    setMaxPrice(600000);
    setMinExperience(0);
    setSortBy("rating");
  };

  const filteredAdvocates = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return mockAdvocates
      .filter((adv) => {
        const nameInLang = getField(adv.name).toLowerCase();
        const titleInLang = getField(adv.title).toLowerCase();
        const locationInLang = getField(adv.location).toLowerCase();
        const specialtiesInLang = getField(adv.specialties, []);

        const specsText = Array.isArray(specialtiesInLang)
          ? specialtiesInLang.join(" ").toLowerCase()
          : "";

        const categoryNameInLang = t(
          `advocatesPage.categories.${adv.categoryKey}`,
        ).toLowerCase();

        const matchesSearch =
          !term ||
          nameInLang.includes(term) ||
          titleInLang.includes(term) ||
          locationInLang.includes(term) ||
          categoryNameInLang.includes(term) ||
          specsText.includes(term);

        const matchesCategory =
          selectedCategoryKey === "all" ||
          adv.categoryKey === selectedCategoryKey;
        const matchesPrice = adv.hourlyRate <= maxPrice;
        const matchesExp = adv.experienceYears >= minExperience;

        return matchesSearch && matchesCategory && matchesPrice && matchesExp;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "priceAsc") return a.hourlyRate - b.hourlyRate;
        if (sortBy === "priceDesc") return b.hourlyRate - a.hourlyRate;
        if (sortBy === "exp") return b.experienceYears - a.experienceYears;
        return 0;
      });
  }, [
    searchTerm,
    selectedCategoryKey,
    maxPrice,
    minExperience,
    sortBy,
    currentLang,
    t,
  ]);

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-amber-200/40 dark:border-stone-800 pb-3">
        <div className="flex items-center space-x-2">
          <SlidersHorizontal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="font-bold text-stone-800 dark:text-stone-100 text-base">
            {t("advocatesPage.filters.title")}
          </h2>
        </div>
        {isMobileFilterOpen && (
          <button
            onClick={() => setIsMobileFilterOpen(false)}
            className="p-1 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
          {t("advocatesPage.filters.searchLabel")}
        </label>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
          <input
            type="text"
            placeholder={t("advocatesPage.filters.searchPlaceholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-amber-50/50 dark:bg-stone-800/80 text-stone-900 dark:text-stone-100 rounded-xl pl-9 pr-3 py-2 text-sm border border-amber-200/60 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
          {t("advocatesPage.filters.specialtyLabel")}
        </label>
        <div className="flex flex-col space-y-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategoryKey(cat.key)}
              className={`text-left px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategoryKey === cat.key
                  ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-200/60 dark:border-emerald-800/50 shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:bg-amber-100/40 dark:hover:bg-stone-800/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <label className="font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            {t("advocatesPage.filters.maxPriceLabel")}
          </label>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">
            {maxPrice.toLocaleString()} {t("advocatesPage.filters.currency")}
          </span>
        </div>
        <input
          type="range"
          min="200000"
          max="600000"
          step="50000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <label className="font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            {t("advocatesPage.filters.minExpLabel")}
          </label>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">
            {minExperience} {t("advocatesPage.filters.years")}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="15"
          step="1"
          value={minExperience}
          onChange={(e) => setMinExperience(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
      </div>

      <button
        onClick={resetFilters}
        className="w-full text-xs text-stone-600 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-400 py-2.5 border border-dashed border-amber-300 dark:border-stone-700 hover:border-emerald-500 rounded-xl transition-all font-medium"
      >
        {t("advocatesPage.filters.resetBtn")}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-stone-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-stone-100 tracking-tight">
            {t("advocatesPage.header.title")}{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-700 bg-clip-text text-transparent">
              {t("advocatesPage.header.titleHighlight")}
            </span>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-sm sm:text-base">
            {t("advocatesPage.header.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block lg:col-span-1 bg-amber-50/40 dark:bg-stone-900 border border-amber-200/60 dark:border-stone-800 rounded-2xl p-5 shadow-sm h-fit sticky top-6">
            <FilterContent />
          </div>

          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-sm lg:hidden flex justify-end">
              <div className="w-full max-w-xs bg-[#FAF8F5] dark:bg-stone-900 h-full p-6 overflow-y-auto shadow-2xl">
                <FilterContent />
              </div>
            </div>
          )}

          <div className="lg:col-span-3 space-y-4">
            <div className="flex flex-row justify-between items-center bg-amber-50/40 dark:bg-stone-900 border border-amber-200/60 dark:border-stone-800 rounded-2xl p-4 shadow-sm gap-3">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden p-2 bg-amber-100/60 dark:bg-stone-800 rounded-xl text-stone-700 dark:text-stone-200 hover:bg-amber-200/50"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  {t("advocatesPage.sort.found")}{" "}
                  <strong className="text-stone-900 dark:text-stone-100">
                    {filteredAdvocates.length}
                  </strong>{" "}
                  {t("advocatesPage.sort.countSuffix")}
                </span>
              </div>

              <div className="flex items-center space-x-2 text-xs">
                <span className="text-stone-500 hidden sm:inline">
                  {t("advocatesPage.sort.label")}
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-amber-50/60 dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-amber-200/80 dark:border-stone-700 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer"
                >
                  <option value="rating">
                    {t("advocatesPage.sort.options.rating")}
                  </option>
                  <option value="exp">
                    {t("advocatesPage.sort.options.exp")}
                  </option>
                  <option value="priceAsc">
                    {t("advocatesPage.sort.options.priceAsc")}
                  </option>
                  <option value="priceDesc">
                    {t("advocatesPage.sort.options.priceDesc")}
                  </option>
                </select>
              </div>
            </div>

            {filteredAdvocates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAdvocates.map((adv) => {
                  const name = getField(adv.name);
                  const title = getField(adv.title);
                  const location = getField(adv.location);
                  const specialties = getField(adv.specialties, []);

                  return (
                    <div
                      key={adv.id}
                      className="bg-amber-50/30 dark:bg-stone-900 border border-amber-200/60 dark:border-stone-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="relative overflow-hidden rounded-2xl shrink-0">
                            <img
                              src={adv.avatar}
                              alt={name}
                              className="w-16 h-16 object-cover border border-amber-200/50 dark:border-stone-800 shadow-sm transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-1">
                              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                {name}
                              </h3>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            </div>
                            <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium truncate">
                              {title}
                            </p>
                            <p className="text-xs text-stone-400 dark:text-stone-500 flex items-center mt-1 truncate">
                              <MapPin className="w-3 h-3 mr-1 shrink-0" />{" "}
                              {location}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 bg-amber-100/40 dark:bg-stone-800/50 rounded-xl p-2.5 text-center">
                          <div>
                            <div className="flex items-center justify-center space-x-1 text-amber-600 dark:text-amber-500 font-bold text-xs">
                              <Star className="w-3.5 h-3.5 fill-amber-500" />
                              <span>{adv.rating}</span>
                            </div>
                            <span className="text-[10px] text-stone-400 block">
                              ({adv.reviewsCount}{" "}
                              {t("advocatesPage.card.reviews")})
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-stone-800 dark:text-stone-200">
                              {adv.experienceYears}{" "}
                              {t("advocatesPage.filters.years")}
                            </p>
                            <span className="text-[10px] text-stone-400 block">
                              {t("advocatesPage.card.experience")}
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                              {adv.casesWon}+
                            </p>
                            <span className="text-[10px] text-stone-400 block">
                              {t("advocatesPage.card.casesWon")}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {Array.isArray(specialties) &&
                            specialties.slice(0, 3).map((spec, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] px-2.5 py-1 rounded-lg bg-amber-100/60 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-medium"
                              >
                                {spec}
                              </span>
                            ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-amber-200/50 dark:border-stone-800 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-stone-400 block">
                            {t("advocatesPage.card.priceLabel")}
                          </span>
                          <span className="text-sm font-extrabold text-stone-900 dark:text-stone-100">
                            {adv.hourlyRate.toLocaleString()}{" "}
                            <span className="text-xs font-normal text-stone-500">
                              {t("advocatesPage.card.priceUnit")}
                            </span>
                          </span>
                        </div>

                        <Link
                          to={`/advocates/${adv.id}`}
                          className="inline-flex items-center space-x-1 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-600/20 group-hover:translate-x-0.5"
                        >
                          <span>{t("advocatesPage.card.profileBtn")}</span>
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-amber-50/30 dark:bg-stone-900 border border-amber-200/60 dark:border-stone-800 rounded-2xl p-12 text-center space-y-4">
                <UserCheck className="w-12 h-12 text-stone-300 dark:text-stone-600 mx-auto" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    {t("advocatesPage.notFound.title")}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 max-w-xs mx-auto">
                    {t("advocatesPage.notFound.subtitle")}
                  </p>
                </div>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-semibold text-xs rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                >
                  {t("advocatesPage.notFound.resetBtn")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
