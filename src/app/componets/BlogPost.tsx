import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import AllBlogPostsButton from "./AllBlogPostsButton";

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
            <AllBlogPostsButton />
          </div>
        </div>
      </div>
    </main>
  );
}
