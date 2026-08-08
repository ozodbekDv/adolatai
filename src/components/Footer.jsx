import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Adolat Huquqiy Portali. Barcha
          huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};
