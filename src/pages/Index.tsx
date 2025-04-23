
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const programsRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes to home
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToPrograms = () => {
    programsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" ref={topRef}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to ISRA Vatanappally
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Where Islamic wisdom meets scientific excellence. Nurturing minds, enriching souls, and advancing knowledge for humanity.
            </p>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6"
              onClick={scrollToPrograms}
            >
              Explore Our Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why to choose ISRA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Islamic Studies</h3>
              <p className="text-gray-600">Comprehensive Islamic education rooted in authentic sources and contemporary understanding.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scientific Research</h3>
              <p className="text-gray-600">Cutting-edge research facilities and collaboration opportunities with global institutions.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-gray-600">Join a diverse community of scholars and students from around the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="our-programs" ref={programsRef} className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard
              title="Islamic Studies Diploma"
              description="A comprehensive program covering Quran, Hadith, Fiqh, and Islamic history with modern perspectives."
              duration="2 Years"
            />
            <ProgramCard
              title="Arabic Language Program"
              description="Master classical and modern Arabic through an intensive curriculum designed for all levels."
              duration="1 Year"
            />
            <ProgramCard
              title="Islamic Finance & Economics"
              description="Study Islamic banking, finance, and economics principles in today's global context."
              duration="18 Months"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard
              title="Islamic Science Symposium"
              date="May 15, 2024"
              description="Join leading scholars in discussing the intersection of Islamic teachings and modern scientific discoveries."
            />
            <EventCard
              title="AI in Islamic Studies Workshop"
              date="May 20, 2024"
              description="Learn how artificial intelligence is revolutionizing Islamic research and studies."
            />
            <EventCard
              title="International Students Day"
              date="May 25, 2024"
              description="Celebrate diversity and cultural exchange with students from over 50 countries."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Ahmad Hassan"
              role="PhD Student, Islamic AI Research"
              content="Al-Hikmah Campus has provided me with the perfect environment to pursue my research in artificial intelligence while staying true to Islamic principles."
            />
            <TestimonialCard
              name="Fatima Ali"
              role="BSc Computer Science"
              content="The blend of Islamic values and modern technology education here is unique. I've grown both spiritually and professionally."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
