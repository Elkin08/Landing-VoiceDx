"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { CTA_LINK } from "../navigation/constants";

const integrations = [
  { name: "HL7 FHIR R4", gradient: "from-blue-600 to-blue-700" },
  { name: "SMART on FHIR", gradient: "from-red-600 to-orange-600" },
  { name: "CDS Hooks", gradient: "from-green-600 to-emerald-600" },
  { name: "FHIR REST API", gradient: "from-purple-600 to-indigo-600" },
  { name: "Bulk Data", gradient: "from-cyan-600 to-blue-600" },
  { name: "OAuth 2.0", gradient: "from-pink-600 to-rose-600" },
  { name: "OpenID Connect", gradient: "from-indigo-600 to-purple-600" },
  { name: "FHIR Subscriptions", gradient: "from-teal-600 to-cyan-600" },
];

const benefits = [
  "Full FHIR R4 compliance",
  "Real-time data exchange",
  "Standardized resources",
  "Interoperable by design",
  "Secure authentication",
  "RESTful API access",
];

export const Integrations = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 py-32">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/3 top-1/3 h-96 w-96 animate-pulse rounded-full bg-blue-600 blur-[120px] filter"></div>
        <div
          className="absolute bottom-1/3 right-1/3 h-96 w-96 animate-pulse rounded-full bg-purple-600 blur-[120px] filter"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute left-2/3 top-2/3 h-80 w-80 animate-pulse rounded-full bg-pink-600 blur-[100px] filter"
          style={{ animationDelay: "1s" }}
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
            <span className="rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 text-sm font-semibold text-purple-300 backdrop-blur-sm">
              Integrations
            </span>
          </motion.div>

          <h2 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Seamless{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              FHIR Integration
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
            VoiceDx is built on FHIR standards for maximum interoperability.
            Connect seamlessly with any FHIR-compliant system.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${integration.gradient} rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60`}
                  ></div>

                  {/* Card */}
                  <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-xl backdrop-blur-xl transition-all group-hover:border-white/40">
                    <div
                      className={`bg-gradient-to-br text-center text-xl font-bold ${integration.gradient} bg-clip-text text-transparent`}
                    >
                      {integration.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl backdrop-blur-xl"
          >
            <h3 className="mb-8 text-3xl font-bold text-white">
              Integration Benefits
            </h3>
            <ul className="space-y-5">
              {benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50">
                    <FiCheck className="h-5 w-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-lg font-medium text-gray-200">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 p-10 text-center backdrop-blur-xl"
        >
          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Require specialized FHIR configuration?
          </h3>
          <p className="mb-6 text-lg text-gray-300">
            Our team handles tailored FHIR profiles and resource extensions.
            Share your technical specifications with us.
          </p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transform rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 px-8 py-4 font-bold text-white shadow-2xl shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-purple-500/80"
          >
            Connect with our integration team →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
