import React from "react";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title }) => {
  return (
    <div className="container mx-auto px-4 text-center mb-16">
      <h4 className="text-primary font-bold uppercase tracking-widest mb-2">
        {subtitle}
      </h4>
      <h2 className="text-3xl md:text-4xl font-black text-secondary">
        {title}
      </h2>
      <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionHeader;