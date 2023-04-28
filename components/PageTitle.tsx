import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="mb-2 w-fit text-xl font-medium leading-6 tracking-tight text-white sm:text-2xl sm:leading-7 md:text-3xl md:leading-10">
      {children}
    </h1>
  );
}
