
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserRound, Mail, Calendar } from "lucide-react";

const Dashboard = () => {
  const { user, session } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <UserRound className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
                <p className="text-gray-500 mt-1">
                  {user.email}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Mail className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Email Status</h2>
                <p className="text-gray-500 mt-1">
                  {user.email_confirmed_at ? 'Verified' : 'Not verified'}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Calendar className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Member Since</h2>
                <p className="text-gray-500 mt-1">
                  {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="mr-4"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
