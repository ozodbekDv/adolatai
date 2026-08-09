import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  ShieldCheck,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  Globe,
  Send,
  UserX,
  Sparkles,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { mockAdvocates } from "./Advocates";

// Smooth Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

export default function AdvocateProfile() {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState("about");
  const [consultForm, setConsultForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const advocate = mockAdvocates.find((item) => String(item.id) === String(id));

  // Topilmadi holati
  if (!advocate) {
    return (
      <div className="min-h-screen bg-[#faf9f5] dark:bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden font-sans">
        {/* Soft Ambient Warm Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 dark:bg-slate-900/80 border border-amber-900/10 dark:border-slate-800 rounded-3xl p-8 max-w-md text-center space-y-5 shadow-2xl backdrop-blur-xl relative z-10"
        >
          <div className="w-16 h-16 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/20 shadow-inner">
            <UserX className="w-8 h-8" />
          </div>
          <div className="space-y-1.5">
            <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Advokat topilmadi
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Siz qidirayotgan ID (<strong>{id}</strong>) bo'yicha advokat
              ma'lumotlari tizimda mavjud emas yoki o'chirilgan bo'lishi mumkin.
            </p>
          </div>
          <Link
            to="/advocates"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Advokatlar ro'yxatiga qaytish</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  const handleBooking = (e) => {
    e.preventDefault();
    if (!consultForm.name || !consultForm.phone) {
      toast.error("Iltimos, ism va telefon raqamingizni kiriting!");
      return;
    }
    toast.success(
      `${advocate.name} ga murojaatingiz yuborildi! Tez orada siz bilan bog'lanishadi.`,
    );
    setConsultForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 font-sans">
      <Toaster position="top-center" />

      {/* Aesthetic Beige & Sage Green Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-amber-600/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto space-y-6 relative z-10">
        {/* Orqaga qaytish tugmasi */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="/advocates"
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Advokatlar ro'yxatiga qaytish</span>
          </Link>
        </motion.div>

        {/* Dynamic Header Hero Card (Sage & Warm Beige Design) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-slate-900/80 border border-emerald-900/10 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-xl relative overflow-hidden group"
        >
          {/* Subtle Corner Aesthetic Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emerald-500/15 via-amber-400/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
            {/* Avatar & Ring */}
            <div className="relative group/img shrink-0">
              <img
                src={advocate.avatar}
                alt={advocate.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover border-2 border-emerald-600/20 dark:border-emerald-500/30 shadow-md group-hover/img:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-2 rounded-xl shadow-lg border border-white/50">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                      {advocate.name}
                    </h1>
                    <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 fill-emerald-500/20 shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">
                    {advocate.title}
                  </p>
                </div>

                {/* Price Badge */}
                <div className="bg-amber-500/10 border border-amber-500/30 px-4 py-2.5 rounded-2xl text-center backdrop-blur-md shadow-sm">
                  <span className="text-[10px] text-amber-800 dark:text-amber-400 uppercase font-black tracking-wider block">
                    Xizmat Narxi
                  </span>
                  <span className="text-base font-black text-slate-900 dark:text-slate-100 font-mono">
                    {advocate.hourlyRate.toLocaleString()}{" "}
                    <span className="text-xs font-normal text-slate-500">
                      so'm/st
                    </span>
                  </span>
                </div>
              </div>

              {/* Tag va Lokatsiya */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" />
                  {advocate.location}
                </span>
                <span className="flex items-center">
                  <Award className="w-3.5 h-3.5 mr-1.5 text-amber-600 dark:text-amber-400" />
                  Litsenziya: {advocate.licenseNo}
                </span>
                <span className="flex items-center">
                  <Globe className="w-3.5 h-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" />
                  Tillar: {advocate.languages?.join(", ")}
                </span>
              </div>

              {/* Reyting va tajriba */}
              <div className="pt-3 flex flex-wrap justify-center md:justify-start gap-6 border-t border-slate-200/80 dark:border-slate-800 text-xs">
                <div className="flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-xl">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                    {advocate.rating}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-normal">
                    ({advocate.reviewsCount} sharh)
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-500 mr-1">Tajriba:</span>
                  <strong className="text-slate-900 dark:text-slate-100 font-bold">
                    {advocate.experienceYears} yil
                  </strong>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-500 mr-1">Yutilgan ishlar:</span>
                  <strong className="text-emerald-700 dark:text-emerald-400 font-bold">
                    {advocate.casesWon}+ ta
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Asosiy Tarkib va Konsultatsiyaga Yozilish */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chap Tomon: Ma'lumotlar va Tablar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex space-x-2 border-b border-slate-200/80 dark:border-slate-800 pb-2">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all relative ${
                  activeTab === "about"
                    ? "text-slate-900 bg-amber-400/90 hover:bg-amber-400 shadow-md shadow-amber-400/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-emerald-500/10"
                }`}
              >
                Batafsil Ma'lumot
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "reviews"
                    ? "text-slate-900 bg-amber-400/90 hover:bg-amber-400 shadow-md shadow-amber-400/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-emerald-500/10"
                }`}
              >
                Mijozlar Sharhlari ({advocate.reviewsCount})
              </button>
            </div>

            <AnimatePresence mode="wait">
              {/* TAB 1: ABOUT */}
              {activeTab === "about" && (
                <motion.div
                  key="about"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  variants={staggerContainer}
                  className="space-y-6"
                >
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 space-y-3 backdrop-blur-xl shadow-sm"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                      Advokat Haqida
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {advocate.bio}
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 space-y-4 backdrop-blur-xl shadow-sm"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                      Ixtisoslashgan Sohalari
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {advocate.specialties?.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2.5 text-xs text-slate-800 dark:text-slate-200 bg-emerald-500/5 dark:bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/20 shadow-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span className="font-semibold">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 space-y-4 backdrop-blur-xl shadow-sm"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                      Aloqa Ma'lumotlari
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] font-semibold">
                            Telefon:
                          </span>
                          <strong className="text-slate-800 dark:text-slate-200 font-mono">
                            {advocate.phone}
                          </strong>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] font-semibold">
                            E-pochta:
                          </span>
                          <strong className="text-slate-800 dark:text-slate-200 font-mono">
                            {advocate.email}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* TAB 2: REVIEWS */}
              {activeTab === "reviews" && (
                <motion.div
                  key="reviews"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10 }}
                  variants={staggerContainer}
                  className="space-y-4"
                >
                  {[1, 2, 3].map((rev) => (
                    <motion.div
                      key={rev}
                      variants={fadeInUp}
                      className="bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 space-y-2.5 backdrop-blur-xl shadow-sm hover:border-emerald-500/40 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs">
                          Murojaat qiluvchi #{rev}
                        </h4>
                        <div className="flex text-amber-500 space-x-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Juda professional advokat. Mening sud ishimni qisqa
                        muddatda va ijobiy hal qilib berdi. Tavsiya qilaman!
                      </p>
                      <span className="text-[10px] text-slate-400 block font-mono">
                        12 avgust, 2026 y.
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* O'ng Tomon: Form (Aesthetic Beige & Emerald styling) */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/80 dark:bg-slate-900/80 border border-emerald-900/10 dark:border-slate-800 rounded-3xl p-6 shadow-xl backdrop-blur-xl sticky top-6 space-y-5 relative overflow-hidden group"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />

              <div className="space-y-1 relative z-10">
                <h3 className="font-black text-slate-900 dark:text-slate-100 text-base tracking-tight">
                  Konsultatsiyaga yozilish
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Formani to'ldiring, advokat tez orada aloqaga chiqadi.
                </p>
              </div>

              <form
                onSubmit={handleBooking}
                className="space-y-4 relative z-10"
              >
                <div>
                  <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Sardor"
                    value={consultForm.name}
                    onChange={(e) =>
                      setConsultForm({ ...consultForm, name: e.target.value })
                    }
                    className="w-full mt-1.5 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Telefon raqamingiz
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+998 90 123 45 67"
                    value={consultForm.phone}
                    onChange={(e) =>
                      setConsultForm({ ...consultForm, phone: e.target.value })
                    }
                    className="w-full mt-1.5 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Muammo mazmuni
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Qisqacha muammoingizni bayon qiling..."
                    value={consultForm.message}
                    onChange={(e) =>
                      setConsultForm({
                        ...consultForm,
                        message: e.target.value,
                      })
                    }
                    className="w-full mt-1.5 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 font-black py-3.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-md shadow-amber-500/20 transition-all duration-300"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Uchrashuvga yozilish</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
