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
    <section id="contact" className="relative z-10 px-5 py-20 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-[96rem] overflow-hidden rounded-[2.5rem] border border-orange-500/20 bg-gradient-to-br from-slate-950 via-slate-950 to-orange-950/20 p-6 shadow-2xl shadow-orange-500/10 sm:p-8 lg:p-12 2xl:p-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let's build something useful."
              description="Open to AI engineering, data science, automation, consulting and education projects where analytical rigor meets practical systems."
            />

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 2xl:text-xl 2xl:leading-9">
              The best fit: projects sitting between data, people and operational
              decisions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/70 p-5 sm:p-6 2xl:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-orange-300">
              Direct contact
            </p>

            <p className="mt-4 break-all text-base font-medium text-white sm:text-lg 2xl:text-xl">
              {email}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(249,115,22,0.25)] transition hover:bg-orange-400 2xl:text-base"
              >
                {copied ? "Email copied" : "Copy email"}
              </button>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-200 transition hover:border-orange-400 hover:bg-orange-500/20 2xl:text-base"
              >
                Open Gmail
              </a>

              <a
                href="https://www.linkedin.com/in/raphaelparmentier/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300 2xl:text-base"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/RaphaelParmentier"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300 2xl:text-base"
              >
                GitHub
              </a>

              <a
                href="/Raphael_Parmentier_CV_EN.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300 sm:col-span-2 2xl:text-base"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}