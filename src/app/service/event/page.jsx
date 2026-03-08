import { ServiceDetail } from "@/app/components/page/service-detail";
import { NavigationBar } from "@/app/components/layout/navigationBar";
import { Footer } from "@/app/components/layout/footer";

export default function EventPage() {
  return (
    <>
    <NavigationBar></NavigationBar>
      <ServiceDetail
        title="Event"
        subtitle="Fotografi Event"
        description="Dari seminar dan konferensi hingga gathering dan gala dinner, kami menyediakan dokumentasi profesional yang menangkap energi, momen penting, dan detail dari acara Anda."
        images={[
          { src: "/asset/image/event/event-1.webp", alt: "padel event session" },
          { src: "/asset/image/event/event-2.webp", alt: "event religious photo" },
          { src: "/asset/image/event/event-3.webp", alt: "event for child photo session" },
          { src: "/asset/image/event/event-4.webp", alt: "photo of event seminar" },
        ]}
        packages={[
          {
            name: "Half Day",
            price: "Rp -",
            features: [
              "1 Fotografer",
              "4 Jam Coverage",
              "100+ Edited Photos",
              "Same Day Preview 10 Foto",
              "Flash Drive",
            ],
          },
          {
            name: "Full Day",
            price: "Rp -",
            popular: true,
            features: [
              "2 Fotografer",
              "8 Jam Coverage",
              "250+ Edited Photos",
              "Same Day Preview 20 Foto",
              "Flash Drive & Online Gallery",
            ],
          },
          {
            name: "Corporate",
            price: "Rp -",
            features: [
              "3 Fotografer + 1 Videografer",
              "Full Day Coverage",
              "500+ Edited Photos",
              "Highlight Video 3 Menit",
              "Same Day Preview 30 Foto",
              "Multi-Angle Coverage",
              "Flash Drive & Online Gallery",
            ],
          },
        ]}
        includes={[
          "Pre-Event Coordination",
          "Photo Editing Profesional",
          "Candid & Stage Coverage",
          "Online Gallery Sharing",
          "High Resolution Files",
          "Speaker & VIP Portraits",
          "Same Day Preview",
          "Backup Data Aman",
          "Delivery 1-2 Minggu",
        ]}
      />
      <Footer></Footer>
    </>
  );
}
