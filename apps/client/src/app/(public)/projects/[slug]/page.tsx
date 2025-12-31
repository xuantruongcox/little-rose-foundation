import { Metadata } from 'next';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  // const project = await getProject(params.slug);
  return {
    title: `Dự án ${params.slug} - Quỹ Bông Hồng Nhỏ`,
  };
}

export default async function ProjectDetailPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  // Giả lập fetch data
  // const project = await getProject(slug);
  // if (!project) return notFound();

  return (
    <div className="container-custom py-10">
       <nav className="text-sm text-gray-500 mb-6">
         Dự án / <span className="text-primary font-bold">{slug}</span>
       </nav>
       
       <h1 className="text-3xl font-bold text-primary mb-6">Chi tiết dự án: {slug}</h1>
    </div>
  );
}