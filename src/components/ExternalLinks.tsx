
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ExternalLinks = () => {
  const links = [
    {
      title: "Isra Media",
      description: "Access our media to explore the garden of Isra",
      url: "https://www.youtube.com/@isra_media",
    },
    {
      title: "ISRA Learnig portal",
      description: "Explore our extensive Islamic knowledge portal",
      url: "",
    },
    {
      title: "ISRA Workspace",
      description: "Collaborate and work in our digital workspace",
      url: "https://zg6zpmxvzbrjbjbi0fewdq.on.drv.tw/www.israworkspace.com/",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Resources & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link) => (
            <Card key={link.title} className="transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {link.title}
                  <ExternalLink className="h-4 w-4" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  Visit Site
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExternalLinks;
