import React from "react";
import hero from "../../../public/images/hero.jpg";
import AllBlogPostsButton from "./AllBlogPostsButton";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full relative">
        <Image src={hero} alt="Hero Image" fill placeholder="blur" className="object-cover" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 py-6 sm:py-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6 leading-snug">Welcome to My Blog!</h1>
            <p className=" text-white leading-loose mb-6">
              Here, I document my journey of learning to code and making strides in the tech industry. This
              platform serves as an outlet for me to share the knowledge and insights I&#39;ve gained throughout my
              experiences. As I explore new technologies, languages, and frameworks, I will document my encounters
              and provide updates on the projects I&#39;m currently working on. Stay tuned for exciting content and
              glimpses into my coding endeavors!
            </p>
            <AllBlogPostsButton />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-4 sm:pt-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-center">Recent blog posts</h2>
        </div>
      </div>
    </div>
  );
}
