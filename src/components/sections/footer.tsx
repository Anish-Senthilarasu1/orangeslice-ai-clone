import React from 'react';

const TwitterIcon = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231M16.971 19.69h1.64l-6.53-15.1H10.4z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V8h3v11ZM6.5 6.73c-.966 0-1.75-.79-1.75-1.76S5.534 3.2 6.5 3.2s1.75.79 1.75 1.76-.783 1.77-1.75 1.77ZM19 19h-3v-5.6c0-1.33-.027-3.04-1.852-3.04-1.853 0-2.136 1.44-2.136 2.94V19h-3V8h2.88v1.34h.04a3.21 3.21 0 0 1 2.89-1.5c3.09 0 3.66 2.03 3.66 4.67V19Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer>
      <hr className="w-full bg-neutral-200 border-neutral-200 h-px" />
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://x.com/orangesliceai" className="text-black hover:text-neutral-500">
            <span className="sr-only">Twitter</span>
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com/company/106441399/" className="text-black hover:text-neutral-500">
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-black">
            © 2025 Orange Slice, Inc. All rights reserved.
          </p>
        </div>
      </div>
      <div className="w-full relative overflow-hidden min-h-[100px] md:min-h-[200px] lg:min-h-[330px]">
        <p className="font-normal text-[80px] sm:text-[120px] md:text-[200px] lg:text-[320px] absolute left-1/2 -translate-x-1/2 tracking-tighter whitespace-nowrap">
          OrangeSlice
        </p>
      </div>
    </footer>
  );
};

export default Footer;