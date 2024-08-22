"use client";
import Article from "../components/article/Article";
import LoadingSpinner from "../components/shared/loadingSpinner";
import useData from "../hooks/useData";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const {
    data: Post,
    error,
    loading,
  } = useData({
    url: `https://react-camp-api.roocket.ir/api/nooshifard@yandex.com/article-info/${params.slug}`,
  });
  if (loading)
    return (
      <div className="text-center mt-10">
        <LoadingSpinner message="Please Wait.Post is Fetching..." />
      </div>
    );
  if (error) return <h1>{error.messages}</h1>;

  return <Article post={Post?.data} />;
}
