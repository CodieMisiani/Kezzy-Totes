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
            <h1 className="text-5xl font-extrabold cursor-default text-white">
              Carry your world sustainbly
            </h1>
          </div>
          <div>
            <h3 className="font-medium mt-4 cursor-default text-white">
              Discover our collection of eco friendly tote bags, designed for
              style and sustainability
            </h3>
          </div>
          <div>
            <button className="bg-green-600 hover:bg-green-500 w-32 h-8 mt-8 cursor-pointer rounded-md transition ease-in-out duration-300 text-white">
              Shop now
            </button>
            <button className="ml-4 border-2 border-green-500 hover:bg-green-500 w-32 h-8 mt-8 cursor-pointer rounded-md transition ease-in-out duration-300 text-white">
              View Collection
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
