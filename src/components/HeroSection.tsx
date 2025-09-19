import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold cursor-default text-white">
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
            <Button
              variant={"secondary"}
              className="bg-green-600 hover:scale-105 hover:shadow-lg hover:bg-green-500 w-32 h-8 mt-8 cursor-pointer rounded-md transition ease-in-out duration-300 text-white"
            >
              Shop now <ArrowRight />
            </Button>
            <Button
              variant={"ghost"}
              className="ml-4 border-2 border-green-500 hover:scale-105 hover:shadow-lg hover:bg-green-500 w-32 h-8 mt-8 cursor-pointer rounded-md transition ease-in-out duration-300 text-white"
            >
              View Collection <ArrowRight className="h-2 w-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
