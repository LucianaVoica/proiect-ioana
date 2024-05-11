import React, { useEffect, useState } from 'react';
import '../../css/layout_styles.css';
// import { IncarcaFisier } from '../guest/IncarcaFisier.tsx';
import { Form } from '../../components/Form.tsx';
// import useFetch from '../../hooks/useSessionFetch.ts';
// import { BASE_URL } from '../../utils/config';
// import axios from 'axios';

export const Home: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/getQRcode?token=${localStorage.getItem('sessionID')}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch QR code');
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching QR code:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-row gap-2">
      <div className="">
        <h1
          className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto"
          style={{ textShadow: '1px 1px 2px white' }}>
          Convert your sketch into CAD project
        </h1>
        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <p
            className="text-lg leading-8 text-white"
            style={{ fontStyle: 'italic' }}>
            This tool has been designed to convert a scanned sketch into vector graphics or AutoCAD project. All you
            have to do is chose the conversion type, upload a photo in the section below or scan the QR code from our
            Android Application for taking the picture of the sketch with your phone. Press then the Convert button and
            let the magic happen.
          </p>
          <div className="mt-10 flex-row flex items-center gap-2">
            <Form />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto">
        <img
          src={imageUrl}
          alt="QR code "
        />
      </div>
    </div>
  );
};
