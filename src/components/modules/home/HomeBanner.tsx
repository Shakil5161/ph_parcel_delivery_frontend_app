// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"

// export default function HomeBanner() {
//   return (
//     <section className="relative w-full bg-gradient-to-r  to-indigo-700 text-white py-20 px-6 overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 opacity-10 bg-[url('https://gomoto.like-themes.com/wp-content/uploads/2020/04/slider-eclipse.png')]"></div>

//       <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
//         {/* Text content */}
//         <motion.div
//           className="flex-1 text-center md:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//             Fast & Secure <br /> <span className="text-yellow-300">Parcel Delivery</span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-100 max-w-xl">
//             Experience seamless parcel booking, live rider tracking, and guaranteed safe delivery with our platform.
//           </p>

//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
//               Get Started
//             </Button>
//             <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
//               Learn More
//             </Button>
//           </div>
//         </motion.div>

//         {/* Banner Image / Illustration */}
//         <motion.div
//           className="flex-1 flex justify-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <img
//             src="https://gomoto.like-themes.com/wp-content/uploads/2020/04/slider-courier-mask.png"
//             alt="Parcel Delivery"
//             className="w-80 md:w-[400px] drop-shadow-lg"
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }



import { Button } from "@/components/ui/button";
import { Clock, MapPin, Shield, Star, Truck } from "lucide-react";
import { Link } from "react-router";

export default function HomeBanner() {
  return (
    <section className="w-full relative bg-gradient-to-r from-blue-900 to-purple-800 text-white overflow-hidden pb-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Content Section */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fast & Reliable
              <span className="block text-blue-300">Parcel Delivery</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
              Delivering your packages with speed, security, and precision across the city
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                <Link to={'/register'}>Track Package </Link>
                
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-300">15K+</div>
                <div className="text-blue-100">Deliveries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-300">98%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-300">45min</div>
                <div className="text-blue-100">Avg. Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-300">4.9/5</div>
                <div className="text-blue-100">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration Section */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main delivery illustration */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="bg-white rounded-xl p-4 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Truck className="w-8 h-8 text-blue-600" />
                      <span className="font-bold text-gray-800">ExpressDelivery</span>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                      In Transit
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-600">Dhaka to Chittagong</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-600">Estimated: Today, 3:45 PM</span>
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg p-3 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Tracking ID</span>
                        <span className="font-mono text-sm text-green-800 font-bold">TRK-20231201-ABC123</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                <Star className="w-4 h-4 fill-current" />
                Express
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                <Shield className="w-4 h-4" />
                Insured
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 text-white fill-current">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
}