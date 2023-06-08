import AboutBody from "../componets/AboutBody";
import Footer from "../componets/Footer";
import Header from "../componets/Header";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <AboutBody />
      <Footer />
    </div>
  );
}
