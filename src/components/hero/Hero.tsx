"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { CTA_LINK } from "../navigation/constants";
import {
  FiPlay,
  FiCheck,
  FiShield,
  FiZap,
  FiX,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";

const VIDEO_ID = "ZaI9Kn-JEpI";

export const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 pb-16 pt-24 sm:pb-24 sm:pt-28 lg:pb-40 lg:pt-40"
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
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
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
              className="mb-6 inline-block"
            >
              <span className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 text-xs font-bold text-cyan-300 backdrop-blur-sm sm:text-sm">
                <FiZap className="h-3 w-3 sm:h-4 sm:w-4" />
                AI-Powered Medical Scribe
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="mb-2 block text-white">AI-Powered</span>
              <span className="mb-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Medical Documentation
              </span>
              <span className="block text-white">That Saves Hours Daily</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl lg:mx-0"
            >
              Your intelligent clinical assistant that captures conversations
              and generates{" "}
              <span className="font-semibold text-cyan-400">
                precise medical notes
              </span>
              ,{" "}
              <span className="font-semibold text-blue-400">
                streamlines your workflow
              </span>
              , and provides{" "}
              <span className="font-semibold text-purple-400">
                dedicated human assistance
              </span>
              . Reclaim up to 2 hours every day.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8 flex flex-col justify-center gap-3 sm:mb-10 sm:flex-row sm:gap-4 lg:justify-start"
            >
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/70"
              >
                <span className="relative z-10">Request a Demo</span>
                <div className="absolute inset-0 translate-x-[-200%] -skew-x-12 transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
              </a>
              <a
                href="#pricing"
                onClick={handleScrollToPricing}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20"
              >
                View Pricing
              </a>
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
                className="relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-white/5 p-8 shadow-2xl backdrop-blur-2xl"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-2xl"></div>

                {/* Video placeholder */}
                <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Video de YouTube con iframe */}
                  <iframe
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0`}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />

                  {/* Botón de mute - esquina superior derecha con efecto */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50 backdrop-blur-md transition-all hover:scale-110 hover:shadow-cyan-500/70 sm:right-4 sm:top-4 sm:h-11 sm:w-11"
                    aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                  >
                    {isMuted ? (
                      <FiVolumeX className="h-5 w-5 sm:h-5 sm:w-5" />
                    ) : (
                      <FiVolume2 className="h-5 w-5 sm:h-5 sm:w-5" />
                    )}
                    {/* Glow effect */}
                    <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-50 blur-md"></div>
                  </motion.button>

                  {/* Overlay para click to expand */}
                  <div
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute inset-0 flex cursor-pointer items-center justify-center bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    {/* Play button para expandir */}
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 backdrop-blur-sm transition-all sm:h-20 sm:w-20">
                        <FiPlay className="ml-0.5 h-8 w-8 text-white sm:h-10 sm:w-10" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom label */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <div className="rounded-lg bg-black/50 px-3 py-1.5 backdrop-blur-md sm:px-4 sm:py-2">
                      <div className="text-xs font-semibold text-white sm:text-sm">
                        Click to expand
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
                className="absolute -left-4 top-1/4 hidden rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 shadow-2xl shadow-cyan-500/50 lg:block"
              >
                <div className="text-white">
                  <div className="mb-0.5 text-2xl font-bold">2hrs+</div>
                  <div className="text-xs opacity-90">Saved Daily</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -right-4 bottom-1/4 hidden rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-4 shadow-2xl shadow-purple-500/50 lg:block"
              >
                <div className="text-white">
                  <div className="mb-0.5 text-2xl font-bold">20K+</div>
                  <div className="text-xs opacity-90">Clinicians</div>
                </div>
              </motion.div>
            </div>

            {/* Badges debajo del video */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
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
                  label: "FHIR R4",
                  sublabel: "Compatible",
                  gradient: "from-indigo-500 to-purple-500",
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
                  className="group flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl transition-all hover:bg-white/20 sm:gap-3 sm:px-4 sm:py-2.5"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${badge.gradient} shadow-lg transition-transform group-hover:scale-110 sm:h-11 sm:w-11`}
                  >
                    <badge.icon
                      className="h-5 w-5 text-white sm:h-5 sm:w-5"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white sm:text-sm">
                      {badge.label}
                    </div>
                    <div className="text-[10px] text-gray-400 sm:text-xs">
                      {badge.sublabel}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-900/50 via-orange-950/30 to-transparent"></div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6 md:p-8"
            onClick={() => setIsVideoModalOpen(false)}
          >
            {/* Close button */}
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 sm:h-12 sm:w-12"
            >
              <FiX className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
              style={{ maxHeight: "85vh" }}
            >
              {/* Video de YouTube con controles usando iframe */}
              <div
                className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl"
                style={{ aspectRatio: "16/9", maxHeight: "85vh" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
