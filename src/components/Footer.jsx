import React from "react";
import { Lock, Check } from "lucide-react";
import { useI18n } from "../hooks/useI18n";

function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FAF8F5] dark:bg-[#071923] text-stone-800 dark:text-stone-200 border-t border-amber-200/50 dark:border-stone-800/80 transition-colors duration-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Chap tomon: Sarlavha, Ogohlantirish va Mualliflik huquqi */}
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base sm:text-lg tracking-tight">
            ADOLAT — {t("footer.subtitle") || "Huquqiy yordamchi"}
          </h3>

          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
            {t("footer.disclaimer") ||
              "Umumiy yo‘l-yo‘riq beradi, advokat xulosasi o‘rnini bosmaydi. Qonunlar o‘zgarishi mumkin — murojaatdan oldin rasmiy manbani tekshiring."}
          </p>

          <p className="text-xs text-stone-500 dark:text-stone-500 font-medium pt-1">
            © {currentYear} ADOLAT
          </p>
        </div>

        {/* O'ng (yoki pastki) tomon: Maxfiylik va Ishonchlilik belgisi (Badge) */}
        <div className="shrink-0">
          <div className="inline-flex items-center gap-3 bg-amber-100/60 dark:bg-stone-900/80 border border-amber-300/60 dark:border-stone-700/60 rounded-full px-4 py-2 text-xs font-semibold shadow-sm transition-all">
            <span className="flex items-center gap-1.5 text-stone-800 dark:text-stone-200">
              <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
              {t("footer.privacyNotice") ||
                "Ma’lumot faqat qurilmada saqlanadi"}
            </span>

            <span className="text-stone-300 dark:text-stone-700">|</span>

            <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
              <Check className="w-3.5 h-3.5" />
              {t("footer.officialSources") || "Rasmiy manbalar asosida"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
