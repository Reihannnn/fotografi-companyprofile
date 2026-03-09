import { NavigationBar } from "../components/layout/navigationBar";
import { Footer } from "../components/layout/footer";
import { GallerySectionPortofolio } from "../components/portofolio/portofolio";

export const metadata = {
  title: "Portofolio Fotografi & Videografi Profesional - Hendrapotret",
  description:
    "Lihat koleksi karya terbaik Hendrapotret. Mulai dari dokumentasi Wedding, Engagement, Graduation, hingga Corporate Event dengan hasil cinematic dan elegan.",
  alternates: {
    canonical: "https://fotografi-companyprofile.vercel.app/portofolio",
  },
  openGraph: {
    title: "Koleksi Karya Terbaik Hendrapotret | Portofolio Dokumentasi",
    description:
      "Inspirasi momen spesial yang telah kami abadikan dengan penuh cinta dan profesionalisme.",
    url: "https://fotografi-companyprofile.vercel.app/portofolio",
    images: [
      {
        url: "/asset/image/wedding/wedding.2.webp", // Ambil salah satu foto terbaik sebagai hero
        width: 1200,
        height: 630,
        alt: "Portofolio wedding oleh jasa Hendrapotret",
      },
    ],
    type: "website",
  },
};

export default function PortofolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageGallery",
        name: "Koleksi Foto Hendrapotret",
        description:
          "Galeri foto dokumentasi pernikahan, wisuda, dan event perusahaan.",
        author: {
          "@type": "Person",
          name: "Hendrapotret",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://fotografi-companyprofile.vercel.app",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portofolio",
            item: "https://fotografi-companyprofile.vercel.app/portofolio",
          },
        ],
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationBar></NavigationBar>
      <GallerySectionPortofolio
        marginTopCustom={"mt-20"}
      ></GallerySectionPortofolio>
      <Footer></Footer>
    </>
  );
}
