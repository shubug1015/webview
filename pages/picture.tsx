import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const Picture: NextPage = () => {
  const router = useRouter();
  const [preview, setPreview] = useState(null);
  const [img, setImg] = useState(null);

  const handlePhoto = (e: any) => {
    e.preventDefault();
    const reader = new FileReader() as any;
    const file = e.target.files[0];

    if (file) {
      reader.onloadend = () => {
        setPreview(reader.result);
        setImg(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const onclick = () => {
    const formData = new FormData();
    formData.append("image", file);
    fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  return (
    <div className="mx-auto flex h-screen max-w-[330px] flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">사진 분석</h1>
      <div className="mt-12 aspect-square w-full">
        {preview ? (
          <div className="relative h-full w-full">
            <Image
              src={preview}
              alt="Photo"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
        ) : (
          <>
            <label
              htmlFor="image"
              className="flex h-full w-full items-center justify-center rounded-md bg-[#4a4e57] transition-all hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </label>
            <input
              type="file"
              id="image"
              onChange={handlePhoto}
              className="hidden"
            />
          </>
        )}
      </div>
      <button
        className={
          "mt-8 flex h-[3.688rem] w-full cursor-pointer items-center justify-center rounded bg-[#00e7ff] text-lg font-medium text-[#282e38] transition-all hover:opacity-90 md:h-14 md:text-base"
        }
        type="button"
        onClick={() =>
          router.push({
            pathname: "/predict",
            query: { imageUrl: img },
          })
        }
      >
        예측하기
      </button>
    </div>
  );
};

export default Picture;
