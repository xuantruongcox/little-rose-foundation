import { notFound } from "next/navigation";
import { MOCK_NEWS } from "@/mock/news.data";
import NewsDetail from "@/components/features/news/NewsDetail";
import RelatedNews from "@/components/features/news/RelatedNews";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const post = MOCK_NEWS.find((p) => p.slug === params.slug);

  if (!post) {
    return { title: "Không tìm thấy bài viết" };
  }

  return {
    title: `${post.title} - Quỹ Bông Hồng Nhỏ`,
    description: post.summary,
  };
}

export default async function NewsDetailPage(props: Props) {
  const params = await props.params;
  const { slug } = params;

  const post = MOCK_NEWS.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  const relatedPosts = MOCK_NEWS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-10 grow bg-lrf-gray">
      <NewsDetail post={post} />
      <RelatedNews posts={relatedPosts} />
    </div>
  );
}
