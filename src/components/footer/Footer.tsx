import React from "react";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";
import { FiShield, FiLock, FiCheck } from "react-icons/fi";
import { IconType } from "react-icons";
import Link from "next/link";
import { LogoSmall } from "../navigation/Logo";

export const Footer = () => {
  return (
    <div className="border-t border-white/10 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-950">
      <footer className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16">
        {/* Subtle glow effects */}
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl filter"></div>
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl filter"></div>

        <div className="relative z-10 mb-12 grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <LogoColumn />
          </div>
          <GenericColumn
            title="Product"
            links={[
              { title: "Features", href: "#features" },
              { title: "How It Works", href: "#how-it-works" },
              { title: "Pricing", href: "#pricing" },
              { title: "Testimonials", href: "#testimonials" },
            ]}
          />
          <GenericColumn
            title="Company"
            links={[
              { title: "About Us", href: "/#" },
              { title: "Contact", href: "mailto:hello@voicedx.com" },
              { title: "Careers", href: "/#" },
              { title: "Blog", href: "/#" },
            ]}
          />
          <GenericColumn
            title="Legal"
            links={[
              { title: "Privacy Policy", href: "/#" },
              { title: "Terms of Service", href: "/#" },
              { title: "HIPAA Compliance", href: "/#" },
              { title: "Security", href: "/#" },
            ]}
          />
          <SecurityBadges />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <span className="order-2 text-sm text-gray-400 md:order-1">
            © 2025 VoiceDx. All rights reserved.
          </span>

          <div className="order-1 flex items-center gap-6 md:order-2">
            <a
              href="https://www.facebook.com/clinicai.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 blur transition-opacity group-hover:opacity-50"></div>
              <div className="relative rounded-lg bg-white/10 p-2.5 text-white shadow-lg transition-all hover:bg-white/20 hover:text-white hover:shadow-xl">
                <SiFacebook size={22} />
              </div>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=3144098357&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 to-green-600 opacity-0 blur transition-opacity group-hover:opacity-50"></div>
              <div className="relative rounded-lg bg-white/10 p-2.5 text-white shadow-lg transition-all hover:bg-white/20 hover:text-white hover:shadow-xl">
                <SiWhatsapp size={22} />
              </div>
            </a>
            <a
              href="https://www.instagram.com/clinicai.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 blur transition-opacity group-hover:opacity-50"></div>
              <div className="relative rounded-lg bg-white/10 p-2.5 text-white shadow-lg transition-all hover:bg-white/20 hover:text-white hover:shadow-xl">
                <SiInstagram size={22} />
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-1 text-center lg:col-span-1 lg:text-left">
      <div className="inline-block scale-125 md:scale-110">
        <LogoSmall />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-400">
        AI-powered medical transcription for modern clinicians. Save time,
        reduce burnout, focus on patient care.
      </p>
    </div>
  );
};

const GenericColumn = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string; Icon?: IconType }[];
}) => {
  return (
    <div className="space-y-4">
      <span className="block text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </span>
      <div className="space-y-3">
        {links.map((l) => (
          <Link
            key={l.title}
            href={l.href}
            className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            {l.Icon && (
              <l.Icon className="transition-transform group-hover:scale-110" />
            )}
            <span className="transition-transform group-hover:translate-x-1">
              {l.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const SecurityBadges = () => {
  const badges = [
    {
      icon: FiShield,
      text: "HIPAA Compliant",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FiLock,
      text: "SOC 2 Type II",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiCheck,
      text: "99.8% Uptime",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="space-y-4">
      <span className="block text-sm font-bold uppercase tracking-wider text-white">
        Security
      </span>
      <div className="space-y-3">
        {badges.map((badge, idx) => (
          <div key={idx} className="group flex items-center gap-3">
            <div
              className={`h-8 w-8 rounded-lg bg-gradient-to-br ${badge.gradient} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
            >
              <badge.icon className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-sm text-gray-400 transition-colors group-hover:text-white">
              {badge.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
