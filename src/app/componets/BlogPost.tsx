import Link from "next/link";
import React from "react";

interface Props {
  post: { id: number; slug: string; title: string; content: string };
}

export default function BlogPost({ post }: Props) {
  return (
    <main className="flex-grow sm:px-2">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
          <p className="text-gray-700 leading-loose">{post.content}</p>
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
