import AboutBody from "../componets/AboutBody";
import Footer from "../componets/Footer";
import Header from "../componets/Header";

export const metadata = {
  title: "About Me",
  description:
    "I am a passionate software engineer with expertise in web development and programming. Welcome to my coding blog, where I share my knowledge, insights, and experiences in the world of coding. Join me as I explore various programming languages, frameworks, and technologies, and provide tutorials, tips, and tricks to help you level up your coding skills. Let's embark on this coding journey together!",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <AboutBody />
      <Footer />
    </div>
  );
}
