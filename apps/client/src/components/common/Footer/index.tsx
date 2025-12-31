import React from 'react';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import NewsletterForm from './NewsLetterForm';
import Copyright from './Coppyright';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <FooterInfo />
          <FooterLinks />
          <FooterContact />
          <NewsletterForm />
        </div>
        
        {/* Bottom Bar */}
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;