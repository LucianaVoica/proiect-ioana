import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';
import { Button, Tooltip } from '@nextui-org/react';
import { LuTrash2 } from 'react-icons/lu';

type Props = {
  onDrop: (file: File | null) => void;
  selectedFile: File | null;
};

export const FileUpload: React.FC<Props> = ({ onDrop, selectedFile }) => {
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

  const removeFile = () => {
    onDrop(null);
  };

  return (
    <div className="h-[269px] flex flex-col">
      <div
        className={twMerge(
          'w-96 h-60 justify-center items-center p-5 border border-dashed rounded-xl text-center flex flex-col',
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
        {selectedFile && (
          <div className="px-5 w-96 py-1 text-white bg-slate-500/40 rounded-md mt-44 absolute flex flex-row gap-2 items-center justify-between">
            <p className="line-clamp-1">{selectedFile.name}</p>
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
