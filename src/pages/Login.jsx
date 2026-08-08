"use client";

import React, { useState } from "react";
import { ArrowRight, Lock, Scale } from "lucide-react";
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
import { useLogin } from "../hooks/useLogin";
import { InputMask } from "@react-input/mask";

export default function LoginPage() {
  const [agreed, setAgreed] = useState(true);

  const { login, isPending } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const phone = formData.get("phone");
    const password = formData.get("password");

    console.log("Login ma'lumotlari:", { phone, password });

    login(phone, password);

    // form.reset();
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 font-sans antialiased bg-slate-50">
      {/* Chap tomondagi banner (Dark Hero Section) */}
      <div className="relative hidden lg:flex flex-col justify-end p-12 lg:p-16 bg-[#081827] overflow-hidden text-white select-none">
        {/* Konsentrik doiralar va gradient overlay (foni uchun visual efekt) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#102a45] via-[#081827] to-[#040d16] opacity-90" />

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

      {/* O'ng tomondagi Forma bo'limi */}
      <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-[#f7f8fa] relative">
        {/* Yuqori til tanlash paneli */}
        <div className="flex justify-end items-center gap-2 text-xs text-slate-500 mb-6">
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
        <div className="w-full max-w-md mx-auto my-auto space-y-6">
          {/* Logo va Sarlovha */}
          <div className="space-y-3">
            <div className="w-14 h-14 bg-[#0F2942] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-950/20 border border-amber-500/30">
              <Scale className="w-7 h-7 text-amber-400" />
            </div>

            <div>
              <span className="text-[11px] font-bold text-amber-600 tracking-wider uppercase">
                XAVFSIZ KIRISH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2137] tracking-tight mt-0.5">
                ADOLAT'ga xush kelibsiz
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Huquqiy yordamdan foydalanish uchun profilingizni yarating.
              <br />
              Ma'lumotlar faqat shu qurilmada saqlanadi.
            </p>
          </div>

          {/* Inputlar ro'yxati */}
          <form onSubmit={handleLogin} className="space-y-4 pt-2">
            {/* Telefon raqami */}
            <div className="space-y-1.5">
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
                  name="phone"
                  mask="__ ___ __ __"
                  replacement={{ _: /\d/ }}
                  type="tel"
                  placeholder="90 123 45 67"
                  required
                  className="pl-16 h-10 w-full rounded-lg border border-slate-200 text-sm font-medium tracking-wide focus-visible:ring-[#0F2942]"
                />
              </div>
            </div>

            {/* Parol */}
            <div className="space-y-1.5">
              <Label
                htmlFor="password"
                className="text-xs font-semibold text-slate-700"
              >
                Parol
              </Label>
              <div className="relative flex items-center">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="h-11 rounded-lg border-slate-200 text-sm font-medium tracking-wide focus-visible:ring-[#0F2942]"
                />
              </div>
            </div>

            {/* Tasdiqlash roziligi */}
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
                Ma'lumotlar shu qurilmada saqlanishiga roziman.
              </Label>
            </div>

            {/* Davom etish tugmasi */}
            <Button
              type="submit"
              disabled={!agreed}
              className="w-full h-11 bg-[#0F2942] hover:bg-[#163a5c] text-white rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-between px-5 shadow-sm active:scale-[0.99]"
            >
              <span>Davom etish</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Register sahifasiga o'tish */}
          <div className="mx-auto text-center pt-2">
            <div className="text-[11px] text-slate-600">
              Allaqachon ro'yxatdan o'tganmisiz?{" "}
              <Link className="underline font-bold ml-2" to="/register">
                Ro'yxatdan o'tish
              </Link>
            </div>
          </div>

          {/* Maxfiylik haqida ma'lumot qutisi */}
          <div className="pt-4 flex items-center justify-center gap-3 p-3 rounded-xl bg-amber-50/60 border border-amber-100/80">
            <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Lock className="w-3.5 h-3.5 text-amber-600" />
            </div>
            <div className="text-[11px] text-slate-600">
              <span className="font-semibold text-slate-800 block">
                Maxfiy va xavfsiz
              </span>
              Serverga shaxsiy ma'lumot yuborilmaydi.
            </div>
          </div>
        </div>

        {/* Bo'sh joy va pastki visual balans uchun */}
        <div className="h-4" />
      </div>
    </div>
  );
}
