import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { NavigationItem } from "@/types/common";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  routes: NavigationItem[];
}

const MobileMenu: React.FC<Props> = ({ isOpen, onClose, routes }) => {
  return (
    <div
      className={`fixed inset-x-0 top-[80px] bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 ease-in-out lg:hidden z-40 ${
        isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"
      }`}
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex flex-col h-full overflow-y-auto pb-20 px-4 pt-4">
        {routes.map((route, index) => (
          <div key={index} className="py-2 border-b border-gray-50 last:border-0">
            {!route.subLinks ? (
              <Link
                href={route.href}
                onClick={onClose}
                className="block py-2 text-lg font-medium text-gray-800 hover:text-primary"
              >
                {route.label}
              </Link>
            ) : (
              <div className="space-y-1">
                <div className="py-2 text-lg font-bold text-gray-800">
                  {route.label}
                </div>
                <div className="pl-4 border-l-2 border-gray-100 ml-1 space-y-2">
                  {route.subLinks.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subLink.href}
                      onClick={onClose}
                      className="block py-2 text-gray-600 hover:text-primary"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="mt-6">
          <Link
            href="#donate"
            onClick={onClose}
            className="btn-donate w-full justify-center text-center flex items-center gap-2 py-3"
          >
            Đóng Góp Ngay <FontAwesomeIcon icon={faHeart} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;