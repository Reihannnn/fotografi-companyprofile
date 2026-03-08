import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"


export function ServiceDetail({
  title,
  subtitle,
  description,
  images,
  packages,
  includes,
}) {
  return (
    <div className="pt-25">
      {/* Back Link */}
      <div className="bg-background px-6 lg:px-8 pt-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/service"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span
              className="text-xs uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Kembali ke Layanan
            </span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-background py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <div>
            <p
              className="ml-1 text-s text-[#d3b08f] uppercase tracking-[0.4em] text-primary mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {subtitle}
            </p>
            <h1 className="text-4xl font-bold text-foreground md:text-6xl">
              {title}
            </h1>
            <p
              className="mt-6 text-base leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {description}
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border bg-[#d3b08f] text-black bg-primary px-8 py-3 text-s  uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"                
              >
                Konsultasi
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-card py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-foreground mb-8 md:text-5xl">
            Galeri
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {images.map((image, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-background py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-8 md:text-3xl">
            Apa yang Anda Dapatkan
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border border-border p-4"
              >
                <Check className="h-4 w-4 text-[#d3b08f] shrink-0" />
                <span
                  className="text-s md:text-md text-foreground"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-card py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p
              className="text-xl uppercase text-[#d3b08f] tracking-[0.3em] text-primary mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Paket Harga
            </p>
            <h2 className="text-2xl  font-bold  md:text-3xl text-balance">
              Pilih Paket Terbaik untuk Anda
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col border p-8 ${
                  pkg.popular
                    ? "border-primary"
                    : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span
                    className="absolute -top-4 bg-[#d3b08f] rounded-3xl text-black text-semibold left-6 bg-primary px-3 py-2 text-[12px] uppercase tracking-[0.2em] text-primary-foreground"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Populer
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mt-2 text-3xl font-bold text-primary">
                  {pkg.price}
                </p>
                <ul className="mt-6 flex flex-col gap-3 flex-1">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-md text-muted-foreground"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      <Check className="h-5 w-5 text-bold text-[#d3b08f] shrink-0" />
                    
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block text-center px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
                    pkg.popular
                      ? "bg-[#d3b08f] text-black hover:opacity-75"
                      : "border border-border text-white hover:bg-white hover:text-black"
                  }`}                  
                >
                  Pesan Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
