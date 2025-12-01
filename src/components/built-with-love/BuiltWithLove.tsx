"use client";

import { motion } from "framer-motion";
import { FiHeart, FiMail, FiArrowRight } from "react-icons/fi";

export const BuiltWithLove = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-950 via-purple-950 to-indigo-950 py-16 sm:py-24 lg:py-32">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-pink-600 blur-[120px] filter"></div>
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-600 blur-[120px] filter"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 inline-flex items-center gap-3"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-2xl shadow-pink-500/50">
                <FiHeart className="h-8 w-8 text-white" fill="currentColor" />
              </div>
            </motion.div>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Built with{" "}
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                love
              </span>
              .
            </h2>

            <div className="space-y-4 text-base text-gray-300 sm:space-y-5 sm:text-lg md:text-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                VoiceDx was built for (and with the help of) clinicians after
                watching them chart at night for too many years. We saw
                firsthand how documentation was taking time away from what truly
                matters—patient care and personal life.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                VoiceDx is not designed to make you more productive, make you
                more money, or help you become a better clinician.{" "}
                <strong className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-bold text-transparent text-white">
                  The only purpose of VoiceDx is to make clinicians happier.
                </strong>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <p className="mb-6 leading-relaxed">
                  Our goal is to be the most clinician-focused company in the
                  world. If we fall short, please let us know.
                </p>
                <a
                  href="mailto:hello@voicedx.com"
                  className="inline-flex transform items-center gap-3 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 px-8 py-4 font-bold text-white shadow-2xl shadow-pink-500/50 transition-all hover:scale-105 hover:shadow-pink-500/70"
                >
                  <FiMail className="h-5 w-5" />
                  Email us
                  <FiArrowRight className="h-5 w-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Founder Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500 via-rose-500 to-purple-500 opacity-40 blur-2xl"></div>

              {/* Photo Placeholder */}
              <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-purple-500/20 shadow-2xl backdrop-blur-xl sm:h-80 sm:w-80 md:h-96 md:w-96">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 opacity-30"></div>

                {/* Decorative circles */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm">
                    <FiHeart className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>

              {/* Name Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 transform"
              >
                <div className="rounded-2xl border border-white/50 bg-gradient-to-br from-white to-gray-100 px-10 py-5 text-center shadow-2xl">
                  <p className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent">
                    Dr. Sarah Mitchell
                  </p>
                  <p className="text-sm font-semibold text-gray-600">
                    Founder & CEO
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
