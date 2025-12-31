import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  );
}