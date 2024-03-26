import { GetServerSideProps } from "next";
import { FC } from "react";
import Link from "next/link";

import Image from "next/image";
import { getCatData } from "@/services/catsApi";
import { CatsItem } from "@/Cats/store/types";

type CatProps = {
  cat: CatsItem;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context.params?.id as string;

    const { data } = await getCatData({ id });

    if (!data) {
      return {
        notFound: true,
      };
    }

    const cat = {
      id: data.id,
      url: data.url,
      width: data.width,
      height: data.height,
      breeds: data.breeds ?? null,
      categories: data.categories ?? null,
    };

    return {
      props: {
        cat,
      },
    };
  } catch (error: any) {
    console.error("Axios error:", error.message);

    if (error.response && error.response.status === 400) {
      return {
        redirect: {
          destination: "/error",
          permanent: false,
        },
      };
    }

    return {
      notFound: true,
    };
  }
};
const CatPage: FC<CatProps> = ({ cat }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-5">
      <div className="container mx-auto w-full flex justify-between items-center">
        <Link
          className="text-lg flex flex-row items-center p-2 hover:text-gray-600 transition duration-300"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
      </div>
      <div className="mb-4 lg:mb-0">
        <Image
          src={cat.url}
          alt="Image of cat"
          width={cat.width}
          height={cat.height}
          className="object-cover w-full h-auto rounded-lg md:w-96 md:h-96"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-md">
          <span className="font-semibold">Breed Name: </span>
          {cat.breeds?.[0]?.name ?? "-"}
        </p>
        <p className="text-md">
          <span className="font-semibold">Width: </span>
          {cat.width}px
        </p>
        <p className="text-md">
          <span className="font-semibold">Height: </span>
          {cat.height}px
        </p>
      </div>
    </div>
  );
};

export default CatPage;
