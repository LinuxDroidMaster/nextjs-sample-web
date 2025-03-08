"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("/");

  // Apply dark mode class to <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 20px",
      background: darkMode ? "#111" : "#1E1E1E",
      boxShadow: "0 4px 10px rgba(0, 255, 170, 0.2)",
      borderBottom: "2px solid #00ffaa"
    }}>
      {/* Clickable Project Title */}
      <Link href="/" legacyBehavior>
        <a style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#00ffaa",
          textTransform: "uppercase",
          letterSpacing: "1px",
          textDecoration: "none",
          transition: "transform 0.2s ease"
        }}
        className="hover:scale-105">
          Node.js in Termux
        </a>
      </Link>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        {[
          { name: "Home", path: "/" },
          { name: "Tab 1", path: "/tab1" },
          { name: "Tab 2", path: "/tab2" }
        ].map(({ name, path }) => (
          <Link key={path} href={path} legacyBehavior>
            <a
              onClick={() => setActiveTab(path)}
              style={{
                color: activeTab === path ? "#00ffaa" : "#fff",
                fontSize: "16px",
                textDecoration: "none",
                position: "relative",
                transition: "color 0.3s ease",
                paddingBottom: "5px"
              }}
            >
              {name}
              {activeTab === path && (
                <span style={{
                  display: "block",
                  height: "2px",
                  width: "100%",
                  background: "#00ffaa",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  transition: "width 0.3s ease"
                }} />
              )}
            </a>
          </Link>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          background: darkMode ? "#00ffaa" : "#444",
          color: darkMode ? "#000" : "#fff",
          border: "none",
          padding: "5px 15px",
          borderRadius: "20px",
          cursor: "pointer",
          transition: "background 0.3s ease, color 0.3s ease"
        }}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}