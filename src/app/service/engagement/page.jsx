import { ServiceDetail } from "@/app/components/page/service-detail";
import { NavigationBar } from "@/app/components/layout/navigationBar";
import { Footer } from "@/app/components/layout/footer";

export default function EngagementServicePage() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <ServiceDetail
        title="Engagement"
        subtitle="Fotografi Lamaran"
        description="Momen lamaran adalah awal dari perjalanan indah bersama. Biarkan kami menangkap ekspresi kebahagiaan, air mata haru, dan cinta yang terpancar dalam setiap foto."
        images={[
          { src: "/asset/image/engagement/engagement-1.webp", alt: "sesi foto lamaran bersama kekasih" },
          { src: "/asset/image/engagement/engagement-2.webp", alt: "sesi foto lamaran bersama kekasih untuk melanjutkan jenjang selanjutnya" },
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
