
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image?: string;
}

const TestimonialCard = ({ name, role, content, image }: TestimonialCardProps) => {
  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{content}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
