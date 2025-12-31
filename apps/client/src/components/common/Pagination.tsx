import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  paramName?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath,
  paramName = "page",
}) => {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    const separator = basePath.includes("?") ? "&" : "?";
    return `${basePath}${separator}${paramName}=${page}`;
  };

  // Pagination Algorithm
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  const baseBtnClass =
    "w-10 h-10 rounded-full flex items-center justify-center transition border text-sm font-medium";
  const activeClass =
    "bg-primary text-white border-primary shadow-md pointer-events-none"; // Active
  const inactiveClass =
    "border-gray-300 text-gray-500 hover:border-primary hover:text-primary bg-white"; // Inactive
  const disabledClass = "border-gray-200 text-gray-300 cursor-not-allowed"; // Disabled

  return (
    <div className="mt-12 flex justify-center items-center gap-2">
      {/* Nút Previous */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className={`${baseBtnClass} ${inactiveClass}`}
          aria-label="Trang trước"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      ) : (
        <span className={`${baseBtnClass} ${disabledClass}`}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
      )}

      {/* Danh sách số trang */}
      {renderPageNumbers().map((page, index) => {
        if (page === "...") {
          return (
            <span key={`dots-${index}`} className="text-gray-400 px-1">
              ...
            </span>
          );
        }

        const pageNum = page as number;
        const isActive = pageNum === currentPage;

        if (isActive) {
          return (
            <span key={pageNum} className={`${baseBtnClass} ${activeClass}`}>
              {pageNum}
            </span>
          );
        }

        return (
          <Link
            key={pageNum}
            href={getPageUrl(pageNum)}
            className={`${baseBtnClass} ${inactiveClass}`}
          >
            {pageNum}
          </Link>
        );
      })}

      {/* Nút Next */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className={`${baseBtnClass} ${inactiveClass}`}
          aria-label="Trang sau"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      ) : (
        <span className={`${baseBtnClass} ${disabledClass}`}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      )}
    </div>
  );
};

export default Pagination;
