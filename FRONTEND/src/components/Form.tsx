import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FileUpload } from './FileUpload.tsx';
import { Button } from '@nextui-org/react';

type OptionType = 'option1' | 'option2';

type FormData = {
  file: File | null;
  radioOption: OptionType;
};

export const Form: React.FC = () => {
  // simulare loading state
  const [isPending, setIsPending] = useState(false);

  const { register, handleSubmit, setValue, watch, reset } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      radioOption: 'option1',
    },
  });

  const selectedFile = watch('file');
  const selectedOption = watch('radioOption');

  const handleFileChange = (file: File | null) => {
    setValue('file', file);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('radioOption', e.target.value as OptionType);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // simulare loading state - de scos is pending

    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      console.log('Form Data:', data);
      reset();
    }, 3000);
  };

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-4">
        <div>
          <p
            className="font-bold text-gray-900 "
            style={{ fontStyle: 'italic' }}>
            Select an option:{' '}
          </p>
          <fieldset className="mt-2">
            <label className="flex flex-row gap-1.5 items-center text-white">
              <input
                type="radio"
                value="option1"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-black"
                {...register('radioOption', { required: 'Please select an option' })}
                onChange={handleRadioChange}
              />
              Raster to Vector
            </label>
            <label className="flex flex-row gap-1.5 items-center text-white">
              <input
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                value="option2"
                {...register('radioOption', { required: 'Please select an option' })}
                onChange={handleRadioChange}
              />
              Raster to DWG
            </label>
            <label className="flex flex-row gap-1.5 items-center text-white">
              <input
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                value="option2"
                {...register('radioOption', { required: 'Please select an option' })}
                onChange={handleRadioChange}
              />
              Vector to DWG
            </label>
          </fieldset>
        </div>
        <div className={'flex flex-col'}>
          <FileUpload
            selectedFile={selectedFile}
            onDrop={handleFileChange}
          />

          <Button
            variant="solid"
            color="primary"
            isDisabled={!selectedFile || !selectedOption}
            isLoading={isPending}
            type="submit"
            className="text-gray-900 font-medium bg-white w-full">
            Convert
          </Button>
        </div>
      </div>
    </form>
  );
};
