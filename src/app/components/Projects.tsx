"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Web, Mobil ve Next.js Projeleri",
      description:
        "React, API Key, Next.Js Ai ile Emoji üretme projesi. Modern ve kullanıcı dostu arayüzler tasarladım.",
      image: "/emoprojeai.png",
      tags: ["React", "Node.js", "API", "Firebase", "Supabase"],
      liveUrl: "#",
      githubUrl: "https://github.com/ArdaYMC/ai-emoji-factory",
    },
    {
      id: 2,
      title: "Diyet ve Fitness Mobil Uygulamalası",
      description:
        "Üniversite projelerinde geliştirdiğim eğitim odaklı web uygulamaları. Öğrenci-eğitmen etkileşimini artıran ve öğrenme sürecini kolaylaştıran sistemler tasarladım.",
      image: "/mobildiyet.png",
      tags: ["React", "Node.js", "Flutter", "Firebase","Git"],
      liveUrl: "#",
      githubUrl: "https://github.com/ArdaYMC",
    },
    {
      id: 3,
      title: "Takım ile Dil Öğrenme Projelesi",
      description:
        "Akademik projelerde ekip projelerine liderlik ettim. Analitik düşünme ve proje yönetimi becerilerimi kullanarak ekip üyelerini yönlendirdim ve başarılı sonuçlar elde ettim.",
      image: "/dilogrenme.png",
      tags: ["Proje Yönetimi", "C#", "MsSQL","Form"],
      liveUrl: "#",
      githubUrl: "https://github.com/ArdaYMC",
    },
    {
      id: 4,
      title: "Ses ile kişi tanıma Makine Öğrenmesi Projesi",
      description:
        "Yapay zeka teknolojilerine olan ilgimle geliştirdiğim çeşitli deneme projeleri. Temel makine öğrenimi modellerini ve veri analizi yöntemlerini kullandım.",
      image: "/project4-placeholder.jpg",
      tags: ["Python", "Veri Analizi", "ML"],
      liveUrl: "#",
      githubUrl: "https://github.com/HuseyinnKaan/SesTanimaProjesi",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projeler" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
            Projelerim
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="card group overflow-hidden"
              >
                <div className="relative overflow-hidden h-60 rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 hover:bg-blue-600 hover:text-white p-2 rounded-full transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 hover:bg-blue-600 hover:text-white p-2 rounded-full transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 