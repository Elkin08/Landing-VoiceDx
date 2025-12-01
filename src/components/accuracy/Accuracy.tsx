"use client";

import { motion } from "framer-motion";
import { FiCheck, FiStar, FiAward } from "react-icons/fi";

const accuracyPoints = [
  {
    text: "Complex medical vocabulary and medication names transcribe flawlessly every time.",
    icon: FiCheck,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    text: "Clinical details are preserved precisely while filtering out irrelevant ambient noise.",
    icon: FiCheck,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    text: "Documentation flows naturally into proper clinical structure, ready for seamless system integration.",
    icon: FiCheck,
    gradient: "from-indigo-500 to-purple-500",
  },
];

export const Accuracy = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 py-32">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-300 blur-[100px] filter"></div>
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-300 blur-[100px] filter"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl"></div>

              {/* Main circle */}
              <div className="relative h-80 w-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-1 shadow-2xl">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                      viewport={{ once: true }}
                      className="mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-xl"
                    >
                      <FiAward
                        className="h-12 w-12 text-white"
                        strokeWidth={2}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-6xl font-extrabold text-transparent">
                        99.8%
                      </div>
                      <div className="text-xl font-bold text-gray-700">
                        Accuracy Rate
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -left-4 -top-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 px-6 py-3 text-white shadow-2xl shadow-green-500/50"
              >
                <div className="flex items-center gap-2">
                  <FiCheck className="h-5 w-5" />
                  <span className="text-sm font-bold">HIPAA Secure</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 px-6 py-3 text-white shadow-2xl shadow-purple-500/50"
              >
                <div className="flex items-center gap-2">
                  <FiStar className="h-5 w-5 fill-current" />
                  <span className="text-sm font-bold">5/5 Rating</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 inline-block"
            >
              <span className="rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 text-sm font-semibold text-blue-600">
                Precision
              </span>
            </motion.div>

            <h2 className="mb-8 text-5xl font-bold leading-tight md:text-6xl">
              <span className="text-gray-900">Dependable </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                precision
              </span>
              .
            </h2>

            {/* Testimonial Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative mb-10"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100"></div>

              <div className="relative rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 p-8 shadow-lg transition-all group-hover:shadow-xl">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-500"
                    />
                  ))}
                </div>
                <p className="mb-6 text-lg italic leading-relaxed text-gray-700">
                  "I love how accurate VoiceDx is. It really abstracts that
                  important information that needs to go in your chart note. The
                  medical terminology and medications are spelled correctly, and
                  it truly saves me so much time charting."
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-xl font-bold text-white shadow-lg">
                    E
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Dr. Erica Davis</p>
                    <p className="text-sm text-gray-600">ARNP</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What you get */}
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              The advantage of physician-trained artificial intelligence
            </h3>

            <div className="space-y-5">
              {accuracyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-4"
                >
                  <div
                    className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${point.gradient} shadow-lg transition-transform group-hover:scale-110`}
                  >
                    <point.icon
                      className="h-5 w-5 text-white"
                      strokeWidth={3}
                    />
                  </div>
                  <p className="pt-1 text-lg leading-relaxed text-gray-700">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
