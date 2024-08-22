// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import useData from "@/app/hooks/useData";
import PostModel from "@/app/models/PostModel";
import Spinner from "../shared/Spinner";
import Image from "next/image";
import Link from "next/link";

interface Props {}
export default function Slider(params: Props) {
  const {
    data: PostList,
    error,
    loading,
  } = useData({
    url: `https://react-camp-api.roocket.ir/api/nooshifard%40yandex.com/last-articles`,
  });
  if (loading)
    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-80 text-center"
      >
        <SwiperSlide>
          <Spinner />
          loading...
        </SwiperSlide>
        <SwiperSlide>
          <Spinner />
          loading...
        </SwiperSlide>
        <SwiperSlide>
          <Spinner />
          loading...
        </SwiperSlide>
      </Swiper>
    );
  if (error)
    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-80 text-center"
      >
        <SwiperSlide>{error.messages}</SwiperSlide>
        <SwiperSlide>{error.messages}</SwiperSlide>
        <SwiperSlide>{error.messages}</SwiperSlide>
      </Swiper>
    );

  return (
    <div className="px-4 bg-red-500 pb-60">
      <>
        {PostList?.data?.length > 0 ? (
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="w-full h-96 text-center mt-20"
          >
            {PostList?.data?.map((post: PostModel) => {
              return (
                <SwiperSlide key={post.id}>
                  <div className="max-w-sm h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <Link href={`${process.env.PUBLIC_URL}/${post.id}`}>
                        <Image
                          className="rounded-t-lg mx-auto w-full"
                          src={
                            post.image_url ??
                            `${process.env.PUBLIC_URL}no-photo.jpg`
                          }
                          alt=""
                          width={400}
                          height={400}
                        />
                      </Link>
                      <div className="p-5">
                        <Link href={`${process.env.PUBLIC_URL}/${post.id}`}>
                          <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                            {post.title}
                          </h5>
                        </Link>
                      </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="w-full h-80 text-center"
          >
            <SwiperSlide>No Data Load..</SwiperSlide>
            <SwiperSlide>No Data Load..</SwiperSlide>
            <SwiperSlide>No Data Load..</SwiperSlide>
          </Swiper>
        )}
      </>
    </div>
  );
}
