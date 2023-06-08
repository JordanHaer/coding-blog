import React from "react";
import AllBlogPostsButton from "./AllBlogPostsButton";

export default function AboutBody() {
  return (
    <main className="flex-grow flex flex-col items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About</h1>
          <p className="leading-loose mb-6">
            Welcome to my coding blog! My name is Jordan, and I&#39;m passionate about all things coding and
            technology. This blog is my way of sharing my knowledge, experiences, and insights with fellow coding
            enthusiasts.
          </p>
          <p className="leading-loose mb-6">
            Throughout this blog, you&#39;ll find a variety of articles, tutorials, and resources covering topics
            such as web development, programming languages, software engineering, and more. My goal is to provide
            valuable content that helps you enhance your coding skills and stay updated with the latest trends in
            the industry.
          </p>
          <p className="leading-loose mb-6">
            Whether you&#39;re a beginner just starting your coding journey or an experienced developer looking to
            expand your knowledge, I hope you&#39;ll find useful information and inspiration here. Feel free to
            explore the blog and leave comments or questions on any post that interests you. I&#39;m always excited
            to engage with the coding community!
          </p>
          <p className="leading-loose mb-6">
            Thank you for visiting my blog, and I hope you enjoy your time here. Happy coding!
          </p>
          <AllBlogPostsButton />
        </div>
      </div>
    </main>
  );
}
