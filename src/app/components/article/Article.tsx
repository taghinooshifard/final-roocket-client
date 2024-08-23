import PostModel from "@/app/models/PostModel";
import { createMarkup } from "@/app/tools/ApiManager";
import Image from "next/image";
import Link from "next/link";
import CommentForm from "../forms/Comment/CommentForm";

interface Props {
  post: PostModel;
}
export default function Article({ post }: Props) {
  return (
    <article
      key={post.id}
      className="my-8 flex flex-col space-y-8 mx-32 pt-8 max-sm:mx-8"
    >
      <header className="relative z-10">
        <h2 className="text-slate-900 hover:text-red-500 lg:text-6xl max-sm:text-2xl font-semibold ">
          <Link href={`${process.env.PUBLIC_URL}${post?.slug}`}>
            {post.title}
          </Link>
        </h2>
        <div className="flex gap-5 text-gray-400 max-sm:text-sm">
          <div>
            <div className="coauthors">
              <span>
                <span className="fn">
                  <Link href={`${process.env.PUBLIC_URL}${post?.slug}`}>
                    By Admin
                  </Link>
                </span>
              </span>
            </div>
          </div>
          <div>
            In{" "}
            <Link href={`${process.env.PUBLIC_URL}${post?.slug}`}>
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
        <p
          dangerouslySetInnerHTML={createMarkup(post.content)}
          className="mt-8"
        />
      </div>
      <fieldset className="flex justify-center border border-red-400 lg:w-4/6 max-sm:w-full my-4 rounded-md">
        <legend>Post Your Comment</legend>
        <CommentForm slug={post.slug} />
      </fieldset>

      <div className="flex gap-3 my-16 ">
        {post.comments.length > 0 ? (
          post.comments.map((comment, index) => {
            return (
              <div
                key={index}
                className="flex flex-col mb-10 w-full  leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
              >
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {comment.name}
                  </span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {new Date(comment.created_at * 1000).toDateString()}
                  </span>
                </div>
                <p className="text-sm  font-normal py-2.5  dark:text-white">
                  {comment.content}
                </p>
              </div>
            );
          })
        ) : (
          <h1 className="mb-8">No Comment...</h1>
        )}
      </div>
    </article>
  );
}
