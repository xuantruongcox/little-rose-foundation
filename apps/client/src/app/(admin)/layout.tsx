import Sidebar from "@/components/admin/Sidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { redirect } from "next/navigation";

// Giả lập hàm check auth
async function checkAdminAuth() {
  // Logic verify token ở đây
  return true; 
}

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = await checkAdminAuth();
  if (!isAuth) {
    redirect('/login'); // Redirect phía server
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar cố định bên trái */}
      <aside className="w-64 fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 shadow-sm hidden md:block">
        <Sidebar />
      </aside>

      {/* Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-w-0 overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}