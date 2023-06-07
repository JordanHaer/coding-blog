import Link from "next/link";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <main className="flex-grow px-4 sm:px-4">
      <div className="container flex-grow max-w-5xl mx-auto px-4 py-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <div className="bg-white shadow-md p-6 h-full hover:bg-gray-100 transition-colors flex flex-col justify-between">
              <p className="text-2xl font-bold text-blue-500 mb-8">{post.title}</p>
              <p className="mt-2 line-clamp-3">{post.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
