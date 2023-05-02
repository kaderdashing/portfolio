import PostCard from '@/components/PostCard';
import { Blog } from 'contentlayer/generated';
import Link from 'next/link';

const MAX_DISPLAY = 3;

interface RecentPosts {
  posts: Omit<Blog, 'body' | '_raw' | '_id'>[];
}

export default function RecentPosts({ posts }: RecentPosts) {
  const slicedPost = posts.slice(0, MAX_DISPLAY);

  return (
    <>
      <div className="divide-gray-200 dark:divide-gray-700">
        <div className="flex w-full flex-col items-start justify-start gap-4 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
              Recent Posts
            </h3>
            <p className="text-lg font-semibold text-gray-400 dark:text-gray-300">
              I'm obsessed about learning, and I want to share with you what I've learned into a
              blog post
            </p>
          </div>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end text-xl font-semibold leading-6">
              <Link href="/blog">
                <h3 className="underline-magical cursor-pointer font-bold" aria-label="all posts">
                  Read All Post &rarr;
                </h3>
              </Link>
            </div>
          )}
        </div>
        <PostCard posts={slicedPost} showTags={false} />
      </div>
    </>
  );
}
