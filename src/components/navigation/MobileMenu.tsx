"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, CTA_LINK } from "./constants";
import { FiMenu, FiX } from "react-icons/fi";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-20 border-t border-gray-200 bg-white shadow-xl">
          <div className="space-y-4 px-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-600"
              >
                {link.title}
              </Link>
            ))}

            {/* Mobile CTA */}
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full rounded-lg bg-primary-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
