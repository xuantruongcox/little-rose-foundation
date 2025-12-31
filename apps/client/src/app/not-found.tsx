'use client';

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Page Not Found</p>
        <p className="not-found-description">
          The page you are looking for does not exist.
        </p>
        <Link href="/" className="not-found-button">
          Go Home
        </Link>
      </div>
    </div>
  );
}