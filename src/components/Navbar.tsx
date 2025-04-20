import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Info, LogIn, UserPlus, UserRound } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
const Navbar = () => {
  const {
    user,
    signOut
  } = useAuth();
  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Successfully logged out!");
    } catch (error) {
      toast.error("Error signing out");
    }
  };
  return <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-emerald-700 font-bold text-xl">
              Al-Hikmah Campus
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="flex items-center text-gray-700 hover:text-emerald-600 px-3 py-2">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <Link to="/about" className="flex items-center text-gray-700 hover:text-emerald-600 px-3 py-2">
              <Info className="w-4 h-4 mr-1" />
              About Us
            </Link>
            <Link to="/institutions" className="text-gray-700 hover:text-emerald-600 px-3 py-2">
              Institutions
            </Link>
            <Link to="/ai-chat" className="text-gray-700 hover:text-emerald-600 px-3 py-2">
              Islamic AI Chatbot
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600 px-3 py-2">
              Contact
            </Link>
            
            {!user ? <>
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
              </> : <>
                <Link to="/dashboard">
                  <Button variant="ghost" className="flex items-center text-base">
                    <UserRound className="w-4 h-4 mr-1" />
                    Dashboard
                  </Button>
                </Link>
                <Button onClick={handleSignOut} variant="default" className="flex items-center bg-emerald-600 hover:bg-emerald-700">
                  Sign Out
                </Button>
              </>}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" className="inline-flex items-center justify-center p-2">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;