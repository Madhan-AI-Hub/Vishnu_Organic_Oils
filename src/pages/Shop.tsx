
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

const Shop = () => {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  const categories = [
    { id: "all", name: "All Products" },
    { id: "cooking", name: "Cooking Oils" },
    { id: "beauty", name: "Beauty Oils" },
    { id: "health", name: "Health Oils" },
    { id: "premium", name: "Premium Oils" },
  ];
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === "all" || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Function to get similar products (same category)
  const getSimilarProducts = (productId: string, category: string) => {
    return products
      .filter(p => p.id !== productId && p.category === category)
      .slice(0, 3); // Get up to 3 similar products
  };

  return (
    <div className="bg-natural-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-forest-700 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-playfair font-bold mb-2">Our Products</h1>
          <p className="text-forest-100">
            Explore our collection of premium organic cold-pressed oils
          </p>
        </div>
      </div>
      
      {/* Filter and Search */}
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeFilter === category.id 
                    ? 'bg-forest-600 text-white' 
                    : 'bg-white text-forest-700 hover:bg-forest-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="container-custom pb-16">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => {
              const similarProducts = getSimilarProducts(product.id, product.category);
              
              return (
                <div key={product.id} className="product-card group bg-white">
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
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description.substring(0, 60)}...</p>
                    
                    {/* Related Oil Images Section */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Image className="h-4 w-4 text-forest-600" />
                        <p className="text-xs text-gray-500">Oil Images:</p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        {product.relatedImages.map((img, index) => (
                          <div key={index} className="aspect-square rounded-md overflow-hidden border border-gray-200 hover:border-forest-500 transition-colors">
                            <img 
                              src={img} 
                              alt={`${product.name} image ${index + 1}`}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Similar Products Section */}
                    {similarProducts.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Similar Products:</p>
                        <div className="flex space-x-2 overflow-x-auto">
                          {similarProducts.map((similar) => (
                            <Link to={`/product/${similar.id}`} key={similar.id}>
                              <Card className="w-14 h-14 flex-shrink-0 hover:ring-1 hover:ring-forest-500">
                                <CardContent className="p-0 h-full">
                                  <img 
                                    src={similar.image} 
                                    alt={similar.name} 
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                </CardContent>
                              </Card>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    
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
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter to find what you're looking for.</p>
            <Button 
              variant="outline" 
              className="border-forest-600 text-forest-700"
              onClick={() => {
                setActiveFilter("all");
                setSearchTerm("");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
