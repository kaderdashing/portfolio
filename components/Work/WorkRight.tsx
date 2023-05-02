import { ReactNode } from 'react';

export interface WorkProps {
  children: ReactNode;
  progress: number;
}

export function WorkRight({ children, progress }: WorkProps) {
  const translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div
      className="flex h-screen w-full flex-1 justify-center lg:items-center"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="flex w-full justify-center px-10  pt-10 md:px-0 lg:items-center lg:pt-0">
        {children}
      </div>
    </div>
  );
}
