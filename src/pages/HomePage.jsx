import React, { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  FileText,
  ExternalLink,
  Trash2,
  CheckCircle2,
  ShieldCheck,
  Scale,
  Gavel,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "../hooks/useI18n";
import { categoriesData } from "../constants/categories";
import StepWizard from "./StepsPage";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const hoverScale = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

function HomePage() {
  const { t } = useI18n();
  const savedAppeals = [];

  // Mouse Move Dynamic Background Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const features = Array.isArray(t("hero.features")) ? t("hero.features") : [];
  const stepsOverview = Array.isArray(t("stepsOverview"))
    ? t("stepsOverview")
    : [];

  const onClearAppeals = () => {};

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-full text-foreground transition-colors duration-300 relative overflow-hidden group/page"
    >
      {/* Dynamic Cursor Light Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover/page:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}px ${y}px, rgba(20, 184, 166, 0.06), transparent 80%)`,
          ),
        }}
      />

      {/* Background Creative Ambient Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-teal-500/15 via-indigo-500/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full animate-pulse" />
      <div className="absolute top-[35%] right-0 w-[500px] h-[500px] bg-amber-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-[70%] -left-20 w-[600px] h-[600px] bg-teal-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 rounded-full px-4 py-1.5 w-fit backdrop-blur-md shadow-inner"
            >
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 animate-pulse" />
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                {t("hero.kicker")}
              </p>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
            >
              <span className="text-foreground">{t("hero.titlePart1")}</span>{" "}
              <br />
              <span className="bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
                {t("hero.titlePart2")}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-muted-foreground max-w-xl font-normal leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#stages"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-[length:200%_auto] hover:bg-right rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <span>{t("hero.btnPrimary")}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              <a
                href="#steps"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-foreground border border-slate-200 dark:border-slate-800 rounded-xl bg-background/50 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-sm"
              >
                {t("hero.btnSecondary")}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="w-full max-w-md bg-white/70 dark:bg-slate-900/70 border-slate-200/80 dark:border-slate-800/80 shadow-2xl rounded-3xl p-3 backdrop-blur-xl relative group overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-amber-500 rounded-3xl opacity-20 group-hover:opacity-50 transition duration-500 blur-md -z-10" />
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {t("hero.badge")}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-foreground leading-snug">
                  {t("hero.cardTitle")}
                </h2>

                <ul className="space-y-3.5 text-muted-foreground font-medium text-sm sm:text-base">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 2. STEP WIZARD SECTION */}
      <StepWizard />

      <div className="w-full max-w-7xl mx-auto space-y-28 px-6 md:px-12 py-16">
        {/* 1-BO‘LIM: 01-04 QADAMLAR PANELI */}
        <section id="steps" className="space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              {t("stepsText.title") || "QANDAY ISHLAYDI?"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              {t("stepsText.desc") ||
                "Murakkab yo‘lni to‘rtta sodda qadamga ajratdik"}
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {stepsOverview.map((step) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md shadow-sm hover:shadow-2xl dark:hover:border-teal-500/40 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-500/10 via-amber-500/5 to-transparent rounded-bl-full group-hover:scale-125 transition-transform duration-500" />
                <span className="text-4xl font-black text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text font-mono">
                  {step.id}
                </span>

                <h4 className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                  {step.title}
                </h4>

                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 2-BO‘LIM: KO‘P UCHRAYDIGAN VAZIYATLAR (HUQUQIY BAZA) */}
        <section id="knowledge" className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-1">
                <Gavel className="w-4 h-4" />
                <span>{t("knowledgeBase.kicker")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                {t("knowledgeBase.title")}
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/50 px-3 py-1.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-teal-500" />
              {t("knowledgeBase.sourceNote")}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {categoriesData.map((cat) => {
              const articlesList = cat.laws.map((l) => l.article).join(", ");
              const sampleText = cat.laws[0]?.text || "";
              const sampleSource = cat.laws[0]?.source || "https://lex.uz/";

              return (
                <motion.div
                  key={cat.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="flex flex-col justify-between p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Subtle Top Right Radial Light on Hover */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/25 transition-all duration-500" />

                  <div className="space-y-4 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 shadow-sm">
                      <span className="text-sm">{cat.icon}</span>
                      <span>{cat.title}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {t("knowledgeBase.articlesCount")}
                    </h3>

                    <p className="text-xs font-semibold text-slate-400 font-mono tracking-tight">
                      {articlesList}
                    </p>

                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                      {sampleText}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 relative z-10">
                    <a
                      href={sampleSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold inline-flex items-center gap-1.5 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 group/link transition-colors"
                    >
                      <span>{t("knowledgeBase.checkOnLexUz")}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* 3-BO‘LIM: MUROJAATLARIM */}
        <section id="cases" className="space-y-8 pt-4">
          <div className="flex justify-between items-end border-b border-slate-200/80 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                {t("myAppeals.kicker")}
              </span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 mt-1 tracking-tight">
                {t("myAppeals.title")}
              </h2>
            </div>

            {savedAppeals.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClearAppeals}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 bg-red-500/10 px-3 py-1.5 rounded-xl border border-red-500/20 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{t("myAppeals.clearAll")}</span>
              </motion.button>
            )}
          </div>

          {/* Murojaatlar bo'sh bo'lganda */}
          {savedAppeals.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-gradient-to-b from-slate-50/50 to-slate-100/30 dark:from-slate-900/30 dark:to-slate-900/10 space-y-4 relative overflow-hidden backdrop-blur-md"
            >
              {/* Background Ambient Aura for Empty State */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-amber-500/5 pointer-events-none" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-14 h-14 bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-800/60 text-slate-400 rounded-2xl flex items-center justify-center mx-auto shadow-inner border border-slate-300/50 dark:border-slate-700/50"
              >
                <FileText className="w-7 h-7 text-slate-500 dark:text-slate-400" />
              </motion.div>

              <div className="space-y-1">
                <p className="text-base font-bold text-slate-800 dark:text-slate-200">
                  {t("myAppeals.emptyTitle")}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                  {t("myAppeals.emptyDesc")}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {savedAppeals.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="p-6 rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900/80 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 rounded-l-2xl group-hover:w-1.5 transition-all" />
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span className="font-mono">{item.date}</span>
                    <span className="font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-md border border-teal-500/20">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="mt-3 text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {item.opponent || "Murojaat"}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      </div>
    </div>
  );
}

export default HomePage;
