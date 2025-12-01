"use client";

import { motion } from "framer-motion";
import { FiCheck, FiStar, FiZap, FiTrendingUp } from "react-icons/fi";
import { CTA_LINK } from "../navigation/constants";

const pricingTiers = [
  {
    name: "Starter",
    subtitle: "Perfect for solo practitioners",
    price: "$90",
    period: "/mo",
    clinicians: "1 Clinician",
    icon: FiZap,
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    glowColor: "shadow-blue-500/50",
    features: [
      "7-day free trial",
      "Unlimited note generation",
      "HIPAA compliant security",
      "Real-time transcription",
      "EHR integration",
      "Email support",
    ],
  },
  {
    name: "Professional",
    subtitle: "Best for growing practices",
    price: "$84",
    period: "/mo per clinician",
    clinicians: "2-9 Clinicians",
    popular: true,
    icon: FiStar,
    gradient: "from-purple-500 via-pink-500 to-purple-600",
    glowColor: "shadow-purple-500/60",
    features: [
      "Team template library",
      "Unlimited note generation",
      "HIPAA compliant security",
      "Real-time transcription",
      "EHR integration",
      "Priority support",
      "Team analytics dashboard",
      "Custom workflows",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Tailored for large organizations",
    price: "Custom",
    period: "pricing",
    clinicians: "10+ Clinicians",
    icon: FiTrendingUp,
    gradient: "from-indigo-500 via-purple-600 to-pink-600",
    glowColor: "shadow-indigo-500/50",
    features: [
      "Everything in Professional",
      "License management portal",
      "Organization-wide BAA",
      "Custom integrations",
      "Dedicated account manager",
      "Training & onboarding",
      "Advanced analytics",
      "Volume discounts",
      "SLA guarantee",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 py-16 sm:py-24 lg:py-32"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-600 blur-[120px] filter"></div>
        <div
          className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-600 blur-[120px] filter"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute left-1/2 top-1/2 h-80 w-80 animate-pulse rounded-full bg-pink-600 blur-[100px] filter"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 inline-block"
          >
            <span className="rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 text-sm font-semibold text-blue-300 backdrop-blur-sm">
              Flexible Pricing
            </span>
          </motion.div>

          <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:mb-5 sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
            Simple, transparent pricing that scales with your practice. Start
            with a free trial, no credit card required.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mx-auto mb-12 grid max-w-7xl gap-6 sm:mb-14 sm:gap-8 lg:mb-16 lg:grid-cols-3 lg:gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -8 }}
              className={`group relative ${tier.popular ? "lg:-mt-8 lg:scale-110" : ""}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70 ${tier.glowColor}`}
              ></div>

              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 backdrop-blur-2xl transition-all duration-300 ${
                  tier.popular
                    ? "border-2 border-white/30 bg-gradient-to-br from-white/20 to-white/5 shadow-2xl"
                    : "border border-white/20 bg-gradient-to-br from-white/10 to-white/5 hover:border-white/30"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 transform">
                    <div className="flex animate-pulse items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 px-6 py-2 text-sm font-bold text-white shadow-2xl">
                      <FiStar className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon with gradient background */}
                <div
                  className={`relative h-20 w-20 rounded-2xl bg-gradient-to-br ${tier.gradient} mb-6 flex items-center justify-center shadow-2xl ${tier.glowColor} group-hover:shadow-3xl transition-shadow`}
                >
                  <tier.icon
                    className="h-10 w-10 text-white"
                    strokeWidth={2.5}
                  />
                </div>

                {/* Tier Info */}
                <div className="mb-6">
                  <h3 className="mb-2 text-3xl font-bold text-white">
                    {tier.name}
                  </h3>
                  <p className="mb-1 text-sm text-gray-300">{tier.subtitle}</p>
                  <p className="text-xs font-semibold text-blue-300">
                    {tier.clinicians}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="bg-gradient-to-br from-white to-gray-200 bg-clip-text text-6xl font-extrabold text-transparent">
                      {tier.price}
                    </span>
                    <span className="text-lg text-gray-400">{tier.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-10 flex-grow space-y-4">
                  {tier.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`h-6 w-6 flex-shrink-0 rounded-lg bg-gradient-to-br ${tier.gradient} flex items-center justify-center shadow-lg ${tier.glowColor}`}
                      >
                        <FiCheck
                          className="h-4 w-4 text-white"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="font-medium leading-relaxed text-gray-200">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={CTA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn relative block w-full transform overflow-hidden rounded-xl py-4 text-center font-bold transition-all hover:scale-105 ${
                    tier.popular
                      ? "bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80"
                      : "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/20"
                  }`}
                >
                  <span className="relative z-10">Request a Demo</span>
                  {tier.popular && (
                    <div className="absolute inset-0 translate-x-[-200%] -skew-x-12 transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-[200%]"></div>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 text-center backdrop-blur-xl"
        >
          <p className="mb-2 text-lg text-gray-300">
            We're dedicated to making VoiceDx accessible to all aspiring
            clinicians.
          </p>
          <p className="font-semibold text-white">
            If you're a student or trainee, please{" "}
            <a
              href={CTA_LINK}
              className="text-cyan-400 underline decoration-cyan-400/50 transition-colors hover:text-cyan-300 hover:decoration-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              reach out
            </a>{" "}
            for special pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
