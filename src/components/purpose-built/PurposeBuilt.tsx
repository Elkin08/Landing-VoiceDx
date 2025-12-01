"use client";

import { motion } from "framer-motion";
import {
  FiZap,
  FiTarget,
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiCpu,
} from "react-icons/fi";

const features = [
  {
    icon: FiZap,
    title: "Real humans, real fast",
    description:
      "Live, clinician-focused support ensures white-glove service for your team—so you're never alone when you need help.",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    glowColor: "shadow-orange-500/50",
  },
  {
    icon: FiTarget,
    title: "Clinical-grade accuracy",
    description:
      "Purpose-built for any specialty visit, across 14+ languages, with leading-edge AI technology that learns your style.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    glowColor: "shadow-cyan-500/50",
  },
  {
    icon: FiTrendingUp,
    title: "Best-in-class innovation",
    description:
      "Notes that learn from your edits, AI that adapts to your style, and an expanding set of features to ease your workflow.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "shadow-pink-500/50",
  },
  {
    icon: FiShield,
    title: "Enterprise-grade security",
    description:
      "HIPAA compliant, SOC 2 certified, with end-to-end encryption. Your patient data is always safe and secure.",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    glowColor: "shadow-emerald-500/50",
  },
  {
    icon: FiUsers,
    title: "Team collaboration",
    description:
      "Share templates, insights, and best practices across your team. Build a knowledge base that grows with you.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    glowColor: "shadow-purple-500/50",
  },
  {
    icon: FiCpu,
    title: "AI that learns",
    description:
      "Our AI continuously improves from your feedback, adapting to your unique documentation style and preferences.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    glowColor: "shadow-blue-500/50",
  },
];

export const PurposeBuilt = () => {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-32">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500 blur-[100px] filter"></div>
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500 blur-[100px] filter"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 inline-block"
          >
            <span className="rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 text-sm font-semibold text-blue-600">
              Why VoiceDx
            </span>
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            Purpose-built AI scribe,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              not just a side project
            </span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-600 md:text-2xl">
            Generic EHR add-ons treat documentation as an after-thought. VoiceDx
            is singularly focused on building tools for your clinical workflow.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
              ></div>

              {/* Card */}
              <div className="relative h-full rounded-3xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg transition-all duration-300 group-hover:border-gray-200 group-hover:shadow-2xl">
                {/* Icon with animated gradient background */}
                <div
                  className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 flex items-center justify-center shadow-xl ${feature.glowColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}
                >
                  <feature.icon
                    className="h-8 w-8 text-white"
                    strokeWidth={2.5}
                  />

                  {/* Pulse ring effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} animate-ping opacity-20`}
                  ></div>
                </div>

                {/* Title with gradient on hover */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-lg leading-relaxed text-gray-600">
                  {feature.description}
                </p>

                {/* Decorative corner element */}
                <div
                  className={`absolute bottom-0 right-0 h-24 w-24 bg-gradient-to-br ${feature.gradient} rounded-tl-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { value: "14+", label: "Languages" },
            { value: "50+", label: "Specialties" },
            { value: "99.8%", label: "Accuracy" },
            { value: "24/7", label: "Support" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                {stat.value}
              </div>
              <div className="font-medium text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
