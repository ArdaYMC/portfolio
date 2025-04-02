"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Portfolyo
            </Link>
          </div>

          {/* Masaüstü menü */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Anasayfa", "Hakkımda", "Beceriler", "Projeler", "İletişim"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/#${item.toLowerCase()}`}
                      className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 smooth-transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link
                  href="/cv"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 smooth-transition"
                >
                  CV İndir
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobil menü butonu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil menü */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Anasayfa", "Hakkımda", "Beceriler", "Projeler", "İletişim"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
            <Link
              href="/cv"
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              CV İndir
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 