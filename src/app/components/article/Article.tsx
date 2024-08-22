import PostModel from "@/app/models/PostModel";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: PostModel;
}
export default function Article({ post }: Props) {
  return (
    <article key={post.id} className="my-8 flex flex-col space-y-8">
      <header className="relative z-10">
        <h2 className="text-slate-900 hover:text-red-500 text-6xl font-semibold ">
          <Link href={`${process.env.PUBLIC_URL}${post?.id}`}>
            {post.title}
          </Link>
        </h2>
        <div className="flex gap-5 text-gray-400">
          <div>
            <div className="coauthors">
              <span>
                <span className="fn">
                  <Link href={`${process.env.PUBLIC_URL}${post?.id}`}>
                    By Admin
                  </Link>
                </span>
              </span>
            </div>
          </div>
          <div>
            In{" "}
            <Link href={`${process.env.PUBLIC_URL}${post?.id}`}>
              {post.category_label}
            </Link>
          </div>
          <div>2 Min Read</div>
        </div>
        <div className="text-[225px] opacity-10 absolute -top-20 -ml-32">
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
        <p>{post.content}</p>
      </div>

      <div className="flex gap-3 mt-5 text-white">
        <Link
          className=" outline border-red-500   text-red-500 rounded-sm px-12 py-2 hover:text-white hover:bg-red-500"
          href={`${process.env.PUBLIC_URL}${post?.id}`}
        >
          Show Comments
        </Link>
      </div>
    </article>
  );
}
