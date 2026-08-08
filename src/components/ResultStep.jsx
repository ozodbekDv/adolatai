import React from "react";

export const ResultStep = ({ data, onReset }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-green-600 mb-4">Tahlil Natijasi</h3>
      <div className="space-y-4 mb-6">
        <div>
          <p className="font-semibold text-gray-500">Tanlangan kategoriya:</p>
          <p className="text-lg">{data.category}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-500">Murojaat tafsiloti:</p>
          <p>{data.details}</p>
        </div>
      </div>
      <button
        onClick={onReset}
        className="bg-blue-900 text-white px-6 py-2 rounded-lg"
      >
        Yangi murojaat yaratish
      </button>
    </div>
  );
};
