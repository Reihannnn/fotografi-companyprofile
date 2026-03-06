import Link from "next/link";
import { ArrowRight} from "lucide-react";
import Image from "next/image";

export function ServiceSection() {
  const services = [
    {
      title: "Graduation",
      description:
        "Abadikan momen pencapaian akademis dengan foto profesional.",
      src: "/asset/image/graduation/graduation-7.jpg",
      href: "/service/graduation",
    },
    {
      title: "Wedding",
      description:
        "Mengabadikan hari pernikahan Anda secara utuh dengan nuansa sinematik yang berkelas.",
      src: "/asset/image/wedding/wedding-2.webp",
      href: "/service/wedding",
    },
    {
      title: "Engagement",
      description: "Momen lamaran yang penuh kebahagiaan dan emosi untuk melangkah lebih serius",
      src: "/asset/image/engagement/engagement-1.webp",
      href: "/service/engagement",
    },
    {
      title: "Event",
      description:
        "Dokumentasi acara korporat, formal, seminar, dan pertemuan.",
      src: "/asset/image/event/event-1.webp",
      href: "/service/event",
    },
    {
      title: "Company",
      description:
        "Menghadirkan dokumentasi visual berkualitas untuk setiap kegiatan dan kebutuhan perusahaan.",
      src: "/asset/image/company/company-2.webp",
      href: "/service/company",
    },
  ];
  return (
    <section className="w-full text-white bg-black p-8">
      <div className="text-center mt-12">
        <h1 className="tracking-[6px] md:text-xl">LAYANAN</h1>
        <h1 className="tracking-[6px] text-2xl md:text-5xl font-serif font-bold mt-4 mb-4">
          YANG KAMI TAWARKAN
        </h1>
      </div>

      {/* layanan yang ditawarkan */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-9/10 mx-auto">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group relative overflow-hidden aspect-[3/4]"
          >
            <Image
              src={service.src}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
              <h3 className="text-3xl tracking-[1px]  text-white font-bold text-foreground">
                {service.title}
              </h3>
              <p
                className="text-md tracking-[1px] text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {service.description}
              </p>
              <div className="flex items-center gap-2 mt-2 text-primary">
                <span
                  className="text-s uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Selengkapnya
                </span>
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
