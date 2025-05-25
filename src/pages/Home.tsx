
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Health Enthusiast",
    content: "Vishnu's cold-pressed coconut oil has transformed my cooking. The natural flavor and aroma are unmatched. I love that it's extracted using traditional methods!",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Ayurvedic Practitioner",
    content: "As someone who recommends oils for therapeutic purposes, I can vouch for the purity of Vishnu's products. Their sesame oil is particularly excellent.",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Home Chef",
    content: "The groundnut oil brings an authentic flavor to my dishes that refined oils simply can't match. My family can taste the difference!",
    rating: 4
  }
];

const Home = () => {
  const { addToCart } = useCart();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-natural-50 to-white relative overflow-hidden">
        <div className="container-custom py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-forest-800 mb-4 leading-tight">
              Pure Goodness<br />in Every Drop
            </h1>
            <p className="text-lg md:text-xl text-forest-600 mb-8">
              Premium organic oils cold-pressed using traditional wooden chekku method for authenticity and purity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-forest-600 hover:bg-forest-700 text-white">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-forest-600 text-forest-700">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Organic oils collection" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-natural-100 hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="bg-natural-100 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1z" fill="#4A6741"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-forest-700">100% Organic</p>
                    <p className="text-sm text-forest-500">No chemicals added</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative drops */}
          <div className="absolute top-20 left-[10%] oil-drop delay-300"></div>
          <div className="absolute top-40 left-[20%] oil-drop delay-1000"></div>
          <div className="absolute bottom-32 right-[15%] oil-drop delay-700"></div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" fill="none">
            <path fill="white" fillOpacity="1" d="M0,32L120,37.3C240,43,480,53,720,53.3C960,53,1200,43,1320,37.3L1440,32L1440,60L1320,60C1200,60,960,60,720,60C480,60,240,60,120,60L0,60Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-forest-800">Featured Products</h2>
            <Link to="/shop" className="text-forest-600 hover:text-forest-700 font-medium flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card group">
                <div className="overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                  <p className="text-forest-700 font-bold mb-2">₹{product.price}</p>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description.substring(0, 60)}...</p>
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      className="text-sm border-forest-600 text-forest-700 hover:bg-forest-50"
                      asChild
                    >
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-forest-600 hover:bg-forest-700 text-white"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="bg-natural-50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-bold text-center text-forest-800 mb-12">Why Choose Our Oils?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-natural-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" fill="#4A6741"/>
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-center mb-3">Traditional Extraction</h3>
              <p className="text-center text-gray-600">Our oils are extracted using the traditional wooden chekku (cold press) method that preserves all nutrients and natural flavors.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-natural-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4-9.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0-2a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" fill="#4A6741"/>
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-center mb-3">100% Organic</h3>
              <p className="text-center text-gray-600">We source only organic, pesticide-free ingredients to ensure the highest quality and purity in every bottle.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-natural-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" fill="#4A6741"/>
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-center mb-3">No Additives</h3>
              <p className="text-center text-gray-600">We never add preservatives or chemicals. What you get is pure, natural oil exactly as nature intended.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-bold text-center text-forest-800 mb-12">What Our Customers Say</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-forest-50 p-6 md:p-8 rounded-lg relative">
              <div className="text-forest-200 absolute top-4 left-4 opacity-25">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>
              
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`transition-opacity duration-500 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 hidden'}`}
                >
                  <p className="text-gray-700 mb-4 text-lg italic">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 text-xl font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full mx-1 ${index === activeTestimonial ? 'bg-forest-600' : 'bg-forest-200'}`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-forest-700 text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-playfair font-bold mb-4">Ready to Experience the Difference?</h2>
            <p className="text-forest-100 max-w-2xl mx-auto mb-8">
              Bring home the goodness of traditional, cold-pressed oils and taste the difference in your cooking.
            </p>
            <Button asChild className="bg-natural-400 hover:bg-natural-500 text-forest-800">
              <Link to="/shop">Shop Our Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
