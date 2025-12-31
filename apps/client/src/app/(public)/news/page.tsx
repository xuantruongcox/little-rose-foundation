import { MOCK_NEWS } from "@/mock/news.data";
import FeaturedPost from "@/components/features/news/FeaturedPost";
import NewsSidebar from "@/components/features/news/NewsSidebar";
import Pagination from "@/components/common/Pagination";
import NewsList from "@/components/features/news/NewsList";

type PageProps = {
  searchParams: Promise<{ page?: string; cat?: string }>;
};

export default async function NewsPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams.page) || 1;
  const currentCat = searchParams.cat || "all";
  const searchQuery = searchParams.page || "";

  // Mock, waiting for real api
  const featuredPost = MOCK_NEWS.find((p) => p.isFeatured) || MOCK_NEWS[0];
  const listPosts = MOCK_NEWS.filter((p) => {
    // 1. Không hiện lại bài featured ở list dưới
    const isNotFeatured = p.id !== featuredPost.id;

    // 2. Lọc theo danh mục
    const isMatchingCat = currentCat === "all" || p.category === currentCat;

    // 3. Lọc theo từ khóa tìm kiếm (Case insensitive)
    const isMatchingSearch = searchQuery
      ? p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return isNotFeatured && isMatchingCat && isMatchingSearch;
  });
  return (
    <div className="container mx-auto px-4 lg:px-8 py-10 grow bg-lrf-gray">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <main className="lg:col-span-8 transition-all duration-300">
          <div className="mb-8 border-l-4 border-primary pl-4">
            <h1 className="text-3xl font-black text-gray-900">
              Tin tức & Hoạt động
            </h1>
            <p className="text-gray-500 mt-2">
              Cập nhật những thông tin mới nhất về hành trình lan tỏa yêu thương
              của LRF.
            </p>
          </div>

          <FeaturedPost post={featuredPost} />
          <NewsList posts={listPosts} />

          <Pagination
            currentPage={currentPage}
            totalPages={5}
            basePath="/news"
          />
        </main>

        <NewsSidebar />
      </div>
    </div>
  );
}
