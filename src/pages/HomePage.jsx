import React, { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  ShoppingBag,
  Home,
  Lightbulb,
  Car,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "../hooks/useI18n";
import { categoriesData } from "../constants/categories";
import StepWizard from "./StepsPage";

function HomePage() {
  const { t } = useI18n();

  const savedAppeals = [];

  // Wizard Dynamic State
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "housing",
    fullName: "John Doe",
    opponent: "asdfasdf",
    date: "2026-08-04",
    description: "asdfasdfasdfasdfasdfasdfas",
    evidences: ["previous_appeal"],
    additionalEvidence: "asfasdfasdf",
  });

  const [showReasoning, setShowReasoning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Hero Data
  const features = Array.isArray(t("hero.features")) ? t("hero.features") : [];

  return (
    <div className="w-full bg-background text-foreground transition-colors duration-300 relative">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <p className="text-xs md:text-sm tracking-widest font-bold uppercase text-teal-600 dark:text-cyan-400">
              {t("hero.kicker")}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              <span className="text-foreground">{t("hero.titlePart1")}</span>{" "}
              <br />
              <span className="text-teal-600 dark:text-cyan-400">
                {t("hero.titlePart2")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl font-normal leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#stages"
                size="lg"
                className="bg-amber-400 h-10 text-center hover:bg-amber-500 text-slate-950 font-bold inline-flex items-center p-6 text-base rounded-lg shadow-md transition-all duration-200"
              >
                {t("hero.btnPrimary")} <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href="#steps"
                variant="outline"
                size="lg"
                className="h-10 border-slate-300 dark:border-slate-800 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground font-semibold inline-flex items-center p-6 text-base rounded-lg transition-all duration-200"
              >
                {t("hero.btnSecondary")}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800/80 shadow-2xl rounded-2xl p-2 backdrop-blur-sm transform -rotate-2 sm:-rotate-3 hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {t("hero.badge")}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-snug">
                  {t("hero.cardTitle")}
                </h2>

                <ul className="space-y-3 text-muted-foreground font-medium text-sm sm:text-base">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 2. STEP WIZARD SECTION */}
      <StepWizard />

      <div className="w-full max-w-6xl mx-auto space-y-16 px-4 py-8">
        {/* 1-BO‘LIM: 01-04 QADAMLAR PANELI */}
        <section id="steps">
          <div className="mb-10 ">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-teal-400">
              {t("stepsText.title") || "QANDAY ISHLAYDI?"}
            </span>
            <h2 className="mt-1 text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              {t("stepsText.desc") ||
                "Murakkab yo‘lni to‘rtta sodda qadamga ajratdik"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {" "}
            {t("stepsOverview").map((step) => (
              <div
                key={step.id}
                className="
        p-6 rounded-2xl
        border border-slate-200
        bg-white
        shadow-sm
        transition-all duration-200
        hover:border-slate-300

        dark:bg-slate-900/60
        dark:border-slate-800
        dark:hover:border-slate-700
      "
              >
                <span className="text-2xl font-black text-amber-500 font-mono">
                  {step.id}
                </span>

                <h4
                  className="
          mt-3
          text-lg font-bold
          text-slate-900
          dark:text-slate-100
        "
                >
                  {step.title}
                </h4>

                <p
                  className="
          mt-1
          text-sm
          text-slate-600
          dark:text-slate-400
        "
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2-BO‘LIM: KO‘P UCHRAYDIGAN VAZIYATLAR (HUQUQIY BAZA) */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-teal-400 dark:text-teal-400 text-slate-500 tracking-wider uppercase">
                {t("knowledgeBase.kicker")}
              </span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 mt-1 tracking-tight">
                {t("knowledgeBase.title")}
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t("knowledgeBase.sourceNote")}
            </p>
          </div>

          {/* Kartochkalar to'plami */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesData.map((cat) => {
              const articlesList = cat.laws.map((l) => l.article).join(", ");
              const sampleText = cat.laws[0]?.text || "";
              const sampleSource = cat.laws[0]?.source || "https://lex.uz/";

              return (
                <div
                  key={cat.id}
                  className="flex flex-col justify-between p-6 rounded-2xl border transition-all duration-200
          bg-white border-slate-200 shadow-xs hover:shadow-md
          dark:bg-slate-900/40 dark:border-slate-800/80 dark:hover:border-slate-700 dark:shadow-none"
                >
                  <div>
                    {/* Kategoriya nishoni (Badge) */}
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
              bg-slate-100 border border-slate-200/60 text-slate-800
              dark:bg-slate-800/60 dark:border-transparent dark:text-teal-400"
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.title}</span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-slate-100">
                      {t("knowledgeBase.articlesCount")}
                    </h3>

                    <p className="mt-3 text-xs font-medium text-slate-400 dark:text-slate-400">
                      {articlesList}
                    </p>

                    <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                      {sampleText}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-transparent dark:border-slate-800/60">
                    <a
                      href={sampleSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold inline-flex items-center gap-1
                text-slate-900 underline underline-offset-4 hover:text-blue-600
                dark:text-teal-400 dark:no-underline dark:hover:text-teal-300"
                    >
                      {t("knowledgeBase.checkOnLexUz")} ↗
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3-BO‘LIM: MUROJAATLARIM */}
        <section className="space-y-4 pt-6">
          <div className="flex justify-between items-end border-b border-slate-200 dark:border-slate-800/80 pb-4">
            <div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                {t("myAppeals.kicker")}
              </span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 mt-1 tracking-tight">
                {t("myAppeals.title")}
              </h2>
            </div>

            {savedAppeals.length > 0 && (
              <button
                onClick={onClearAppeals}
                className="text-xs font-bold text-red-700 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 underline underline-offset-2"
              >
                {t("myAppeals.clearAll")}
              </button>
            )}
          </div>

          {/* Murojaatlar bo'sh bo'lganda ko'rinadigan ramka */}
          {savedAppeals.length === 0 ? (
            <div
              className="p-10 text-center rounded-2xl border border-dashed
      border-slate-300 bg-slate-50/50
      dark:border-slate-800 dark:bg-slate-950/30"
            >
              <p className="text-sm font-bold text-slate-800 dark:text-slate-300">
                {t("myAppeals.emptyTitle")}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                {t("myAppeals.emptyDesc")}
              </p>
            </div>
          ) : (
            /* Saqlangan murojaatlar mavjud bo'lsa ro'yxat chiqariladi */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedAppeals.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border
            border-slate-200 bg-white shadow-xs
            dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
                >
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>{item.date}</span>
                    <span className="font-bold text-slate-700 dark:text-teal-400">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-200">
                    {item.opponent || "Murojaat"}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default HomePage;
