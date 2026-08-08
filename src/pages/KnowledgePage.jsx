import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchLaws = async (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockLaws = [
        {
          id: 1,
          title: "Mehnat Kodeksi",
          body: "Mehnat munosabatlarini tartibga soluvchi asosiy qonun rejimi.",
        },
        {
          id: 2,
          title: "Oila Kodeksi",
          body: "Oila va nikoh munosabatlarining huquqiy asoslari.",
        },
        {
          id: 3,
          title: "Fuqarolik Kodeksi",
          body: "Mulk, shartnoma va boshqa fuqarolik majburiyatlari.",
        },
      ];
      resolve(
        mockLaws.filter((l) =>
          l.title.toLowerCase().includes(query.toLowerCase()),
        ),
      );
    }, 300);
  });
};

export const KnowledgePage = () => {
  const [search, setSearch] = useState("");
  const { data: laws, isLoading } = useQuery({
    queryKey: ["laws", search],
    queryFn: () => fetchLaws(search),
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Huquqiy Baza va Qonunchilik</h1>
      <input
        type="text"
        placeholder="Qonun yoki moddalarni qidirish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-xl dark:bg-gray-800 border-gray-300 dark:border-gray-700"
      />

      {isLoading ? (
        <p>Yuklanmoqda...</p>
      ) : (
        <div className="grid gap-4">
          {laws?.map((law) => (
            <div
              key={law.id}
              className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-400">
                {law.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{law.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
