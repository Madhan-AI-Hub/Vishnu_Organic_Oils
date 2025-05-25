
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, you would send this data to your backend or an email service
    // For this demo, we'll simulate an API call with a timeout
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-natural-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-forest-700 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-playfair font-bold mb-2">Contact Us</h1>
          <p className="text-forest-100">
            We'd love to hear from you
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-forest-800 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions about our products or want to place a bulk order? Reach out to us and our team will be happy to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                  <address className="not-italic text-gray-600">
                    J460 Sri Vishnu Chekku Ennai<br />
                    Manikampalayam Pirivu, Mettur Road<br />
                    Ammapettai, Erode District<br />
                    Tamil Nadu - 638311
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:+918220939050" className="hover:text-forest-700">+91 82209 39050</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:madhanking2004ac@gmail.com" className="hover:text-forest-700">madhanking2004ac@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="mt-8">
              <h3 className="font-medium text-lg mb-4">Find Us on Google Maps</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="Vishnu Organic Oils Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.289233517042!2d77.72004937598855!3d11.563580743781714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMzJzQ4LjkiTiA3N8KwNDMnMjEuNSJF!5e0!3m2!1sen!2sin!4v1621345678901!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-playfair font-semibold text-forest-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>We'll get back to you as soon as possible!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
