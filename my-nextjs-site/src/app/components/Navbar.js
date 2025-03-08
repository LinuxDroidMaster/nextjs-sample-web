"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Actualiza la clase "dark" en el <html> según el estado
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navBg = darkMode ? "#333" : "#f5f5f5";
  const navColor = darkMode ? "#fff" : "#000";
  const toggleBg = darkMode ? "#555" : "#ddd";

  return (
    <nav
      className="flex items-center gap-4 p-4 shadow-md"
      style={{
        backgroundColor: navBg,
        color: navColor,
      }}
    >
      {/* Título clicable y con efecto hover */}
      <Link href="/" className="no-underline">
        <div className="font-bold mr-4 text-2xl transition-all duration-300 hover:scale-105">
          My Web Page Title
        </div>
      </Link>

      {/* Pestañas de navegación con efecto hover sin color azul */}
      <Link
        href="/tab1"
        className="transition duration-300 no-underline hover:underline hover:text-gray-700 dark:hover:text-gray-300"
      >
        Tab 1
      </Link>
      <Link
        href="/tab2"
        className="transition duration-300 no-underline hover:underline hover:text-gray-700 dark:hover:text-gray-300"
      >
        Tab 2
      </Link>

      {/* Botón para alternar modo oscuro/claro con efecto hover */}
      <button
        className="ml-auto px-4 py-2 rounded transition duration-300 hover:scale-105"
        style={{
          backgroundColor: toggleBg,
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setDarkMode((prevMode) => !prevMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
