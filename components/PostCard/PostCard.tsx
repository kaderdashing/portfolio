import Tag from '@/components/Tag';
import { CoreContent } from '@/lib/utils/contentlayer';
import type { Blog } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { format } from 'date-fns';
export interface PostCardProps {
  posts: CoreContent<Blog>[];
  showTags?: boolean;
}

export default function PostCard({ posts, showTags = true }: PostCardProps) {
  return (
    <div className="col-span-1 mt-8 grid w-full  gap-8 sm:col-span-2 lg:grid-cols-3">
      {posts.map(({ slug, title, tags, cover, date, readingTime }, index) => (
        <motion.div
          key={slug}
          className="py-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cover}
              alt={title}
              className="object-fit h-[450px] min-h-[200px] w-full rounded-md object-cover shadow-lg"
            />
            <h1 className="mt-8 text-lg font-semibold text-slate-500 dark:text-slate-300">
              {format(new Date(date), 'MMMM do, yyyy')} — {readingTime.text}
            </h1>
            <article className="cursor-pointer gap-3 space-y-2 bg-opacity-20 pb-5 pt-3 ">
              <div className="space-y-3">
                <span className="text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${slug}`}>
                    <span className="text-emerald-500 duration-300 hover:text-emerald-400">
                      {title}
                    </span>
                  </Link>
                </span>
                {showTags && tags && (
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}
                {/* <div className="prose max-w-none text-gray-900 dark:text-gray-100">{summary}</div> */}
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
