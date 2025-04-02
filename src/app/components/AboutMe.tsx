"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiCode } from "react-icons/fi";

const AboutMe = () => {
  const stats = [
    {
      icon: <FiCalendar className="w-6 h-6" />,
      value: "3+",
      label: "Yıl Deneyim",
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      value: "10+",
      label: "Tamamlanan Proje",
    },
  ];

  return (
    <section id="hakkımda" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Hakkımda
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Merhaba! Ben Arda, yazılım geliştirme konusunda tutkulu bir öğrenciyim. Şu anda Manisa Celal Bayar Üniversitesi&apos;nde bilgisayar mühendisliği eğitimi alıyorum ve kendimi sürekli geliştirmeye odaklanıyorum.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                İletişim ve takım çalışmasına yatkın yapıda, satış deneyimi bulunan, müşteri ihtiyaçlarını analiz edip çözüm sunma konusunda yeteneğim var. DEFACTO ve FLO gibi işletmelerde satış danışmanı olarak çalıştım. Çözüm odaklı olma konusunda deneyim kazandım.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Liderlik becerileri ve analitik düşünme yeteneklerimle takım projelerinde etkin roller üstleniyorum. İzmir, Türkiye'de yaşıyorum ve gerçek dünya projelerine katkı sağlayabileceğim bir staj fırsatı arıyorum.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 