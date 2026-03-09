import { ServiceDetail } from "@/app/components/page/service-detail";
import { NavigationBar } from "@/app/components/layout/navigationBar";
import { Footer } from "@/app/components/layout/footer";

export const metadata = {
  title: "Jasa Foto Lamaran (Engagement) Cinematic & Intimate - Hendrapotret",
  description:
    "Abadikan momen sakral lamaran Anda dengan jasa foto dan video profesional dari Hendrapotret. Paket Intimate, Classic, hingga Grand dengan hasil cinematic dan elegan.",
  alternates: {
    canonical: "https://fotografi-companyprofile.vercel.app/service/engagement",
  },
  openGraph: {
    title: "Momen Lamaran Tak Terlupakan - Hendrapotret Photography",
    description:
      "Dokumentasi lamaran profesional yang menangkap setiap air mata haru dan tawa bahagia.",
    images: [
      {
        url: "/asset/image/engagement/engagement-1.webp",
        width: 1200,
        height: 630,
        alt: "Dokumentasi Lamaran Romantis oleh Hendrapotret",
      },
    ],
    type: "website",
  },
};

export default function EngagementServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jasa Fotografi Lamaran Hendrapotret",
    serviceType: "Engagement Photography",
    provider: {
      "@type": "LocalBusiness",
      name: "Hendrapotret",
      image:
        "https://fotografi-companyprofile.vercel.app/asset/image/engagement/engagement-1.webp",
    },
    description:
      "Layanan dokumentasi lamaran profesional mulai dari paket intimate hingga grand coverage.",
    areaServed: "Jabodetabek",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "IDR",
      offerCount: "3",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationBar></NavigationBar>
      <ServiceDetail
        title="Engagement"
        subtitle="Fotografi Lamaran"
        description="Momen lamaran adalah awal dari perjalanan indah bersama. Biarkan kami menangkap ekspresi kebahagiaan, air mata haru, dan cinta yang terpancar dalam setiap foto."
        images={[
          {
            src: "/asset/image/engagement/engagement-1.webp",
            alt: "sesi foto lamaran bersama kekasih",
          },
          {
            src: "/asset/image/engagement/engagement-2.webp",
            alt: "sesi foto lamaran bersama kekasih untuk melanjutkan jenjang selanjutnya",
          },
        ]}
        packages={[
          {
            name: "Intimate",
            price: "Rp -",
            features: [
              "1 Fotografer",
              "1 Lokasi",
              "1 Jam Sesi",
              "30+ Edited Photos",
              "Flash Drive",
            ],
          },
          {
            name: "Classic",
            price: "Rp -",
            popular: true,
            features: [
              "1 Fotografer + 1 Asisten",
              "1 Lokasi",
              "2 Jam Sesi",
              "80+ Edited Photos",
              "Short Cinematic Clip",
              "Flash Drive & Online Gallery",
            ],
          },
          {
            name: "Grand",
            price: "Rp -",
            features: [
              "2 Fotografer + 1 Videografer",
              "1 Lokasi",
              "3 Jam Sesi",
              "150+ Edited Photos",
              "Cinematic Video 2 Menit",
              "Mini Album 20x20",
              "Flash Drive & Online Gallery",
            ],
          },
        ]}
        includes={[
          "Konsultasi Setup & Dekorasi",
          "Photo Editing Profesional",
          "Candid & Posed Shots",
          "Online Private Gallery",
          "High Resolution Files",
          "Ring Detail Shot",
          "Family Group Photo",
          "Revisi 1x",
          "Delivery 1-2 Minggu",
        ]}
      />
      <Footer></Footer>
    </>
  );
}
