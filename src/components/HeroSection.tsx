
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Mohit Mori
        </h1>
        <p className="text-xl md:text-2xl text-gray-700">
          Computer Science Student & Software Developer
        </p>
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
