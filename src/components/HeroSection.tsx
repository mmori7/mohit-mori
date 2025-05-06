
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/17QhX7CSefVYv1AgacLes1_WSJPUmSj82/preview";

  useEffect(() => {
    // Add animation delay for hero elements to appear
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 px-4 pt-16 md:pt-20 text-white" id="hero">
      <div className="text-center space-y-6 md:space-y-8 max-w-3xl">
        <div 
          className={`relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-full overflow-hidden mb-4 md:mb-8 shadow-[0_0_25px_rgba(59,130,246,0.5)] border-4 border-blue-400 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="/lovable-uploads/5635e403-2311-4e57-bd9f-89fcf7bc2a05.png"
            alt="Mohit Mori"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Mohit Mori
        </h1>
        
        <p 
          className={`text-xl sm:text-2xl md:text-3xl text-blue-200 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="relative inline-block">
            <span className="relative z-10">Computer Science Student & Software Developer</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 -z-10 transform skew-x-12"></span>
          </span>
        </p>
        
        <div 
          className={`bg-white/10 backdrop-blur-md p-6 sm:p-7 rounded-xl shadow-xl max-w-2xl mx-auto transform transition-all duration-1000 delay-700 hover:bg-white/15 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-base sm:text-lg text-blue-50 leading-relaxed">
            Passionate computer science student at California State University, Long Beach with a strong interest in software development and AI. I love building innovative solutions that solve real-world problems, and I'm constantly expanding my skills through personal projects and academic pursuits.
          </p>
        </div>
        
        <div 
          className={`flex flex-wrap gap-4 md:gap-5 justify-center mt-8 md:mt-10 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button asChild variant="outline" className="gap-2 transition-all duration-300 border-blue-400 text-blue-300 hover:bg-blue-800/30 hover:text-blue-100 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <a href="https://github.com/mmori7" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="gap-2 transition-all duration-300 border-blue-400 text-blue-300 hover:bg-blue-800/30 hover:text-blue-100 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <a href="https://www.linkedin.com/in/mohit77/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
          <Button 
            variant="default" 
            className="gap-2 transition-all duration-500 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105" 
            onClick={() => setShowResume(true)}
          >
            <FileText className="w-5 h-5" />
            View Resume
          </Button>
        </div>
      </div>

      <Dialog open={showResume} onOpenChange={setShowResume}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 bg-gray-900 border border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.3)] animate-scale-in">
          <DialogHeader className="p-4 border-b border-blue-500/30 bg-gradient-to-r from-gray-900 to-gray-800">
            <DialogTitle className="text-blue-300">Resume - Mohit Mori</DialogTitle>
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
