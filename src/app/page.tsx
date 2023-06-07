import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
