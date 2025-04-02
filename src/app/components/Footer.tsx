"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              İsmail Arda Yemci
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Yazılım Mühendisliği öğrencisi olarak React, Flutter ve Node.js teknolojileriyle modern, kullanıcı dostu uygulamalar geliştiriyorum.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Hızlı Bağlantılar
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
              {["Anasayfa", "Hakkımda", "Beceriler", "Projeler", "İletişim", "CV"].map(
                (item) => (
                  <Link
                    key={item}
                    href={item === "CV" ? "/cv" : `/#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              İletişim
            </h3>
            <div className="mt-4 flex flex-col space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">E-posta:</span> ardayemc@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Telefon:</span> 0507 150 5439
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Konum:</span> İzmir, Türkiye
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} İsmail Arda Yemci. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 