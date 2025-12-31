import NewsSidebar from "@/components/features/news/NewsSidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const DetailNewsLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-10 grow bg-lrf-gray">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <main className="lg:col-span-8">{children}</main>
        <NewsSidebar />
      </div>
    </div>
  );
};

export default DetailNewsLayout;
