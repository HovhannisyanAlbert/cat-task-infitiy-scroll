"use client";
import Cats from "@/Cats/container";
import Spinner from "@/components/Spinner";
import { RootState } from "@/features/store/store";
import { useSelector } from "react-redux";

export default function Home() {
  const { isLoadingCat } = useSelector((state: RootState) => state.cats);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Cats />
      {isLoadingCat && <Spinner />}
    </main>
  );
}
