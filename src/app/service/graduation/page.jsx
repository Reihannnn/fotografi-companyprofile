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

export default function GraduationPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Graduation Service</h1>
      <p>Layanan foto & video untuk acara wisuda.</p>
    </main>
  );
}