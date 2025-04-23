
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Info, Building, Phone, LogIn, UserPlus, UserRound, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useState } from "react";

const navLinks = [
  { to: "/about", icon: Info, label: "About Us" },
  { to: "/institutions", icon: Building, label: "Institutions" },
  { to: "/contact", icon: Phone, label: "Contact" },
];

const Navbar = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Successfully logged out!");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button 
              onClick={scrollToTop} 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-600" 
              aria-label="Go to top of page"
            >
              <img 
                src="/lovable-uploads/6f76f565-df2d-489e-83ba-e8d89b60d009.png" 
                alt="Al-Hikmah Campus Logo" 
                className="h-12 w-auto mr-4"
              />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`flex items-center text-gray-700 hover:text-emerald-600 px-3 py-2 ${location.pathname === "/" ? "font-bold underline" : ""}`}>
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className={`flex items-center text-gray-700 hover:text-emerald-600 px-3 py-2 ${location.pathname === link.to ? "font-bold underline" : ""}`}>
                <link.icon className="w-4 h-4 mr-1" />
                {link.label}
              </Link>
            ))}
            {!user ? (
              <>
                <Link to="/signup">
                  <Button variant="ghost" className="flex items-center">
                    <UserPlus className="w-4 h-4 mr-1" />
                    Sign Up
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="default" className="flex items-center bg-emerald-600 hover:bg-emerald-700">
                    <LogIn className="w-4 h-4 mr-1" />
                    Log In
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" className="flex items-center text-base">
                    <UserRound className="w-4 h-4 mr-1" />
                    Dashboard
                  </Button>
                </Link>
                <Button onClick={handleSignOut} variant="default" className="flex items-center bg-emerald-600 hover:bg-emerald-700">
                  Sign Out
                </Button>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              className="inline-flex items-center justify-center p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-2">
            <div className="flex flex-col space-y-2 px-2 pt-2 pb-4">
              <Link 
                to="/" 
                className={`flex items-center text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md ${location.pathname === "/" ? "font-bold bg-emerald-50" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
              {navLinks.map(link => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className={`flex items-center text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md ${location.pathname === link.to ? "font-bold bg-emerald-50" : ""}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="w-4 h-4 mr-2" />
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                {!user ? (
                  <div className="flex flex-col space-y-2">
                    <Link 
                      to="/signup" 
                      className="w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button variant="ghost" className="flex items-center w-full justify-start">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Sign Up
                      </Button>
                    </Link>
                    <Link 
                      to="/login" 
                      className="w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button variant="default" className="flex items-center w-full justify-start bg-emerald-600 hover:bg-emerald-700">
                        <LogIn className="w-4 h-4 mr-2" />
                        Log In
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link 
                      to="/dashboard" 
                      className="w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button variant="ghost" className="flex items-center w-full justify-start">
                        <UserRound className="w-4 h-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }} 
                      variant="default" 
                      className="flex items-center justify-start bg-emerald-600 hover:bg-emerald-700"
                    >
                      Sign Out
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
