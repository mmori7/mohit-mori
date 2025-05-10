
import { Code, Laptop } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Resume Match AI Coach",
    description: "An AI-powered tool to help match resumes with job descriptions",
    link: "https://github.com/mmori7/resume-match-ai-coach",
    status: "completed",
  },
  {
    title: "Cosmic Habit Quest",
    description: "A gamified habit tracking application",
    link: "https://github.com/Ronitsabhaya75/Habit-Quest",
    status: "completed",
  },
  {
    title: "AI Mental Health Helper",
    description: "Mental health support powered by artificial intelligence",
    link: "https://github.com/mmori7/Ai-mental-health-helper",
    status: "completed",
  },
  {
    title: "Data Jarvis",
    description: "Intelligent data processing and analysis tool",
    link: "https://github.com/mmori7/data-jarvis",
    status: "completed",
  },
  {
    title: "Guardian AI",
    description: "Smart call filtering and protection system",
    link: "https://github.com/mmori7/call-guardian-ai",
    status: "in-progress",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-800" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Laptop className="w-8 h-8 text-blue-400" />
          <span className="text-gradient">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow border border-gray-700 bg-gray-900">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span className="text-blue-300">{project.title}</span>
                  <Badge
                    variant={
                      project.status === "completed"
                        ? "default"
                        : project.status === "in-progress"
                        ? "secondary"
                        : "outline"
                    }
                    className={
                      project.status === "completed"
                        ? "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30"
                        : project.status === "in-progress"
                        ? "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                        : "bg-transparent text-gray-300 border-gray-500"
                    }
                  >
                    {project.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
