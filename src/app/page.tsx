"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Articles from "./components/article/Articles";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Modal from "./components/shared/modal";
import FilterPostForm from "./components/forms/filter/FilterPostForm";

export default function Home() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("");
  const TitleFilter = searchParams.get("title");
  const CategoryFilter = searchParams.get("category_id");
  useEffect(() => {
    let queryFilter = "";
    if (TitleFilter && TitleFilter?.length > 0)
      queryFilter = `&title=${TitleFilter}`;
    if (CategoryFilter && CategoryFilter?.length > 0)
      queryFilter += `&category_id=${CategoryFilter}`;
    if (queryFilter.length > 0) setFilter(queryFilter);
  }, [TitleFilter, CategoryFilter]);
  const router = useRouter();
  const isFilterOpen = () => searchParams.has("filter");
  const filterFunc = (filter: string) => {
    setFilter(filter);
    router.push(`/?filtered${filter}`);
  };
  const RemoveFilterFunc = () => {
    setFilter("");
  };
  //Remove Filter
  if (searchParams.has("Nofilter") && filter.length > 0) RemoveFilterFunc();

  const [page, setPage] = useState(1);
  let AllArticles = [];
  for (let index = 1; index <= page; index++) {
    AllArticles.push(<Articles key={index} page={index} filter={filter} />);
  }

  return (
    <>
      <div className="text-center pt-2 pb-9">
        {isFilterOpen() && (
          <Modal
            isOpen={isFilterOpen()}
            setIsOpen={() => {
              router.push("/?filter");
            }}
            title="Search Post"
          >
            {/* app/components/forms/post/filter/FilterPostForm */}
            <FilterPostForm filterFunc={filterFunc} />
          </Modal>
        )}
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
