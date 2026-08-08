import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const CasesPage = () => {
  const { cases } = useContext(AppContext);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Saqlangan Murojaatlar</h1>
      {cases.length === 0 ? (
        <p className="text-gray-500">
          Hozircha saqlangan murojaatlar mavjud emas.
        </p>
      ) : (
        <div className="grid gap-4">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg text-blue-900 dark:text-blue-400">
                  {item.category}
                </span>
                <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded">
                  {item.status}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.details}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
