import { NavigationBar } from "./components/layout/navigationBar";
import { HeroSection } from "./components/home/heroSection";
import { GallerySection } from "./components/home/galerySection";
import { ServiceSection } from "./components/home/serviceSection";
import { AboutSection } from "./components/home/aboutSection";
import { CTASection } from "./components/home/CTASection";
import { Footer } from "./components/layout/footer";
import { BusinessPartnerSection } from "./components/home/businessPartnerSection";

export default function Home() {
  return (
    <>
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
