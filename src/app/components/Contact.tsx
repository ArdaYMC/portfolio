"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";
import emailjs from '@emailjs/browser';

// EmailJS'yi başlat
emailjs.init("UhrwjtNBauE-_s3mv");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    submitting: boolean;
    submitted: boolean;
    error: string | null;
  }>({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        'service_bzk7ggr',
        'template_contact',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'UhrwjtNBauE-_s3mv'
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="iletisim" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            İletişim
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Benimle iletişime geçmek için aşağıdaki formu kullanabilir veya
            sosyal medya hesaplarımdan bana ulaşabilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                İletişim Bilgileri
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FiMail className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      E-posta
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      ardayemc@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FiPhone className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Telefon
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      +90 507 150 5439
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FiMapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Konum
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      İzmir, Türkiye
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Sosyal Medya
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/ardayemc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  <FiLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/ArdaYMC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  <FiGithub className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Mesaj Gönder
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors ${
                  status.submitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status.submitting ? 'Gönderiliyor...' : 'Gönder'}
              </button>
              {status.submitted && (
                <p className="text-green-600 dark:text-green-400 text-center mt-4">
                  Mesajınız başarıyla gönderildi!
                </p>
              )}
              {status.error && (
                <p className="text-red-600 dark:text-red-400 text-center mt-4">
                  {status.error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 