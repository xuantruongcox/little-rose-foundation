import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { NavigationItem } from "@/types/common";

interface Props {
  item: NavigationItem;
}

const NavItem: React.FC<Props> = ({ item }) => {
  if (!item.subLinks) {
    return (
      <Link
        href={item.href}
        className="text-gray-700 font-medium hover:text-primary transition"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative group py-4">
      <Link
        href={item.href}
        className="flex items-center gap-1 text-gray-700 font-medium group-hover:text-primary transition"
      >
        {item.label}
        <FontAwesomeIcon icon={faChevronDown} className="text-xs mt-0.5" />
      </Link>
      
      {/* Dropdown Menu */}
      <div className="absolute hidden group-hover:block top-full left-0 w-60 bg-white shadow-xl rounded-lg py-2 border-t-4 border-primary z-50 animate-fade-in-up">
        {item.subLinks.map((subLink, index) => (
          <Link
            key={index}
            href={subLink.href}
            className="block px-4 py-2 hover:bg-green-50 hover:text-primary transition"
          >
            {subLink.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavItem;