"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const email = "pro.raphael.parmentier@gmail.com";
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="relative z-10 px-5 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-[72rem] overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/70 p-6 shadow-2xl shadow-orange-500/10 sm:p-8 lg:p-10 2xl:max-w-[86rem] 2xl:p-12">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something useful."
          description="Open to AI engineering, data science, automation, consulting and education projects where analytical rigor meets practical systems."
        />

        <p className="mt-7 break-all text-sm text-slate-500 sm:text-base 2xl:text-lg">
          {email}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#08090B]"
          >
            {copied ? "Email copied" : "Copy email"}
          </button>

          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
          >
            Open Gmail
          </a>

          <a
            href="https://www.linkedin.com/in/raphaelparmentier/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/RaphaelParmentier"
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
          >
            GitHub
          </a>

          <a
            href="/Raphael_Parmentier_CV_EN.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
