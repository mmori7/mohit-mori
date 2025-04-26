
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
    </div>
  );
};

export default Index;
