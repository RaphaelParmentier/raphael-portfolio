"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed top-0 z-50 w-full
          border-b border-white/5
          bg-[#08090B]/80
          backdrop-blur-xl
        "
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#top"
            className="
              flex items-center gap-3
              text-sm font-medium tracking-[0.3em]
              text-[#F3F1EA]
            "
          >
            <div className="h-2 w-2 rounded-full bg-[#E9792D]" />
            RP SYSTEMS
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#projects"
              className="
                text-sm text-[#A7A29A]
                transition-colors
                hover:text-[#F3F1EA]
              "
            >
              Projects
            </a>

            <a
              href="#experience"
              className="
                text-sm text-[#A7A29A]
                transition-colors
                hover:text-[#F3F1EA]
              "
            >
              Experience
            </a>

            <button
              onClick={() => setIsContactOpen(true)}
              className="
                text-sm text-[#A7A29A]
                transition-colors
                hover:text-[#F3F1EA]
              "
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}