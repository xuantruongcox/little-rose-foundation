import { Suspense } from 'react';


type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProjectsPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const category = (searchParams.category as string) || 'all';

  return (
    <div className="container-custom py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary mb-4">Các chương trình & Dự án</h1>
        <p className="text-gray-600">Chung tay lan tỏa yêu thương</p>
      </div>

      {/* <CategoryFilter currentCategory={category} /> */}

      <Suspense fallback={<div className="text-center">Đang tải danh sách...</div>}>
        {/* Truyền category đã await vào server component con để fetch data */}
      </Suspense>
    </div>
  );
}