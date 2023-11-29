import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Button, Radio, RadioGroup } from '@nextui-org/react';

export const IncarcaFisier: React.FC = () => {
  const [file, setFile] = useState(null);

  const fileTypes = ['JPG', 'PNG', 'SVG', 'JPEG'];

  const handleChange = (file: any) => {
    setFile(file);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Gather form data or perform any necessary actions here
    // For example, you can access selected radio value or uploaded file using 'file' state

    console.log('Form submitted!');
    console.log('Selected file:', file);
  };

  return (
    <div className="flex flex-row items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3">
        <RadioGroup label="Conversion Type">
          <Radio value="raster-vector">Raster to Vector</Radio>
          <Radio value="raster-dwg">Raster to DWG</Radio>
          <Radio value="vector-dwg">Vector to DWG</Radio>
        </RadioGroup>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <Button
          type="submit"
          className="bg-teal-500 text-white">
          Convert to DWG
        </Button>
      </form>
    </div>
  );
};
