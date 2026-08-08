import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const ProfileDialog = ({ isOpen, onClose }) => {
  const { user, setUser } = useContext(AppContext);
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Foydalanuvchi Profili</h2>
        <div className="space-y-3 mb-6">
          <p>
            <strong>Ism:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => {
              setUser(null);
              onClose();
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Chiqish
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};
