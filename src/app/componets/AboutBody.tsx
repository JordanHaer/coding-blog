import React from "react";
import AllBlogPostsButton from "./AllBlogPostsButton";

export default function AboutBody() {
  return (
    <main className="flex-grow flex flex-col items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="leading-loose mb-6">
            I&#39;m Jordan, and I&#39;m thrilled to share my journey of learning to code
            and my experiences as a developer with you. This blog is a platform where I can document my progress,
            share insights, and showcase my projects.
          </p>
          <p className="leading-loose mb-6">
            As you explore this blog, you&#39;ll discover a variety of articles and resources that cover various
            aspects of web development, programming languages, software engineering, and more. My aim is to provide
            valuable content that not only helps you enhance your coding skills but also offers glimpses into my
            personal growth and development as a coder.
          </p>
          <p className="leading-loose mb-6">
            Whether you&#39;re just starting out on your coding journey or have years of experience, I hope
            you&#39;ll find inspiration and useful information here. I encourage you to dive into the blog, explore
            different posts, and engage with the content by reaching out to me with any questions or thoughts you
            may have. I&#39;m always open to discussions and eager to connect with fellow coding enthusiasts.
          </p>
          <p className="leading-loose mb-6">
            Thank you for joining me on this exciting adventure of learning and sharing. I&#39;m grateful for your
            visit to my blog, and I hope you enjoy your time here. Happy coding!
          </p>
          <AllBlogPostsButton />
        </div>
      </div>
    </main>
  );
}
