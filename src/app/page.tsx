import HeroSection from "../components/home/HeroSection";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <CallToAction />
    </main>
  );
}
