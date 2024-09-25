import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Competitions from "@/components/competitions";
import Work from "@/components/work";
import Sponsors from "@/components/sponsors";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Header />
      <Hero />
      <About />
      <Competitions />
      <Work />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}
