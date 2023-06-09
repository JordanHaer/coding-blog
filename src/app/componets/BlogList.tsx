import Link from "next/link";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

interface BlogListProps {
  posts: Post[];
  count: number;
}

export default function BlogList({ posts, count }: BlogListProps) {
  const numberOfPosts = posts.slice(0, count);
  return (
    <div className="flex-grow">
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {numberOfPosts.map((post: Post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="bg-white shadow-md p-6 h-full hover:bg-gray-100 transition-colors flex flex-col justify-between gap-12">
                <div>
                  <p className="text-2xl font-bold text-blue-500 mb-4">{post.title}</p>
                  <div className="content" dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
                </div>
                <p className="text-gray-400 ">{format(parseISO(post.date), "LLLL d, yyyy")}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
