"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CakeShowcase from "@/components/CakeShowcase";
import AboutChef from "@/components/AboutChef";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <CakeShowcase />
        <AboutChef />
        <Courses />
        <Features />
        <Gallery />
        <Testimonials />
        <Register />
      </main>
      <Footer />
      <StickyMobileCTA />
    </SmoothScroll>
  );
}
