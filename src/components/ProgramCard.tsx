
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
}

const ProgramCard = ({ title, description, duration }: ProgramCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Book className="w-5 h-5 text-emerald-600" />
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription>{duration}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
