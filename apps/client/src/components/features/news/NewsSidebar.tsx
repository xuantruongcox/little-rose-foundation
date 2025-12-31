import Link from "next/link";
import { NEWS_CATEGORIES } from "@/mock/news.data";
import DonationWidget from "../home/Donation";
import SearchWidget from "@/components/common/Search"; // <--- Import component mới

const NewsSidebar = () => {
  return (
    <aside className="lg:col-span-4 space-y-8">
      <SearchWidget />

      {/* 2. Categories Widget */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 border-l-4 border-primary pl-3">
          Danh mục
        </h3>
        <ul className="space-y-2">
          {NEWS_CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/news?cat=${cat.id}`}
                className="flex justify-between items-center text-gray-600 hover:text-primary hover:bg-green-50 px-3 py-2 rounded transition"
              >
                <span>{cat.name}</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {cat.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Donation Widget */}
      <div className="bg-linear-to-br from-primary to-green-900 rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden group">
        <DonationWidget isOneCol={true} />
      </div>
    </aside>
  );
};

export default NewsSidebar;
