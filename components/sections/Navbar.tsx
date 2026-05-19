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

         <nav className="flex items-center gap-3 md:gap-8">
          <a
            href="#projects"
            className="
              hidden
              text-sm text-[#A7A29A]
              transition-colors
              hover:text-[#F3F1EA]
              sm:inline
            "
          >
            Projects
          </a>

          <a
            href="#experience"
            className="
              hidden
              text-sm text-[#A7A29A]
              transition-colors
              hover:text-[#F3F1EA]
              md:inline
            "
          >
            Experience
          </a>

          <button
            onClick={() => setIsContactOpen(true)}
            className="
              rounded-full
              bg-orange-500/10
              px-4
              py-2
              text-sm
              font-semibold
              text-orange-300
              transition
              hover:bg-orange-500
              hover:text-white
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