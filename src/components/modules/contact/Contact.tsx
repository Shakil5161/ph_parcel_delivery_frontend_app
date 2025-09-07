import { Clock, Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="w-full h-[250px] md:h-[500px] bg-contain bg-center flex items-center justify-center text-white"
        style={{
            backgroundImage:
            "url('https://parcel-landing.s3.me-south-1.amazonaws.com/contact_b8a288e2b9.svg')",
        }}
        >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Contact Us
        </h1>
      </div>
      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl py-30 ">
        
        {/* Location */}
        <div className="flex flex-col items-center text-center px-4">
          <MapPin className="w-6 h-6 text-yellow-500 mb-2" />
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="text-gray-600">*4/8 North Vashantask, Dhaka Cant, Dhaka-1206</p>
        </div>

        {/* Phones */}
        <div className="flex flex-col items-center text-center px-4 border-l border-r border-gray-200">
          <Phone className="w-6 h-6 text-yellow-500 mb-2" />
          <h3 className="font-semibold text-lg">Phones</h3>
          <p className="text-gray-600">+88 016-4196-9790</p>
          <p className="text-gray-600">+88 015-1562-9795</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center px-4 border-r border-gray-200">
          <Mail className="w-6 h-6 text-yellow-500 mb-2" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-600">shakilahmed5161@gmail.com</p>
          <p className="text-gray-600">gomoto.parcel@gmail.com</p>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col items-center text-center px-4">
          <Clock className="w-6 h-6 text-yellow-500 mb-2" />
          <h3 className="font-semibold text-lg">Working Hours</h3>
          <p className="text-gray-600">Wednesday - Sunday</p>
          <p className="text-gray-600">7:00 AM - 5:00 PM</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-[400px] mt-8">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5015.295414627962!2d90.39676294934404!3d23.809161824667715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1757251771608!5m2!1sen!2sbd" width="100%" height="450"   loading="lazy" ></iframe>
      </div>
    </div>
  );
}
export default Contact