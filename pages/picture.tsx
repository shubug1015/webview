import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

const Picture: NextPage = () => {
  const [preview, setPreview] = useState(null);

  const handlePhoto = (e: any) => {
    e.preventDefault();
    const reader = new FileReader() as any;
    const file = e.target.files[0];

    if (file) {
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='mx-auto flex h-screen max-w-[330px] flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>사진 분석</h1>

      <div className='mt-12 aspect-square w-full'>
        {preview ? (
          <div className='relative h-full w-full'>
            <Image
              src={preview}
              alt='Photo'
              layout='fill'
              objectFit='contain'
              className='rounded-md'
            />
          </div>
        ) : (
          <>
            <label
              htmlFor='image'
              className='flex h-full w-full items-center justify-center rounded-md bg-[#4a4e57] transition-all hover:opacity-90'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-8 w-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 4.5v15m7.5-7.5h-15'
                />
              </svg>
            </label>
            <input
              type='file'
              id='image'
              onChange={handlePhoto}
              className='hidden'
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Picture;
