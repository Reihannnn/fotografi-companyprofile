import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-black text-white py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xl  uppercase tracking-[0.4em] text-[#d3b08f] mb-4">
          Mulai Sekarang
        </p>
        <h1 className="tracking-[3px] uppercase text-xl md:text-6xl font-serif font-bold mt-4 mb-10">
          Siap Mengabadikan Momen Anda?
        </h1>
        <p className="mt-6 sm:text-lg lg:text-xl leading-relaxed text-muted-foreground">
          Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran
          terbaik untuk kebutuhan fotografi Anda.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/service"
            className="bg-[#d3b08f] px-10 py-5 text-md uppercase tracking-[0.2em] font-semibold transition-opacity hover:opacity-75 text-black"
          >
            Pilih Paket
          </Link>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#d3b08f]0 px-10 py-5 text-md uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black font-semibold"
          >
            WhatsApp Kami
          </a>
        </div>
      </div>
    </section>
  );
}
