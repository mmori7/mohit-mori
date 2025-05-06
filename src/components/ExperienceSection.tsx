
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Event Manager",
      company: "Estacy Events",
      location: "Surat, GJ, India",
      period: "Sep 2020 - Aug 2022",
      type: "Part-Time",
      responsibilities: [
        "Managed logistics, including venue selection, scheduling, and vendor coordination, to ensure seamless event execution.",
        "Collaborated with clients to understand and fulfill their vision through creative solutions.",
        "Supervised event staff, delegating tasks and providing on-the-job training to foster teamwork and ensure quality execution.",
        "Solved on-site challenges quickly, adjusting plans to maintain positive guest experiences and high client satisfaction."
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-800" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Briefcase className="w-8 h-8 text-blue-400" />
          <span className="text-gradient">Work Experience</span>
        </h2>
        
        {experiences.map((exp, index) => (
          <Card key={index} className="mb-6 border border-gray-700 bg-gray-900">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-300">
                      {exp.title} • <span className="text-blue-400">{exp.company}</span>
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300 mt-1">
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <Badge className="mt-2 md:mt-0 self-start md:self-center bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                    {exp.type}
                  </Badge>
                </div>
                
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300">{resp}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
