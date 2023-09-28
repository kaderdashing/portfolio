import Image from '@/components/Image';
import { PageSEO } from '@/components/SEO';
import experiences from '@/data/experience';
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
            <h1 className="mb-4 font-roboto text-xl font-medium md:text-2xl lg:text-3xl">
              Hi, I'm {name}, I'm a {occupation}{' '}
              <span className="font-semibold text-emerald-600">{company}</span>
            </h1>
            <h1 className="font-roboto text-xl font-medium  text-gray-400 md:text-2xl lg:text-3xl ">
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
              className="rounded-full object-scale-down shadow-xl grayscale"
            />
          </div>
        </div>
        <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
          <h2>Who am I ?</h2>
          <p>
            I am a Front-end Developer and UI/UX Designer, who has more than 2 years of commercial
            experience in building beautiful and easy to use websites and Web Applications and
            Mobiles Apps, and more than 4 years of building , UI libraries, Web Apps, and E-Commerce
            websites as a Freelancer. Also an open source lover and contributor.
          </p>
        </div>
        <div className="mb-16 flex flex-col justify-start gap-8">
          <h2 className="text-[1.5rem] font-bold">Work Experience</h2>
          <ol className="list-none border-l-2 border-emerald-600 dark:border-emerald-500">
            {experiences.map((experience, idx) => (
              <li key={idx.toString()}>
                <div className="flex-start flex items-center">
                  <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
                  <h4 className="-mt-2 text-xl font-semibold">
                    {experience.title}
                    {experience.company && (
                      <>
                        {' '}
                        at{' '}
                        <span className="font-semibold text-emerald-500">{experience.company}</span>
                      </>
                    )}
                  </h4>
                </div>
                <div className="mb-6 ml-6 pb-6">
                  <span className="text-lg text-emerald-700 transition duration-150 ease-in-out focus:text-emerald-700 hover:text-emerald-700 active:text-emerald-700 dark:text-emerald-400 dark:focus:text-emerald-500 dark:hover:text-emerald-500 dark:active:text-emerald-700">
                    {experience.location} | {experience.period}
                  </span>
                  {experience.tasks && experience.tasks.length > 0 && (
                    <ul>
                      {experience.tasks.map((task) => (
                        <li
                          key={task}
                          className="ml-6 mb-4 mt-2 list-disc text-base text-neutral-600 first:mt-4 dark:text-neutral-300"
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* <button
                    type="button"
                    className="inline-block rounded bg-emerald-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out focus:bg-emerald-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 hover:bg-emerald-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-emerald-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Read more
                  </button> */}
                </div>
              </li>
            ))}
          </ol>
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
