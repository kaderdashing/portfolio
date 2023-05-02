import { useContext, useRef } from 'react';
import { ScrollContext } from '../ScrollObserver';

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.2;
}

export default function Intro() {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 5;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) /
      clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 bg-black-primary text-white dark:bg-white  dark:text-gray-900"
      id="intro"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-8 px-10 py-24 text-3xl font-semibold tracking-tight md:py-28 md:text-6xl lg:px-20 lg:py-3 lg:text-6xl">
        <div className="flex  flex-col gap-5 leading-[1.15]">
          <div className="introText" style={{ opacity: opacityForBlock(progress, 0) }}>
            I love coding and solving problems.
          </div>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            I use my skills to design and build digital products and experiences.
          </span>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            I&apos;m passionate about cutting-edge, pixel perfect UI and intuitively implemented UX.
          </span>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 3) }}
          >
            I&apos;m passionate about learning new skills and improving myself everyday.
          </span>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 4) }}
          >
            I love 🤤 eating and making Spaghetti 🍝 and pizza 🍕.
          </span>
        </div>
      </div>
    </div>
  );
}
