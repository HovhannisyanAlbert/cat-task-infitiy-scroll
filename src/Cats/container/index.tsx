"use client";
import { RootState } from "@/features/store/store";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats } from "../store/action";
import styles from "./cats.module.css";
import FilterCats from "../components/FilterCats/FilterCats";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { IelemDate } from "../types";
import toast from "react-hot-toast";
import UploadImage from "../components/UploadImage";
import { uploadCatImage } from "@/services/catsApi";
const Cats = () => {
  const { catsData } = useSelector((state: RootState) => state.cats);
  const dispatch = useDispatch();
  const observer = useRef<null | any>(null);
  const searchParams = useSearchParams();
  const page = useRef<number>(1);
  const size = searchParams?.get("size");
  const mime_types = searchParams?.get("mime_types");
  const order = searchParams?.get("order");

  const loadMoreItems = () => {
    page.current = page.current + 1;
    dispatch(getCats({ size, mime_types, order, page: page.current }));
  };

  const lastItemRef = useCallback(
    (node: any) => {
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [size, mime_types, order]
  );

  useEffect(() => {
    dispatch(getCats({ size, mime_types, order }));
    page.current = 1;
  }, [size, mime_types, order]);

  const handleUploadSuccess = (data: any) => {
    toast.success(`${data.original_filename} uploaded successfully!`);
  };

  const handleUploadError = (error: any) => {
    toast.error(error.response.data);
  };
  return (
    <div className={styles.catsContainer}>
      <FilterCats />
      <UploadImage
        text="Upload Image"
        handleUploadImage={uploadCatImage}
        handleSuccess={handleUploadSuccess}
        handleError={handleUploadError}
      />
      <div className={styles.imagesContent}>
        {catsData.map((elem: IelemDate, index, array) => (
          <Link
            href={`cat/${elem.id}`}
            className={styles.imageItem}
            key={`${elem.id}-${index}`}
            ref={index === array.length - 1 ? lastItemRef : null}
          >
            <img width={150} height={150} src={elem.url} alt="cat" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cats;
