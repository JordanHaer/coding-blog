import Link from "next/link";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8 lg:max-w-5xl">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: Post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="bg-white shadow-md p-6 h-full hover:bg-gray-100 transition-colors flex flex-col justify-between gap-16">
                <div>
                  <p className="text-2xl font-bold text-blue-500 mb-4">{post.title}</p>
                  <div className="content" dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
                </div>
                <p className="line-clamp-3 text-gray-400 ">{format(parseISO(post.date), "LLLL d, yyyy")}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
