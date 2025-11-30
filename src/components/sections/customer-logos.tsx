import React from 'react';

const CustomerLogos = () => {
  return (
    <div className="flex flex-col justify-center items-center text-xl md:text-2xl tracking-tighter gap-4">
      <div className="text-center">
        <p>Powering the world's best sales teams.</p>
        <p className="text-neutral-500">From next-gen startups to established enterprises.</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-8">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cff21b1-86f3-4fdf-82ab-1b4d1046fc92-orangeslice-ai/assets/svgs/bloom-2.svg"
          alt="Bloom"
          className="h-5 md:h-7 w-auto object-contain"
        />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cff21b1-86f3-4fdf-82ab-1b4d1046fc92-orangeslice-ai/assets/svgs/novoflow-3.svg"
          alt="Novoflow"
          className="h-6 md:h-8 w-auto object-contain"
        />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cff21b1-86f3-4fdf-82ab-1b4d1046fc92-orangeslice-ai/assets/svgs/pirros-4.svg"
          alt="Pirros"
          className="h-8 md:h-10 w-auto object-contain"
        />
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cff21b1-86f3-4fdf-82ab-1b4d1046fc92-orangeslice-ai/assets/svgs/tau9-5.svg"
          alt="Tau9"
          className="h-12 md:h-16 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default CustomerLogos;