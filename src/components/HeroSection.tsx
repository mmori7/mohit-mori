
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/17QhX7CSefVYv1AgacLes1_WSJPUmSj82/preview";

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 pt-16 md:pt-20" id="hero">
      <div className="text-center space-y-6 md:space-y-8 max-w-3xl animate-fade-in">
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden mb-4 md:mb-8 shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-105">
          <img
            src="/lovable-uploads/5635e403-2311-4e57-bd9f-89fcf7bc2a05.png"
            alt="Mohit Mori"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 transition-all duration-500 hover:text-blue-700">
          Mohit Mori
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 transition-colors duration-300">
          Computer Science Student & Software Developer
        </p>
        <div className="bg-white/80 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm max-w-2xl mx-auto transform transition-all duration-500 hover:bg-white hover:shadow-xl">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Passionate computer science student at California State University, Long Beach with a strong interest in software development and AI. I love building innovative solutions that solve real-world problems, and I'm constantly expanding my skills through personal projects and academic pursuits.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center mt-6 md:mt-8">
          <Button asChild variant="outline" className="gap-2 transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            <a href="https://github.com/mmori7" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="gap-2 transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            <a href="https://www.linkedin.com/in/mohit77/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              LinkedIn
            </a>
          </Button>
          <Button 
            variant="default" 
            className="gap-2 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800" 
            onClick={() => setShowResume(true)}
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            View Resume
          </Button>
        </div>
      </div>

      <Dialog open={showResume} onOpenChange={setShowResume}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 animate-scale-in">
          <DialogHeader className="p-4 border-b">
            <DialogTitle>Resume - Mohit Mori</DialogTitle>
          </DialogHeader>
          <div className="w-full h-full">
            <iframe
              src={resumeUrl}
              className="w-full h-[80vh]"
              title="Mohit Mori's Resume"
              allow="autoplay"
              frameBorder="0"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroSection;
