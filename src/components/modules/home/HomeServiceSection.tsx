import { BarChart, Clock, Globe, Headphones, Package, Shield } from "lucide-react";
import { Link } from "react-router";

export default function HomeServicesSection() {
  const services = [
    {
      icon: <Package className="w-12 h-12" />,
      title: "Express Delivery",
      description: "Get your packages delivered within hours, not days. Our priority service ensures fastest delivery times.",
      features: ["Within 2 hours", "Priority handling", "Real-time tracking"]
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Scheduled Delivery",
      description: "Choose delivery times that work for you. Perfect for time-sensitive documents and important packages.",
      features: ["Time slots", "Date selection", "Recipient notifications"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure Handling",
      description: "Your packages are protected with our premium security measures and insurance coverage.",
      features: ["Package insurance", "Secure storage", "Signature required"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Nationwide Coverage",
      description: "We deliver anywhere in the country with the same reliability and speed you expect.",
      features: ["All cities covered", "Rural delivery", "International options"]
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Our customer service team is always available to help with any questions or concerns.",
      features: ["Live chat", "Phone support", "Email assistance"]
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Business Solutions",
      description: "Custom delivery solutions for businesses of all sizes with volume discounts and dedicated support.",
      features: ["Bulk discounts", "API integration", "Dedicated account manager"]
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-current">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Delivery Services
          </h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of delivery solutions tailored to meet 
            your specific needs with reliability and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover Action */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-blue-600 font-medium text-sm flex items-center group-hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join thousands of satisfied customers who trust us with their delivery needs. 
            Get started today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              <Link to={'/register'}>Schedule a Pickup </Link>
            </button>
            <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-300">
              <Link to={'/register'}>Checkout Our Service </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}