"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="anasayfa"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-center"
    >
      {/* Arka plan gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Sol taraf: Metin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Merhaba, Ben{" "}
              <span className="text-blue-600 dark:text-blue-400">
                İsmail Arda Yemci
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Yazılım Mühendisliği Öğrencisi
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
              Mobil & web geliştirme ile yapay zeka teknolojilerine büyük ilgi duyuyorum. React, Python, C#, Flutter ve Node.js kullanarak yazılımlar geliştiriyorum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#iletisim"
                className="btn btn-primary w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                İletişime Geç
              </Link>
              <Link
                href="#projeler"
                className="btn btn-outline w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
              >
                Projelerimi Gör
              </Link>
            </div>

            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/ArdaYMC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ardayemc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ardayemc@gmail.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Sağ taraf: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/profile-placeholder.png"
                alt="İsmail Arda Yemci"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Aşağı kaydır butonu */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <Link
            href="#hakkimda"
            className="flex flex-col items-center text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-sm mb-2">Daha Fazla</span>
            <FiArrowDown className="w-5 h-5 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 