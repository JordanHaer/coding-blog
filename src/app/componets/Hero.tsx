import React from "react";
import hero from "../../../public/images/hero.jpg";
import AllBlogPostsButton from "./AllBlogPostsButton";

export default function Hero() {
  return (
    <main className="flex-grow flex flex-col items-center">
      <div
        className="w-full relative"
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 " style={{ backdropFilter: "blur(8px)" }}></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Welcome to My Blog</h1>
            <p className=" text-white leading-loose">
              Welcome to my coding blog, where I document my journey of learning and exploring web development.
              Here, I share insights, tutorials, and experiences as I delve into the world of web technologies.
              Join me on this exciting adventure as we uncover the intricacies of HTML, CSS, JavaScript,
              frameworks, and more. Let&#39;s learn and grow together in the vast landscape of web development.
            </p>
            <div className="mt-6">
              <AllBlogPostsButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
