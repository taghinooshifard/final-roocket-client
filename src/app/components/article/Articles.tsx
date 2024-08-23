import useData from "@/app/hooks/useData";
import LoadingSpinner from "../shared/loadingSpinner";
import PostModel from "@/app/models/PostModel";
import Link from "next/link";
import Image from "next/image";

interface Props {
  page: number;
  filter: string;
}
export default function Articles({ page, filter }: Props) {
  const {
    data: PostList,
    error,
    loading,
  } = useData({
    url: `https://react-camp-api.roocket.ir/api/nooshifard@yandex.com/all-articles?page=${page}&per_page=3${filter}`,
  });
  if (loading)
    return (
      <div className="text-center mt-10">
        <LoadingSpinner message="Please Wait.Posts is Fetching..." />
      </div>
    );
  if (error) return <h1 className="text-center mt-10">{error.messages}</h1>;

  {
    return PostList?.data?.data?.map((post: PostModel) => {
      return (
        <article key={post.id} className="my-8 flex flex-col space-y-8">
          <header className="relative z-10">
            <h2 className="text-slate-900 hover:text-red-500 text-6xl max-sm:text-2xl font-semibold ">
              <Link href={`${process.env.PUBLIC_URL}${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <div className="flex gap-5 text-gray-400 max-sm:text-sm">
              <div>
                <div className="coauthors">
                  <span>
                    <span className="fn">
                      <Link href={`${process.env.PUBLIC_URL}${post.slug}`}>
                        By Admin
                      </Link>
                    </span>
                  </span>
                </div>
              </div>
              <div>
                In{" "}
                <Link href={`${process.env.PUBLIC_URL}${post.slug}`}>
                  {post.category_label}
                </Link>
              </div>
              <div>2 Min Read</div>
            </div>
            <div className="text-[225px] opacity-10 absolute -top-20 -ml-32 max-sm:hidden">
              {post?.title[0]?.toUpperCase()}
            </div>
          </header>

          <div className="text-lg font-semibold">
            <Image
              className="rounded-t-lg mx-auto w-full"
              src={post.image_url ?? `${process.env.PUBLIC_URL}no-photo.jpg`}
              alt=""
              width={400}
              height={400}
            />
          </div>

          <div className="flex gap-3 mt-5 text-white">
            <Link
              className=" outline border-red-500   text-red-500 rounded-sm px-12 py-2 hover:text-white hover:bg-red-500"
              href={`${process.env.PUBLIC_URL}${post.slug}`}
            >
              Read More
            </Link>
          </div>
        </article>
      );
    });
  }
}
