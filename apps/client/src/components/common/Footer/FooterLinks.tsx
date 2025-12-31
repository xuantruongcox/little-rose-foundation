import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { QUICK_LINKS } from '@/mock/footer.data';

const FooterLinks = () => {
  return (
    <div>
      <h3 className="text-white font-bold text-lg mb-6">Liên Kết</h3>
      <ul className="space-y-3 text-sm text-gray-400">
        {QUICK_LINKS.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="hover:text-primary transition flex items-center gap-2 group">
              <FontAwesomeIcon icon={faChevronRight} className="text-xs group-hover:translate-x-1 transition-transform" /> 
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;