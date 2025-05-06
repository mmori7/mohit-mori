
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
        <Card className="border border-gray-700 bg-gray-800">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-300">
                California State University Long Beach
              </h3>
              <p className="text-gray-300 mt-2">Bachelor's in Computer Science</p>
              <p className="text-blue-400 font-semibold mt-2">GPA: 3.45</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
