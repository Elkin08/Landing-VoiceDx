"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { NAV_LINKS, CTA_LINK, SECTION_IDS } from "./constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const scrolled = useScrollPosition();
  const activeSection = useActiveSection(SECTION_IDS);

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
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-lg backdrop-blur-lg"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/#home"
            className="flex-shrink-0"
            onClick={(e) => handleSmoothScroll(e, "#home")}
          >
            <Logo />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center space-x-8 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`relative pb-1 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "font-semibold text-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  }`}
                >
                  {link.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-primary-700 hover:shadow-lg"
            >
              Request a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};
