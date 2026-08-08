"use client";

import React, { useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Scale } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { InputMask } from "@react-input/mask";
import { useRegister } from "@/hooks/useRegister";

export default function RegisterPage() {
  const [agreed, setAgreed] = useState(true);

  // Parol ko'rinishini boshqarish uchun alohida statelar
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Forma qiymatlari
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const { register } = useRegister();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

    // Parollar mosligini tekshirish
    if (e.target.id === "confirmPassword" || e.target.id === "password") {
      const pass =
        e.target.id === "password" ? e.target.value : formData.password;
      const confirmPass =
        e.target.id === "confirmPassword"
          ? e.target.value
          : formData.confirmPassword;

      if (confirmPass && pass !== confirmPass) {
        setPasswordError("Parollar bir-biriga mos kelmadi");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Parollar bir-biriga mos kelmadi");
      return;
    }
    // Formani yuborish mantig'i
    console.log("Ro'yxatdan o'tish ma'lumotlari:", formData);

    const newUser = {
      id: crypto.randomUUID(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      password: formData.password,
    };

    register(newUser);
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 font-sans antialiased bg-slate-50">
      {/* Chap tomondagi banner (Dark Hero Section) */}
      <div className="relative hidden lg:flex flex-col justify-end p-12 lg:p-16 bg-[#081827] overflow-hidden text-white select-none">
        {/* Radial Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#102a45] via-[#081827] to-[#040d16] opacity-90" />

        {/* Konsentrik doiralar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-sky-500/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-sky-500/15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-sky-500/20 pointer-events-none" />

        {/* Matn qismi */}
        <div className="relative z-10 max-w-lg mb-12 space-y-4">
          <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">
            ADOLAT
          </span>
          <h1 className="text-3xl xl:text-4xl font-extrabold leading-tight text-slate-100">
            Huquqingizni bilish — uni himoya qilishning birinchi qadami.
          </h1>
        </div>
      </div>

      {/* O'ng tomondagi Ro'yxatdan o'tish formasi */}
      <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-white relative overflow-y-auto">
        {/* Yuqori til tanlash paneli */}
        <div className="flex justify-end items-center gap-2 text-xs text-slate-500 mb-4">
          <span>Til</span>
          <Select defaultValue="uz">
            <SelectTrigger className="w-[120px] h-8 text-xs border-slate-200 focus:ring-1 focus:ring-slate-400">
              <SelectValue placeholder="Tilni tanlang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uz">O'zbekcha</SelectItem>
              <SelectItem value="ru">Русский</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Asosiy Forma konteyneri */}
        <div className="w-full max-w-md mx-auto my-auto space-y-5">
          {/* Logo va Sarlavha */}
          <div className="space-y-2.5">
            <div className="w-13 h-13 w-12 h-12 bg-[#0F2942] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-950/20 border border-amber-500/30">
              <Scale className="w-6 h-6 text-amber-400" />
            </div>

            <div>
              <span className="text-[11px] font-bold text-amber-600 tracking-wider uppercase">
                RO'YXATDAN O'TISH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2137] tracking-tight mt-0.5">
                Yangi hisob yaratish
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Tizim imkoniyatlaridan to'liq foydalanish uchun ma'lumotlaringizni
              kiriting.
            </p>
          </div>

          {/* Form qismi */}
          <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
            {/* Ism va Familiya */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label
                  htmlFor="firstName"
                  className="text-xs font-semibold text-slate-700"
                >
                  Ism
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Aziz"
                  required
                  className="h-10 rounded-lg border-slate-200 text-sm focus-visible:ring-[#0F2942]"
                />
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="lastName"
                  className="text-xs font-semibold text-slate-700"
                >
                  Familiya
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Karimov"
                  required
                  className="h-10 rounded-lg border-slate-200 text-sm focus-visible:ring-[#0F2942]"
                />
              </div>
            </div>

            {/* Telefon raqami */}
            <div className="space-y-1">
              <Label
                htmlFor="phone"
                className="text-xs font-semibold text-slate-700"
              >
                Telefon raqami
              </Label>

              <div className="relative flex items-center">
                <div className="absolute left-3 text-sm font-bold text-slate-900 pointer-events-none select-none">
                  +998
                </div>

                <InputMask
                  id="phone"
                  mask="__ ___ __ __"
                  replacement={{ _: /\d/ }}
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="90 123 45 67"
                  required
                  className="pl-16 h-10 w-full rounded-lg border border-slate-200 text-sm font-medium tracking-wide focus-visible:ring-[#0F2942]"
                />
              </div>
            </div>

            {/* Parol (Password) */}
            <div className="space-y-1">
              <Label
                htmlFor="password"
                className="text-xs font-semibold text-slate-700"
              >
                Parol
              </Label>
              <div className="relative flex items-center">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="pr-10 h-10 rounded-lg border-slate-200 text-sm focus-visible:ring-[#0F2942]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Parolni tasdiqlash (Confirm Password) */}
            <div className="space-y-1">
              <Label
                htmlFor="confirmPassword"
                className="text-xs font-semibold text-slate-700"
              >
                Parolni takrorlang
              </Label>
              <div className="relative flex items-center">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className={`pr-10 h-10 rounded-lg text-sm focus-visible:ring-[#0F2942] ${
                    passwordError
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "border-slate-200"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="text-[11px] text-red-500 font-medium mt-0.5">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Rozilik Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(!!checked)}
                className="mt-0.5 border-slate-300 data-[state=checked]:bg-[#0F2942] data-[state=checked]:border-[#0F2942]"
              />
              <Label
                htmlFor="terms"
                className="text-[11px] leading-tight text-slate-500 font-normal cursor-pointer select-none"
              >
                Foydalanish shartlari va maxfiylik siyosatiga roziman.
              </Label>
            </div>

            {/* Davom etish / Ro'yxatdan o'tish tugmasi */}
            <Button
              type="submit"
              disabled={!agreed || !!passwordError}
              className="w-full h-11 bg-[#0F2942] hover:bg-[#163a5c] text-white rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-between px-5 shadow-sm active:scale-[0.99] disabled:opacity-50"
            >
              <span>Ro'yxatdan o'tish</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Login sahifasiga o'tish */}
          <div className="mx-auto text-center pt-2">
            <div className="text-[11px] text-slate-600">
              Allaqachon ro'yxatdan o'tganmisiz?{" "}
              <Link className="underline font-bold ml-2" to="/login">
                Kirish
              </Link>
            </div>
          </div>

          {/* Maxfiylik kartasi */}
          <div className="pt-2 flex items-center justify-center gap-3 p-3 rounded-xl bg-amber-50/60 border border-amber-100/80">
            <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Lock className="w-3.5 h-3.5 text-amber-600" />
            </div>
            <div className="text-[11px] text-slate-600">
              <span className="font-semibold text-slate-800 block">
                Maxfiy va xavfsiz
              </span>
              Serverga shaxsiy ma'lumotlar shifrlangan holda uzatiladi.
            </div>
          </div>
        </div>

        {/* Pastki qism */}
        <div className="h-4" />
      </div>
    </div>
  );
}
