"use client";

import { motion } from "framer-motion";
import { FiHeart, FiMail, FiUsers, FiAward } from "react-icons/fi";

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

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center justify-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-2xl shadow-pink-500/50">
              <FiHeart className="h-10 w-10 text-white" fill="currentColor" />
            </div>
          </motion.div>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Built with{" "}
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              passion
            </span>{" "}
            for physicians
          </h2>

          <p className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
            VoiceDx emerged from direct collaboration with physicians who spent
            far too many evenings completing charts. We witnessed how
            administrative burdens consumed hours that belonged with patients
            and loved ones.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="mb-12 grid gap-6 sm:mb-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100"></div>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-8 backdrop-blur-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
                <FiUsers className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-300">
                VoiceDx exists for one reason: bringing joy back to healthcare
                professionals. We're not here to maximize efficiency or boost
                revenue—we're here to give you back your time.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100"></div>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 backdrop-blur-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <FiAward className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                Our Commitment
              </h3>
              <p className="leading-relaxed text-gray-300">
                We're committed to becoming the world's most provider-centered
                organization. Your feedback shapes everything we build. When we
                miss the mark, we want to hear from you.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative mx-auto inline-block">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 blur-2xl"></div>
            <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-8 backdrop-blur-xl sm:p-12">
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Let's talk
              </h3>
              <p className="mb-8 text-lg text-gray-300">
                Have questions, feedback, or just want to say hello?
                <br />
                Our team is here for you.
              </p>
              <a
                href="mailto:hello@voicedx.com"
                className="inline-flex transform items-center gap-3 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-pink-500/50 transition-all hover:scale-105 hover:shadow-pink-500/70"
              >
                <FiMail className="h-6 w-6" />
                hello@voicedx.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
