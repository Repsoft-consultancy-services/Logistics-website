import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import Enquiry from "@/components/Enquiry";
import ProductsSection from "@/components/ProductsSection";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <Enquiry />
      <ProductsSection />
      <section className="bg-brand-bar">
        <p className="max-w-6xl mx-auto px-4 py-8 text-center font-display text-xl sm:text-2xl uppercase tracking-wide text-brand-ink">
          Services you can trust, quality you can afford
        </p>
      </section>
      <Gallery />
    </>
  );
}
