
import { Star, Book } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AchievementsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900" id="achievements">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <Star className="w-8 h-8 text-blue-400" />
          <span className="text-gradient">Leadership & Achievements</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border border-gray-700 bg-gray-800 hover:bg-gray-800/80 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-300">
                <Book className="w-5 h-5 text-blue-400" />
                Leadership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Active Member of Association for Computing Machinery (ACM) at CSULB
              </p>
            </CardContent>
          </Card>
          <Card className="border border-gray-700 bg-gray-800 hover:bg-gray-800/80 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-300">
                <Star className="w-5 h-5 text-blue-400" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Goldman Sachs Certificate for Database Problem Solving
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
