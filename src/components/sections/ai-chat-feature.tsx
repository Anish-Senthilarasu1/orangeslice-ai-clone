import React from "react";

const AiChatFeature = () => {
  return (
    <>
      <hr className="w-full bg-neutral-200 border-neutral-200 h-px" />
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-10 px-6 md:px-16 lg:px-32 py-10 lg:py-16">
        <div className="flex flex-col items-center gap-3 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tighter">
            Just describe what you want.
            <br />
            <span className="text-neutral-400">AI builds it.</span>
          </h2>
          <p className="text-neutral-500 text-sm md:text-base max-w-xl">
            Our AI chat isn&apos;t limited by templates or pre-built actions. It
            writes real code, creates entire workflows from scratch, and adapts
            to whatever your business needs. If you can describe it, it can
            build it.
          </p>
        </div>
        <div className="w-full max-w-5xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-amber-500/10 rounded-xl blur-2xl -z-10"></div>
          <img
            className="rounded-xl border border-neutral-200 shadow-2xl shadow-orange-500/5 w-full"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cff21b1-86f3-4fdf-82ab-1b4d1046fc92-orangeslice-ai/assets/images/ai_chat-3.jpg"
            alt="AI Chat interface showing workflow creation"
          />
        </div>
      </div>
    </>
  );
};

export default AiChatFeature;