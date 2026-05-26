"use client";

import { useState } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const email = "pro.raphael.parmentier@gmail.com";
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-2xl shadow-orange-500/20 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-orange-400">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              AI systems, data products, workflow automation, teaching and consulting.
            </p>

            <p className="mt-4 break-all text-sm text-slate-500">{email}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400 transition hover:border-orange-400 hover:text-orange-300"
            aria-label="Close contact modal"
          >
            x
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            onClick={copyEmail}
            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-slate-950"
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
        </div>
      </div>
    </div>
  );
}
