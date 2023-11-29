import React from 'react';
import { IncarcaFisier } from '../guest/IncarcaFisier.tsx';

export const Home: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 ">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
          Raster To DWG bbbbbb aaaa aaaa
        </h1>
        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <p className="text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
            cupidatat commodo.
          </p>
          <div className="mt-10 flex-row flex items-center gap-2">
            {/*<Button*/}
            {/*  variant={'ghost'}*/}
            {/*  className="text-teal-500 border-1 font-medium border-teal-500">*/}
            {/*  IncarcaFisier*/}
            {/*</Button>*/}
            <IncarcaFisier />
          </div>
        </div>
        <img
          src="src/components/hero.jpg"
          alt="logo"
          className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
};
