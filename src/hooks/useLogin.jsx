import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import { login as _login } from "../app/features/userSlice";

export const useLogin = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async (phone, password) => {
    setIsPending(true);

    try {
      const existingUser = JSON.parse(
        localStorage.getItem("currentUser") || "null",
      );

      const newUser = {
        ...(existingUser || {}),
        phone,
        password,
      };

      // Redux
      dispatch(_login(newUser));

      // Local state
      setUser(newUser);

      // Login session
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      localStorage.setItem("user", JSON.stringify(newUser));

      toast.success("Muvaffaqiyatli kirdingiz");

      return newUser;
    } catch (error) {
      console.error("Login error:", error);

      toast.error("Login qilishda xatolik yuz berdi");

      return null;
    } finally {
      setIsPending(false);
    }
  };

  return {
    user,
    login,
    isPending,
  };
};
