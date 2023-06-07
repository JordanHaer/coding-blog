import BlogList from "../componets/BlogList";
import Footer from "../componets/Footer";
import Header from "../componets/Header";
import { getPosts } from "@/lib/posts";

export default function BlogListPage() {
  const posts = getPosts();
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <BlogList posts={posts} />
      <Footer />
    </div>
  );
}
