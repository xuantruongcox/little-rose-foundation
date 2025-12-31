import Link from "next/link";
import logo from "@/assets/images/Vertical_Logo.png";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-12 h-12 overflow-hidden flex items-center justify-center">
            <Image
              src={logo}
              alt="Little Roses Foundation Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary tracking-tight leading-none group-hover:text-accent transition-colors">
              LITTLE ROSES
            </span>
            <span className="text-xs font-medium text-gray-500 tracking-widest uppercase mt-1">
              Foundation
            </span>
          </div>
        </Link>

        {/* NAVBAR SECTION */}
        <div className="flex items-center justify-end">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
