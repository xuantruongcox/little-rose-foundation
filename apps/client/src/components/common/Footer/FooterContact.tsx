import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTACT_INFO } from "@/mock/footer.data";

const FooterContact = () => {
  return (
    <div>
      <h3 className="text-white font-bold text-lg mb-6">Liên Hệ</h3>
      <ul className="space-y-4 text-sm text-gray-400">
        {CONTACT_INFO.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <FontAwesomeIcon icon={item.icon} className="mt-1 text-primary" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContact;
