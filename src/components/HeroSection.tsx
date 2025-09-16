import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero-background.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1>Carry your world sustainbly</h1>
          </div>
          <div>
            <h3>
              Discover our collection of eco friendly tote bags, designed for
              style and sustainability
            </h3>
          </div>
          <div>
            <button>Shop now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
