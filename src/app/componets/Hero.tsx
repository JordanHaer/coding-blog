import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <main className="flex-grow sm:px-2">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to My Blog</h1>
          <p className="text-gray-700 leading-loose">
            Welcome to my coding blog, where I document my journey of learning and exploring web development. Here,
            I share insights, tutorials, and experiences as I delve into the world of web technologies. Join me on
            this exciting adventure as we uncover the intricacies of HTML, CSS, JavaScript, frameworks, and more.
            Let&#39;s learn and grow together in the vast landscape of web development.
          </p>
          <div className="mt-6">
            <Link
              href="/blog"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
            >
              See Blog Posts
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
