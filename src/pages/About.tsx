
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="bg-natural-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-forest-700 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-playfair font-bold mb-2">About Us</h1>
          <p className="text-forest-100">
            Learn about our journey and commitment to quality
          </p>
        </div>
      </div>
      
      {/* Our Mission */}
      <section className="bg-forest-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-forest-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 italic mb-8">
              "To preserve traditional oil extraction methods and provide the purest, most nutritious oils while supporting sustainable farming practices and rural livelihoods."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="font-playfair font-semibold text-xl mb-3">Tradition</h3>
                  <p className="text-gray-700">We honor age-old extraction methods using wooden chekku (cold press) that preserve all nutrients and natural flavors in our oils.</p>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="font-playfair font-semibold text-xl mb-3">Quality</h3>
                  <p className="text-gray-700">We never compromise on the quality of our ingredients or processes, ensuring you receive only the best products for your health and wellness.</p>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="font-playfair font-semibold text-xl mb-3">Sustainability</h3>
                  <p className="text-gray-700">We work directly with organic farmers who practice sustainable agriculture, supporting rural communities and protecting our environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="container-custom py-16">
        <h2 className="text-3xl font-playfair font-bold text-forest-800 mb-12 text-center">Our Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-natural-100 rounded-full flex items-center justify-center text-forest-700 font-bold text-xl mb-4">1</div>
            <h3 className="font-playfair font-semibold text-xl mb-3">Sourcing</h3>
            <p className="text-gray-700">We carefully select and source organic ingredients from trusted farmers who follow sustainable practices.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-natural-100 rounded-full flex items-center justify-center text-forest-700 font-bold text-xl mb-4">2</div>
            <h3 className="font-playfair font-semibold text-xl mb-3">Preparation</h3>
            <p className="text-gray-700">The seeds and nuts are cleaned, dried naturally in the sun, and prepared for the extraction process.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-natural-100 rounded-full flex items-center justify-center text-forest-700 font-bold text-xl mb-4">3</div>
            <h3 className="font-playfair font-semibold text-xl mb-3">Extraction</h3>
            <p className="text-gray-700">Using traditional wooden chekku (cold press) method, we extract oil without heat to preserve nutrients and flavor.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-natural-100 rounded-full flex items-center justify-center text-forest-700 font-bold text-xl mb-4">4</div>
            <h3 className="font-playfair font-semibold text-xl mb-3">Packaging</h3>
            <p className="text-gray-700">The freshly pressed oil is carefully filtered and bottled in hygienic conditions to ensure purity and longevity.</p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-earth-100 py-12">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-playfair font-bold text-forest-800 mb-4">Experience the Difference Today</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Bring home the goodness of traditional, cold-pressed oils and taste the difference in your cooking.
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild className="bg-forest-600 hover:bg-forest-700 text-white">
                <Link to="/shop">Shop Our Products</Link>
              </Button>
              <Button asChild variant="outline" className="border-forest-600 text-forest-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
