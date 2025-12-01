"use client";

import { motion } from "framer-motion";
import { FiMessageSquare, FiMic, FiSend, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    id: 1,
    title: "Pre-appointment preparation",
    subtitle: "Smart context loading",
    description:
      "Begin with intelligent visit previews and conversational AI that provides comprehensive patient background information.",
    icon: FiMessageSquare,
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    glowColor: "shadow-blue-500/50",
  },
  {
    id: 2,
    title: "Live consultation",
    subtitle: "Complete documentation",
    description:
      "Record every important moment with our intelligent medical scribe that understands your documentation preferences and adjusts automatically.",
    icon: FiMic,
    gradient: "from-purple-500 via-pink-500 to-purple-600",
    glowColor: "shadow-purple-500/50",
  },
  {
    id: 3,
    title: "Post-visit workflow",
    subtitle: "Finalize and export",
    description:
      "Automatically create billing codes, patient communications, and follow-up instructions. Export FHIR-compliant structured data ready for any healthcare system.",
    icon: FiSend,
    gradient: "from-indigo-500 via-purple-600 to-pink-600",
    glowColor: "shadow-indigo-500/50",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 py-32"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-blue-600 blur-[120px] filter"></div>
        <div
          className="absolute bottom-0 right-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-600 blur-[120px] filter"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 inline-block"
          >
            <span className="rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 text-sm font-semibold text-blue-300 backdrop-blur-sm">
              How It Works
            </span>
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Remarkably{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              intuitive
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
            VoiceDx's comprehensive AI toolkit accompanies you throughout the
            entire patient encounter.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60`}
              ></div>

              {/* Card */}
              <div className="relative h-full rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-xl transition-all group-hover:border-white/40">
                {/* Step number badge */}
                <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-200 text-xl font-bold text-gray-900 shadow-xl">
                  {step.id}
                </div>

                {/* Icon with gradient background */}
                <div
                  className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6 flex items-center justify-center shadow-2xl ${step.glowColor} group-hover:shadow-3xl transition-shadow`}
                >
                  <step.icon
                    className="h-10 w-10 text-white"
                    strokeWidth={2.5}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold text-transparent">
                    {step.subtitle}
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    {step.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute bottom-0 right-0 h-32 w-32 bg-gradient-to-br ${step.gradient} rounded-tl-full opacity-10 blur-2xl`}
                ></div>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 z-20 hidden h-0.5 w-8 bg-gradient-to-r from-white/40 to-transparent lg:block"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Features checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className="mb-6 text-center text-2xl font-bold text-white">
            Everything you need, all in one place
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Real-time transcription",
              "Smart visit summaries",
              "Automatic coding (ICD-10, CPT)",
              "Patient instructions generation",
              "FHIR R4 data export",
              "Multi-language support",
              "Custom templates",
              "HIPAA compliant",
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <FiCheckCircle className="h-6 w-6 flex-shrink-0 text-green-400" />
                <span className="font-medium text-gray-200">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
