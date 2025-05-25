
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-natural-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-playfair font-bold text-forest-800 mb-4">404</h1>
        <p className="text-xl text-forest-600 mb-8">Oops! We couldn't find that page.</p>
        <img 
          src="https://images.unsplash.com/photo-1602345397613-0934a8812d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
          alt="Oil drop" 
          className="rounded-full w-32 h-32 object-cover mx-auto mb-8"
        />
        <p className="text-gray-600 mb-6">
          The page you're looking for may have been moved or doesn't exist.
        </p>
        <Button asChild className="bg-forest-600 hover:bg-forest-700 text-white">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
