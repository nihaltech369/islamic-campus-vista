
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProgramCard from "@/components/ProgramCard";
import ExternalLinks from "@/components/ExternalLinks";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const programsRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Added state for each section's visibility
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [programsVisible, setProgramsVisible] = useState(false);
  const [eventsVisible, setEventsVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    // Create intersection observer for animations
    const observerOptions = {
      threshold: isMobile ? 0.1 : 0.2, // Lower threshold for mobile
      rootMargin: isMobile ? '-50px' : '-10px' // More lenient margin for mobile
    };

    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        const sectionId = entry.target.getAttribute('data-section');
        
        console.log(`Intersection for section ${sectionId}:`, {
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          isMobile: isMobile
        });
        
        if (entry.isIntersecting) {
          // Set visibility state based on section ID
          switch(sectionId) {
            case 'features':
              setFeaturesVisible(true);
              break;
            case 'programs':
              setProgramsVisible(true);
              break;
            case 'events':
              setEventsVisible(true);
              break;
            case 'testimonials':
              setTestimonialsVisible(true);
              break;
            default:
              break;
          }
        } else {
          // Reset visibility when element is out of view to enable repeated animations
          switch(sectionId) {
            case 'features':
              setFeaturesVisible(false);
              break;
            case 'programs':
              setProgramsVisible(false);
              break;
            case 'events':
              setEventsVisible(false);
              break;
            case 'testimonials':
              setTestimonialsVisible(false);
              break;
            default:
              break;
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Get all sections that need animation
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      // Cleanup observer on component unmount
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [isMobile]);

  const scrollToPrograms = () => {
    if (programsRef.current) {
      programsRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="min-h-screen" ref={topRef}>
      <Navbar />
      
      {/* Hero Section with enhanced gradient */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to ISRA Vatanappally
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Where Islamic wisdom meets scientific excellence. Nurturing minds, enriching souls, and advancing knowledge for humanity.
            </p>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToPrograms}
            >
              Explore Our Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section data-section="features" className="py-16">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${featuresVisible ? 'animate-scale-up' : 'opacity-0 transform scale-90'}`}>
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ISRA?</h2>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20h-8m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20h2m10 0v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-gray-600">Join a diverse community of scholars and students from around the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="our-programs" data-section="programs" className="py-16 bg-emerald-50" ref={programsRef}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${programsVisible ? 'animate-scale-up' : 'opacity-0 transform scale-90'}`}>
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard
              title="Mazharul Quran Academy"
              description="teaches Quran memorization using modern and traditional techniques."
              duration=""
            />
            <ProgramCard
              title="Imam Gazzali Model Academy"
              description="offers a blended curriculum of science, modern education, and Islamic studies for 8th standard students"
              duration="3 Year"
            />
            <ProgramCard
              title="College of Jamia Madeenathunnoor"
              description="provides a five-year course combining Islamic and secular education."
              duration="2 year hss\3 year degree"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section data-section="events" className="py-16 bg-gray-50">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${eventsVisible ? 'animate-scale-up' : 'opacity-0 transform scale-90'}`}>
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard
              title="Brainiacs"
              date="April 26-29, 2025"
              description="a campus science fest."
            />
            <EventCard
              title="Ziyarath trip"
              date="April 29, 2025"
              description="A spiritual and knowledge seeking trip with entertainment for students."
            />
            <EventCard
              title="Ice breaking"
              date="June 1, 2025"
              description="A session for getting familiar with new students."
            />
          </div>
        </div>
      </section>

      {/* External Links Section */}
      <ExternalLinks />

      {/* Testimonials Section */}
      <section data-section="testimonials" className="py-16">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${testimonialsVisible ? 'animate-fade-up' : 'opacity-0 transform translateY(20px)'}`}>
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Mahroof Abdullah"
              role="BA History"
              content="ISRA is my favourate institution. behind my growth and achievments, there has been a great support from the staff and managment here."
            />
            <TestimonialCard
              name="Shamil Hassainar"
              role="BA History"
              content="The blend of Islamic values and academic in history here is unique. I've grown both spiritually and professionally."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
