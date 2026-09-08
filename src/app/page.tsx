import { BaitSection } from "./components/BaitSection";
import { HeroSection } from "./components/HeroSection";
import { SecondSection } from "./components/SecondSection";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Gallery } from "./components/Gallery";
import { Map } from "./components/Map";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full">
      <HeroSection />
      <SecondSection />
      <BaitSection />
      <Gallery />
      <Services />
      <Contact />
      <Map />
    </div>
  );
}
