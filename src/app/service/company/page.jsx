import { ServiceDetail } from "@/app/components/page/service-detail";
import { NavigationBar } from "@/app/components/layout/navigationBar";
import { Footer } from "@/app/components/layout/footer";

export const metadata = {
  title: "Jasa Fotografi Perusahaan & Dokumentasi Event Kantor - Hendrapotret",
  description:
    "Dokumentasikan kegiatan perusahaan Anda secara profesional. Layanan foto seminar, gathering, peluncuran produk, dan branding corporate di Jakarta & sekitarnya.",
  alternates: {
    canonical: "https://fotografi-companyprofile.vercel.app/service/company",
  },
  openGraph: {
    title: "Hendrapotret - Profesional Corporate Photography",
    description:
      "Solusi dokumentasi event perusahaan dengan hasil premium dan cepat.",
    images: [
      {
        url: "/asset/image/company/company-4.webp",
        width: 1200,
        height: 630,
        alt: "Dokumentasi Seminar Perusahaan",
      },
    ],
  },
};

export default function CompanyServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jasa Fotografi Corporate Hendrapotret",
    serviceType: "Corporate Photography",
    provider: {
      "@type": "LocalBusiness",
      name: "Hendrapotret",
      areaServed: "Jabodetabek",
    },
    description:
      "Dokumentasi profesional untuk seminar, gathering, peluncuran produk, hingga dokumentasi branding perusahaan.",
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
        title="Company"
        subtitle="Corporate Photography"
        description="Dokumentasikan kegiatan perusahaan Anda secara profesional. Mulai dari seminar, gathering, peluncuran produk, hingga dokumentasi branding perusahaan."
        images={[
          {
            src: "/asset/image/company/company-1.webp",
            alt: "dokumentasi kegiatan perusahaan dan seminar",
          },
          {
            src: "/asset/image/company/company-2.webp",
            alt: "dokumentasi acara corporate dan presentasi perusahaan",
          },
        ]}
        packages={[
          {
            name: "Starter",
            price: "Rp -",
            features: [
              "1 Fotografer",
              "2 Jam Dokumentasi",
              "Dokumentasi Acara Perusahaan",
              "60+ Edited Photos",
              "Online Gallery",
            ],
          },
          {
            name: "Business",
            price: "Rp -",
            popular: true,
            features: [
              "1 Fotografer + 1 Asisten",
              "4 Jam Dokumentasi",
              "Company Event Coverage",
              "150+ Edited Photos",
              "Highlight Moment Photos",
              "Flash Drive & Online Gallery",
            ],
          },
          {
            name: "Enterprise",
            price: "Rp -",
            features: [
              "2 Fotografer + 1 Videografer",
              "6 Jam Dokumentasi",
              "Full Event Coverage",
              "250+ Edited Photos",
              "Corporate Highlight Video",
              "Flash Drive & Online Gallery",
            ],
          },
        ]}
        includes={[
          "Konsultasi Event Coverage",
          "Dokumentasi Kegiatan Perusahaan",
          "Photo Editing Profesional",
          "Stage & Audience Documentation",
          "Team & Group Photo",
          "High Resolution Files",
          "Online Private Gallery",
          "Revisi 1x",
          "Delivery 3-5 Hari",
        ]}
      />
      <Footer></Footer>
    </>
  );
}
