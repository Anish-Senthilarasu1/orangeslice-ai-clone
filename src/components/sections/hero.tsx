import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative font-inter overflow-hidden bg-white text-black">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cff21b1-86f3-4fdf-82ab-1b4d1046fc92-orangeslice-ai/assets/images/orange_tree-1.png"
        alt=""
        width={720}
        height={1080}
        priority
        className="absolute right-[-100px] top-0 h-screen w-auto z-20 hidden lg:block"
      />

      <section className="relative flex flex-col px-6 py-12 md:px-16 lg:px-48 md:py-20 lg:py-28 z-30">
        <div className="flex max-w-2xl flex-col gap-4">
          <div className="flex w-fit flex-row items-center gap-2 rounded-full border border-neutral-300 bg-black/10 px-3 py-1 backdrop-blur-md">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAAEBCAMAAABPMuDPAAAAQlBMVEXyZSLyZSLyZSLyZSLyZSL6roH91br2ilD+6tr4nGn0eDf7wp3+9e3zbyz3k1z0gUP7uI/5pXX+38n8y6z////yZSKuMvVfAAAABXRSTlOAQMBgICelMzEAAAOgSURBVHhe5MABDQAAAIIw3eifmSB8vA3Zt5vcuGEgCsLeUBSpnxnb4f2vmn068xK5Z8FuFQ8gCB9q80Dw42Pc+3y8UQABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACBR7GnuAF6MafNKnDsv+xx/+1mv3nOKjDKXwRWbwIWYJl4F6wigvclUCcWaCKCeRKwAtNFoBN4TC1wigjelMA2+S5YRATv+VyfXKC+NYIqEphVQEfgT2Dv0ws8VAT+BEqAXbCJCPwJHAEEuorAn0AAARGBO4H1CCFw7O+JoArIuQVGERH4EhgBBFQE/gQmF9ARnP4EljG5gB5Iiz+BGkBAreTqTyCAgIzAnUAogdMbwSIm0cQCeiAtvgR6MIEqInAkEEBARuBKIJzAwxOB5SsBb822n0dQxSoOJNBFBI4EAgmMp4jAkUAAATWQ6s8SaEFvz8vPIqhiWAYQcEQgEogqMD5FBBcS+BrBBPRAqtcTqIEF2vUIqsgmgIAjApFAaIF6NQKbwPcIKKAHUr2WQI8k4I+gilUcQMARgUggvEC/EkEzAM8E7wu2CxGsdhJFEvBH0MQqDiegV3J1JBBQ4NhFBDqBzyTvC4qIQCawjgwCOgKdQIstoFdydSQQRcD2rSNoVimRQPuPCFaLFF1AR7A5EggloK/BdAIZBPRVqE6ghxLwR7BaoBQCOgKdQDqBLiIQCSQSGJuIoNlJlEVAR3C8TKCkfHX7fLn+T5tASoFjf9X6YmlSCozyYvxVO4kSCegI1r8n0FIJ6IF0igQyCej9txiWZAI6gsfoViWxwPiy+2gzqzi1QLUR2ATSCeiBtBuSfAI6AjsWkguM738I9PQC3ZFADoGxKYC95xfQEZRxA4FRRALHLQSOXSSQXkBHsB75BXQEbWQV0APJruL8AmMVCaQW0BEsI5uAXsn21FsJVJFAZgH9juJmAsVOorsLlLsJIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAm3547QAAoGPFkAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBH6XAwc0AAAAAME2+ncWxOXNAI6Cs14i3Db7AAAAAElFTkSuQmCC"
              className="size-5 rounded-sm"
              alt=""
            />
            <p className="text-xs font-medium text-black/80">
              Backed by Y Combinator
            </p>
          </div>

          <h1 className="text-4xl font-normal tracking-tighter sm:text-5xl lg:text-6xl">
            Scale sales workflows with the <span className="font-medium">power of code</span>
          </h1>
          <p className="text-sm text-neutral-600 sm:text-base">
            Experiment, iterate, and scale revenue workflows faster than your competitors—because nothing is off-limits
          </p>

          <div className="mt-4 flex flex-row gap-3 md:mt-6">
            <a href="https://cal.com/vihaar-nandigala/30min?overlayCalendar=true" className="group flex items-center bg-black px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-black/80">
              Book a demo
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="relative py-6 md:py-10">
          <div className="absolute inset-0 -z-10 scale-105 rounded-2xl bg-gradient-to-br from-orange-400/10 via-amber-300/8 to-yellow-400/10 blur-3xl"></div>
          <div className="absolute inset-0 -z-10 scale-110 rounded-2xl bg-gradient-to-tl from-rose-400/5 via-transparent to-orange-500/8 blur-2xl"></div>
          
          <img
            className="w-full rounded-md border border-neutral-200 shadow-xl shadow-orange-500/5"
            src="/product_screenshots/main.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;