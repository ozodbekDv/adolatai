import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Award,
  Edit3,
  Check,
  X,
  Sparkles,
  BookOpen,
  Briefcase,
  ShieldCheck,
  Camera,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useI18n } from "../hooks/useI18n";

const getStoredUser = () => {
  if (typeof window === "undefined") return null;

  try {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  } catch {
    return null;
  }
};

const getDefaultProfile = () => ({
  fullName: "",
  email: "",
  phone: "",
  occupation: "",
  education: "",
  englishLevel: "",
  skills: [],
  bio: "",
});

export const ProfilePage = () => {
  const { t } = useI18n();
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState(() => {
    const storedUser = getStoredUser();
    return storedUser?.profile || getDefaultProfile();
  });

  const [formData, setFormData] = useState(() => {
    const storedUser = getStoredUser();
    return storedUser?.profile || getDefaultProfile();
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    setFormData((prev) => ({ ...prev, skills: skillsArray }));
  };

  const profileCopy = {
    badge: t("profilePage.badge") || "Foydalanuvchi Profili",
    edit: t("profilePage.edit") || "Tahrirlash",
    save: t("profilePage.save") || "Saqlash",
    cancel: t("profilePage.cancel") || "Bekor qilish",
    personalInfo: t("profilePage.personalInfo") || "Shaxsiy Ma'lumotlar",
    fullName: t("profilePage.fullName") || "To'liq Ism",
    email: t("profilePage.email") || "Email Manzil",
    phone: t("profilePage.phone") || "Telefon Raqam",
    occupation: t("profilePage.occupation") || "Mutaxassislik / Faoliyat",
    bio: t("profilePage.bio") || "O'zi haqida (Bio)",
    education: t("profilePage.education") || "Ta'lim & Til Bilishi",
    educationStage: t("profilePage.educationStage") || "Bosqich:",
    englishLevel: t("profilePage.englishLevel") || "Ingliz tili darajasi:",
    skillsTitle: t("profilePage.skillsTitle") || "Texnik Ko'nikmalar",
    toastSuccess:
      t("profilePage.toastSuccess") ||
      "Profil ma'lumotlari muvaffaqiyatli saqlandi!",
  };

  const handleSave = () => {
    const nextProfile = {
      ...formData,
      skills: (formData.skills || []).filter(Boolean),
    };

    setProfile(nextProfile);
    setFormData(nextProfile);
    setIsEditing(false);

    const storedUser = getStoredUser() || {};
    const updatedUser = {
      ...storedUser,
      profile: nextProfile,
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    toast.success(profileCopy.toastSuccess, {
      icon: "🌿",
      style: {
        borderRadius: "16px",
        background: "#2d3b32",
        color: "#f5f2eb",
      },
    });
  };

  const handleCancel = () => {
    setFormData({ ...profile, skills: [...(profile.skills || [])] });
    setIsEditing(false);
  };

  const displayValue = (value) => {
    if (typeof value === "string") {
      return value.trim() ? value : "—";
    }

    return value || "—";
  };

  const avatarInitial =
    profile.fullName?.trim()?.charAt(0)?.toUpperCase() || "U";

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center p-4 sm:p-8 overflow-hidden bg-[#FBF9F5] dark:bg-[#121714] text-[#2C3531] dark:text-[#E8ECE9] transition-colors duration-500 font-sans">
      <Toaster position="top-center" />

      {/* Orqa fondagi estetik glow doiralar */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-200/20 dark:bg-emerald-900/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#EFEAD8]/60 dark:bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl space-y-6 my-6">
        {/* HEADER & ACTION CARD */}
        <div className="bg-[#F7F4EE]/90 dark:bg-[#181F1C]/90 backdrop-blur-2xl border border-[#E5DFD3] dark:border-emerald-900/30 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Avatar & Asosiy unvon */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#40534C] dark:bg-emerald-700 text-[#F5F2EB] flex items-center justify-center text-3xl font-extrabold shadow-xl shadow-[#40534C]/20 border-2 border-[#E5DFD3] dark:border-emerald-800/40">
                  {avatarInitial}
                </div>
                {isEditing && (
                  <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-xs">
                    <Camera className="w-6 h-6" />
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAE5D9]/70 dark:bg-emerald-950/50 border border-[#DCD5C5] dark:border-emerald-800/40 text-[#40534C] dark:text-emerald-300 text-xs font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{profileCopy.badge}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C2421] dark:text-[#F3F5F4]">
                  {displayValue(profile.fullName)}
                </h1>
                <p className="text-sm text-[#6C7B75] dark:text-[#A1B0AB] font-medium">
                  {displayValue(profile.occupation)}
                </p>
              </div>
            </div>

            {/* Edit / Save Tugmalari */}
            <div>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 bg-[#40534C] hover:bg-[#32423D] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-[#F5F2EB] px-5 py-3 rounded-2xl text-sm font-semibold shadow-md shadow-[#40534C]/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>{profileCopy.edit}</span>
                </button>
              ) : (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-1.5 bg-[#677D6A] hover:bg-[#526555] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md transition-all hover:scale-105 active:scale-95"
                  >
                    <Check className="w-4 h-4" />
                    <span>{profileCopy.save}</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center space-x-1.5 bg-[#EAE5D9] hover:bg-[#DFD8C8] dark:bg-emerald-950 dark:hover:bg-emerald-900/60 text-[#40534C] dark:text-emerald-300 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all hover:scale-105 active:scale-95"
                  >
                    <X className="w-4 h-4" />
                    <span>{profileCopy.cancel}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DETAILS GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CHAP USTUN: Shaxsiy va Aloqa ma'lumotlari */}
          <div className="md:col-span-2 bg-[#F7F4EE]/90 dark:bg-[#181F1C]/90 backdrop-blur-2xl border border-[#E5DFD3] dark:border-emerald-900/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <h2 className="text-lg font-bold text-[#1C2421] dark:text-[#F3F5F4] flex items-center space-x-2 border-b border-[#E5DFD3] dark:border-emerald-900/30 pb-3">
              <User className="w-5 h-5 text-[#677D6A] dark:text-emerald-400" />
              <span>{profileCopy.personalInfo}</span>
            </h2>

            <div className="space-y-4">
              {/* Ism Familiya */}
              <div>
                <label className="text-xs font-semibold text-[#6C7B75] dark:text-[#8C9691] uppercase tracking-wider block mb-1">
                  {profileCopy.fullName}
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-[#EFECE6] dark:bg-[#212B26] text-[#1C2421] dark:text-[#F3F5F4] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#677D6A]/50 border border-[#E2DDD0] dark:border-emerald-900/40"
                  />
                ) : (
                  <p className="text-sm font-medium text-[#2C3531] dark:text-[#E8ECE9]">
                    {displayValue(profile.fullName)}
                  </p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="text-xs font-semibold text-[#6C7B75] dark:text-[#8C9691] uppercase tracking-wider block mb-1">
                    {profileCopy.email}
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#EFECE6] dark:bg-[#212B26] text-[#1C2421] dark:text-[#F3F5F4] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#677D6A]/50 border border-[#E2DDD0] dark:border-emerald-900/40"
                    />
                  ) : (
                    <p className="text-sm font-medium text-[#2C3531] dark:text-[#E8ECE9] flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#677D6A]" />
                      <span>{displayValue(profile.email)}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#6C7B75] dark:text-[#8C9691] uppercase tracking-wider block mb-1">
                    {profileCopy.phone}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#EFECE6] dark:bg-[#212B26] text-[#1C2421] dark:text-[#F3F5F4] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#677D6A]/50 border border-[#E2DDD0] dark:border-emerald-900/40"
                    />
                  ) : (
                    <p className="text-sm font-medium text-[#2C3531] dark:text-[#E8ECE9] flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#677D6A]" />
                      <span>{displayValue(profile.phone)}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Kasbi & Bio */}
              <div className="pt-2 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-[#6C7B75] dark:text-[#8C9691] uppercase tracking-wider block mb-1">
                    {profileCopy.occupation}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      className="w-full bg-[#EFECE6] dark:bg-[#212B26] text-[#1C2421] dark:text-[#F3F5F4] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#677D6A]/50 border border-[#E2DDD0] dark:border-emerald-900/40"
                    />
                  ) : (
                    <p className="text-sm font-medium text-[#2C3531] dark:text-[#E8ECE9] flex items-center space-x-2">
                      <Briefcase className="w-4 h-4 text-[#677D6A]" />
                      <span>{displayValue(profile.occupation)}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#6C7B75] dark:text-[#8C9691] uppercase tracking-wider block mb-1">
                    {profileCopy.bio}
                  </label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      rows="3"
                      value={formData.bio}
                      onChange={handleInputChange}
                      className="w-full bg-[#EFECE6] dark:bg-[#212B26] text-[#1C2421] dark:text-[#F3F5F4] rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#677D6A]/50 border border-[#E2DDD0] dark:border-emerald-900/40 resize-none"
                    />
                  ) : (
                    <p className="text-sm text-[#5A6561] dark:text-[#A1B0AB] leading-relaxed">
                      {displayValue(profile.bio)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* O'NG USTUN: Ko'nikmalar & Ta'lim */}
          <div className="space-y-6">
            {/* Ta'lim & Tillar */}
            <div className="bg-[#F7F4EE]/90 dark:bg-[#181F1C]/90 backdrop-blur-2xl border border-[#E5DFD3] dark:border-emerald-900/30 rounded-3xl p-6 shadow-xl space-y-4">
              <h2 className="text-base font-bold text-[#1C2421] dark:text-[#F3F5F4] flex items-center space-x-2 border-b border-[#E5DFD3] dark:border-emerald-900/30 pb-3">
                <GraduationCap className="w-4 h-4 text-[#677D6A] dark:text-emerald-400" />
                <span>{profileCopy.education}</span>
              </h2>

              <div className="space-y-3">
                <div>
                  <span className="text-xs text-[#6C7B75] dark:text-[#8C9691] block">
                    {profileCopy.educationStage}
                  </span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className="w-full bg-[#EFECE6] dark:bg-[#212B26] text-[#1C2421] dark:text-[#F3F5F4] rounded-xl px-3 py-2 text-xs focus:outline-none border border-[#E2DDD0] dark:border-emerald-900/40"
                    />
                  ) : (
                    <p className="text-xs font-semibold text-[#1C2421] dark:text-[#E8ECE9]">
                      {displayValue(profile.education)}
                    </p>
                  )}
                </div>

                <div>
                  <span className="text-xs text-[#6C7B75] dark:text-[#8C9691] block">
                    {profileCopy.englishLevel}
                  </span>
                  {isEditing ? (
                    <input
                      type="text"
                      name="englishLevel"
                      value={formData.englishLevel}
                      onChange={handleInputChange}
                      className="w-full bg-[#EFECE6] dark:bg-[#212B26] text-[#1C2421] dark:text-[#F3F5F4] rounded-xl px-3 py-2 text-xs focus:outline-none border border-[#E2DDD0] dark:border-emerald-900/40"
                    />
                  ) : (
                    <div className="inline-flex items-center space-x-1.5 mt-1 px-2.5 py-1 rounded-lg bg-[#EAE5D9] dark:bg-emerald-950/60 border border-[#DCD5C5] dark:border-emerald-800/40 text-[#40534C] dark:text-emerald-300 text-xs font-medium">
                      <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{displayValue(profile.englishLevel)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Ko'nikmalar */}
            <div className="bg-[#F7F4EE]/90 dark:bg-[#181F1C]/90 backdrop-blur-2xl border border-[#E5DFD3] dark:border-emerald-900/30 rounded-3xl p-6 shadow-xl space-y-4">
              <h2 className="text-base font-bold text-[#1C2421] dark:text-[#F3F5F4] flex items-center space-x-2 border-b border-[#E5DFD3] dark:border-emerald-900/30 pb-3">
                <BookOpen className="w-4 h-4 text-[#677D6A] dark:text-emerald-400" />
                <span>{profileCopy.skillsTitle}</span>
              </h2>

              {isEditing ? (
                <div>
                  <label className="text-[11px] text-[#6C7B75] dark:text-[#8C9691] block mb-1">
                    Vergul bilan ajratib yozing:
                  </label>
                  <input
                    type="text"
                    value={formData.skills.join(", ")}
                    onChange={handleSkillsChange}
                    className="w-full bg-[#EFECE6] dark:bg-[#212B26] text-[#1C2421] dark:text-[#F3F5F4] rounded-xl px-3 py-2 text-xs focus:outline-none border border-[#E2DDD0] dark:border-emerald-900/40"
                  />
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.skills?.length ? (
                    profile.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl text-xs font-medium bg-[#EFECE6] dark:bg-[#212B26] border border-[#E2DDD0] dark:border-emerald-900/30 text-[#32423D] dark:text-[#C5D1CD]"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-[#6C7B75] dark:text-[#8C9691]">
                      Hech qanday ko‘nikma qo‘shilmagan
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Tizim Holati / Badge */}
            <div className="bg-[#EAE5D9]/60 dark:bg-emerald-950/20 border border-[#DCD5C5] dark:border-emerald-900/30 rounded-3xl p-4 flex items-center space-x-3 text-xs text-[#40534C] dark:text-emerald-300">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>
                Hisob holati: <b>Aktiv va tasdiqlangan</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
