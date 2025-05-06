
import { Github, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OpenSourceSection = () => {
  const contributions = [
    {
      name: "BatterDB",
      description: "Proposed a feature enhancement for the open-source project batterdb by developing a batch operations endpoint to support multiple stack actions (push, pop, peek, flush) in a single API call. The PR improves performance, reduces network overhead, and adds timeout handling.",
      status: "Pending review",
      url: "https://github.com/jh125486/batterdb"
    },
    {
      name: "uvwasi",
      description: "Implemented cross-platform ioctl support in uvwasi's poll_oneoff to populate the nbytes field with the exact number of bytes available for reading, enhancing non-blocking I/O performance and buffer allocation efficiency across Unix-like systems and Windows.",
      status: "PR #301, pending review",
      url: "https://github.com/mmori7/uvwasi"
    }
  ];

  return (
    <section id="opensource" className="py-16 bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <GitFork className="w-8 h-8 text-blue-400" />
            <span className="text-gradient">Open Source Contributions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Active contributions to the open source community, helping to build better software for everyone.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          {contributions.map((contribution, index) => (
            <Card key={index} className="overflow-hidden border border-gray-700 bg-gray-900 hover:shadow-blue-900/10 hover:shadow-lg transition-all">
              <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800 pb-6">
                <CardTitle className="flex justify-between items-start">
                  <span className="text-2xl font-bold text-blue-300">{contribution.name}</span>
                  <span className="bg-blue-900/30 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-800/40">
                    {contribution.status}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {contribution.description}
                </p>
                <Button asChild variant="outline" className="gap-2 mt-4 border-gray-700 text-blue-300 hover:text-blue-200 hover:bg-gray-800">
                  <a href={contribution.url} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Interested in collaborating on open source projects? Let's connect!
          </p>
          <Button asChild variant="default" className="gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-700/50">
            <a href="https://github.com/mmori7" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
