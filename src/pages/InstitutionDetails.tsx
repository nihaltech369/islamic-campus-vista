import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Navigate, Link } from "react-router-dom";
import { Book, Building, School, Info, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

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
    `,
    founded: "2005",
    location: "Kerala, India",
    faculty: "23 distinguished scholars and educators",
    students: "Over 150 students from diverse backgrounds",
    facilities: [
      "Modern classrooms with digital learning tools",
      "Extensive library with over 5,000 Islamic texts",
      "Prayer hall and meditation spaces",
      "Student accommodation and dining facilities",
      "Computer lab and digital resources center"
    ],
    achievements: [
      "Recognized for excellence in women's Islamic education",
      "Graduates serving in educational and community roles worldwide",
      "Annual Quran recitation competition hosts participants from across the region",
      "Published numerous research papers on contemporary Islamic studies"
    ],
    imageGallery: [
      "https://images.unsplash.com/photo-1633596346913-1fe594e3f2fc?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577309457013-a71c06b05c2a?auto=format&fit=crop&q=80"
    ]
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
    `,
    founded: "1998",
    location: "Malappuram, Kerala",
    faculty: "35 experienced educators and Islamic scholars",
    students: "Over 200 students at various levels of study",
    facilities: [
      "Traditional study halls preserving authentic learning environment",
      "Modern library with rare Islamic manuscripts collection",
      "Spacious prayer halls for daily prayers and special occasions",
      "Residential facilities with separate wings for different age groups",
      "Sports grounds for physical education and recreation"
    ],
    achievements: [
      "Produced numerous hafiz (memorizers of the entire Quran)",
      "Alumni serving as imams and religious leaders across India and abroad",
      "Annual Islamic academic conference attracts scholars from various countries",
      "Pioneered integration of modern subjects within traditional Islamic curriculum"
    ],
    imageGallery: [
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1633596694363-91d1f7d7a289?auto=format&fit=crop&q=80"
    ]
  }
};

export default function InstitutionDetails() {
  const { id } = useParams();
  const institution = id ? institutionsData[id as keyof typeof institutionsData] : null;
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!institution) {
    return <Navigate to="/institutions" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/institutions" className="inline-flex items-center text-emerald-700 hover:text-emerald-600 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Institutions
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <div className={`flex items-center gap-6 mb-6 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <img
                    src={institution.logo}
                    alt={`${institution.name} Logo`}
                    className="h-24 w-24 rounded-full object-cover border-4 border-emerald-100 shadow-md"
                  />
                  <h1 className="text-4xl font-bold text-gray-900">{institution.name}</h1>
                </div>
                <div className={`prose prose-emerald max-w-none transition-transform duration-700 delay-300 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                  {institution.detailedDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative">
                {institution.imageGallery && institution.imageGallery.length > 0 && (
                  <>
                    <div className="h-80 md:h-full overflow-hidden">
                      <img 
                        src={institution.imageGallery[activeImage]} 
                        alt={institution.name}
                        className="w-full h-full object-cover transition-opacity duration-500"
                      />
                    </div>
                    {institution.imageGallery.length > 1 && (
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {institution.imageGallery.map((_, index) => (
                          <button 
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={`w-3 h-3 rounded-full ${activeImage === index ? 'bg-white' : 'bg-white/50'}`}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-6 w-6 text-emerald-600" />
                  <h2 className="text-xl font-semibold">Institution Overview</h2>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium w-32">Founded:</span>
                    <span>{institution.founded}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32">Location:</span>
                    <span>{institution.location}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32">Faculty:</span>
                    <span>{institution.faculty}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32">Students:</span>
                    <span>{institution.students}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <School className="h-6 w-6 text-emerald-600" />
                  <h2 className="text-xl font-semibold">Achievements</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {institution.achievements?.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className={`mb-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Book className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold">Our Facilities</h2>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {institution.facilities?.map((facility, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-emerald-100 rounded-full p-1">
                      <div className="bg-emerald-500 h-2 w-2 rounded-full"></div>
                    </div>
                    <p>{facility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {id === "isra-vatanappally" && (
            <div className={`bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-8 text-white text-center transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold mb-4">Interested in Learning More?</h2>
              <p className="mb-6 max-w-xl mx-auto">Join our community of learners and embark on a journey of knowledge and spiritual growth.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="bg-white text-emerald-700 hover:bg-gray-100">
                  <Info className="mr-2 h-4 w-4" />
                  Request Information
                </Button>
                <Button className="bg-emerald-700 hover:bg-emerald-800">
                  Apply Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
