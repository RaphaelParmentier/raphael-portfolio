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
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#08090B]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[96rem] items-center justify-between px-5 py-4 sm:px-6 sm:py-5">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-3 whitespace-nowrap text-xs font-semibold tracking-[0.28em] text-[#F3F1EA] sm:text-sm"
          >
            <div className="h-2 w-2 rounded-full bg-[#E9792D] shadow-[0_0_18px_rgba(233,121,45,0.8)]" />
            RP SYSTEMS
          </a>

          <nav className="flex min-w-0 items-center gap-2 sm:gap-3 md:gap-5 lg:gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${link.className} whitespace-nowrap text-sm text-[#A7A29A] transition-colors hover:text-[#F3F1EA]`}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => setIsContactOpen(true)}
              className="shrink-0 whitespace-nowrap rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300 transition hover:bg-orange-500 hover:text-white"
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
