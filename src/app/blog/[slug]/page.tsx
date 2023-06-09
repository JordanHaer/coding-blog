import BlogPost from "@/app/componets/BlogPost";
import Footer from "@/app/componets/Footer";
import Header from "@/app/componets/Header";
import { getPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return { title: post ? post.title : "Jordan's Coding Chronicles" };
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="sticky top-0">
        <Header />
      </div>
      <BlogPost post={post} />
      <Footer />
    </div>
  );
}
