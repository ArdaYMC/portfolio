"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlutter, SiNodedotjs, SiFirebase } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      category: "Geliştirme",
      skills: [
        { name: "React", icon: <FaReact />, percentage: 60 },
        { name: "Flutter", icon: <SiFlutter />, percentage: 50 },
        { name: "Node.js", icon: <SiNodedotjs />, percentage: 60 },
        { name: "HTML5", icon: <FaHtml5 />, percentage: 90 },
        { name: "CSS3", icon: <FaCss3Alt />, percentage: 85 },
        { name: "JavaScript", icon: <FaNodeJs />, percentage: 85 },
        { name: "Python", icon: <FaPython />, percentage: 60 },
      ],
    },
    {
      category: "Araçlar & Yetenekler",
      skills: [
        { name: "Git", icon: <FaGitAlt />, percentage: 60 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 85 },
        { name: "Firebase", icon: <SiFirebase />, percentage: 70 },
        { name: "Next.js", icon: <SiNextdotjs />, percentage: 65 },
        { name: "İletişim", icon: <FaFigma />, percentage: 90 },
        { name: "Takım Çalışması", icon: <FaFigma />, percentage: 70 },
      ],
    },
    {
      category: "Liderlik & İletişim",
      skills: [
        { name: "Analitik Düşünme", icon: <FaFigma />, percentage: 90 },
        { name: "Proje Yönetimi", icon: <FaFigma />, percentage: 85 },
        { name: "Müşteri İhtiyaç Analizi", icon: <FaFigma />, percentage: 90 },
        { name: "Ekip Motivasyonu", icon: <FaFigma />, percentage: 85 },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="beceriler" className="section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
            Becerilerim
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="space-y-16">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-8">
                  {category.category}
                </h3>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={item}
                      className="card flex flex-col items-center"
                    >
                      <div className="text-4xl text-blue-600 mb-4">
                        {skill.icon}
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        {skill.name}
                      </h4>

                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-blue-600 h-2.5 rounded-full"
                        ></motion.div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.percentage}%
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 