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

// Mock Data: Advokatlar ro'yxati
export const mockAdvocates = [
  {
    id: "1",
    name: "Alisher Rustamov",
    title: "Katta Huquqshunos & Advokat",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
    rating: 4.9,
    reviewsCount: 124,
    experienceYears: 12,
    hourlyRate: 350000,
    category: "Fuqarolik huquqi",
    location: "Toshkent sh., Yakkasaroy t.",
    casesWon: 280,
    licenseNo: "ADV-2014-089",
    languages: ["O'zbek", "Rus", "Ingliz"],
    specialties: ["Mulk nizolari", "Shartnomalar", "Oila huquqi"],
    bio: "12 yillik amaliy tajribaga ega advokat. Fuqarolik va tijorat huquqi bo'yicha yuzlab muvaffaqiyatli sud ishlarini olib borgan.",
    phone: "+998 90 123 45 67",
    email: "a.rustamov@legal.uz",
  },
  {
    id: "2",
    name: "Malika Sharipova",
    title: "Biznes va Korporativ Huquq Eksperti",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    rating: 4.8,
    reviewsCount: 98,
    experienceYears: 8,
    hourlyRate: 500000,
    category: "Korporativ huquq",
    location: "Toshkent sh., Mirobod t.",
    casesWon: 195,
    licenseNo: "ADV-2018-112",
    languages: ["O'zbek", "Ingliz"],
    specialties: [
      "Biznesni himoya qilish",
      "M&A Bitimlar",
      "Soliq konsultasiyasi",
    ],
    bio: "Startaplar va xalqaro kompaniyalarga huquqiy xizmat ko'rsatish bo'yicha mutaxassis. Xalqaro tijorat arbitrajida tajribaga ega.",
    phone: "+998 91 987 65 43",
    email: "m.sharipova@legal.uz",
  },
  {
    id: "3",
    name: "Javohir Qodirov",
    title: "Jinoyat Ishlari Bo'yicha Advokat",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    rating: 4.7,
    reviewsCount: 86,
    experienceYears: 15,
    hourlyRate: 400000,
    category: "Jinoyat huquqi",
    location: "Samarqand sh.",
    casesWon: 310,
    licenseNo: "ADV-2011-043",
    languages: ["O'zbek", "Rus"],
    specialties: ["Iqtisodiy jinoyatlar", "Tergovda himoya", "Sud himoyasi"],
    bio: "Murakkab jinoyat va iqtisodiy ishlarda 15 yildan ortiq tajriba. Mijozlar manfati va huquqlarini har qanday bosqichda qat'iy himoya qiladi.",
    phone: "+998 93 555 12 34",
    email: "j.qodirov@legal.uz",
  },
  {
    id: "4",
    name: "Nigora Umarova",
    title: "Oila va Mehnat Huquqi Mutaxassisi",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
    rating: 4.9,
    reviewsCount: 150,
    experienceYears: 6,
    hourlyRate: 250000,
    category: "Oila huquqi",
    location: "Toshkent sh., Chilonzor t.",
    casesWon: 140,
    licenseNo: "ADV-2020-301",
    languages: ["O'zbek", "Rus"],
    specialties: [
      "Nikohni bekor qilish",
      "Aliment undirish",
      "Mehnat nizolari",
    ],
    bio: "Oila nizolarini tinchlik va adolat yo'li bilan hal qilish va mehnat huquqlarini tiklashga ixtisoslashgan advokat.",
    phone: "+998 94 444 88 99",
    email: "n.umarova@legal.uz",
  },
];

const categories = [
  "Barchasi",
  "Fuqarolik huquqi",
  "Korporativ huquq",
  "Jinoyat huquqi",
  "Oila huquqi",
];

