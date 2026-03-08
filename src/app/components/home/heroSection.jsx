import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[95vh] w-full mt-20 overflow-hidden">
      {/* <!-- gradient transition --> */}
      {/* Background Images */}
      <div className="absolute inset-0 flex">
        <div className="relative flex-1 hidden md:block">
          <Image
            src="/asset/image/graduation/graduation-02.jpg"
            alt="graduation"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative flex-1">
          <Image
            src="/asset/image/graduation/graduation-03.webp"
            alt="graduation group"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative flex-1 hidden md:block">
          <Image
            src="/asset/image/wedding/wedding-01.webp"
            alt="wedding"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 text-white">
        <p className="tracking-[8px] text-xl text-white">
          JASA FOTOGRAFI PROFESIONAL
        </p>

        <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight mt-4">
          Abadikan Setiap <br /> Momen Berharga
        </h1>

        <p className="mt-6 max-w-2xl text-gray-300">
          Kami menghadirkan keindahan dalam setiap momen indah yang tidak terlupakan. Wedding, Prewedding,
          Engagement, Graduation, dan Event.
        </p>

        <div className="flex gap-4 mt-8">
          <Link href="/service">
            <button className="bg-white text-black px-6 py-3 hover:bg-gray-300">
              LIHAT LAYANAN
            </button>
          </Link>

          <Link href="/portofolio">
            <button className="border border-white px-6 py-3 hover:bg-white hover:text-black">
              PORTFOLIO
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
