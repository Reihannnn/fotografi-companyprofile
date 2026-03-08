import { NavigationBar } from "../components/layout/navigationBar";
import { Footer } from "../components/layout/footer";
import { GallerySectionPortofolio } from "../components/portofolio/portofolio";

export default function PortofolioPage(){
  return(
    <>
    <NavigationBar></NavigationBar>
    <GallerySectionPortofolio marginTopCustom={"mt-20"}></GallerySectionPortofolio>
    <Footer></Footer>
    </>
  )
}