import { Clock, MapPin, Smartphone, User } from "lucide-react";

export default function HomeCareSection() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 relative aspect-video md:aspect-auto md:h-auto">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://gomoto.like-themes.com/wp-content/uploads/2019/06/sit-photo.jpg')",
          }}
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 bg-gray-900 text-white px-8 py-12 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Sit at Home</h2>
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
          We Will Take Care
        </h3>
        <p className="text-gray-300 mb-8">
          Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci ultrices
          imperdiet ut id ligula. Sed interdum eros eget sagittis rutrum.
          Vestibulum in elementum mauris. In iaculis odio urna.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col items-center text-center">
            <Clock className="w-10 h-10 text-yellow-500 mb-2" />
            <p className="font-semibold">
              Fast Delivery <br /> in 1 Hour
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Smartphone className="w-10 h-10 text-yellow-500 mb-2" />
            <p className="font-semibold">
              Amazing <br /> Mobile App
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-10 h-10 text-yellow-500 mb-2" />
            <p className="font-semibold">
              Wide <br /> Coverage Map
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <User className="w-10 h-10 text-yellow-500 mb-2" />
            <p className="font-semibold">
              More Than <br /> 150 Couriers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}