import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { translations } from "../constants/i18n";

export const useI18n = () => {
  const { lang, setLang } = useContext(AppContext);

  const t = (key) => {
    // Kalitni nuqtalar bo'yicha bo'lib, ichma-ich obyektlar ichidan qidiradi
    const value = key
      .split(".")
      .reduce((obj, k) => obj?.[k], translations[lang]);

    // Agar qiymat topilsa qaytaradi, topilmasa original key'ning o'zini qaytaradi
    return value || key;
  };

  return { t, lang, setLang };
};
