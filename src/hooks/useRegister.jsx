import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import { register as _register } from "../app/features/userSlice";

export const useRegister = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const register = async ({ phone, password, firstName, lastName }) => {
    setIsPending(true);

    try {
      const newUser = {
        id: crypto.randomUUID(),
        phone,
        password,
        firstName,
        lastName,
      };

      // Redux'ga yangi userni yuborish
      dispatch(_register(newUser));

      // Hook ichidagi state
      setUser(newUser);

      // LocalStorage'ga yangi userni saqlash
      localStorage.setItem("user", JSON.stringify(newUser));

      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz");

      return newUser;
    } catch (error) {
      console.error("Register error:", error);

      toast.error("Ro'yxatdan o'tishda xatolik yuz berdi");

      return null;
    } finally {
      setIsPending(false);
    }
  };

  return {
    user,
    register,
    isPending,
  };
};
