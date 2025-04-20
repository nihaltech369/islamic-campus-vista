
import { CalendarIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
}

const EventCard = ({ title, date, description }: EventCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2 text-emerald-600">
          <CalendarIcon className="h-5 w-5" />
          <span className="font-medium">{date}</span>
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default EventCard;
