"use client";

import Header from "@/components/Header/Header";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import FeaturedProducts from "@/components/Sections/FeaturedProducts";
import Gallery from "@/components/Sections/Gallery";
import Hero from "@/components/Sections/Hero";
import Services from "@/components/Sections/Services";
import Testimonials from "@/components/Sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProducts />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}
