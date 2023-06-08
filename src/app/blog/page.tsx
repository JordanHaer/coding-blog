import BlogList from "../componets/BlogList";
import Footer from "../componets/Footer";
import Header from "../componets/Header";
import { getPosts } from "@/lib/posts";
import { compareAsc } from "date-fns";

export default async function BlogListPage() {
  const posts = await getPosts().sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <BlogList posts={posts} count={posts.length} />
      <Footer />
    </div>
  );
}
