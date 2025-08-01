import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <h1>Welcome to Kezzy Totes</h1>
          <p>Discover your perfect tote bag.</p>
        </main>
        <Footer />
      </div>
    </>
  );
}
