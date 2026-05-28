'use client';

import { useState } from 'react';
import { journeySteps } from '@/data/journey';

export default function JourneyMobile() {
  const [activeStep, setActiveStep] = useState('scientist');

  return (
    <div className="space-y-4 lg:hidden">
      {journeySteps.map((step, index) => {
        const isActive = activeStep === step.id;

        return (
          <div
            key={step.id}
            className={`overflow-hidden rounded-3xl border transition-all duration-500 ${
              isActive
                ? 'border-orange-500/30 bg-orange-500/5'
                : 'border-white/10 bg-[#050816]'
            }`}
          >
            <button
              onClick={() => setActiveStep(step.id)}
              className="flex w-full items-center gap-4 p-5 text-left"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30 text-sm font-semibold text-orange-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {step.subtitle}
                </p>
              </div>
            </button>

            {isActive && (
              <div className="border-t border-white/10 px-5 pb-6 pt-6">
                <p className="text-base leading-8 text-slate-300">
                  {step.narrative}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
