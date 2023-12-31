import { MDXLayoutRenderer } from '@/components/MDXComponents';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

const DEFAULT_LAYOUT = 'AuthorLayout';

export const getStaticProps = async () => {
  const author = allAuthors.find((p) => p.slug === 'about');
  return { props: { author: author || null } };
};

export default function About({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      {author ? (
        <MDXLayoutRenderer layout={author.layout || DEFAULT_LAYOUT} content={author} />
      ) : (
        <div>
          <p>il n'ya pas de donée</p>
        </div>
      )}
    </MainLayout>
  );
}
