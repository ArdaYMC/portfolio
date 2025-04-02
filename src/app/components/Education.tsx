"use client";

import { motion } from "framer-motion";
import { FiBook, FiCalendar } from "react-icons/fi";

const Education = () => {
  const educationItems = [
    {
      id: 1,
      degree: "Yazılım Mühendisliği",
      year: "2026 (Beklenen)",
      institution: "Manisa Celal Bayar Üniversitesi",
      location: "Manisa, Türkiye",
      description: "Yazılım mühendisliği alanında lisans eğitimi. Modern yazılım geliştirme teknolojileri, veri yapıları, algoritmalar, yazılım mimarisi ve proje yönetimi üzerine kapsamlı eğitim."
    }
  ];

  const experienceItems = [
    {
      id: 1,
      position: "Satış Danışmanı",
      company: "DEFACTO",
      duration: "Nisan 2023 - Temmuz 2023",
      description: "Mağaza satış ekibinde danışman olarak görev aldım. Müşteri ihtiyaçlarını analiz etme, çözüm sunma ve satış sonrası destek sağlama konularında deneyim kazandım."
    },
    {
      id: 2,
      position: "Satış Danışmanı",
      company: "FLO",
      duration: "Eylül 2023 - Eylül 2023",
      description: "Müşteri ilişkileri ve satış konusunda deneyimimi geliştirdim. İletişim becerilerimi güçlendirme fırsatı buldum."
    }
  ];

  return (
    <section id="eğitim" className="section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
            Eğitim & Deneyim
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eğitim */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                <FiBook className="mr-3 text-blue-600" /> Eğitim
              </h3>

              <div className="space-y-8">
                {educationItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="card relative border-l-4 border-blue-600 pl-6"
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full"></div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium flex items-center mt-1">
                      <FiCalendar className="mr-3" /> {item.year}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      {item.institution}, {item.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Deneyim */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                <FiCalendar className="mr-3 text-blue-600" /> Deneyim
              </h3>

              <div className="space-y-8">
                {experienceItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="card relative border-l-4 border-blue-600 pl-6"
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full"></div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.position}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                      {item.company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1 flex items-center">
                      <FiCalendar className="mr-2" /> {item.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 