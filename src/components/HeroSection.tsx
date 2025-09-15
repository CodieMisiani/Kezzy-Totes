import React from "react";
import heroImage from "@/assets/hero-background.jpg";
const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </section>
    </>
  );
};

export default HeroSection;