export default function Advocates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");
  const [maxPrice, setMaxPrice] = useState(600000);
  const [minExperience, setMinExperience] = useState(0);
  const [sortBy, setSortBy] = useState("rating");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("Barchasi");
    setMaxPrice(600000);
    setMinExperience(0);
    setSortBy("rating");
  };

  const filteredAdvocates = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return mockAdvocates
      .filter((adv) => {
        const matchesSearch =
          !term ||
          adv.name.toLowerCase().includes(term) ||
          adv.specialties.some((s) => s.toLowerCase().includes(term));

        const matchesCategory =
          selectedCategory === "Barchasi" || adv.category === selectedCategory;
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
  }, [searchTerm, selectedCategory, maxPrice, minExperience, sortBy]);

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-amber-200/40 dark:border-stone-800 pb-3">
        <div className="flex items-center space-x-2">
          <SlidersHorizontal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="font-bold text-stone-800 dark:text-stone-100 text-base">
            Filterlar
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

      {/* Qidiruv */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
          Qidiruv
        </label>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
          <input
            type="text"
            placeholder="Ism yoki soha..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-amber-50/50 dark:bg-stone-800/80 text-stone-900 dark:text-stone-100 rounded-xl pl-9 pr-3 py-2 text-sm border border-amber-200/60 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
        </div>
      </div>

      {/* Mutaxassislik */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
          Mutaxassislik
        </label>
        <div className="flex flex-col space-y-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-left px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-200/60 dark:border-emerald-800/50 shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:bg-amber-100/40 dark:hover:bg-stone-800/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Maksimal Narx */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <label className="font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Maks. Narx (soatiga)
          </label>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">
            {maxPrice.toLocaleString()} so'm
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

      {/* Minimal Tajriba */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <label className="font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Min. Tajriba
          </label>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">
            {minExperience} yil
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

      {/* Qayta o'rnatish */}
      <button
        onClick={resetFilters}
        className="w-full text-xs text-stone-600 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-400 py-2.5 border border-dashed border-amber-300 dark:border-stone-700 hover:border-emerald-500 rounded-xl transition-all font-medium"
      >
        Filterlarni tozalash
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-stone-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Sahifa Sarlavhasi */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-stone-100 tracking-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-700 bg-clip-text text-transparent">
              Advokatlar Ro'yxati
            </span>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-sm sm:text-base">
            O'zingizga mos bo'lgan huquqshunosni tajribasi, narxi va
            mutaxassisligi bo'yicha tanlang hamda bevosita bog'laning.
          </p>
        </div>

        {/* Qidiruv va Filter Sektsiyasi */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Desktop Filter Paneli */}
          <div className="hidden lg:block lg:col-span-1 bg-amber-50/40 dark:bg-stone-900 border border-amber-200/60 dark:border-stone-800 rounded-2xl p-5 shadow-sm h-fit sticky top-6">
            <FilterContent />
          </div>

          {/* Mobile Filter Drawer Modal */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-sm lg:hidden flex justify-end">
              <div className="w-full max-w-xs bg-[#FAF8F5] dark:bg-stone-900 h-full p-6 overflow-y-auto shadow-2xl">
                <FilterContent />
              </div>
            </div>
          )}

          {/* O'ng tomon: Advokatlar Cardlari Ro'yxati */}
          <div className="lg:col-span-3 space-y-4">
            {/* Saralash (Sort By) paneli */}
            <div className="flex flex-row justify-between items-center bg-amber-50/40 dark:bg-stone-900 border border-amber-200/60 dark:border-stone-800 rounded-2xl p-4 shadow-sm gap-3">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden p-2 bg-amber-100/60 dark:bg-stone-800 rounded-xl text-stone-700 dark:text-stone-200 hover:bg-amber-200/50"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  Topildi:{" "}
                  <strong className="text-stone-900 dark:text-stone-100">
                    {filteredAdvocates.length} ta
                  </strong>{" "}
                  advokat
                </span>
              </div>

              <div className="flex items-center space-x-2 text-xs">
                <span className="text-stone-500 hidden sm:inline">
                  Saralash:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-amber-50/60 dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-amber-200/80 dark:border-stone-700 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer"
                >
                  <option value="rating">Yuqori reyting bo'yicha</option>
                  <option value="exp">Eng ko'p tajriba bo'yicha</option>
                  <option value="priceAsc">Arzonroq narx bo'yicha</option>
                  <option value="priceDesc">Qimmatroq narx bo'yicha</option>
                </select>
              </div>
            </div>

            {/* Advokatlar Cardlari */}
            {filteredAdvocates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAdvocates.map((adv) => (
                  <div
                    key={adv.id}
                    className="bg-amber-50/30 dark:bg-stone-900 border border-amber-200/60 dark:border-stone-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      {/* Tepasi: Avatar + Ism */}
                      <div className="flex items-start space-x-4">
                        <div className="relative overflow-hidden rounded-2xl shrink-0">
                          <img
                            src={adv.avatar}
                            alt={adv.name}
                            className="w-16 h-16 object-cover border border-amber-200/50 dark:border-stone-800 shadow-sm transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-1">
                            <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {adv.name}
                            </h3>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          </div>
                          <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                            {adv.title}
                          </p>
                          <p className="text-xs text-stone-400 dark:text-stone-500 flex items-center mt-1">
                            <MapPin className="w-3 h-3 mr-1 shrink-0" />{" "}
                            {adv.location}
                          </p>
                        </div>
                      </div>

                      {/* Reyting va Statistikalar */}
                      <div className="grid grid-cols-3 gap-2 bg-amber-100/40 dark:bg-stone-800/50 rounded-xl p-2.5 text-center">
                        <div>
                          <div className="flex items-center justify-center space-x-1 text-amber-600 dark:text-amber-500 font-bold text-xs">
                            <Star className="w-3.5 h-3.5 fill-amber-500" />
                            <span>{adv.rating}</span>
                          </div>
                          <span className="text-[10px] text-stone-400 block">
                            ({adv.reviewsCount} sharh)
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-stone-800 dark:text-stone-200">
                            {adv.experienceYears} yil
                          </p>
                          <span className="text-[10px] text-stone-400 block">
                            Tajriba
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            {adv.casesWon}+
                          </p>
                          <span className="text-[10px] text-stone-400 block">
                            Yutilgan ish
                          </span>
                        </div>
                      </div>

                      {/* Taglar/Mutaxassislik */}
                      <div className="flex flex-wrap gap-1.5">
                        {adv.specialties.slice(0, 3).map((spec, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-amber-100/60 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pastki qism: Narx va Profil Linki */}
                    <div className="mt-5 pt-4 border-t border-amber-200/50 dark:border-stone-800 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 block">
                          Xizmat narxi:
                        </span>
                        <span className="text-sm font-extrabold text-stone-900 dark:text-stone-100">
                          {adv.hourlyRate.toLocaleString()}{" "}
                          <span className="text-xs font-normal text-stone-500">
                            so'm/soat
                          </span>
                        </span>
                      </div>

                      {/* PROFILGA O'TISH LINKI */}
                      <Link
                        to={`/advocates/${adv.id}`}
                        className="inline-flex items-center space-x-1 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-600/20 group-hover:translate-x-0.5"
                      >
                        <span>Profil</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-amber-50/30 dark:bg-stone-900 border border-amber-200/60 dark:border-stone-800 rounded-2xl p-12 text-center space-y-4">
                <UserCheck className="w-12 h-12 text-stone-300 dark:text-stone-600 mx-auto" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    Advokat topilmadi
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 max-w-xs mx-auto">
                    Kiritilgan filter parametrlaringizga mos keladigan
                    advokatlar ro'yxati mavjud emas.
                  </p>
                </div>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-semibold text-xs rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                >
                  Filterlarni tozalash
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
