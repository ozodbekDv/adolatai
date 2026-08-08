import React, { useState, useContext } from "react";
import { legalCategories } from "../constants/content";
import { ResultStep } from "../components/ResultStep";
import { AppContext } from "../context/AppContext";

export const AssistantPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    details: "",
    contacts: "",
  });
  const { cases, setCases } = useContext(AppContext);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    setCases([...cases, { ...formData, id: Date.now(), status: "Yangi" }]);
    setStep(4);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex justify-between mb-8 border-b pb-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`font-bold ${step === i ? "text-blue-900 border-b-2 border-blue-900" : "text-gray-400"}`}
          >
            {i}-bosqich
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Kategoriyani tanlang</h2>
          <div className="grid grid-cols-1 gap-3">
            {legalCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFormData({ ...formData, category: cat.name })}
                className={`p-4 text-left rounded-xl border ${formData.category === cat.name ? "border-blue-900 bg-blue-50 dark:bg-gray-800" : "border-gray-200"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <button
            disabled={!formData.category}
            onClick={handleNext}
            className="mt-4 w-full bg-blue-900 text-white py-3 rounded-xl disabled:opacity-50"
          >
            Keyingi
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Murojaat tafsilotlari</h2>
          <textarea
            rows={5}
            value={formData.details}
            onChange={(e) =>
              setFormData({ ...formData, details: e.target.value })
            }
            placeholder="Muammongizni batafsil yozing..."
            className="w-full p-3 border rounded-xl dark:bg-gray-800 border-gray-300 dark:border-gray-700"
          />
          <div className="flex space-x-3">
            <button
              onClick={handleBack}
              className="w-1/2 bg-gray-200 dark:bg-gray-700 py-3 rounded-xl"
            >
              Orqaga
            </button>
            <button
              disabled={!formData.details}
              onClick={handleNext}
              className="w-1/2 bg-blue-900 text-white py-3 rounded-xl disabled:opacity-50"
            >
              Keyingi
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Tasdiqlash va Yuborish</h2>
          <p>
            <strong>Kategoriya:</strong> {formData.category}
          </p>
          <p>
            <strong>Matn:</strong> {formData.details}
          </p>
          <div className="flex space-x-3">
            <button
              onClick={handleBack}
              className="w-1/2 bg-gray-200 dark:bg-gray-700 py-3 rounded-xl"
            >
              Orqaga
            </button>
            <button
              onClick={handleSubmit}
              className="w-1/2 bg-green-600 text-white py-3 rounded-xl"
            >
              Yuborish
            </button>
          </div>
        </div>
      )}

      {step === 4 && <ResultStep data={formData} onReset={() => setStep(1)} />}
    </div>
  );
};
