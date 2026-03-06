import { NavigationBar } from "./components/layout/navigationBar";
import { HeroSection } from "./components/home/heroSection";
import { GallerySection } from "./components/home/galerySection";

export default function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HeroSection></HeroSection>
      <GallerySection></GallerySection>
      
    </>
  );
}
