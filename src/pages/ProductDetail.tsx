
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Minus, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }
  
  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, value));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="bg-natural-50 min-h-screen py-8 md:py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-forest-600 hover:text-forest-700 flex items-center"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to products
          </button>
        </div>
        
        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="h-full">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Product Info */}
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-playfair font-bold text-forest-800 mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-forest-700 mb-4">₹{product.price}</p>
              
              <div className="border-t border-b border-gray-200 py-4 my-4">
                <p className="text-gray-700 mb-4">{product.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="mr-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" />
                    <span>In Stock</span>
                  </div>
                  <div className="mr-2 bg-natural-100 text-forest-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {product.weight}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="font-medium mb-2">Extraction Method:</p>
                  <p className="text-gray-700">{product.extractionMethod}</p>
                </div>
                
                {/* Benefits */}
                <div>
                  <p className="font-medium mb-2">Benefits:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Quantity selector */}
              <div className="flex items-center mb-6">
                <span className="mr-4 font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 py-1 border-r border-gray-300 text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-12 py-1 text-center border-none focus:outline-none"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-1 border-l border-gray-300 text-gray-600 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-forest-600 hover:bg-forest-700 text-white flex-1"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button 
                  variant="secondary" 
                  className="flex-1"
                  asChild
                >
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
