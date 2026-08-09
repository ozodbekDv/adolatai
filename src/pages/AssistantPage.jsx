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

export const AssistantPage = () => {
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const { cases, setCases } = useContext(AppContext);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Suhbatni boshlash
  const handleStartChat = (catName = "") => {
    setSelectedCategory(catName);
    setIsChatStarted(true);

    const welcomeText = catName
      ? `Assalomu alaykum! Men sizning intellektual huquqiy yordamchingizman. **${catName}** bo'yicha qanday muammo yoki savolingiz bor?`
      : "Assalomu alaykum! Men sizning intellektual huquqiy yordamchingizman. Sizga qanday huquqiy masalada yordam bera olaman?";

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
    toast.success("Suhbat boshlandi!", {
      icon: "🌿",
      style: {
        borderRadius: "16px",
        background: "#2d3b32",
        color: "#f5f2eb",
      },
    });
  };

  // AI API simulyatsiyasi
  const sendToBackendAPI = async (userPrompt, chatHistory) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categoryContext = selectedCategory
          ? `${selectedCategory} bo'yicha amaldagi qonunchilikka ko'ra`
          : "Amaldagi huquqiy me'yorlarga ko'ra";

        resolve(
          `Sizning "${userPrompt}" so'rovingiz tahlil qilindi. ${categoryContext}, siz o'z huquqlaringizni himoya qilish uchun tegishli tartibda ariza shakllantirishingiz mumkin.`,
        );
      }, 1200);
    });
  };

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim() || isTyping) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    const currentText = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    try {
      const aiReply = await sendToBackendAPI(currentText, updatedMessages);
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.");
    } finally {
      setIsTyping(false);
    }
  };

  const handleFinishConsultation = () => {
    if (messages.length <= 1) {
      toast.error("Suhbatni yakunlash uchun kamida bitta savol yuboring!");
      return;
    }

    const payloadData = {
      id: Date.now(),
      category: selectedCategory || "Umumiy",
      details: messages
        .filter((m) => m.sender === "user")
        .map((m) => m.text)
        .join("\n---\n"),
      chatLogs: messages,
      contacts: "AI Chat orqali",
      status: "Yangi",
      createdAt: new Date().toISOString(),
    };

    setCases([...cases, payloadData]);
    setIsCompleted(true);
    toast.success("Murojaatingiz saqlandi!");
  };

  const handleBackToLanding = () => {
    setIsChatStarted(false);
    setSelectedCategory("");
    setMessages([]);
    setInputMessage("");
  };

  const handleReset = () => {
    setIsChatStarted(false);
    setIsCompleted(false);
    setSelectedCategory("");
    setMessages([]);
    setInputMessage("");
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#FBF9F5] dark:bg-[#121714] text-[#2C3531] dark:text-[#E8ECE9] transition-colors duration-500 font-sans">
      <Toaster position="top-center" />

      {/* Estetik yumshoq yashil va bej yorug'lik doiralari */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/25 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#EFEAD8]/50 dark:bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none" />

      {/* 1-HOLAT: LANDING EKRANI */}
      {!isChatStarted && !isCompleted && (
        <div className="relative z-10 w-full max-w-2xl text-center space-y-8 py-10 animate-in fade-in zoom-in-95 duration-500">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#EAE5D9]/70 dark:bg-emerald-950/50 border border-[#DCD5C5] dark:border-emerald-800/40 text-[#40534C] dark:text-emerald-300 text-xs font-medium backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-spin text-emerald-600 dark:text-emerald-400" />
            <span>AI Huquqiy Yordamchi v2.0</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[#1C2421] dark:text-[#F3F5F4]">
              Aql bilan{" "}
              <span className="bg-gradient-to-r from-[#40534C] via-[#677D6A] to-[#87A96B] dark:from-emerald-300 dark:via-teal-200 dark:to-emerald-400 bg-clip-text text-transparent">
                huquqiy yechim
              </span>{" "}
              toping
            </h1>
            <p className="text-base sm:text-lg text-[#5A6561] dark:text-[#A1B0AB] max-w-lg mx-auto font-normal leading-relaxed">
              Sun'iy intellekt bilan real vaqtda muloqot qiling, muammoingizni
              tahlil qiling va zudlik bilan professional yo'nalish oling.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleStartChat()}
              className="group relative inline-flex items-center justify-center space-x-3 bg-[#40534C] hover:bg-[#32423D] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-[#F5F2EB] font-semibold text-base px-8 py-4 rounded-2xl shadow-lg shadow-[#40534C]/20 hover:shadow-[#40534C]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Suhbatni Boshlash</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="pt-8 border-t border-[#E5DFD3] dark:border-emerald-900/30">
            <p className="text-xs font-semibold text-[#8C9691] dark:text-[#6C7B75] uppercase tracking-wider mb-4">
              Yoki yo'nalish bo'yicha tanlang
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {legalCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleStartChat(cat.name)}
                  className="px-4 py-2.5 rounded-xl text-xs font-medium bg-[#F3EFE6]/80 dark:bg-emerald-950/30 border border-[#E0D9CB] dark:border-emerald-800/30 text-[#3A4743] dark:text-[#C5D1CD] hover:border-[#677D6A] dark:hover:border-emerald-500 hover:text-[#1C2421] dark:hover:text-white transition-all backdrop-blur-md shadow-sm"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2-HOLAT: CHAT INTERFEYSI */}
      {isChatStarted && !isCompleted && (
        <div className="relative z-10 w-full max-w-3xl h-[640px] bg-[#F7F4EE]/90 dark:bg-[#181F1C]/90 backdrop-blur-2xl border border-[#E5DFD3] dark:border-emerald-900/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-[#E5DFD3] dark:border-emerald-900/30 bg-[#FAF8F3]/60 dark:bg-[#181F1C]/60 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={handleBackToLanding}
                className="p-2 rounded-xl bg-[#EAE5D9]/60 hover:bg-[#DFD8C8] dark:bg-emerald-950/50 dark:hover:bg-emerald-900/50 text-[#40534C] dark:text-[#A1B0AB] transition-colors"
                title="Bosh ekranga qaytish"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-[#40534C] dark:bg-emerald-700 flex items-center justify-center text-[#F5F2EB] shadow-md shadow-[#40534C]/20">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#FAF8F3] dark:border-[#181F1C] rounded-full animate-pulse" />
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-[#1C2421] dark:text-[#F3F5F4] text-base leading-none">
                    AI Assistant
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#E0D8C8] dark:bg-emerald-950 border border-[#D5CCBA] dark:border-emerald-800/40 text-[#32423D] dark:text-emerald-300">
                    Active
                  </span>
                </div>
                <p className="text-xs text-[#6C7B75] dark:text-[#8C9691] mt-1">
                  Kategoriya:{" "}
                  <span className="font-medium text-[#2C3531] dark:text-[#D1DDD8]">
                    {selectedCategory || "Umumiy huquqiy yordam"}
                  </span>
                </p>
              </div>
            </div>

            <button
              onClick={handleFinishConsultation}
              className="flex items-center space-x-2 bg-[#677D6A] hover:bg-[#526555] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-[#677D6A]/20 transition-all hover:scale-105 active:scale-95"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Yakunlash</span>
            </button>
          </div>

          {/* Chat Messages */}
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

                <div className="max-w-[80%] space-y-1">
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
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

            {isTyping && (
              <div className="flex items-center space-x-2 text-[#677D6A] dark:text-emerald-400 text-xs p-2 font-medium animate-pulse">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>AI tahlil qilmoqda...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 border-t border-[#E5DFD3] dark:border-emerald-900/30 bg-[#FAF8F3]/60 dark:bg-[#181F1C]/60 backdrop-blur-md flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Savolingizni yozing..."
              className="flex-1 bg-[#EFECE6]/80 dark:bg-[#212B26] text-[#1C2421] dark:text-[#F3F5F4] rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#677D6A]/50 border border-transparent transition-all placeholder:text-[#9AA4A0]"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              className="p-3 bg-[#40534C] hover:bg-[#32423D] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-[#F5F2EB] rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-[#40534C]/20 transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* 3-HOLAT: YAKUNLANGAN CARD */}
      {isCompleted && (
        <div className="relative z-10 w-full max-w-md bg-[#F7F4EE]/90 dark:bg-[#181F1C]/90 backdrop-blur-2xl border border-[#E5DFD3] dark:border-emerald-900/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-[#677D6A] dark:bg-emerald-700 text-[#F5F2EB] rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-[#677D6A]/20 rotate-3">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#1C2421] dark:text-[#F3F5F4]">
              Suhbat Yakunlandi!
            </h2>
            <p className="text-sm text-[#6C7B75] dark:text-[#A1B0AB]">
              Ma'lumotlaringiz muvaffaqiyatli saqlandi va qayta ishlashga
              tayyorlandi.
            </p>
          </div>

          <div className="p-4 bg-[#EFECE6] dark:bg-[#212B26] rounded-2xl text-left space-y-2.5 border border-[#E2DDD0] dark:border-emerald-900/30 text-xs">
            <div className="flex justify-between">
              <span className="text-[#6C7B75] dark:text-[#8C9691]">
                Yo'nalish:
              </span>
              <span className="font-semibold text-[#1C2421] dark:text-[#E8ECE9]">
                {selectedCategory || "Umumiy"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6C7B75] dark:text-[#8C9691]">
                Xabarlar soni:
              </span>
              <span className="font-semibold text-[#1C2421] dark:text-[#E8ECE9]">
                {messages.length} ta
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6C7B75] dark:text-[#8C9691]">Holat:</span>
              <span className="font-bold text-[#677D6A] dark:text-emerald-400">
                Tizimga yuklandi
              </span>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center space-x-2 bg-[#40534C] hover:bg-[#32423D] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-[#F5F2EB] py-3.5 rounded-2xl font-semibold shadow-lg shadow-[#40534C]/20 transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Yangi Suhbat Boshlash</span>
          </button>
        </div>
      )}
    </div>
  );
};
