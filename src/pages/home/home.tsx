import React from 'react';

import '../../css/layout_styles.css';
// import { IncarcaFisier } from '../guest/IncarcaFisier.tsx';
import { Form } from '../../components/Form.tsx';

export const Home: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden  ">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
          Convert your sketch into CAD project
        </h1>
        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <p className="text-lg leading-8 text-white">
            This tool has been designed to convert a scanned sketch into vector graphics or AutoCAD project. 
            All you have to do is chose the conversion type, upload a photo in the section below or scan the 
            QR code  from our Android Application for taking the picture of the sketch with your phone. 
            Press then the Convert button and let the magic happen. 
          </p>
          <div className="mt-10 flex-row flex items-center gap-2">
            <Form />
          </div>
        </div>
        <img
          src="src/components/scan.png"
          alt="logo"
          className="mt-10  max-w-lg rounded-2xl  sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 "
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 " />
    </div>
  );
};
