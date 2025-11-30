import React from 'react';

const WorkflowsFeature = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 lg:gap-10 px-6 md:px-16 lg:px-32 py-10">
      <div className="flex flex-col w-full lg:w-[60%] items-center justify-center">
        <div className="w-full flex justify-center items-center">
          <div className="aspect-[14/9] w-full flex justify-center items-center overflow-hidden">
            <video
              src="https://www.orangeslice.ai/product_screenshots/workflow_dep.mp4"
              className="rounded-md border border-neutral-200 object-cover w-full h-full"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-[40%] gap-2 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tighter font-normal text-primary">
          Workflows that wire themselves.
        </h2>
        <p className="text-neutral-500 text-sm md:text-base">
          Write the logic, we figure out the order. No drag-and-drop, no manual connections—just code.
        </p>
      </div>
    </section>
  );
};

export default WorkflowsFeature;