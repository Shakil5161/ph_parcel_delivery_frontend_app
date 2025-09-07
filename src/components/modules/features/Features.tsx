import {
    Award,
    BarChart3,
    Clock,
    Headphones,
    Map,
    Package,
    Shield,
    Smartphone,
    Truck,
    Users,
    Zap
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Features() {
  const [activeTab, setActiveTab] = useState("all");

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Get your packages delivered within hours with our express delivery service",
      category: "delivery",
      highlight: "2-hour delivery available"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time Tracking",
      description: "Track your packages in real-time with live updates and estimated delivery times",
      category: "technology",
      highlight: "Live GPS tracking"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Handling",
      description: "Your packages are protected with insurance and secure handling procedures",
      category: "security",
      highlight: "Full insurance coverage"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Nationwide Coverage",
      description: "We deliver to every corner of the country with reliable service",
      category: "coverage",
      highlight: "100% coverage area"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App",
      description: "Manage your deliveries from our easy-to-use mobile application",
      category: "technology",
      highlight: "iOS & Android apps"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Solutions",
      description: "Custom delivery solutions for businesses of all sizes",
      category: "business",
      highlight: "Volume discounts"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Package Variety",
      description: "We handle packages of all sizes, from documents to large items",
      category: "delivery",
      highlight: "All sizes accepted"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "24/7 customer support to help with any delivery needs",
      category: "support",
      highlight: "24/7 availability"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "We guarantee timely and secure delivery of your packages",
      category: "delivery",
      highlight: "Satisfaction guarantee"
    }
  ];

  const categories = [
    { id: "all", label: "All Features", icon: <Zap className="w-5 h-5" /> },
    { id: "delivery", label: "Delivery", icon: <Truck className="w-5 h-5" /> },
    { id: "technology", label: "Technology", icon: <Smartphone className="w-5 h-5" /> },
    { id: "security", label: "Security", icon: <Shield className="w-5 h-5" /> },
    { id: "business", label: "Business", icon: <BarChart3 className="w-5 h-5" /> },
    { id: "support", label: "Support", icon: <Headphones className="w-5 h-5" /> }
  ];

  const filteredFeatures = activeTab === "all" 
    ? features 
    : features.filter(feature => feature.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 pb-36 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powerful Features for 
              <span className="block text-blue-200">Seamless Deliveries</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover the comprehensive features that make our parcel delivery service 
              reliable, efficient, and trusted by thousands of users.
            </p>
          </div>
        </div>
        
         <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 text-white fill-current">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
      </section>

      {/* Category Filters */}
      <section className="pt-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-6">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                
                <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">50K+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-green-400">99.8%</div>
              <div className="text-gray-300">Delivery Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">500+</div>
              <div className="text-gray-300">Active Delivery Riders</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-orange-400">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Better Deliveries?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who trust us with their delivery needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
               <Link to={'/register'}>Get Started Today</Link> 
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                <Link to={'/register'}>Checkout Our Service</Link> 
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}