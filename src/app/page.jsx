import { NavigationBar } from "./components/layout/navigationBar";
import { HeroSection } from "./components/home/heroSection";
import { GallerySection } from "./components/home/galerySection";
import { ServiceSection } from "./components/home/serviceSection";
import { AboutSection } from "./components/home/aboutSection";
import { CTASection } from "./components/home/CTASection";
import { Footer } from "./components/layout/footer";
import { BusinessPartnerSection } from "./components/home/businessPartnerSection";

// 1. Metadata Utama untuk Homepage
export const metadata = {
  title: "Hendrapotret | Jasa Fotografi & Videografi Profesional Jabodetabek",
  description:
    "Hendrapotret menyediakan layanan fotografi profesional untuk Wedding, Graduation, Engagement, dan Corporate Event di Jabodetabek. Hasil cinematic, tim ahli, dan harga kompetitif.",
  alternates: {
    canonical: "https://fotografi-companyprofile.vercel.app",
  },
  openGraph: {
    title: "Hendrapotret - Abadikan Setiap Momen Berharga Anda",
    description:
      "Layanan fotografi dan videografi premium dengan sentuhan artistik.",
    url: "https://fotografi-companyprofile.vercel.app",
    siteName: "Hendrapotret",
    images: [
      {
        url: "/asset/image/wedding/wedding-2.webp", // Ganti dengan foto terbaik Anda
        width: 1200,
        height: 630,
        alt: "Hendrapotret Photography & Videography",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hendrapotret",
    image:
      "https://fotografi-companyprofile.vercel.app/asset/hendrapotret-logo.webp",
    "@id": "https://fotografi-companyprofile.vercel.app",
    url: "https://fotografi-companyprofile.vercel.app",
    // telephone: "+628123456789", // Ganti dengan nomor asli Anda
    // address: {
    //   "@type": "PostalAddress",
    //   streetAddress: "Alamat Kantor Anda",
    //   addressLocality: "Jakarta",
    //   postalCode: "12345",
    //   addressCountry: "ID",
    // },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
    sameAs: [
      "https://www.instagram.com/hendrapotret_", // Masukkan sosmed asli
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationBar></NavigationBar>
      <HeroSection></HeroSection>
      <GallerySection></GallerySection>
      <ServiceSection></ServiceSection>
      <AboutSection></AboutSection>
      <BusinessPartnerSection></BusinessPartnerSection>
      <CTASection></CTASection>
      <Footer></Footer>
    </>
  );
}
