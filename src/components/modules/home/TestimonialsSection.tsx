import { Quote, Star } from "lucide-react";
import { Link } from "react-router";

interface Testimonial {
  type: 'sender' | 'receiver' | 'rider';
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  highlight: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      type: "sender",
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      content: "As someone who ships products daily, I'm amazed by the reliability of this service. My customers always receive their packages on time, and the tracking system is incredibly accurate.",
      rating: 5,
      highlight: "Reliable daily shipments for my business"
    },
    {
      type: "receiver",
      name: "Michael Chen",
      role: "Frequent Online Shopper",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "I live in a hard-to-find apartment, but these delivery riders always find me. The real-time updates and delivery notifications give me peace of mind. Best delivery experience I've had!",
      rating: 5,
      highlight: "Always finds my hard-to-locate apartment"
    },
    {
      type: "rider",
      name: "Emma Rodriguez",
      role: "Delivery Rider",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      content: "The rider app is intuitive and makes my job so much easier. The optimized routes save me time, and the support team is always helpful when I need assistance. Great company to work with!",
      rating: 4,
      highlight: "Intuitive app and great support"
    }
  ];

  const typeConfig = {
    sender: {
      label: "Sender",
      color: "bg-blue-100 text-blue-800",
      border: "border-l-blue-500"
    },
    receiver: {
      label: "Receiver", 
      color: "bg-green-100 text-green-800",
      border: "border-l-green-500"
    },
    rider: {
      label: "Rider",
      color: "bg-purple-100 text-purple-800",
      border: "border-l-purple-500"
    }
  };

  return (
    <section className="w-full py-10 md:pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from senders, receivers, and riders about their experiences with our delivery service
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const config = typeConfig[testimonial.type];
            
            return (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 ${config.border}`}
              >
                {/* Quote Icon */}
                <div className="text-gray-300 mb-4">
                  <Quote className="w-8 h-8" />
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Highlight */}
                <div className="mb-6">
                  <span className="text-sm font-medium text-gray-900">
                    {testimonial.highlight}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                {/* User Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <span className={`text-xs px-2 py-1 rounded-full ${config.color}`}>
                        {config.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Senders</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">200K+</div>
            <div className="text-gray-600">Satisfied Receivers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Active Riders</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Experience the difference that thousands of users already enjoy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              <Link to={'/register'}>Start Sending</Link>
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
              <Link to={'/register'}>Become a Rider</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}