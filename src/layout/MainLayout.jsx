import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl w-full mx-auto p-4 md:p-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
