import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppProvider } from "./context/AppContext";

import { Layout } from "./components/Layout";
import { Login, Register, HomePage } from "./pages";

import { useDispatch, useSelector } from "react-redux";
import { login } from "./app/features/userSlice";

import { useEffect, useState } from "react";
import { AssistantPage } from "./pages/AssistantPage";
import Advocates from "./pages/Advocates";
import AdvocateProfile from "./pages/AdvocateProfile";
import { ProfilePage } from "./pages/ProfilePage";

const queryClient = new QueryClient();

export function App() {
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(true);

  // localStorage'dagi userni Redux'ga tiklash
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");

    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);

        dispatch(login(parsedUser));
      } catch (error) {
        console.error("Userni localStorage'dan olishda xatolik:", error);

        localStorage.removeItem("currentUser");
      }
    }

    setIsLoading(false);
  }, [dispatch]);

  // localStorage tekshirilayotgan paytda
  // router ishlamasin
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <Layout /> : <Navigate to="/login" replace />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/aiChat",
          element: <AssistantPage />,
        },
        {
          path: "/advocates",
          element: <Advocates />,
        },
        {
          path: "/advocates/:id",
          element: <AdvocateProfile />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },

    {
      path: "/login",
      element: isAuthenticated ? <Navigate to="/" replace /> : <Login />,
    },

    {
      path: "/register",
      element: isAuthenticated ? <Navigate to="/" replace /> : <Register />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
