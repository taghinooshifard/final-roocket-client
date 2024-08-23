"use client";
import Image from "next/image";
import { useState } from "react";
import Articles from "./components/article/Articles";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function Home() {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(1);
  let AllArticles = [];
  for (let index = 1; index <= page; index++) {
    AllArticles.push(<Articles key={index} page={index} filter="" />);
  }

  return (
    <>
      <div className="text-center pt-12 pb-9">
        {searchParams.has("filter") ? <h2>Filter</h2> : ""}
        <h3 className="text-2xl ">Latest stories</h3>
      </div>
      <div className="px-72 max-sm:px-8">{AllArticles}</div>

      <div className="text-center h-48 pt-20">
        <nav className=" mt-5">
          <button
            className="px-5 py-2 mx-auto w-3/12 mt-5  text-white bg-red-500 rounded-md hover:outline hover:font-semibold"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Load More
          </button>{" "}
        </nav>
      </div>
    </>
  );
}
