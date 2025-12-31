import AboutUsSection from "@/components/features/home/AboutUs";
import FeaturesProgramsSection from "@/components/features/home/FeaturesPrograms";
import HeroSection from "@/components/features/home/Hero";
import DonationSection from "@/components/features/home/Donation";
import RealTimeStatementsSection from "@/components/features/home/Statements";
import NewsSection from "@/components/features/home/News";
import VolunteerSection from "@/components/features/home/Volunteers";
export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <div className="mx-auto bg-white">
        <AboutUsSection />
      </div>
      <FeaturesProgramsSection />
      <RealTimeStatementsSection />
      <DonationSection />
      <NewsSection />
      <VolunteerSection/>
    </div>
  );
}
