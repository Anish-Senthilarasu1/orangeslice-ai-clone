import React from 'react';

const TypeScriptFeature = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 px-6 md:px-16 lg:px-32 py-5">
      <div className="flex flex-col w-full lg:w-[40%] gap-2 text-center lg:text-left">
        <p className="text-2xl md:text-3xl lg:text-4xl tracking-tighter font-display">
          A TypeScript library built for sales.
        </p>
        <p className="text-neutral-500 text-sm md:text-base font-body">
          We built a fully-typed SDK with autocomplete for every enrichment—LinkedIn
          profiles, contact info, company data, and more. No guessing APIs. Just
          type{' '}
          <code className="px-1 py-0.5 bg-neutral-100 rounded text-neutral-600 font-mono text-xs">
            services.
          </code>{' '}
          and let your editor guide you.
        </p>
      </div>
      <div className="flex w-full lg:w-[60%]">
        <video
          src="https://www.orangeslice.ai/product_screenshots/typed.mp4"
          className="rounded-md border border-neutral-200"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default TypeScriptFeature;