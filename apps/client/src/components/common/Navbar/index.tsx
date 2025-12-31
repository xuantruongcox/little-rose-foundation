"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { NAV_LINKS } from "@/mock/navigations.data";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* --- DESKTOP MENU --- */}
      <nav className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((route, index) => (
          <NavItem key={index} item={route} />
        ))}

        <Link
          href="#donate"
          className="btn-donate whitespace-nowrap flex items-center gap-2"
        >
          Đóng Góp Ngay <FontAwesomeIcon icon={faHeart} />
        </Link>
      </nav>

      {/* --- MOBILE TOGGLE BUTTON --- */}
      <button
        className="lg:hidden text-2xl text-primary focus:outline-none p-2 transition-transform active:scale-95"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>

      {/* --- MOBILE MENU --- */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        routes={NAV_LINKS}
      />
    </>
  );
};

export default Navbar;
