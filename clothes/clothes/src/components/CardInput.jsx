import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const CardInput = ({ onImageSelect, initialImage }) => {
  const [image, setImage] = useState(initialImage || null);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      onImageSelect(file);
    }
  }, [onImageSelect]);

  useEffect(() => {
    setImage(initialImage);
  }, [initialImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  const removeImage = () => {
    setImage(null);
    onImageSelect(null);
  };

  return (
    <div
      {...getRootProps()}
      className="mx-auto w-40 px-4 py-2 lg:px-8 lg:py-4  h-40 border  border-gray-300 shadow-sm rounded-3xl mt-10 bg-gray-200"
    >
      <input {...getInputProps()} />
      <div className='w-full flex justify-center items-center h-32'>
        {image ? (
          <div className='relative w-full h-full'>
            <img src={image} alt="Uploaded Preview" className='w-full h-32 object-cover rounded-xl' />
            <button
              onClick={removeImage}
              className='absolute -top-5 -right-5 text-xl  font-bold p-1 rounded-full'
            >
              X
            </button>
          </div>
        ) : (
          <div className='w-full h-full flex justify-center items-center'>
            {isDragActive ? (
              <p>Drop the image here...</p>
            ) : (
              <p className=' text-xs text-center'>Drag 'n' drop an image here, or click to select one</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardInput;
