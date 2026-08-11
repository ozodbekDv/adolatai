import React, { useState, useContext, useRef, useEffect } from "react";

import {
  Sparkles,
  Send,
  Bot,
  User,
  ShieldCheck,
  RotateCcw,
  Zap,
  ArrowRight,
  Loader2,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

import toast, { Toaster } from "react-hot-toast";

import { legalCategories } from "../constants/content";
import { AppContext } from "../context/AppContext";
import { useI18n } from "../hooks/useI18n";

// ======================================================
// BACKEND API
// ======================================================

// MUHIM:
// Backend manzili oxirida /api/chat bor.
// Shuning uchun fetch() ichida yana /api/chat yozilmaydi.
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/chat";

// ======================================================
// ASSISTANT PAGE
// ======================================================

export const AssistantPage = () => {
  // ====================================================
  // STATES
  // ====================================================

  const [language, setLanguage] = useState("uz-lat");

  const [isChatStarted, setIsChatStarted] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [messages, setMessages] = useState([]);

  const [inputMessage, setInputMessage] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  const [isCompleted, setIsCompleted] = useState(false);

  // ====================================================
  // CONTEXT
  // ====================================================

  const { setCases } = useContext(AppContext);

  const chatEndRef = useRef(null);

  const { t } = useI18n();

  // ====================================================
  // TRANSLATION
  // ====================================================

  const translate = (key, fallback) => {
    try {
      if (typeof t === "function") {
        const result = t(key);

        if (result && result !== key && typeof result === "string") {
          return result;
        }
      }
    } catch (error) {
      console.warn("Translation error:", error);
    }

    return fallback;
  };

  // ====================================================
  // SANITIZE AI TEXT (remove markdown like ###, **, [link](url), bullets)
  // ====================================================

  const sanitizeMessage = (text) => {
    if (!text || typeof text !== "string") return text;

    let s = text;

    // Remove code fences but keep inner content
    s = s.replace(/```[\s\S]*?```/g, (m) => m.replace(/```/g, ""));

    // Remove heading hashes at line starts
    s = s.replace(/^#{1,6}\s*/gm, "");

    // Replace markdown links [text](url) => text
    s = s.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");

    // Remove bold/italic markers **text**, *text*, __text__, _text_
    s = s.replace(/\*\*(.*?)\*\*/g, "$1");
    s = s.replace(/\*(.*?)\*/g, "$1");
    s = s.replace(/__(.*?)__/g, "$1");
    s = s.replace(/_(.*?)_/g, "$1");

    // Remove inline code ticks
    s = s.replace(/`([^`]+)`/g, "$1");

    // Remove list markers at start of lines like '* ', '- ', '+ '
    s = s.replace(/^[\*\-\+]\s+/gm, "");

    // Collapse multiple blank lines
    s = s.replace(/\n{3,}/g, "\n\n");

    // Trim trailing spaces per line and overall
    s = s
      .split("\n")
      .map((ln) => ln.replace(/\s+$/g, ""))
      .join("\n");

    return s.trim();
  };

  // ====================================================
  // AUTO SCROLL
  // ====================================================

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  // ====================================================
  // START CHAT
  // ====================================================

  const handleStartChat = (catName = "") => {
    setSelectedCategory(catName);
    setIsChatStarted(true);
    setIsCompleted(false);

    let welcomeText = "";

    try {
      if (typeof t === "function") {
        const translated = t("ai.welcome");

        if (translated && translated !== "ai.welcome") {
          welcomeText = translated;
        }
      }
    } catch (error) {
      console.warn("Welcome translation error:", error);
    }

    // Fallback
    if (!welcomeText) {
      welcomeText =
        "Salom! Men Adolat AI yordamchisiman. Huquqiy savolingizni yozing.";
    }

    // Kategoriya tanlangan bo'lsa
    if (catName) {
      welcomeText += `\n\nYo'nalish: ${catName}`;
    }

    const initialAiMessage = {
      id: Date.now().toString(),

      sender: "ai",

      text: welcomeText,

      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([initialAiMessage]);

    toast.success(translate("startToast", "AI maslahatlashuvi boshlandi"), {
      icon: "🌿",

      style: {
        borderRadius: "16px",
        background: "#2d3b32",
        color: "#f5f2eb",
      },
    });
  };

  // ====================================================
  // SEND MESSAGE TO BACKEND
  // ====================================================

  const sendToBackendAPI = async (userPrompt, currentMessages) => {
    // -----------------------------------------------
    // HISTORY
    // -----------------------------------------------

    const history = currentMessages.map((message) => ({
      role: message.sender === "user" ? "user" : "model",

      content: message.text,
    }));

    // -----------------------------------------------
    // REQUEST
    // -----------------------------------------------

    // MUHIM:
    // API_URL ichida /api/chat allaqachon mavjud.
    // Bu yerda yana /api/chat QO'SHILMAYDI.

    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },

      body: JSON.stringify({
        message: userPrompt,

        history: history,

        category: selectedCategory || "Umumiy",

        language: language,
      }),
    });

    // -----------------------------------------------
    // RESPONSE
    // -----------------------------------------------

    let data = null;

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      try {
        data = await response.json();
      } catch (error) {
        console.error("JSON parse error:", error);
      }
    } else {
      const text = await response.text();

      console.error("Server JSON emas, boshqa javob qaytardi:", text);

      throw new Error(`Server JSON javob qaytarmadi. HTTP: ${response.status}`);
    }

    // -----------------------------------------------
    // HTTP ERROR
    // -----------------------------------------------

    if (!response.ok) {
      throw new Error(
        data?.error ||
          data?.message ||
          `Server xatosi: HTTP ${response.status}`,
      );
    }

    // -----------------------------------------------
    // ANSWER
    // -----------------------------------------------

    if (!data || !data.answer) {
      console.error("Backend response:", data);

      throw new Error("Backend javobida 'answer' topilmadi.");
    }

    return data.answer;
  };

  // ====================================================
  // SEND MESSAGE
  // ====================================================

  const handleSendMessage = async (e) => {
    if (e) {
      e.preventDefault();
    }

    const currentText = inputMessage.trim();

    // Bo'sh xabar
    if (!currentText) {
      return;
    }

    // AI javob berayotgan bo'lsa
    if (isTyping) {
      return;
    }

    // -----------------------------------------------
    // USER MESSAGE
    // -----------------------------------------------

    const userMsg = {
      id: Date.now().toString(),

      sender: "user",

      text: currentText,

      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // -----------------------------------------------
    // UPDATED HISTORY
    // -----------------------------------------------

    const updatedMessages = [...messages, userMsg];

    // UI ga user xabarini chiqaramiz
    setMessages(updatedMessages);

    // Inputni tozalaymiz
    setInputMessage("");

    // Loading
    setIsTyping(true);

    try {
      // ---------------------------------------------
      // BACKEND REQUEST
      // ---------------------------------------------

      const aiReply = await sendToBackendAPI(currentText, updatedMessages);

      // ---------------------------------------------
      // AI MESSAGE (sanitize markdown-like tokens for clean display)
      // ---------------------------------------------

      const cleaned = sanitizeMessage(aiReply);

      const aiMsg = {
        id: (Date.now() + 1).toString(),

        sender: "ai",

        text: cleaned,

        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("================================");

      console.error("AI BACKEND ERROR:");

      console.error(error);

      console.error("================================");

      toast.error(
        error?.message || "Gemini AI xizmatiga ulanishda xatolik yuz berdi.",
        {
          duration: 5000,
        },
      );
    } finally {
      setIsTyping(false);
    }
  };

  // ====================================================
  // FINISH CONSULTATION
  // ====================================================

  const handleFinishConsultation = () => {
    // Faqat welcome xabari bo'lsa
    if (messages.length <= 1) {
      toast.error(translate("finishError", "Avval AI bilan suhbatlashing."));

      return;
    }

    const payloadData = {
      id: Date.now(),

      category: selectedCategory || "Umumiy",

      language: language,

      details: messages
        .filter((message) => message.sender === "user")
        .map((message) => message.text)
        .join("\n---\n"),

      chatLogs: messages,

      contacts: "AI Chat",

      status: "Yangi",

      createdAt: new Date().toISOString(),
    };

    // MUHIM:
    // Eski cases qiymatidan foydalanmaslik uchun
    // functional update ishlatyapmiz.

    setCases((prevCases) => [...(prevCases || []), payloadData]);

    setIsCompleted(true);

    toast.success(translate("saveSuccess", "Suhbat saqlandi."));
  };

  // ====================================================
  // BACK TO LANDING
  // ====================================================

  const handleBackToLanding = () => {
    // Agar AI ishlayotgan bo'lsa
    if (isTyping) {
      toast.error("AI javob berishini kuting.");

      return;
    }

    setIsChatStarted(false);

    setSelectedCategory("");

    setMessages([]);

    setInputMessage("");

    setIsCompleted(false);
  };

  // ====================================================
  // RESET
  // ====================================================

  const handleReset = () => {
    setIsChatStarted(false);

    setIsCompleted(false);

    setSelectedCategory("");

    setMessages([]);

    setInputMessage("");

    setIsTyping(false);
  };

  // ====================================================
  // UI
  // ====================================================

  return (
    <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#FBF9F5] dark:bg-[#121714] text-[#2C3531] dark:text-[#E8ECE9] transition-colors duration-500 font-sans">
      {/* TOAST */}

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
        }}
      />

      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/25 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#EFEAD8]/50 dark:bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none" />

      {/* ==================================================
          LANDING PAGE
      ================================================== */}

      {!isChatStarted && !isCompleted && (
        <div className="relative z-10 w-full max-w-2xl text-center space-y-8 py-10 animate-in fade-in zoom-in-95 duration-500">
          {/* BADGE */}

          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#EAE5D9]/70 dark:bg-emerald-950/50 border border-[#DCD5C5] dark:border-emerald-800/40 text-[#40534C] dark:text-emerald-300 text-xs font-medium backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-spin text-emerald-600 dark:text-emerald-400" />

            <span>{translate("ai.badge", "ADOLAT AI")}</span>
          </div>

          {/* TITLE */}

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[#1C2421] dark:text-[#F3F5F4]">
              {translate("ai.titleStart", "Huquqingizni biling.")}{" "}
              <span className="bg-gradient-to-r from-[#40534C] via-[#677D6A] to-[#87A96B] dark:from-emerald-300 dark:via-teal-200 dark:to-emerald-400 bg-clip-text text-transparent">
                {translate("ai.titleHighlight", "Adolatni")}
              </span>{" "}
              {translate("ai.titleEnd", "tanlang.")}
            </h1>

            <p className="text-base sm:text-lg text-[#5A6561] dark:text-[#A1B0AB] max-w-lg mx-auto font-normal leading-relaxed">
              {translate(
                "ai.subtitle",
                "Huquqiy savollaringizga AI yordamida javob oling.",
              )}
            </p>
          </div>

          {/* START BUTTON */}

          <div className="pt-2">
            <button
              onClick={() => handleStartChat()}
              className="group relative inline-flex items-center justify-center space-x-3 bg-[#40534C] hover:bg-[#32423D] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-[#F5F2EB] font-semibold text-base px-8 py-4 rounded-2xl shadow-lg shadow-[#40534C]/20 hover:shadow-[#40534C]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{translate("ai.startBtn", "AI bilan boshlash")}</span>

              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* CATEGORIES */}

          <div className="pt-8 border-t border-[#E5DFD3] dark:border-emerald-900/30">
            <p className="text-xs font-semibold text-[#8C9691] dark:text-[#6C7B75] uppercase tracking-wider mb-4">
              {translate("ai.orSelectCat", "Yoki yo'nalishni tanlang")}
            </p>

            <div className="flex flex-wrap justify-center gap-2.5">
              {Array.isArray(legalCategories) &&
                legalCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleStartChat(cat.name)}
                    className="px-4 py-2.5 rounded-xl text-xs font-medium bg-[#F3EFE6]/80 dark:bg-emerald-950/30 border border-[#E0D9CB] dark:border-emerald-800/30 text-[#3A4743] dark:text-[#C5D1CD] hover:border-[#677D6A] dark:hover:border-emerald-500 hover:text-[#1C2421] dark:hover:text-white transition-all backdrop-blur-md shadow-sm"
                  >
                    {translate("ai.categoryLabel", "Yo'nalish:")} {cat.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================
          CHAT
      ================================================== */}

      {isChatStarted && !isCompleted && (
        <div className="relative z-10 w-full max-w-3xl h-[640px] bg-[#F7F4EE]/90 dark:bg-[#181F1C]/90 backdrop-blur-2xl border border-[#E5DFD3] dark:border-emerald-900/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          {/* ==================================================
                HEADER
            ================================================== */}

          <div className="p-4 border-b border-[#E5DFD3] dark:border-emerald-900/30 bg-[#FAF8F3]/60 dark:bg-[#181F1C]/60 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* BACK */}

              <button
                type="button"
                onClick={handleBackToLanding}
                className="p-2 rounded-xl bg-[#EAE5D9]/60 hover:bg-[#DFD8C8] dark:bg-emerald-950/50 dark:hover:bg-emerald-900/50 text-[#40534C] dark:text-[#A1B0AB] transition-colors"
                title="Orqaga"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* BOT ICON */}

              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-[#40534C] dark:bg-emerald-700 flex items-center justify-center text-[#F5F2EB] shadow-md shadow-[#40534C]/20">
                  <Bot className="w-5 h-5" />
                </div>

                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#FAF8F3] dark:border-[#181F1C] rounded-full animate-pulse" />
              </div>

              {/* TITLE */}

              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-[#1C2421] dark:text-[#F3F5F4] text-base leading-none">
                    AI Assistant
                  </h3>

                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#E0D8C8] dark:bg-emerald-950 border border-[#D5CCBA] dark:border-emerald-800/40 text-[#32423D] dark:text-emerald-300">
                    {translate("ai.activeBadge", "ONLINE")}
                  </span>
                </div>

                <p className="text-xs text-[#6C7B75] dark:text-[#8C9691] mt-1">
                  {translate("ai.categoryLabel", "Yo'nalish:")}{" "}
                  <span className="font-medium text-[#2C3531] dark:text-[#D1DDD8]">
                    {selectedCategory || translate("ai.defaultCat", "Umumiy")}
                  </span>
                </p>
              </div>
            </div>

            {/* FINISH BUTTON */}

            <button
              type="button"
              onClick={handleFinishConsultation}
              disabled={isTyping}
              className="flex items-center space-x-2 bg-[#677D6A] hover:bg-[#526555] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-[#677D6A]/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ShieldCheck className="w-4 h-4" />

              <span>{translate("ai.finishBtn", "Yakunlash")}</span>
            </button>
          </div>

          {/* ==================================================
                MESSAGES
            ================================================== */}

          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start space-x-3 ${
                  msg.sender === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                {/* ICON */}

                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#40534C] dark:bg-emerald-700 text-[#F5F2EB]"
                      : "bg-[#EAE5D9]/80 dark:bg-emerald-950/60 text-[#32423D] dark:text-emerald-300 border border-[#DDD6C6] dark:border-emerald-800/30"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Zap className="w-4 h-4 text-[#677D6A] dark:text-emerald-400" />
                  )}
                </div>

                {/* MESSAGE */}

                <div className="max-w-[80%] space-y-1">
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${
                      msg.sender === "user"
                        ? "bg-[#40534C] dark:bg-emerald-700 text-[#F5F2EB] rounded-tr-none shadow-sm"
                        : "bg-[#EFECE6] dark:bg-[#212B26] text-[#2C3531] dark:text-[#E8ECE9] rounded-tl-none border border-[#E2DDD0] dark:border-emerald-900/30"
                    }`}
                  >
                    {msg.text}
                  </div>

                  <span className="text-[10px] text-[#8C9691] dark:text-[#6C7B75] px-1 block text-right font-medium">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* TYPING */}

            {isTyping && (
              <div className="flex items-center space-x-2 text-[#677D6A] dark:text-emerald-400 text-xs p-2 font-medium">
                <Loader2 className="w-4 h-4 animate-spin" />

                <span>{translate("ai.typing", "Adolat AI o'ylamoqda...")}</span>
              </div>
            )}

            {/* AUTO SCROLL TARGET */}

            <div ref={chatEndRef} />
          </div>

          {/* ==================================================
                INPUT
            ================================================== */}

          <form
            onSubmit={handleSendMessage}
            className="p-3 border-t border-[#E5DFD3] dark:border-emerald-900/30 bg-[#FAF8F3]/60 dark:bg-[#181F1C]/60 backdrop-blur-md flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={translate(
                "ai.placeholder",
                "Masalan: Oyligim berilmasa nima qilishim kerak?",
              )}
              disabled={isTyping}
              autoComplete="off"
              className="flex-1 bg-[#EFECE6]/80 dark:bg-[#212B26] text-[#1C2421] dark:text-[#F3F5F4] rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#677D6A]/50 border border-transparent transition-all placeholder:text-[#9AA4A0] disabled:opacity-60"
            />

            {/* SEND BUTTON */}

            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              className="p-3 bg-[#40534C] hover:bg-[#32423D] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-[#F5F2EB] rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-[#40534C]/20 transition-all active:scale-95"
            >
              {isTyping ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>
        </div>
      )}

      {/* ==================================================
          COMPLETED
      ================================================== */}

      {isCompleted && (
        <div className="relative z-10 w-full max-w-md bg-[#F7F4EE]/90 dark:bg-[#181F1C]/90 backdrop-blur-2xl border border-[#E5DFD3] dark:border-emerald-900/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-300">
          {/* ICON */}

          <div className="w-20 h-20 bg-[#677D6A] dark:bg-emerald-700 text-[#F5F2EB] rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-[#677D6A]/20 rotate-3">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          {/* TITLE */}

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#1C2421] dark:text-[#F3F5F4]">
              {translate("ai.completedTitle", "Maslahat yakunlandi")}
            </h2>

            <p className="text-sm text-[#6C7B75] dark:text-[#A1B0AB]">
              {translate("ai.completedDesc", "Suhbat ma'lumotlari saqlandi.")}
            </p>
          </div>

          {/* INFO */}

          <div className="p-4 bg-[#EFECE6] dark:bg-[#212B26] rounded-2xl text-left space-y-2.5 border border-[#E2DDD0] dark:border-emerald-900/30 text-xs">
            {/* CATEGORY */}

            <div className="flex justify-between gap-4">
              <span className="text-[#6C7B75] dark:text-[#8C9691]">
                {translate("ai.direction", "Yo'nalish")}
              </span>

              <span className="font-semibold text-[#1C2421] dark:text-[#E8ECE9] text-right">
                {selectedCategory || translate("ai.defaultCat", "Umumiy")}
              </span>
            </div>

            {/* MESSAGE COUNT */}

            <div className="flex justify-between gap-4">
              <span className="text-[#6C7B75] dark:text-[#8C9691]">
                {translate("ai.msgCount", "Xabarlar")}
              </span>

              <span className="font-semibold text-[#1C2421] dark:text-[#E8ECE9]">
                {messages.length} ta
              </span>
            </div>

            {/* STATUS */}

            <div className="flex justify-between gap-4">
              <span className="text-[#6C7B75] dark:text-[#8C9691]">
                {translate("ai.status", "Holat")}
              </span>

              <span className="font-bold text-[#677D6A] dark:text-emerald-400">
                {translate("ai.statusUploaded", "Saqlandi")}
              </span>
            </div>
          </div>

          {/* NEW CHAT */}

          <button
            type="button"
            onClick={handleReset}
            className="w-full flex items-center justify-center space-x-2 bg-[#40534C] hover:bg-[#32423D] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-[#F5F2EB] py-3.5 rounded-2xl font-semibold shadow-lg shadow-[#40534C]/20 transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />

            <span>{translate("ai.newChatBtn", "Yangi suhbat")}</span>
          </button>
        </div>
      )}
    </div>
  );
};

// ======================================================
// DEFAULT EXPORT
// ======================================================

export default AssistantPage;
