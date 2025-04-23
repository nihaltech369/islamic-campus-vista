
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface InstitutionCardProps {
  name: string;
  logo: string;
  description: string;
  link: string;
}

export default function InstitutionCard({ name, logo, description, link }: InstitutionCardProps) {
  return (
    <Card
      className="hover:shadow-lg transition-shadow h-full aria-[selected=true]:ring-2 aria-[selected=true]:ring-emerald-500"
      aria-label={name}
    >
      <CardHeader>
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt={`${name} Logo`}
            className="h-14 w-14 rounded-full object-cover border"
            loading="lazy"
            aria-hidden="true"
          />
          <CardTitle className="text-xl">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={link}
          className="inline-flex items-center text-emerald-700 hover:underline font-semibold"
          aria-label={`Learn more about ${name}`}
          tabIndex={0}
        >
          Learn More 
          <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </CardContent>
    </Card>
  );
}
