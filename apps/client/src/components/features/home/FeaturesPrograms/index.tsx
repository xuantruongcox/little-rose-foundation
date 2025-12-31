import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import { FEATURES_DATA } from "@/mock/home-program.data";

const FeaturesPrograms: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <SectionHeader
        subtitle="Hoạt động trọng tâm"
        title="Chương Trình & Dự Án"
      />

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {FEATURES_DATA.map((item) => (
          <FeatureCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesPrograms;
