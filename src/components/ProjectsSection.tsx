
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
    status: "in-progress",
  },
  {
    title: "AI Mental Health Helper",
    description: "Mental health support powered by artificial intelligence",
    status: "new",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Laptop className="w-8 h-8 text-blue-600" />
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>{project.title}</span>
                  <Badge
                    variant={
                      project.status === "completed"
                        ? "default"
                        : project.status === "in-progress"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
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
