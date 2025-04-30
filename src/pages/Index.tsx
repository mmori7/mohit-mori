
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import { useEffect } from "react";

const Index = () => {
  // Add intersection observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in', 'opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Target all sections with the fade-in class
    const fadeElements = document.querySelectorAll('.fade-section');
    fadeElements.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        <HeroSection />
        
        <div className="fade-section">
          <ExperienceSection />
        </div>
        
        <div className="fade-section">
          <EducationSection />
        </div>
        
        <div className="fade-section">
          <ProjectsSection />
        </div>
        
        <div className="fade-section">
          <SkillsSection />
        </div>
        
        <div className="fade-section">
          <AchievementsSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
