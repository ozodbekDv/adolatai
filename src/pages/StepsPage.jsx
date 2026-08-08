import React, { useState } from "react";
import {
  Briefcase,
  ShoppingBag,
  Home,
  Lightbulb,
  Car,
  Users,
  RotateCcw,
  CheckCircle2,
  Circle,
  ChevronDown,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "../hooks/useI18n";

export default function StepWizard() {
  const { t } = useI18n();

  // Wizard Dynamic State
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
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

  // Step 1 Categories
  const categories = [
    {
      id: "work",
      icon: Briefcase,
      color:
        "text-amber-600 bg-amber-500/10 dark:text-amber-400 dark:bg-amber-400/10",
      title: t("stepWizard.categories.work.title") || "Ish va mehnat",
      subtitle:
        t("stepWizard.categories.work.subtitle") ||
        "Ish haqi, hujjat, bo'shatish",
    },
    {
      id: "consumer",
      icon: ShoppingBag,
      color:
        "text-blue-600 bg-blue-500/10 dark:text-blue-400 dark:bg-blue-400/10",
      title: t("stepWizard.categories.consumer.title") || "Iste'molchi huquqi",
      subtitle:
        t("stepWizard.categories.consumer.subtitle") ||
        "Tovar, xizmat, pulni qaytarish",
    },
    {
      id: "housing",
      icon: Home,
      color:
        "text-orange-600 bg-orange-500/10 dark:text-orange-400 dark:bg-orange-400/10",
      title: t("stepWizard.categories.housing.title") || "Uy-joy va mulk",
      subtitle:
        t("stepWizard.categories.housing.subtitle") ||
        "Ijara, mulk, ko'chirish",
    },
    {
      id: "utilities",
      icon: Lightbulb,
      color:
        "text-yellow-600 bg-yellow-500/10 dark:text-yellow-400 dark:bg-yellow-400/10",
      title: t("stepWizard.categories.utilities.title") || "Kommunal xizmatlar",
      subtitle:
        t("stepWizard.categories.utilities.subtitle") ||
        "Hisob, uzilish, xizmat sifati",
    },
    {
      id: "fines",
      icon: Car,
      color: "text-red-600 bg-red-500/10 dark:text-red-400 dark:bg-red-400/10",
      title: t("stepWizard.categories.fines.title") || "Jarimalar",
      subtitle:
        t("stepWizard.categories.fines.subtitle") ||
        "Qaror, bayonnoma, shikoyat",
    },
    {
      id: "family",
      icon: Users,
      color:
        "text-emerald-600 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-400/10",
      title: t("stepWizard.categories.family.title") || "Oila huquqi",
      subtitle:
        t("stepWizard.categories.family.subtitle") ||
        "Aliment, nikoh, bola huquqi",
    },
  ];

  // Step 3 Evidences
  const evidenceList = [
    {
      id: "contract",
      label: t("stepWizard.evidences.contract"),
    },
    {
      id: "receipt",
      label: t("stepWizard.evidences.receipt"),
    },
    {
      id: "photo_video",
      label: t("stepWizard.evidences.photo_video"),
    },
    {
      id: "messages",
      label: t("stepWizard.evidences.messages"),
    },
    {
      id: "witness",
      label: t("stepWizard.evidences.witness"),
    },
    {
      id: "previous_appeal",
      label: t("stepWizard.evidences.previous_appeal"),
    },
  ];

  const stepsList = [
    { id: 1, title: t("stepWizard.steps.direction") },
    { id: 2, title: t("stepWizard.steps.situation") },
    { id: 3, title: t("stepWizard.steps.evidence") },
    { id: 4, title: t("stepWizard.steps.result") },
  ];

  // Dinamik tayyorlanadigan murojaat matni
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
      : "1. Mavjud emas";

    return `TUMAN/SHAHAR HOKIMLIGI YOKI FUQAROLIK ISHLARI BO‘YICHA SUDGA

Kimdan: ${formData.fullName || "John Doe"}
Manzil va aloqa: [kiriting]

ARIZA

Men, ${formData.fullName || "John Doe"}, ${formData.date || "[sana]"} sanasida ${formData.opponent || "[tashkilot/shaxs]"} bilan bog‘liq quyidagi holat yuzasidan murojaat qilaman:

${formData.description || "[vaziyat matni]"}

HUQUQIY ASOS:
11-modda — Uy-joyga oid buzilgan huquqlar qonunchilikda nazarda tutilgan tartibda himoya qilinadi.
86-modda — Turar joydan haq evaziga foydalanish arenda shartnomasi bilan rasmiylashtiriladi; taraflarning huquq va majburiyatlari shu hujjatda qayd etilishi muhim.
87-modda — Turar joyni arendaga berish qonundagi talablar va mulkdorning vakolati asosida amalga oshiriladi.

SHU ASOSDA SO‘RAYMAN:
1. Bayon qilingan holatni vakolatingiz doirasida tekshirishingizni;
2. Buzilgan huquqni tiklash va qonuniy choralar ko‘rishingizni;
3. Qabul qilingan qaror va uning asoslari haqida menga yozma javob yuborishingizni.

ILOVALAR:
${ilovalarFormatted}

Sana: [kiriting]                 Imzo: __________

Eslatma: faktlar, organ vakolati va talablarni yuborishdan oldin tekshiring.`;
  };

  // Matnni buferga nusxalash
  const handleCopyText = () => {
    navigator.clipboard.writeText(generateAppealText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Word (.doc) ko'rinishida yuklash
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

  // PDF ko'rinishida yuklash (printer orqali)
  const handleDownloadPDF = () => {
    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Murojaat Matni</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; color: #111; }
              pre { font-family: inherit; white-space: pre-wrap; word-wrap: break-word; }
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

  // Handlers
  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setFormData({
      category: "",
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
        className="w-full py-16 px-6 md:px-12 lg:px-24 border-t border-slate-200 dark:border-slate-800/60"
      >
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header & Reset */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs md:text-sm font-bold tracking-widest text-teal-600 dark:text-cyan-400 uppercase mb-1">
                {t("stepWizard.headerLabel")}
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                {t("stepWizard.headerTitle")}
              </h2>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors w-fit"
            >
              <RotateCcw className="w-4 h-4 mr-1.5" />
              {t("stepWizard.reset")}
            </button>
          </div>

          {/* Wizard Card Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-[#0b1723] text-slate-100">
            {/* Left Column: Progress Sidebar */}
            <div className="lg:col-span-3 bg-[#44b0ba] p-6 md:p-8 flex flex-col justify-between text-slate-950">
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-3">
                  <span>
                    {t(`stepWizard.step${currentStep}.unit`)}-{" "}
                    {t(`stepWizard.progress.step`)} / 4
                  </span>
                  <span className="opacity-80">
                    {currentStep === 4
                      ? t("stepWizard.progress.ready")
                      : `${4 - currentStep} ${t("stepWizard.progress.remaining")}`}
                  </span>
                </div>

                <div className="w-full h-1 bg-slate-950/20 rounded-full mb-8 overflow-hidden">
                  <div
                    className="h-full bg-amber-400 transition-all duration-300"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  />
                </div>

                <nav className="space-y-4">
                  {stepsList.map((step) => {
                    const isActive = currentStep === step.id;
                    const isDone = currentStep > step.id;

                    return (
                      <div
                        key={step.id}
                        className={`flex items-center space-x-3 text-sm md:text-base font-semibold transition-colors ${
                          isActive
                            ? "text-slate-950 font-bold"
                            : isDone
                              ? "text-slate-900"
                              : "text-slate-950/50"
                        }`}
                      >
                        {isActive ? (
                          <span className="h-3 w-3 rounded-full bg-amber-400 ring-4 ring-amber-400/30" />
                        ) : isDone ? (
                          <span className="h-3 w-3 rounded-full bg-amber-400" />
                        ) : (
                          <Circle className="h-4 w-4 stroke-[2.5]" />
                        )}
                        <span>{step.title}</span>
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Right Column: Dynamic Steps Content */}
            <div className="lg:col-span-9 p-6 md:p-10 bg-[#0b1723] flex flex-col justify-between min-h-[500px]">
              {/* STEP 1: Yo'nalish */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                      {t("stepWizard.step1.title")}
                    </h3>

                    <p className="text-slate-400 text-sm sm:text-base">
                      {t("stepWizard.step1.description")}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categories.map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = formData.category === cat.id;

                      return (
                        <div
                          key={cat.id}
                          onClick={() =>
                            setFormData({ ...formData, category: cat.id })
                          }
                          className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center space-x-4 ${
                            isSelected
                              ? "border-cyan-500 bg-slate-800/80 shadow-lg ring-1 ring-cyan-500"
                              : "border-slate-800/80 bg-slate-900/40 hover:bg-slate-800/50 hover:border-slate-700"
                          }`}
                        >
                          <div className={`p-3 rounded-lg ${cat.color}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-base">
                              {cat.title}
                            </h4>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {cat.subtitle}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Vaziyat */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                      {t("stepWizard.step2.title")}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm">
                      {t("stepWizard.step2.description")}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t("stepWizard.step2.fullName")}
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
                          className="w-full bg-[#070f17] border border-slate-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t("stepWizard.step2.opponent")}
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
                          className="w-full bg-[#070f17] border border-slate-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                          placeholder={
                            t("stepWizard.step2.opponentPlaceholder") ||
                            "Tashkilot nomi yoki shaxs"
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t("stepWizard.step2.date")}
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full sm:w-1/2 bg-[#070f17] border border-slate-800 rounded-lg p-3 text-sm text-slate-300 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t("stepWizard.step2.description")}
                      </label>
                      <textarea
                        rows={5}
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        className="w-full bg-[#070f17] border border-slate-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-500 resize-none"
                        placeholder={
                          t("stepWizard.step2.descriptionPlaceholder") ||
                          "Vaziyatni qisqacha tushuntirib bering..."
                        }
                      />
                      <p className="text-[11px] text-slate-500 mt-1">
                        {t("stepWizard.step2.minimum")}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Dalillar */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                      {t("stepWizard.step3.title")}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm">
                      {t("stepWizard.step3.description")}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {evidenceList.map((item) => {
                      const isChecked = formData.evidences.includes(item.id);
                      return (
                        <div
                          key={item.id}
                          onClick={() => handleEvidenceToggle(item.id)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center space-x-3 ${
                            isChecked
                              ? "border-cyan-500 bg-slate-800/80"
                              : "border-slate-800/80 bg-slate-900/40 hover:bg-slate-800/40"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded border flex items-center justify-center ${
                              isChecked
                                ? "border-cyan-500 bg-cyan-500 text-slate-950"
                                : "border-slate-600"
                            }`}
                          >
                            {isChecked && (
                              <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-slate-200">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t("stepWizard.step3.additional")}
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
                      className="w-full bg-[#070f17] border border-slate-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                      placeholder={
                        t("stepWizard.step3.additionalPlaceholder") ||
                        "Boshqa ma'lumotlar bo'lsa kiriting..."
                      }
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Natija */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="inline-flex items-center text-xs font-bold text-orange-400 bg-orange-400/10 px-2.5 py-1 rounded-md">
                      <Home className="w-3.5 h-3.5 mr-1.5" />
                      {categories.find((cat) => cat.id === formData.category)
                        ?.title || "Noma'lum"}
                    </span>
                    {/*========================== BU yerda dinamik qilinishi kerak======================= */}
                    <span className="text-xs text-slate-400">
                      {t("stepWizard.step4.checkedAt")}: 2026-08-08
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white">
                    {t("stepWizard.step4.title")}
                  </h3>

                  {/* Qonun normasi */}
                  <div className="space-y-3 bg-[#070f17] p-4 rounded-xl border border-slate-800">
                    <h4 className="text-xs font-bold uppercase text-slate-400">
                      {t("stepWizard.step4.legalNorms")}
                    </h4>
                    <div className="space-y-2 text-sm">
                      {/*========================== BU yerda dinamik qilinishi kerak======================= */}
                      <div className="p-3 rounded bg-slate-900/80 border border-slate-800">
                        <p className="font-bold text-slate-200">
                          11-modda — Uy-joy huquqlarini himoya qilish
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          Uy-joyga oid buzilgan huquqlar qonunchilikda nazarda
                          tutilgan tartibda himoya qilinadi.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowReasoning(!showReasoning)}
                      className="inline-flex items-center text-xs text-cyan-400 pt-1"
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 mr-1 transform transition-transform ${showReasoning ? "rotate-180" : ""}`}
                      />
                      {t("stepWizard.step4.whyTheseLaws")}
                    </button>
                  </div>

                  {/*========================== BU yerda dinamik qilinishi kerak======================= */}
                  {/* Harakat rejasi */}
                  <div className="space-y-3 bg-[#070f17] p-4 rounded-xl border border-slate-800">
                    <h4 className="text-xs font-bold uppercase text-slate-400">
                      {t("stepWizard.step4.actionPlan")}
                    </h4>
                    <ol className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start space-x-2">
                        <span className="bg-cyan-500/20 text-cyan-400 font-bold px-2 py-0.5 rounded text-xs">
                          1
                        </span>
                        <span>
                          {formData.date || "Voqea sanasi"} holati bo'yicha{" "}
                          {formData.opponent || "qarshi tomonga"} yozma ariza
                          yuboring.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="bg-cyan-500/20 text-cyan-400 font-bold px-2 py-0.5 rounded text-xs">
                          2
                        </span>
                        <span>
                          11-moddaga tayangan holda talabingizni aniq yozing.
                        </span>
                      </li>
                    </ol>
                  </div>

                  {/* Tayyor murojaat matni preview */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase text-slate-400">
                      {t("stepWizard.navigation.readyText")}
                    </h4>
                    <div className="bg-[#070f17] p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 max-h-36 overflow-y-auto leading-relaxed whitespace-pre-wrap">
                      {generateAppealText()}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Navigation */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800/80 mt-6">
                <Button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 rounded-lg px-5 disabled:opacity-30"
                >
                  ← Orqaga
                </Button>

                <div className="flex items-center gap-3 ml-auto">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    variant="outline"
                    className="border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm py-5 rounded-lg"
                  >
                    {t("stepWizard.navigation.readyText")}
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      onClick={handleNext}
                      className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-5 rounded-lg shadow-md transition-all"
                    >
                      {t("stepWizard.navigation.continue")} →
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-5 rounded-lg shadow-md transition-all"
                    >
                      {t("stepWizard.navigation.viewAndCopy")}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL COMPONENT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0e1a26] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-6 pb-2 flex items-start justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-widest text-teal-400 uppercase mb-1">
                  {t("stepWizard.generatedResult")}
                </p>
                <h3 className="text-2xl font-extrabold text-white">
                  {t("stepWizard.appealText")}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {t("stepWizard.appealTextDescription")}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - Scrollable Text */}
            <div className="p-6 py-2 flex-1 overflow-y-auto">
              <div className="p-4 bg-[#070f17] rounded-xl border border-slate-800 text-xs sm:text-sm font-sans text-slate-200 whitespace-pre-wrap leading-relaxed select-text shadow-inner">
                {generateAppealText()}
              </div>
            </div>

            {/* Modal Footer - Buttons */}
            <div className="p-6 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
              <Button
                onClick={handleCopyText}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm px-5 py-5 rounded-lg shadow transition-all"
              >
                {copied ? t("stepWizard.copied") : t("stepWizard.copyText")}
              </Button>
              <Button
                onClick={handleDownloadWord}
                variant="outline"
                className="border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm px-4 py-5 rounded-lg transition-all"
              >
                Word (.doc)
              </Button>
              <Button
                onClick={handleDownloadPDF}
                variant="outline"
                className="border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm px-4 py-5 rounded-lg transition-all"
              >
                PDF yuklash
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
