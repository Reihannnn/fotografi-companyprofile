import { ServiceDetail } from "@/app/components/page/service-detail";
import { NavigationBar } from "@/app/components/layout/navigationBar";
import { Footer } from "@/app/components/layout/footer";

export default function WeddingPage() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <ServiceDetail
        title="Wedding"
        subtitle="Fotografi Pernikahan"
        description="Hari pernikahan adalah salah satu momen paling berharga dalam hidup Anda. Tim profesional kami akan mendokumentasikan setiap detail, dari persiapan pengantin hingga pesta resepsi. Kami memastikan setiap momen penuh emosi terabadikan dengan indah."
        images={[
          { src: "/asset/image/wedding/wedding-01.webp", alt: "Wedding ceremony photography" },
          { src: "/asset/image/wedding/wedding-4.webp", alt: "Wedding first dance" },
          { src: "/asset/image/wedding/wedding-2.webp", alt: "Wedding detail shot" },
          { src: "/asset/image/wedding/wedding-3.webp", alt: "Wedding first dance" },
        ]}
        packages={[
          {
            name: "Silver",
            price: "Rp -",
            features: [
              "1 Fotografer",
              "8 Jam Dokumentasi",
              "200+ Edited Photos",
              "Flash Drive",
              "Online Gallery",
            ],
          },
          {
            name: "Gold",
            price: "Rp -",
            popular: true,
            features: [
              "2 Fotografer",
              "12 Jam Dokumentasi",
              "400+ Edited Photos",
              "Album Premium 30x30",
              "Same Day Edit Video",
              "Flash Drive",
              "Online Gallery",
            ],
          },
          {
            name: "Platinum",
            price: "Rp -",
            features: [
              "3 Fotografer + 1 Videografer",
              "Full Day Dokumentasi",
              "Unlimited Edited Photos",
              "2 Album Premium 30x30",
              "Cinematic Wedding Film",
              "Same Day Edit Video",
              "Drone Coverage",
              "Flash Drive & Online Gallery",
            ],
          },
        ]}
        includes={[
          "Konsultasi Pra-Pernikahan",
          "Photo Editing Profesional",
          "Color Correction",
          "Online Private Gallery",
          "High Resolution Files",
          "Print-Ready Quality",
          "Backup Data Aman",
          "Revisi 2x",
          "Delivery 4-6 Minggu",
        ]}
      />
      <Footer></Footer>
    </>
  );
}
