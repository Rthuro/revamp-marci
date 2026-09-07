import { BaitSection } from "./components/BaitSection";
import { HeroSection } from "./components/HeroSection";
import { SecondSection } from "./components/SecondSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full">
      <HeroSection />
      <SecondSection />
      <BaitSection />
    </div>
  );
}
