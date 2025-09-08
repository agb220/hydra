import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import HowWeBuildSection from './components/HowWeBuildSection';
import ServicesSection from './components/ServicesSection';
import TehnologiesSection from './components/TehnologiesSection';
import FormSection from './components/FormSection';

export default function Home() {
  return (
    <main className="mt-[73px] md:mt-[103px] ">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TehnologiesSection />
      <HowWeBuildSection />
      <FormSection />
    </main>
  );
}
