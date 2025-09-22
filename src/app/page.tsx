import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedCollection from "@/components/collection/FeaturedCollection";

export default function Home() {
  return (
    <>
      {/* This is the Homepage */}
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section>
            <HeroSection />
          </section>
          {/* Featured Collection */}
          <section>
            <FeaturedCollection />
          </section>
          <h1>Welcome to Kezzy Totes</h1>
          <p>Discover your perfect tote bag.</p>
        </main>
        <Footer />
      </div>
    </>
  );
}
