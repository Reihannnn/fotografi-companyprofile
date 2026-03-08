import { NavigationBar } from "@/app/components/layout/navigationBar";

export const metadata = {
  title: "Jasa Foto Wisuda Profesional | Graduation Service Jakarta",
  description:
    "Abadikan momen kelulusanmu dengan jasa foto dan video wisuda profesional di Jakarta & Jabodetabek. Hasil premium, tim berpengalaman, harga terjangkau. Booking sekarang!",
  keywords: [
    "jasa foto wisuda",
    "jasa foto SD",
    "jasa foto SMP",
    "jasa foto SMA",
    "jasa foto Sarjana",
    "graduation photography jakarta",
    "foto wisuda profesional",
    "foto wisuda jabodetabek",
  ],
  
  // // 1. Menentukan URL Utama
  // alternates: {
  //   canonical: "https://domainkamu.com/service/graduation",
  // },

  // 2. Mengatur Indexing
  robots: {
    index: true,
    follow: true,
  },
  // 3. OpenGraph (Facebook, WA, IG)
  openGraph: {
    title: "Jasa Foto Wisuda Profesional - Abadikan Momen Berhargamu",
    description: "Layanan fotografi wisuda premium untuk semua jenjang pendidikan di Jabodetabek.",
    url: "https://domainkamu.com/service/graduation",
    siteName: "Nama Brand Kamu",
    images: [
      {
        url: "https://domainkamu.com/images/og-graduation.jpg", // Pastikan file ini ada
        width: 1200,
        height: 630,
        alt: "Preview Jasa Foto Wisuda",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  // 4. Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Jasa Foto Wisuda Profesional Jakarta",
    description: "Hasil foto premium untuk momen kelulusanmu.",
    images: ["https://domainkamu.com/images/og-graduation.jpg"],
  },
};

import { ServiceDetail } from "@/app/components/page/service-detail";
import { Footer } from "@/app/components/layout/footer";

export default function GraduationPage() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <ServiceDetail
      title="Graduation"
      subtitle="Fotografi Wisuda"
      description="Wisuda adalah pencapaian besar yang layak diabadikan. Dari foto individu hingga bersama sahabat dan keluarga, kami pastikan momen kebanggaan ini terabadikan dengan sempurna."
      images={[
        { src: "/asset/image/graduation/graduation-02.jpg", alt: "Solo graduation portrait" },
        { src: "/asset/image/graduation/graduation-6.webp", alt: "solo graduation photo" },
        { src: "/asset/image/graduation/graduation-03.webp", alt: "Group graduation photo" },
        { src: "/asset/image/graduation/graduation-8.webp", alt: "Group graduation photo" },
        { src: "/asset/image/graduation/graduation-10.jpg", alt: "graduation photo with Family" },
        { src: "/asset/image/graduation/graduation-9.webp", alt: "graduation photo with ayang beb" },
        { src: "/asset/image/graduation/graduation-11.jpg", alt: "graduation photo with happiness family" },
      ]}
      packages={[
        {
          name: "Solo",
          price: "Rp 750.000",
          features: [
            "1 Fotografer",
            "1 Lokasi Kampus",
            "30 Menit Sesi",
            "15+ Edited Photos",
            "Soft Copy via Drive",
          ],
        },
        {
          name: "Duo / Sahabat",
          price: "Rp 1.200.000",
          popular: true,
          features: [
            "1 Fotografer",
            "2 Lokasi Kampus",
            "1 Jam Sesi",
            "30+ Edited Photos",
            "Untuk 2 Orang",
            "Soft Copy via Drive",
          ],
        },
        {
          name: "Group",
          price: "Rp 2.500.000",
          features: [
            "1 Fotografer + 1 Asisten",
            "2 Lokasi Kampus",
            "2 Jam Sesi",
            "60+ Edited Photos",
            "Hingga 10 Orang",
            "Flash Drive",
            "Online Gallery",
          ],
        },
      ]}
      includes={[
        "Konsultasi Pose & Lokasi",
        "Photo Editing Profesional",
        "Candid & Formal Shots",
        "Online Private Gallery",
        "High Resolution Files",
        "Quick Turnaround",
        "Backup Data Aman",
        "Revisi 1x",
        "Delivery 3-5 Hari",
      ]}
      />
      <Footer></Footer>
      </>
  )
}
