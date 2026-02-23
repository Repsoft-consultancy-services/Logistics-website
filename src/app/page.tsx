import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import Certifications from "@/components/Certifications";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductsSection />
      <ServicesSection />
      <Certifications />
      <WhyUs />
      <Testimonials />
      <Contact />
    </>
  );
}
