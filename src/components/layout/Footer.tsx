// import Logo from "@/assets/icons/Logo"
// import { Facebook, Github, Instagram, Mail, Twitter } from "lucide-react"
// import { Link } from "react-router"

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//           {/* Brand */}
//           <div className="flex flex-col items-start">
//             <Link to={"/"}>
//                 <Logo/>
//             </Link>
//             <p className="mt-3 text-gray-400 text-sm leading-relaxed">
//               Smart, reliable & secure delivery solutions.  
//               We connect senders, receivers, and riders seamlessly.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-3">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li><a href="/about" className="hover:text-white transition">About Us</a></li>
//               <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
//               <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
//               <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-white font-semibold mb-3">Services</h3>
//             <ul className="space-y-2 text-sm">
//               <li>📦 Parcel Tracking</li>
//               <li>🚴 Rider Management</li>
//               <li>👥 User Analytics</li>
//               <li>🛡 Secure Delivery</li>
//             </ul>
//           </div>

//           {/* Socials */}
//           <div>
//             <h3 className="text-white font-semibold mb-3">Connect With Us</h3>
//             <div className="flex space-x-4">
//               <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500"><Facebook size={20} /></a>
//               <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400"><Twitter size={20} /></a>
//               <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500"><Instagram size={20} /></a>
//               <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-400"><Github size={20} /></a>
//               <a href="mailto:support@parcelpro.com" className="hover:text-red-400"><Mail size={20} /></a>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
//           © {new Date().getFullYear()} ParcelPro. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   )
// }


import {
    Clock,
    Facebook,
    Heart,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Package,
    Phone,
    Shield,
    Truck,
    Twitter
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Truck className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">QuickParcel</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Delivering your packages with speed, security, and precision. 
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Trusted by 50,000+ customers</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>24/7 Customer Support</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Package</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Schedule Pickup</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Delivery Rates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Service Areas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Package className="w-4 h-4 text-blue-400" />
                <span>Express Delivery</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Package className="w-4 h-4 text-green-400" />
                <span>Same Day Delivery</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Package className="w-4 h-4 text-purple-400" />
                <span>International Shipping</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Package className="w-4 h-4 text-yellow-400" />
                <span>Business Solutions</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Package className="w-4 h-4 text-red-400" />
                <span>Fragile Handling</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+880 1641 969790</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>shakilahmed5161@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>84/8 North Vashantak, Dhaka Cant Dhaka-1206</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for updates and special offers</p>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 QuickParcel. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for better deliveries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600 rounded-full opacity-10"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-green-600 rounded-full opacity-10"></div>
      </div>
    </footer>
  );
}