import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ShoppingBag,
  Home,
  Lightbulb,
  Car,
  Users,
  RotateCcw,
  CheckCircle2,
  ChevronDown,
  X,
  FileText,
  Copy,
  Download,
  Printer,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Calendar,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "../hooks/useI18n";

// Legal content is loaded from translations below so the wizard stays localized.
export default function StepWizard() {
  const { t } = useI18n();

  // Wizard Dynamic State
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "housing",
    fullName: "",
    opponent: "",
    date: "",
    description: "",
    evidences: [],
    additionalEvidence: "",
  });

  const [showReasoning, setShowReasoning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Bugungi sana dinamik
  const currentDateFormatted = useMemo(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }, []);

  const categories = [
    {
      id: "work",
      icon: Briefcase,
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
      title: t("stepWizard.categories.work.title") || "Ish va mehnat",
      subtitle:
        t("stepWizard.categories.work.subtitle") ||
        "Ish haqi, hujjat, bo'shatish",
    },
    {
      id: "consumer",
      icon: ShoppingBag,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      title: t("stepWizard.categories.consumer.title") || "Iste'molchi huquqi",
      subtitle:
        t("stepWizard.categories.consumer.subtitle") ||
        "Tovar, xizmat, pulni qaytarish",
    },
    {
      id: "housing",
      icon: Home,
      color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
      title: t("stepWizard.categories.housing.title") || "Uy-joy va mulk",
      subtitle:
        t("stepWizard.categories.housing.subtitle") ||
        "Ijara, mulk, ko'chirish",
    },
    {
      id: "utilities",
      icon: Lightbulb,
      color: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
      title: t("stepWizard.categories.utilities.title") || "Kommunal xizmatlar",
      subtitle:
        t("stepWizard.categories.utilities.subtitle") ||
        "Hisob, uzilish, xizmat sifati",
    },
    {
      id: "fines",
      icon: Car,
      color: "text-rose-500 bg-rose-500/10 border-rose-500/20",
      title: t("stepWizard.categories.fines.title") || "Jarimalar",
      subtitle:
        t("stepWizard.categories.fines.subtitle") ||
        "Qaror, bayonnoma, shikoyat",
    },
    {
      id: "family",
      icon: Users,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      title: t("stepWizard.categories.family.title") || "Oila huquqi",
      subtitle:
        t("stepWizard.categories.family.subtitle") ||
        "Aliment, nikoh, bola huquqi",
    },
  ];

  const evidenceList = [
    {
      id: "contract",
      label: t("stepWizard.evidences.contract") || "Shartnoma nusxasi",
    },
    {
      id: "receipt",
      label: t("stepWizard.evidences.receipt") || "To'lov cheki / Kvitansiya",
    },
    {
      id: "photo_video",
      label: t("stepWizard.evidences.photo_video") || "Foto va video dalillar",
    },
    {
      id: "messages",
      label: t("stepWizard.evidences.messages") || "Yozishmalar (SMS/Telegram)",
    },
    {
      id: "witness",
      label: t("stepWizard.evidences.witness") || "Guvohlar ko'rsatmasi",
    },
    {
      id: "previous_appeal",
      label:
        t("stepWizard.evidences.previous_appeal") || "Oldingi rasmiy murojaat",
    },
  ];

  const stepsList = [
    { id: 1, title: t("stepWizard.steps.direction") || "Yo'nalish" },
    { id: 2, title: t("stepWizard.steps.situation") || "Vaziyat" },
    { id: 3, title: t("stepWizard.steps.evidence") || "Dalillar" },
    { id: 4, title: t("stepWizard.steps.result") || "Natija" },
  ];

  const legalDataByCategory = useMemo(
    () => ({
      work: {
        laws: [
          {
            title: t("stepWizard.legalData.work.laws.0.title") || "",
            desc: t("stepWizard.legalData.work.laws.0.desc") || "",
          },
          {
            title: t("stepWizard.legalData.work.laws.1.title") || "",
            desc: t("stepWizard.legalData.work.laws.1.desc") || "",
          },
        ],
        actions: [
          t("stepWizard.legalData.work.actions.0") || "",
          t("stepWizard.legalData.work.actions.1") || "",
          t("stepWizard.legalData.work.actions.2") || "",
        ],
      },
      consumer: {
        laws: [
          {
            title: t("stepWizard.legalData.consumer.laws.0.title") || "",
            desc: t("stepWizard.legalData.consumer.laws.0.desc") || "",
          },
        ],
        actions: [
          t("stepWizard.legalData.consumer.actions.0") || "",
          t("stepWizard.legalData.consumer.actions.1") || "",
        ],
      },
      housing: {
        laws: [
          {
            title: t("stepWizard.legalData.housing.laws.0.title") || "",
            desc: t("stepWizard.legalData.housing.laws.0.desc") || "",
          },
          {
            title: t("stepWizard.legalData.housing.laws.1.title") || "",
            desc: t("stepWizard.legalData.housing.laws.1.desc") || "",
          },
        ],
        actions: [
          t("stepWizard.legalData.housing.actions.0") || "",
          t("stepWizard.legalData.housing.actions.1") || "",
          t("stepWizard.legalData.housing.actions.2") || "",
        ],
      },
      utilities: {
        laws: [
          {
            title: t("stepWizard.legalData.utilities.laws.0.title") || "",
            desc: t("stepWizard.legalData.utilities.laws.0.desc") || "",
          },
        ],
        actions: [
          t("stepWizard.legalData.utilities.actions.0") || "",
          t("stepWizard.legalData.utilities.actions.1") || "",
        ],
      },
      fines: {
        laws: [
          {
            title: t("stepWizard.legalData.fines.laws.0.title") || "",
            desc: t("stepWizard.legalData.fines.laws.0.desc") || "",
          },
        ],
        actions: [
          t("stepWizard.legalData.fines.actions.0") || "",
          t("stepWizard.legalData.fines.actions.1") || "",
        ],
      },
      family: {
        laws: [
          {
            title: t("stepWizard.legalData.family.laws.0.title") || "",
            desc: t("stepWizard.legalData.family.laws.0.desc") || "",
          },
        ],
        actions: [
          t("stepWizard.legalData.family.actions.0") || "",
          t("stepWizard.legalData.family.actions.1") || "",
        ],
      },
    }),
    [t],
  );

  const currentLegalInfo = useMemo(() => {
    return (
      legalDataByCategory[formData.category] || legalDataByCategory.housing
    );
  }, [formData.category, legalDataByCategory]);

  const generateAppealText = () => {
    const selectedEvidencesText = formData.evidences
      .map((id) => evidenceList.find((item) => item.id === id)?.label)
      .filter(Boolean);

    if (formData.additionalEvidence.trim()) {
      selectedEvidencesText.push(formData.additionalEvidence.trim());
    }

    const ilovalarFormatted = selectedEvidencesText.length
      ? selectedEvidencesText
          .map((item, idx) => `${idx + 1}. ${item}`)
          .join("\n")
      : `1. ${t("appealModal.noEvidences") || "Mavjud emas"}`;

    const legalNormsFormatted = currentLegalInfo.laws
      .map((law) => `${law.title}\n   (${law.desc})`)
      .join("\n\n");

    const header = t("appealTemplate.header") || "TUMAN/SHAHAR HOKIMLIGI";
    const from = t("appealTemplate.from") || "Kimdan";
    const address = t("appealTemplate.address") || "Manzil va aloqa";
    const title = t("appealTemplate.title") || "ARIZA";
    const bodyIntro = t("appealTemplate.bodyIntro") || "Men";
    const bodyText = t("appealTemplate.bodyText") || "sanasida";
    const bodyText2 =
      t("appealTemplate.bodyText2") ||
      "bilan bog'liq quyidagi holat yuzasidan murojaat qilaman";
    const legalBasis = t("appealTemplate.legalBasis") || "HUQUQIY ASOSLAR";
    const requestHeader =
      t("appealTemplate.requestHeader") || "SHU ASOSDA SO'RAYMAN";
    const request1 =
      t("appealTemplate.request1") ||
      "Bayon qilingan holatni tekshirishingizni";
    const request2 =
      t("appealTemplate.request2") || "Buzilgan huquqni tiklashni";
    const request3 =
      t("appealTemplate.request3") ||
      "Qabul qilingan qaror haqida javob yuborishingizni";
    const attachments = t("appealTemplate.attachments") || "ILOVALAR";
    const date = t("appealTemplate.date") || "Sana";
    const signature = t("appealTemplate.signature") || "Imzo";

    return `${header}

${from}: ${formData.fullName || "[Ism Familiyangiz]"}
${address}: [Telefon / Manzilingiz]

${title}

${bodyIntro}, ${formData.fullName || "[Ism Familiyangiz]"}, ${formData.date || "[sana]"} ${bodyText} ${formData.opponent || "[tashkilot/shaxs]"} ${bodyText2}:

${formData.description || "[Vaziyat batafsil bayoni]"}

${legalBasis}:
${legalNormsFormatted}

${requestHeader}:
1. ${request1};
2. ${request2};
3. ${request3}.

${attachments}:
${ilovalarFormatted}

${date}: ${currentDateFormatted}             ${signature}: __________`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generateAppealText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadWord = () => {
    const text = generateAppealText();
    const blob = new Blob(["\ufeff" + text], {
      type: "application/msword;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Murojaat_${formData.fullName || "ariza"}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPDF = () => {
    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Murojaat Matni</title>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; line-height: 1.6; color: #111; }
              pre { font-family: inherit; white-space: pre-wrap; word-wrap: break-word; font-size: 14px; }
            </style>
          </head>
          <body>
            <pre>${generateAppealText()}</pre>
            <script>
              window.onload = function() { window.print(); window.close(); }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setFormData({
      category: "housing",
      fullName: "",
      opponent: "",
      date: "",
      description: "",
      evidences: [],
      additionalEvidence: "",
    });
  };

  const handleEvidenceToggle = (id) => {
    setFormData((prev) => {
      const exists = prev.evidences.includes(id);
      return {
        ...prev,
        evidences: exists
          ? prev.evidences.filter((item) => item !== id)
          : [...prev.evidences, id],
      };
    });
  };

  return (
    <>
      <section
        id="stages"
        className="w-full py-12 px-4 md:px-12 lg:px-20 border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 relative overflow-hidden transition-colors duration-300"
      >
        {/* Glow orqa foni */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-emerald-500/10 to-indigo-500/20 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {t("stepWizard.headerLabel") || "AI Huquqiy Constructor"}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {t("stepWizard.headerTitle") || "Huquqiy Murojaat Yaratish"}
              </h2>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors w-fit px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 bg-white dark:bg-slate-900/60 shadow-sm"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {t("stepWizard.reset") || "Qayta boshlash"}
            </button>
          </div>

          {/* Main Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-xl dark:shadow-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl">
            {/* Sidebar: Progress & Navigation */}
            <div className="lg:col-span-3 bg-slate-100/70 dark:bg-slate-950/80 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                  <span>
                    {t("stepWizard.progress.step")}: {currentStep} / 4
                  </span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-extrabold">
                    {Math.round((currentStep / 4) * 100)}%
                  </span>
                </div>

                {/* Progress Bar mit Animatsiyalangan Liniya */}
                <div className="relative w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full mb-8 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-500 rounded-full relative"
                    initial={{ width: "25%" }}
                    animate={{ width: `${(currentStep / 4) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {/* Process Line bo'ylab harakatlanuvchi nur-animatsiya */}
                    {currentStep < 4 && (
                      <motion.div
                        className="absolute top-0 right-0 bottom-0 w-8 bg-white/60 blur-[2px]"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Vertical Process Steps */}
                <div className="relative space-y-6">
                  {/* Bosqichlar orqasidagi animatsiyali birlashtiruvchi liniya */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-300 dark:bg-slate-800 z-0">
                    <motion.div
                      className="w-full bg-gradient-to-b from-emerald-500 via-cyan-400 to-indigo-500"
                      initial={{ height: "0%" }}
                      animate={{
                        height: `${((currentStep - 1) / (stepsList.length - 1)) * 100}%`,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {stepsList.map((step) => {
                    const isActive = currentStep === step.id;
                    const isDone = currentStep > step.id;
                    const isUpcoming = currentStep < step.id;

                    return (
                      <div
                        key={step.id}
                        className="relative z-10 flex items-center space-x-3.5 group cursor-default"
                      >
                        {/* Circle Indicator with Animation */}
                        <div className="relative flex items-center justify-center">
                          {isActive && (
                            <motion.span
                              className="absolute -inset-1.5 rounded-full bg-cyan-500/30 dark:bg-cyan-400/20"
                              animate={{
                                scale: [1, 1.25, 1],
                                opacity: [0.7, 0.2, 0.7],
                              }}
                              transition={{ repeat: Infinity, duration: 1.8 }}
                            />
                          )}

                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-sm ${
                              isDone
                                ? "bg-emerald-500 text-white shadow-emerald-500/20"
                                : isActive
                                  ? "bg-gradient-to-tr from-cyan-500 to-emerald-400 text-slate-950 font-black shadow-lg shadow-cyan-500/30 scale-105"
                                  : "bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-400"
                            }`}
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                            ) : isActive ? (
                              <Zap className="w-4 h-4 text-slate-950 fill-slate-950 animate-pulse" />
                            ) : (
                              step.id
                            )}
                          </div>
                        </div>

                        {/* Title & Process State */}
                        <div className="flex flex-col">
                          <span
                            className={`text-sm font-bold transition-colors ${
                              isActive
                                ? "text-cyan-600 dark:text-cyan-400"
                                : isDone
                                  ? "text-slate-800 dark:text-slate-200"
                                  : "text-slate-400 dark:text-slate-500"
                            }`}
                          >
                            {step.title}
                          </span>
                          {isActive && (
                            <motion.span
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase"
                            >
                              {t("stepWizard.progress.inProgress")}
                            </motion.span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-9 p-6 md:p-10 flex flex-col justify-between min-h-[520px]">
              <AnimatePresence mode="wait">
                {/* STEP 1: Yo'nalish */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1.5">
                        {t("stepWizard.step1.title") ||
                          "Murojaat yo'nalishini tanlang"}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {t("stepWizard.step1.description") ||
                          "Muammoyingiz qaysi soha yoki sohaga oid ekanini belgilang"}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = formData.category === cat.id;

                        return (
                          <div
                            key={cat.id}
                            onClick={() =>
                              setFormData({ ...formData, category: cat.id })
                            }
                            className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 group ${
                              isSelected
                                ? "border-cyan-500 dark:border-cyan-400 bg-cyan-50/80 dark:bg-cyan-950/30 shadow-lg shadow-cyan-500/10 ring-2 ring-cyan-500/50"
                                : "border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div
                                className={`p-3 rounded-xl border ${cat.color} group-hover:scale-105 transition-transform`}
                              >
                                <Icon className="w-6 h-6" />
                              </div>
                              {isSelected && (
                                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                                {cat.title}
                              </h4>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                                {cat.subtitle}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Vaziyat */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1.5">
                        {t("stepWizard.step2.title") || "Vaziyat tafsilotlari"}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {t("stepWizard.step2.description") ||
                          "Arizani aniq shakllantirish uchun asosiy ma'lumotlarni kiriting"}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                            {t("stepWizard.step2.fullName") ||
                              "To'liq ism-sharifingiz"}
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                fullName: e.target.value,
                              })
                            }
                            className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 rounded-xl p-3 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors shadow-sm"
                            placeholder="Masalan: Tursunaliyev Ozodbek"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                            {t("stepWizard.step2.opponent") ||
                              "Qarshi tomon (Shaxs / Tashkilot)"}
                          </label>
                          <input
                            type="text"
                            value={formData.opponent}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                opponent: e.target.value,
                              })
                            }
                            className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 rounded-xl p-3 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors shadow-sm"
                            placeholder={
                              t("stepWizard.step2.opponentPlaceholder") ||
                              "Tashkilot yoki shaxs nomi"
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                          {t("stepWizard.step2.date") ||
                            "Voqea sodir bo'lgan sana"}
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="w-full sm:w-1/2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 rounded-xl p-3 text-sm text-slate-900 dark:text-slate-200 focus:outline-none transition-colors shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                          {t("stepWizard.step2.description") ||
                            "Vaziyatning qisqacha mazmuni"}
                        </label>
                        <textarea
                          rows={4}
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            })
                          }
                          className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 rounded-xl p-3 text-sm text-slate-900 dark:text-white focus:outline-none resize-none transition-colors shadow-sm"
                          placeholder={
                            t("stepWizard.step2.descriptionPlaceholder") ||
                            "Vaziyatni izchil va ketma-ketlikda tushuntirib bering..."
                          }
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Dalillar */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1.5">
                        {t("stepWizard.step3.title") || "Mavjud dalillar"}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {t("stepWizard.step3.description") ||
                          "Arizaga ilova qilinishi mumkin bo'lgan hujjat va tasdiqlarni tanlang"}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {evidenceList.map((item) => {
                        const isChecked = formData.evidences.includes(item.id);
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleEvidenceToggle(item.id)}
                            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center space-x-3 ${
                              isChecked
                                ? "border-cyan-500 dark:border-cyan-400 bg-cyan-50 dark:bg-cyan-950/30 text-slate-900 dark:text-white font-medium"
                                : "border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/40 hover:border-slate-300 text-slate-600 dark:text-slate-400"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                                isChecked
                                  ? "border-cyan-500 bg-cyan-500 text-white"
                                  : "border-slate-300 dark:border-slate-700"
                              }`}
                            >
                              {isChecked && (
                                <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                              )}
                            </div>
                            <span className="text-sm font-semibold">
                              {item.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t("stepWizard.step3.additional") ||
                          "Qo'shimcha dalil yoki izoh"}
                      </label>
                      <input
                        type="text"
                        value={formData.additionalEvidence}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            additionalEvidence: e.target.value,
                          })
                        }
                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 rounded-xl p-3 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors shadow-sm"
                        placeholder={
                          t("stepWizard.step3.additionalPlaceholder") ||
                          "Boshqa ma'lumotlar bo'lsa kiriting..."
                        }
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Natija */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                      <span className="inline-flex items-center text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                        <Home className="w-3.5 h-3.5 mr-1.5" />
                        {t("stepWizard.steps.direction")}:{" "}
                        {
                          categories.find((cat) => cat.id === formData.category)
                            ?.title
                        }
                      </span>

                      <span className="flex items-center text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                        {currentDateFormatted}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {t("stepWizard.step4.title") ||
                        "Huquqiy Tahlil va Tayyor Murojaat"}
                    </h3>

                    {/* Qonuniy asoslar */}
                    <div className="space-y-3 bg-slate-50 dark:bg-slate-950/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 text-cyan-500" />
                        {t("stepWizard.step4.legalNorms")}
                      </h4>
                      <div className="space-y-2">
                        {currentLegalInfo.laws.map((law, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80"
                          >
                            <p className="font-bold text-sm text-cyan-700 dark:text-cyan-300">
                              {law.title}
                            </p>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                              {law.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setShowReasoning(!showReasoning)}
                        className="inline-flex items-center text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline pt-1"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 mr-1 transform transition-transform ${
                            showReasoning ? "rotate-180" : ""
                          }`}
                        />
                        {t("stepWizard.step4.whyTheseLaws")}
                      </button>

                      {showReasoning && (
                        <p className="text-xs text-slate-600 dark:text-slate-400 p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mt-2">
                          Tanlangan <strong>{formData.category}</strong> sohasi
                          va kiritgan ma'lumotlaringiz tahlil qilinib, O'zR
                          qonunchiligidagi tegishli normalar taqdim etildi.
                        </p>
                      )}
                    </div>

                    {/* Harakat rejasi */}
                    <div className="space-y-3 bg-slate-50 dark:bg-slate-950/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                        {t("stepWizard.step4.actionPlan")}
                      </h4>
                      <ol className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {currentLegalInfo.actions.map((act, i) => (
                          <li key={i} className="flex items-start space-x-2.5">
                            <span className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold px-2 py-0.5 rounded text-xs border border-cyan-500/20">
                              {i + 1}
                            </span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Preview Text */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                        {t("stepWizard.step4.readyAppeal")}
                      </h4>
                      <div className="bg-slate-100 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-300 max-h-36 overflow-y-auto leading-relaxed whitespace-pre-wrap">
                        {generateAppealText()}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 mt-6">
                <Button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl px-5 disabled:opacity-30"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t("stepWizard.navigation.back") || "Orqaga"}
                </Button>

                <div className="flex items-center gap-3 ml-auto">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    variant="outline"
                    className="border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 text-xs sm:text-sm py-5 rounded-xl"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    {t("stepWizard.navigation.readyText") || "Matnni Ko'rish"}
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      onClick={handleNext}
                      className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:opacity-95 text-white font-bold px-6 py-5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all"
                    >
                      <span>
                        {t("stepWizard.navigation.continue") || "Davom etish"}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-600 hover:opacity-95 text-white font-bold px-6 py-5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      {t("stepWizard.navigation.viewAndCopy") ||
                        "Arizani Olish"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 flex flex-col max-h-[90vh]"
            >
              <div className="p-6 pb-3 flex items-start justify-between border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t("appealModal.badge") || "TAYYOR NATIJA"}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {t("appealModal.title") || "TAYYOR NATIJA"}
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex-1 overflow-y-auto">
                <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed select-text shadow-inner">
                  {generateAppealText()}
                </div>
              </div>

              <div className="p-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3 bg-slate-50/50 dark:bg-slate-950/40">
                <Button
                  onClick={handleCopyText}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-5 py-5 rounded-xl shadow transition-all flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>
                    {copied
                      ? t("appealModal.copied") || "Nusxalandi!"
                      : t("appealModal.copy") || "Nusxa olish"}
                  </span>
                </Button>
                <Button
                  onClick={handleDownloadWord}
                  variant="outline"
                  className="border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs sm:text-sm px-4 py-5 rounded-xl transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{t("appealModal.wordBtn") || "Word (.doc)"}</span>
                </Button>
                <Button
                  onClick={handleDownloadPDF}
                  variant="outline"
                  className="border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs sm:text-sm px-4 py-5 rounded-xl transition-all flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>{t("appealModal.pdfBtn") || "PDF Yuklash"}</span>
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
