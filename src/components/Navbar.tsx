
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Info, Building, Phone, LogIn, UserPlus, UserRound } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const navLinks = [
  { to: "/about", icon: Info, label: "About Us" },
  { to: "/institutions", icon: Building, label: "Institutions" },
  { to: "/contact", icon: Phone, label: "Contact" },
];

const Navbar = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Successfully logged out!");
    } catch (error) {
      toast.error("Error signing out");
    }
  };
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-600" aria-label="Go to homepage">
              <img 
                src="/lovable-uploads/6f76f565-df2d-489e-83ba-e8d89b60d009.png" 
                alt="Al-Hikmah Campus Logo" 
                className="h-12 w-auto mr-4"
              />
            </Link>
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
          <div className="md:hidden" aria-label="Open mobile menu">
            <Button variant="ghost" className="inline-flex items-center justify-center p-2">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
