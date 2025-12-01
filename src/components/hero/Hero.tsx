"use client";

import { motion } from "framer-motion";
import { ASSETS } from "@/config/assets";
import { CTA_LINK } from "../navigation/constants";
import { FiPlay, FiCheck, FiShield, FiZap } from "react-icons/fi";

export const Hero = () => {
  const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("pricing");
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 pb-32 pt-32 lg:pb-40 lg:pt-40"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-600 opacity-40 blur-[120px] filter"></div>
        <div
          className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-600 opacity-40 blur-[140px] filter"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute left-1/2 top-1/2 h-80 w-80 animate-pulse rounded-full bg-pink-600 opacity-30 blur-[100px] filter"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 inline-block"
            >
              <span className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-5 py-2.5 text-sm font-bold text-cyan-300 backdrop-blur-sm">
                <FiZap className="h-4 w-4" />
                AI-Powered Medical Scribe
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="mb-8 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="mb-2 block text-white">Transform Your</span>
              <span className="mb-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Clinical Documentation
              </span>
              <span className="block text-white">with AI</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-gray-300 sm:text-2xl lg:mx-0"
            >
              Purpose-built AI medical scribe delivering{" "}
              <span className="font-semibold text-cyan-400">note accuracy</span>
              ,{" "}
              <span className="font-semibold text-blue-400">
                effortless workflow
              </span>
              , and{" "}
              <span className="font-semibold text-purple-400">
                real-human support
              </span>
              . Save 80% of documentation time.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12 flex flex-col justify-center gap-5 sm:flex-row lg:justify-start"
            >
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/70"
              >
                <span className="relative z-10">Request a Demo</span>
                <div className="absolute inset-0 translate-x-[-200%] -skew-x-12 transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
              </a>
              <a
                href="#pricing"
                onClick={handleScrollToPricing}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20"
              >
                View Pricing
              </a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            >
              {[
                {
                  icon: FiShield,
                  label: "HIPAA",
                  sublabel: "Compliant",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: FiShield,
                  label: "SOC2",
                  sublabel: "Certified",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: FiCheck,
                  label: "99.8%",
                  sublabel: "Accuracy",
                  gradient: "from-purple-500 to-pink-500",
                },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 + idx * 0.1 }}
                  className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl transition-all hover:bg-white/20"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${badge.gradient} shadow-lg transition-transform group-hover:scale-110`}
                  >
                    <badge.icon
                      className="h-6 w-6 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {badge.label}
                    </div>
                    <div className="text-xs text-gray-400">
                      {badge.sublabel}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Video/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Floating cards animation */}
            <div className="relative">
              {/* Main card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-2xl"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-2xl"></div>

                {/* Video placeholder */}
                <div className="group relative flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-sm transition-all group-hover:bg-white/30"
                  >
                    <FiPlay className="ml-1 h-10 w-10 text-white" />
                  </motion.div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-lg bg-black/50 px-4 py-2 backdrop-blur-md">
                      <div className="text-sm font-semibold text-white">
                        Watch Demo
                      </div>
                      <div className="text-xs text-gray-300">
                        See VoiceDx in action
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -left-8 top-1/4 hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-6 shadow-2xl shadow-cyan-500/50 lg:block"
              >
                <div className="text-white">
                  <div className="mb-1 text-4xl font-bold">2hrs+</div>
                  <div className="text-sm opacity-90">Saved Daily</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -right-8 bottom-1/4 hidden rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-6 shadow-2xl shadow-purple-500/50 lg:block"
              >
                <div className="text-white">
                  <div className="mb-1 text-4xl font-bold">20K+</div>
                  <div className="text-sm opacity-90">Clinicians</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
