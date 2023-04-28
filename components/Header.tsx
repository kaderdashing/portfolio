import headerNavLinks from '@/data/headerNavLinks';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CommandPalette from './CommandPalette/CommandPalette';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import Typewriter from 'typewriter-effect';

export default function Header() {
  const router = useRouter();

  return (
    <header className="z-40 bg-transparent py-5 md:py-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div>
          <Link href="/" className="flex items-center justify-between" aria-label="Home">
            <div
              className={classNames(
                'horizontal-underline hidden font-mukta text-2xl font-extrabold sm:block',
                {
                  'horizontal-underline-active': router.pathname === '/',
                }
              )}
            >
              {/* <Typewriter
                options={{
                  strings: ['~/dr1tch'],
                  autoStart: true,
                  loop: true,
                }}
                // onInit={(typewriter) => {
                //   typewriter
                //     .typeString('dritch')
                //     .callFunction(() => {
                //       console.log('String typed out!');
                //     })
                //     .pauseFor(2500)
                //     .deleteAll()
                //     .callFunction(() => {
                //       console.log('All strings were deleted');
                //     })
                //     .start();
                // }}
              /> */}
              ~/dr1tch
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-3 text-base leading-5">
          <div className="hidden space-x-5 sm:flex">
            {headerNavLinks.map(({ title, href }) => {
              const active = router.pathname.includes(href);
              return (
                <Link
                  key={title}
                  href={href}
                  className={classNames('horizontal-underline text-base', {
                    'horizontal-underline-active': active,
                  })}
                  aria-label={title}
                >
                  <span className="font-bold tracking-wide text-gray-900 dark:text-gray-100">
                    {title}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center">
            <CommandPalette />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
