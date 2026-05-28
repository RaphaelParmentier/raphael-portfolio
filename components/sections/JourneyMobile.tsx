// components/sections/JourneyMobile.tsx

"use client";

import { journeySteps } from "@/data/journey";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function JourneyMobile() {
  const [activeStep, setActiveStep] = useState("scientist");

  return (
    <div className="space-y-4 lg:hidden">
      {journeySteps.map((step, index) => {
        const isActive = activeStep === step.id;

        return (
          <div
            key={step.id}
            className={`overflow-hidden rounded-[28px] border transition-all duration-500 ${
              isActive
                ? "border-orange-500/30 bg-orange-500/6"
                : "border-white/10 bg-[#050816]"
            }`}
          >
            <button
              onClick={() => setActiveStep(isActive ? "" : step.id)}
              className="flex w-full items-center gap-4 p-5 text-left"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                  isActive
                    ? "border-orange-500/40 bg-orange-500/10 text-orange-300"
                    : "border-white/10 text-slate-400"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>

                <p className="mt-1 text-sm text-slate-500">{step.subtitle}</p>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/10 px-5 pb-6 pt-6">
                    <div className="mb-5 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs text-orange-300">
                      {step.period}
                    </div>

                    <p className="text-base leading-8 text-slate-300">{step.narrative}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
