"use client";

import { useState } from "react";

const email = "pro.raphael.parmentier@gmail.com";
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

const valueAreas = [
  {
    title: "AI Engineering",
    text: "Production-ready AI workflows, LLM applications and automation systems.",
  },
  {
    title: "Data & Analytics",
    text: "Statistical reasoning, data quality and decision-support tools.",
  },
  {
    title: "Automation Systems",
    text: "End-to-end pipelines, APIs, scalable workflows and integrations.",
  },
  {
    title: "Teaching & Workshops",
    text: "Applied courses, workshops and interactive learning systems.",
  },
];

const interests = [
  "AI Engineering",
  "Data & Analytics",
  "Automation Systems",
  "Applied Teaching Projects",
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-448 px-5 py-24 sm:px-6 lg:py-32 2xl:px-10 2xl:py-40"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-orange-500/20 bg-linear-to-br from-slate-950 via-slate-950 to-orange-950/20 p-6 shadow-2xl shadow-orange-500/10 sm:p-8 lg:p-12 2xl:p-16">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative z-10 grid gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:items-start 2xl:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400 sm:text-sm 2xl:text-base">
              Contact
            </p>

            <h2 className="mt-4 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl 2xl:text-[6.4rem] 2xl:leading-[0.9]">
              Let&apos;s turn complex information into better decisions.
            </h2>

            <p className="mt-7 max-w-5xl text-lg leading-9 text-slate-400 xl:text-xl xl:leading-10 2xl:text-[1.35rem] 2xl:leading-10">
              I work at the intersection of science, data and AI systems to
              solve real problems, build automated workflows and design
              meaningful learning experiences.
            </p>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
                Where I add value
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {valueAreas.map((area) => (
                  <div
                    key={area.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900/45 p-5 2xl:p-6"
                  >
                    <h3 className="text-base font-semibold text-white 2xl:text-xl">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400 2xl:text-base 2xl:leading-7">
                      {area.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

            <div className="rounded-4xl border border-slate-800 bg-slate-950/75 p-5 shadow-2xl shadow-black/20 sm:p-7 lg:p-8 2xl:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
              Get in touch
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400 2xl:text-lg 2xl:leading-9">
              Open to roles, missions and collaborations around AI, data,
              automation and applied teaching.
            </p>

            <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-900/45 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
                Email
              </p>

              <p className="mt-3 break-all text-base font-medium text-white 2xl:text-xl">
                {email}
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
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

            <div className="mt-8 border-t border-slate-800 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 2xl:text-sm">
                Currently interested in
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {interests.map((interest) => (
                  <div
                    key={interest}
                    className="flex gap-3 text-sm leading-6 text-slate-400 2xl:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}