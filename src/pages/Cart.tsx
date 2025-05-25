
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate the form
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Create order details for WhatsApp message
    const orderDetails = cart.map(item => 
      `${item.product.name} (₹${item.product.price}) x ${item.quantity} = ₹${item.product.price * item.quantity}`
    ).join("%0A");
    
    const total = `Total: ₹${getCartTotal()}`;
    const customerDetails = `
      %0A%0ACustomer Details:%0A
      Name: ${customerInfo.name}%0A
      Phone: ${customerInfo.phone}%0A
      Email: ${customerInfo.email}%0A
      Address: ${customerInfo.address}%0A
    `;
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I would like to place an order:%0A%0A${orderDetails}%0A%0A${total}${customerDetails}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/918220939050?text=${whatsappMessage}`, "_blank");
    
    // Show success message
    toast({
      title: "Order Placed Successfully!",
      description: "You'll be redirected to WhatsApp to confirm your order.",
    });
    
    // Clear the cart and redirect to home
    clearCart();
    navigate("/");
  };

  return (
    <div className="bg-natural-50 min-h-screen py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-playfair font-bold text-forest-800 mb-6">Your Cart</h1>
        
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cart.map((item) => (
                        <li key={item.product.id} className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          
                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-base font-medium text-gray-900">
                                  <Link to={`/product/${item.product.id}`} className="hover:text-forest-600">
                                    {item.product.name}
                                  </Link>
                                </h3>
                                <p className="ml-4 text-base font-medium text-forest-700">
                                  ₹{item.product.price * item.quantity}
                                </p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                ₹{item.product.price} each
                              </p>
                            </div>
                            
                            <div className="flex-1 flex items-end justify-between">
                              <div className="flex items-center">
                                <button
                                  type="button"
                                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="mx-2 w-8 text-center">{item.quantity}</span>
                                <button
                                  type="button"
                                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              
                              <button
                                type="button"
                                className="text-red-500 hover:text-red-700 focus:outline-none"
                                onClick={() => removeFromCart(item.product.id)}
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                  <div className="flex justify-between">
                    <Button 
                      variant="outline" 
                      className="text-forest-700 border-forest-600"
                      asChild
                    >
                      <Link to="/shop">Continue Shopping</Link>
                    </Button>
                    <Button 
                      variant="destructive" 
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Summary and Checkout */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-playfair font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="flow-root">
                  <div className="-my-4 divide-y divide-gray-200">
                    <div className="py-4">
                      <div className="flex items-center justify-between">
                        <p className="text-base text-gray-700">Subtotal</p>
                        <p className="text-base font-medium text-gray-900">₹{getCartTotal()}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-base text-gray-700">Shipping</p>
                        <p className="text-base font-medium text-gray-900">FREE</p>
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-medium text-gray-900">Total</p>
                        <p className="text-lg font-bold text-forest-700">₹{getCartTotal()}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleCheckout} className="mt-4">
                  <h3 className="text-lg font-playfair font-semibold text-gray-900 mb-4">Customer Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={customerInfo.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={customerInfo.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={customerInfo.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Delivery Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={customerInfo.address}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-forest-600 hover:bg-forest-700 text-white mt-6 flex items-center justify-center"
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Complete Order via WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-16 w-16 text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Button asChild className="bg-forest-600 hover:bg-forest-700 text-white">
              <Link to="/shop">Browse Products</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
