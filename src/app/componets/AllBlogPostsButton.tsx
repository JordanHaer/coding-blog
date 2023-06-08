import Link from "next/link";

export default function AllBlogPostsButton() {
  return (
    <Link
      href="/blog"
      className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
    >
      All Blog Posts
    </Link>
  );
}
