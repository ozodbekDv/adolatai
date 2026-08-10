import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Moon,
  Sun,
  Check,
  User,
  LogOut,
  ChevronDown,
  Menu,
} from "lucide-react";
import { AppContext } from "../context/AppContext";
import { useI18n } from "../hooks/useI18n";

// Shadcn UI komponentlari
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const { t, lang, setLang } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();

  // Foydalanuvchi ma'lumotlari
  const user = JSON.parse(localStorage.getItem("currentUser")) || {
    name: "John",
    email: "john@example.com",
  };

  const userInitial = user.name ? user.name.charAt(0).toUpperCase() : "U";

  // Bosh sahifada ekanligini aniqlash
  const isHomePage = location.pathname === "/";

  // Til o'zgarganda chaqiriladigan funksiya
  const handleLanguageChange = (newLang) => {
    if (setLang) {
      setLang(newLang);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <header className="w-full fixed z-50 bg-[#f7f8fa] dark:bg-[#0f172a] border-b border-gray-200 dark:border-gray-800 py-2.5 px-6 transition-colors duration-200">
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center">
        {/* LOGO VA SARLAVHA */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm">
              <img src="./logo.png" alt="adolat logosi" />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-[#0f2338] dark:text-white">
                ADOLAT
              </span>
              {/* <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 max-w-[90px] leading-tight">
                {t("header.subtitle") || "HUQUQIY YORDAMCHI"}
              </span> */}
            </div>
          </Link>
        </div>

        {/* NAVIGATSIYA BO'LIMI */}
        <div className="flex items-center space-x-6 font-semibold text-[#0f2338] dark:text-gray-200">
          {/* Faqat Bosh sahifada ("/") ko'rinadigan Dropdown menyu */}
          {isHomePage && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1.5 font-bold text-base hover:bg-gray-200 dark:hover:bg-slate-800 rounded-xl px-3 py-2 transition-colors"
                >
                  <span>{t("header.sections") || "Sahifada"}</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48 mt-1">
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="#stages" className="w-full font-medium">
                    {t("header.assistant") || "Yordamchi"}
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="#knowledge" className="w-full font-medium">
                    {t("header.knowledge") || "Huquqiy baza"}
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <a href="#cases" className="w-full font-medium">
                    {t("header.cases") || "Murojaatlarim"}
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* AI Chat tugmasi barcha sahifalarda ko'rinadi */}
          <Link
            to="/aiChat"
            className="hidden sm:inline-block text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {t("header.aiChat") || "AI Chat"}
          </Link>
          <Link
            to="/advocates"
            className="hidden sm:inline-block text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {t("header.advocates") || "Advokatlar"}
          </Link>
          <Link
            to="/locations"
            className="hidden sm:inline-block text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {t("header.locations") || "Locations"}
          </Link>
        </div>

        {/* O'NG TARAF */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Status Badge */}
          <div className="hidden md:flex items-center space-x-2">
            <Badge
              variant="outline"
              className="bg-white dark:bg-slate-800 text-[#0f2338] dark:text-gray-200 border-gray-300 dark:border-gray-700 font-bold px-3 py-1.5 rounded-full flex items-center space-x-1.5 text-sm shadow-sm"
            >
              <span className="text-amber-500">🔒</span>
              <span>{t("header.savedOnDevice") || "Qurilmada saqlanadi"}</span>
            </Badge>
          </div>

          {/* TIL TANLASH SELECT */}
          <Select value={lang} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[80px] bg-white dark:bg-slate-800 border-gray-300 dark:border-gray-700 text-[#0f2338] dark:text-white font-bold h-9 rounded-xl focus:ring-0 shadow-sm">
              <SelectValue placeholder={lang ? lang.toUpperCase() : "UZ"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uz" className="font-semibold cursor-pointer">
                UZ
              </SelectItem>
              <SelectItem value="Уз" className="font-semibold cursor-pointer">
                Уз
              </SelectItem>
              <SelectItem value="РУ" className="font-semibold cursor-pointer">
                РУ
              </SelectItem>
              <SelectItem value="ENG" className="font-semibold cursor-pointer">
                ENG
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Dark / Light Mode */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 bg-white dark:bg-slate-800 border-gray-300 dark:border-gray-700 rounded-xl text-[#0f2338] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 shadow-sm"
          >
            {darkMode ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} />
            )}
          </Button>

          {/* PROFIL MENYU */}
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="flex items-center space-x-2.5 hover:opacity-90 transition-opacity focus:outline-none cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <Avatar className="w-9 h-9 bg-[#0f2338]">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback className="bg-[#0f2338] dark:bg-slate-700 text-white font-bold text-sm">
                    {userInitial}
                  </AvatarFallback>
                </Avatar>
                <span className="font-bold text-base text-[#0f2338] dark:text-white hidden sm:inline-block">
                  {user.name}
                </span>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56 mt-2">
              <div className="p-2 font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user.name}
                  </p>
                  {user.email && (
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  )}
                </div>
              </div>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => navigate("/profile")}
                className="cursor-pointer"
              >
                <User className="mr-2 h-4 w-4" />
                <span>{t("profile") || "Profil sahifasi"}</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={handleLogout}
                className="text-red-600 dark:text-red-400 cursor-pointer focus:bg-red-50 dark:focus:bg-red-950/50"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>{t("logout") || "Profildan chiqish"}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
