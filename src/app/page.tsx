export default function Home() {
  return (
    <div className="bg-zinc-50">
      <main>
        {/* Hero principal de Cava Candles */}
        {/* Estos componentes son simples, solo estamos organizando secciones */}
        {/* Se importan más abajo */}
        <HeroSection />
        <CollectionsSection />
       
        <TestimonialsSection />
        <FeaturedProductsSection />
        <NewProductsSection />
        {/* <AboutBrandSection /> */}
        {/* <NewsletterSection /> */}
      </main>
    </div>
  );
}

import { Hero as HeroSection } from "@/components/home/Hero";
import { Collections as CollectionsSection } from "@/components/home/Collections";
import { FeaturedProducts as FeaturedProductsSection } from "@/components/home/FeaturedProducts";
import { AboutBrand as AboutBrandSection } from "@/components/home/AboutBrand";
import { Testimonials as TestimonialsSection } from "@/components/home/Testimonials";
import { Newsletter as NewsletterSection } from "@/components/home/Newsletter";
import { NewProducts as NewProductsSection } from "@/components/home/NewProducts";

