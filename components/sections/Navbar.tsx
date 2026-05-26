"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

const links = [
  { label: "Journey", href: "#journey", className: "hidden sm:inline" },
  { label: "Teaching", href: "#teaching", className: "hidden md:inline" },
  { label: "Work", href: "#work", className: "hidden sm:inline" },
  { label: "Building", href: "#building", className: "hidden lg:inline" },
];

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08090B]/90 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[112rem] items-center justify-between px-5 py-4 sm:px-6 sm:py-5 2xl:px-10">
          <a
            href="#top"
            className="group flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full border border-transparent pr-3 text-xs font-semibold tracking-[0.28em] text-[#F3F1EA] transition sm:text-sm 2xl:text-base"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#E9792D] shadow-[0_0_18px_rgba(233,121,45,0.9)]" />
            <span className="transition group-hover:text-orange-200">
              RP SYSTEMS
            </span>
          </a>

          <nav className="flex min-w-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 shadow-2xl shadow-black/20 sm:gap-3 md:gap-4 lg:gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${link.className} whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-[#B8B2AA] transition-colors hover:bg-white/[0.06] hover:text-[#F3F1EA] 2xl:text-base`}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => setIsContactOpen(true)}
              className="shrink-0 whitespace-nowrap rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(249,115,22,0.22)] transition hover:bg-orange-400 hover:shadow-[0_0_32px_rgba(249,115,22,0.35)] 2xl:px-5 2xl:text-base"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}