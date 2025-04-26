
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="space-y-16">
        <HeroSection />
        <div className="animate-fade-in">
          <EducationSection />
        </div>
        <div className="animate-fade-in">
          <ProjectsSection />
        </div>
        <div className="animate-fade-in">
          <SkillsSection />
        </div>
        <div className="animate-fade-in">
          <AchievementsSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
