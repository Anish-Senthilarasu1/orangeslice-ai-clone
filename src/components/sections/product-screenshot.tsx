import Image from "next/image";

const ProductScreenshot = () => {
  return (
    <>
      <div className="py-6 md:py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-amber-300/8 to-yellow-400/10 rounded-2xl blur-3xl scale-105 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-rose-400/5 via-transparent to-orange-500/8 rounded-2xl blur-2xl scale-110 -z-10" />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cff21b1-86f3-4fdf-82ab-1b4d1046fc92-orangeslice-ai/assets/images/main-2.jpg"
          alt=""
          width={1200}
          height={787}
          className="rounded-md border border-neutral-200 w-full shadow-xl shadow-orange-500/5"
        />
      </div>
      <div className="h-6 md:h-10" />
    </>
  );
};

export default ProductScreenshot;