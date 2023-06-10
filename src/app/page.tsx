import Header from "./componets/Header";
import Hero from "./Hero";
import BlogList from "./componets/BlogList";
import Footer from "./componets/Footer";
import { getPosts } from "../lib/posts";
import { compareDesc } from "date-fns";

export default async function Home() {
  const posts = await getPosts().sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <BlogList posts={posts} count={3} />
      <Footer />
    </div>
  );
}
