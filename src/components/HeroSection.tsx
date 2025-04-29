
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 pt-16" id="hero">
      <div className="text-center space-y-8 max-w-3xl animate-fade-in">
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden mb-8 shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-105">
          <img
            src="/lovable-uploads/27d7c5f7-cbbb-47a6-9a27-f3e6cc7dbede.png"
            alt="Mohit Mori"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Mohit Mori
        </h1>
        <p className="text-xl md:text-2xl text-gray-700">
          Computer Science Student & Software Developer
        </p>
        <div className="bg-white/80 p-6 rounded-lg shadow-lg backdrop-blur-sm max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Passionate computer science student at California State University, Long Beach with a strong interest in software development and AI. I love building innovative solutions that solve real-world problems, and I'm constantly expanding my skills through personal projects and academic pursuits.
          </p>
        </div>
        <div className="flex gap-4 justify-center mt-8">
          <Button asChild variant="outline" className="gap-2">
            <a href="https://github.com/mmori7" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <a href="https://www.linkedin.com/in/mohit77/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
