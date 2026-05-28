// components/sections/ContactModal.tsx

"use client";

import { useState } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const email = "pro.raphael.parmentier@gmail.com";
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

const contactOptions = [
  "AI Engineering",
  "Data & Analytics",
  "Automation Systems",
  "Teaching & Workshops",
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 px-4 py-5 backdrop-blur-md sm:px-5">
      <div className="relative max-h-[calc(100svh-2.5rem)] w-full max-w-lg overflow-y-auto rounded-4xl border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-orange-500/20 sm:max-w-4xl sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/10 blur-3xl sm:h-72 sm:w-72" />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
                Contact
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl">
                Let&apos;s build something useful.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-lg sm:leading-8">
                Open to AI engineering, automation, analytics and applied teaching collaborations.
              </p>
            </div>

            <button
              onClick={onClose}
              className="shrink-0 rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400 transition hover:border-orange-400 hover:text-orange-300"
              aria-label="Close contact modal"
            >
              ×
            </button>
          </div>

          <div className="mt-7 grid gap-4 sm:mt-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:rounded-4xl sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
                Direct email
              </p>

              <p className="mt-4 break-all text-sm font-medium text-white sm:text-lg">{email}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(249,115,22,0.25)] transition hover:bg-orange-400"
                >
                  {copied ? "Email copied" : "Copy email"}
                </button>

                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-200 transition hover:border-orange-400 hover:bg-orange-500/20"
                >
                  Open Gmail
                </a>
              </div>
            </div>

            <div className="hidden rounded-4xl border border-slate-800 bg-slate-900/35 p-6 sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
                Good fit
              </p>

              <div className="mt-5 grid gap-3">
                {contactOptions.map((option) => (
                  <div key={option} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-7 sm:flex sm:flex-wrap">
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
      </div>
    </div>
  );
}
