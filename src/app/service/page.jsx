import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NavigationBar } from "../components/layout/navigationBar";
import { Footer } from "../components/layout/footer";

const services = [
  {
    title: "Wedding",
    description:
      "Dokumentasi lengkap hari pernikahan Anda. Dari persiapan hingga resepsi, kami tangkap setiap momen berharga dengan sentuhan sinematik yang elegan.",
    image: "/asset/image/wedding/wedding-01.webp",
    href: "/service/wedding",
    features: [
      "Foto Akad & Resepsi",
      "Same Day Edit Video",
      "Album Premium",
      "Flash Drive",
    ],
  },
  {
    title: "Company",
    description:
      "Mengambadikan kegiatan kerja perusahaan anda.",
    image: "/asset/image/company/company-1.webp",
    href: "/service/company",
    features: [
      "1-2 Lokasi",
      "Wardrobe Consultation",
      "Edited Photos",
      "Soft Copy",
    ],
  },
  {
    title: "Engagement",
    description:
      "Abadikan momen lamaran yang penuh kebahagiaan. Kami menangkap ekspresi tulus dan emosi yang tak terlupakan.",
    image: "/asset/image/engagement/engagement-1.webp",
    href: "/service/engagement",
    features: [
      "1 Lokasi",
      "1 Jam Sesi Foto",
      "Edited Photos",
      "Cinematic Clip",
    ],
  },
  {
    title: "Graduation",
    description:
      "Rayakan pencapaian akademis Anda dengan foto profesional. Solo maupun grup, kami siap mendokumentasikan momen kebanggaan ini.",
    image: "/asset/image/graduation/graduation-6.webp",
    href: "/service/graduation",
    features: [
      "Indoor & Outdoor",
      "Group Photo",
      "Edited Photos",
      "Quick Delivery",
    ],
  },
  {
    title: "Event",
    description:
      "Dokumentasi profesional untuk acara korporat, seminar, konferensi, gathering, dan berbagai event spesial.",
    image: "/asset/image/event/event-1.webp",
    href: "/service/event",
    features: [
      "Full Coverage",
      "Multi Photographer",
      "Same Day Preview",
      "Online Gallery",
    ],
  },
];

export default function ServicePage() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="pt-5 bg-black text-white ">
        {/* Header */}
        <section className=" py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text:xl lg:text-2xl uppercase tracking-[0.4em] text-primary mb-4">
              Layanan Kami
            </p>
            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl text-balance">
              Pilih Layanan yang Sesuai
            </h1>
            <p className="mt-6 mx-auto max-w-xl text-s md:text-lg text-xl leading-relaxed text-muted-foreground">
              Setiap layanan dirancang untuk memberikan pengalaman terbaik dan
              hasil foto yang memukau sesuai kebutuhan Anda.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="bg-card px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl flex flex-col gap-16 ">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Link
                    href={service.href}
                    className="group relative block overflow-hidden aspect-[2/2]"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div
                  className={`flex flex-col gap-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h2 className="text-5xl font-bold md:text-6xl">
                    {service.title}
                  </h2>
                  
                    <div>
                      <p className="text-2xl text-white leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="flex flex-col gap-2 mt-8 mb-8">
                        {service.features.map((feature, index) => (
                          <li
                            key={feature}
                            className="flex items-center  text-s md:text-lg text-white"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            <span className="h-1 w-1 rounded-full bg-primary" />
                            {index + 1}. {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-primary w-fit group"
                    >
                      <span className="text-md uppercase tracking-[0.2em]">
                        Detail selengkapnya
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-3" />
                    </Link>
                  </div>
              </div>
    
            ))}
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
