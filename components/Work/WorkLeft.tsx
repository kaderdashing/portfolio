import { WorkProps } from './WorkRight';

export function WorkLeft({ children, progress }: WorkProps) {
  let translateY = Math.max(0, 50 - progress * 3 * 50);

  if (progress > 0.85) {
    translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  }
  return (
    <div
      className="relative mx-12 flex h-[30vh] flex-col items-center justify-center text-3xl lg:h-auto lg:text-3xl"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="relative flex flex-col items-start justify-start gap-4 leading-10 text-white">
        {children}
      </div>
    </div>
  );
}
