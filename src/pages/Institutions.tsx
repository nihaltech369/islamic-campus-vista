
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstitutionCard from "@/components/InstitutionCard";

const institutions = [
  {
    name: "ISRA Vatanappally",
    logo: "/lovable-uploads/0ff41a2d-5d58-4ba5-8cf0-867734022134.png",
    description: "Advancing breakthrough scientific research and education in an Islamic ethical framework.",
    link: "#",
  },
  {
    name: "Twiaba Garden Women’s Village",
    logo: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=facearea&w=96&q=80",
    description: "Focuses on Quranic sciences, exegesis, and interfaith studies for girls.",
    link: "#",
  },
  {
    name: "Noorul uloom madrasa",
    logo: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=facearea&w=96&q=80",
    description: "focus on islamic studies, studies in quran.",
    link: "#",
  },
];

export default function Institutions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">Our Institutions</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {institutions.map(inst => (
              <InstitutionCard key={inst.name} {...inst} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
