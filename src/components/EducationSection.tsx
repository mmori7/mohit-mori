
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900" id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <GraduationCap className="w-8 h-8 text-blue-400" />
          <span className="text-gradient">Education</span>
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <Card className="border border-gray-700 bg-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-blue-300">
                  California State University Long Beach
                </h3>
                <p className="text-gray-300 mt-2">Bachelor's in Computer Science</p>
                <p className="text-blue-400 font-semibold mt-2">GPA: 3.45</p>
                <div className="mt-4 bg-gray-700 h-1 w-24 mx-auto rounded-full overflow-hidden">
                  <div className="bg-blue-400 h-full w-4/5"></div>
                </div>
                <p className="text-gray-400 mt-4 text-sm">2021 - 2025</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
