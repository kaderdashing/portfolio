import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';

import FadeDown from './Animations/FadeDown';
import FadeRight from './Animations/FadeRight';
import FadeUp from './Animations/FadeUp';
import { renderCanvas } from './renderCanvas';
import { ScrollContext } from './ScrollObserver';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div>
      <h1 className="sr-only">
        Hello I'm Megherbi Abdelkader, I'm a web devloppeur and Frontend Engineer, and I love
        building things for the web.
      </h1>
      <motion.div
        className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <AnimatePresence>
          <div className="mx-auto w-screen max-w-4xl px-4 sm:px-9 xl:max-w-6xl xl:px-0">
            <div className="-mt-48">
              <div ref={ref} className="flex cursor-default flex-col space-y-4">
                <div className="flex w-full justify-center">
                  <img
                    src="/static/images/avatar.png"
                    alt=""
                    className="h-44 w-44 rounded-full shadow-lg"
                  />
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-2">
                  <FadeUp duration={0.6}>
                    <h1 className="text-base font-semibold  text-gray-400 dark:text-slate-300 sm:text-base md:text-base xl:text-base">
                      Hi I'm Megherbi Abdelkader(dashing) 👋
                    </h1>
                  </FadeUp>
                  <FadeUp duration={0.6} delay={0.2}>
                    <h2 className="max-w-xl text-center font-roboto text-4xl font-semibold leading-[3rem]  opacity-90 ">
                      <Typewriter
                        options={{
                          strings: [
                            'UI/UX Designer during the night, Frontend Developer during the day.',
                            'I design beautiful UIs.',
                            'I am backend devloppeur',
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 300,
                        }}
                      />
                    </h2>
                  </FadeUp>
                  <FadeRight duration={0.5} delay={0.8}>
                    <Link
                      href="/about"
                      className=" mt-12 flex w-max cursor-pointer items-center justify-center gap-3 rounded border border-gray-500 bg-[#1E1E1E] p-4 px-6 font-roboto text-lg text-gray-300"
                    >
                      Read more <ArrowRight />
                    </Link>
                  </FadeRight>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
                <div
                  role="presentation"
                  className="flex cursor-pointer flex-col items-center justify-center"
                  onClick={() => {
                    const intro = document.querySelector('#intro');

                    intro?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <FadeDown duration={1} delay={1.2}>
                    <HiOutlineArrowNarrowDown size={20} />
                  </FadeDown>
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </motion.div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
