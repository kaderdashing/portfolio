import Image from '@/components/Image';
import { PageSEO } from '@/components/SEO';
import type { Authors } from 'contentlayer/generated';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company } = content;

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="pt-8">
        <div className="mb-8 flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-sm text-center md:w-1/2 md:text-left lg:max-w-full">
            <h1 className="mb-2 font-roboto text-xl font-medium md:text-2xl lg:text-3xl">
              Hi, I'm Youssouf Kacemi, I'm a UI/UX Designer and Frontend Developer
            </h1>
            <h1 className="font-roboto text-xl font-medium  text-gray-400 md:text-2xl lg:text-3xl ">
              {/* {occupation} <span className="font-semibold">{company}</span> */}
              Building beautiful and easy to use UIs for web and mobile applications, UI libraries,
              UI/UX Designs.
            </h1>
          </div>
          <div className="flex w-1/2 items-center justify-center align-middle ">
            <Image
              alt="Youssouf Kacemi"
              height={300}
              width={300}
              src={avatar || ''}
              className="rounded-full object-scale-down grayscale "
            />
          </div>
        </div>
        <div
          id="mdx"
          className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2"
        >
          {children}
        </div>
      </div>
    </>
  );
}
