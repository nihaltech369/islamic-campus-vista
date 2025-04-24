
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Navigate } from "react-router-dom";

const institutionsData = {
  "twiaba-garden": {
    name: "Twiaba Garden Women's Village",
    logo: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=facearea&w=96&q=80",
    description: "Focuses on Quranic sciences, exegesis, and interfaith studies for girls.",
    detailedDescription: `
      Twiaba Garden Women's Village is a prestigious institution dedicated to providing comprehensive Islamic education 
      for women. Our curriculum combines traditional Islamic sciences with modern educational approaches, creating an 
      environment where students can excel in both spiritual and academic pursuits.
      
      We offer specialized programs in:
      - Quranic Sciences and Memorization
      - Islamic Jurisprudence
      - Arabic Language and Literature
      - Contemporary Islamic Studies
    `
  },
  "noorul-uloom": {
    name: "Noorul uloom madrasa",
    logo: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=facearea&w=96&q=80",
    description: "focus on islamic studies, studies in quran.",
    detailedDescription: `
      Noorul uloom madrasa is a center of excellence in Islamic education, providing students with a strong 
      foundation in Islamic studies and Quranic sciences. Our institution combines traditional teaching methods 
      with modern educational techniques.

      Our key focus areas include:
      - Advanced Quranic Studies
      - Islamic History and Culture
      - Arabic Language Proficiency
      - Contemporary Islamic Thought
    `
  }
};

export default function InstitutionDetails() {
  const { id } = useParams();
  const institution = id ? institutionsData[id as keyof typeof institutionsData] : null;

  if (!institution) {
    return <Navigate to="/institutions" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-8">
            <img
              src={institution.logo}
              alt={`${institution.name} Logo`}
              className="h-24 w-24 rounded-full object-cover border"
            />
            <h1 className="text-4xl font-bold text-gray-900">{institution.name}</h1>
          </div>
          <div className="prose prose-emerald max-w-none">
            {institution.detailedDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
