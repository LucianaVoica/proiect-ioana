import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { twMerge } from 'tailwind-merge';
import { Button, Tooltip } from '@nextui-org/react';
// @ts-ignore
import { LuTrash2 } from 'react-icons/lu';

type Props = {
  onDrop: (file: File | null) => void;
  selectedFile: File | null;
};

export const FileUpload: React.FC<Props> = ({ onDrop, selectedFile }) => {
  const [hasImage, setHasImage] = useState(false);
  const [imageName, setImageName] = useState("");

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onDrop(acceptedFiles[0]);
      }
    },
    [onDrop]
  );

const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
  onDrop: handleDrop,
});


const removeFile = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/removeImage', {
      params: {
        token: localStorage.getItem('sessionID'),
      },
    });
    console.log('Image removed successfully:', response);
    onDrop(null); 
  } catch (error) {
    console.error('Error removing image:', error);
  }
};

useEffect(() => {
    if(localStorage.getItem('qrReceived') === 'true'){
    const intervalId = setInterval(() => {
      checkIfImageExists();
    }, 5000); 

    return () => clearInterval(intervalId);
  }
}, []);

useEffect(() => {
  if (selectedFile) {
    const sendImageToServer = async () => {
      const formData = new FormData();
      formData.append('token', `${localStorage.getItem('sessionID')}`); // Replace 'your_token_value' with actual token
      formData.append('imageName',selectedFile.name);
      formData.append('image', selectedFile);
      try {
        const response = await axios.post('http://localhost:3000/api/v1/sendImage', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Image uploaded successfully:', response);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
    sendImageToServer();
    setImageName(selectedFile.name)
  };
  
}, [selectedFile]);



const checkIfImageExists = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/isImage', {
      params: {
        token: `${localStorage.getItem('sessionID')}`, 
      },
    });
    console.log(`${localStorage.getItem('sessionID')}`)
    console.log(response.data)
    setHasImage(response.data);
    setImageName(response.data) 
  } catch (error) {
    console.error('Error checking if image exists:', error);
  }
};

  return (
    <div className="h-[269px] flex flex-col">
      <div
        className={twMerge(
          'w-96 h-56 justify-center items-center p-5 border border-dashed rounded-xl text-center flex flex-col',
          isDragActive ? 'bg-[#035ffe] text-white animate-pulse' : 'bg-slate-100/70 text-slate-400'
        )}
        {...getRootProps()}>
        <input {...getInputProps()} />
        {!isDragActive && (
          <p className="text-black">
            {selectedFile
              ? 'Drag and drop here, or click to replace the file'
              : 'Drag and drop your file here, or click to select a file'}
          </p>
        )}
        {isDragActive && !isDragReject && <p>Drop to upload this file!</p>}
        {isDragReject && <p>File type not accepted, sorry!</p>}
        {hasImage && (
          <div className="px-5 w-96 py-1 text-white bg-slate-500/40 rounded-md mt-44 absolute flex flex-row gap-2 items-center justify-between">
            <p className="line-clamp-1">{imageName}</p>
            <Tooltip
              closeDelay={0}
              showArrow={true}
              content="Delete">
              <Button
                isIconOnly={true}
                color="danger"
                variant="flat"
                startContent={<LuTrash2 />}
                onPress={removeFile}
              />
            </Tooltip>
          </div>
        )}
        
      </div>
    </div>
  );
};
