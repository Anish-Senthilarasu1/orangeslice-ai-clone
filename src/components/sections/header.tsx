import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="sticky top-0 z-[100]">
      <header className="flex w-full flex-row items-center justify-between gap-3 bg-white/80 px-4 py-4 backdrop-blur-lg md:gap-6 md:px-16">
        <div className="flex flex-row items-center gap-3 md:gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cff21b1-86f3-4fdf-82ab-1b4d1046fc92-orangeslice-ai/assets/svgs/logo_black-1.svg"
              alt="Orange Slice Logo"
              width={28}
              height={29}
              className="w-7"
            />
            <div className="flex flex-col">
              <div className="flex flex-row items-end gap-2">
                <span className="whitespace-nowrap text-lg tracking-tighter text-black md:text-xl">
                  Orange Slice
                </span>
                <span className="mb-[4px] hidden text-xs text-neutral-500 sm:block">
                  beta
                </span>
              </div>
            </div>
          </Link>
          <a
            href="https://docs.orangeslice.ai"
            className="hidden text-sm text-neutral-600 sm:block"
          >
            Docs
          </a>
          <a
            href="mailto:vihaar@orangeslice.ai"
            className="hidden text-sm text-neutral-600 md:block"
          >
            Email the founders
          </a>
        </div>
        <div className="flex flex-row gap-3"></div>
      </header>
    </div>
  );
};

export default Header;