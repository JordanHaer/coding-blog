import Link from "next/link";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

interface BlogPostProps {
  post: Post;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <main className="flex-grow sm:px-2">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">{post.title}</h1>
          <p className="text-gray-400 mb-3">{format(parseISO(post.date), "LLLL d, yyyy")}</p>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
          <div className="mt-6">
            <Link
              href="/blog"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
            >
              All Blog Posts
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
