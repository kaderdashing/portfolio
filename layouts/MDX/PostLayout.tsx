import PageTitle from '@/components/PageTitle';
import PostComments from '@/components/PostComments';
import PostNavigation from '@/components/PostNavigation';
import { BlogSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { CoreContent } from '@/lib/utils/contentlayer';
import type { Authors, Blog } from 'contentlayer/generated';
import React, { ReactNode } from 'react';
import { annotate, annotationGroup } from 'rough-notation';
import { RoughAnnotation } from 'rough-notation/lib/model';

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

interface Props {
  content: CoreContent<Blog>;
  authorDetails: CoreContent<Authors>;
  children: ReactNode;
  next?: { slug: string; title: string };
  prev?: { slug: string; title: string };
}

export default function PostLayout({ content, authorDetails, children, next, prev }: Props) {
  const { slug, date, title, author, readingTime, cover } = content;
  React.useEffect(() => {
    const h1Elements = document.querySelectorAll('#mdx > h1');
    const h2Elements = document.querySelectorAll('#mdx > h2');
    const elements = [...h1Elements, ...h2Elements];
    console.log({ elements });
    const group: RoughAnnotation[] = [];
    elements.forEach((element) => {
      const annotatedElement = annotate(element as HTMLElement, {
        type: 'highlight',
        color: '#10b981',
      });
      group.push(annotatedElement);
    });
    const ag = annotationGroup(group);
    ag.show();
  }, []);
  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...content}
      />
      <article>
        <header className="space-y-1 rounded-lg py-4 px-2 text-left text-emerald-500 sm:py-6 md:py-10">
          <PageTitle>{title}</PageTitle>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="mt-2 flex flex-col justify-start text-base font-semibold leading-6 text-gray-300 sm:flex-row sm:space-x-2">
              <div className="flex items-center justify-center space-x-2 font-semibold">
                <span>{author}</span>
                <span>-</span>
                <time dateTime={date}>
                  {`${new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}`}
                </time>
              </div>
              <span className="hidden sm:block">-</span>
              <span>{readingTime.text}</span>
            </dd>
          </dl>
        </header>
        <div>
          {cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cover}
              alt={title}
              title={title}
              {...{
                widths: [280, 560, 840, 1100, 1300, 1650],
                sizes:
                  '(max-width:639px) 80vw (min-width:640px) and (max-width:1023px) 40vw (min-width:1024px) and (max-width:1620px) 25vw 420px',
                transformations: {
                  background: 'rgb:e6e9ee',
                  resize: {
                    type: 'fill',
                    aspectRatio: '3:4',
                  },
                },
              }}
              className="focus-ring w-full rounded-lg object-cover object-center transition"
              loading="lazy"
            />
          )}
        </div>
        <div
          className="divide-y divide-gray-200 font-medium dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-4 xl:row-span-2 xl:pb-0">
            <div id="mdx" className="prose max-w-none pt-8 pb-8 dark:prose-dark">
              {children}
              <PostNavigation prev={prev} next={next} />
              <PostComments />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
