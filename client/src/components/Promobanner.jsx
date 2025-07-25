import React from "react";

const PromoBanners = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Promo - Dark Chocolate */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-pink-50 rounded-2xl p-6">
        {/* Text */}
        <div className="space-y-2 md:w-1/2">
          <p className="text-yellow-500 font-semibold text-lg">Upto 25% Off</p>
          <h2 className="text-2xl font-bold text-gray-800">Luxa Dark Chocolate</h2>
          <p className="text-gray-500 text-sm">
            Very tasty & creamy vanilla flavour creamy muffins.
          </p>
          <button className="mt-4 px-5 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm">
            SHOW NOW
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
          <img
            src="https://foodcostanasik.peclick.com/uploads/1476/24/09/110924172603295266e12c388cc54.webp"
            alt="Dark Chocolate"
            className="max-h-40 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>

      {/* Right Promo - Creamy Muffins */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-blue-50 rounded-2xl p-6">
        {/* Text */}
        <div className="space-y-2 md:w-1/2">
          <p className="text-yellow-500 font-semibold text-lg">Upto 25% Off</p>
          <h2 className="text-2xl font-bold text-gray-800">Creamy Muffins</h2>
          <p className="text-gray-500 text-sm">
            Very tasty & creamy vanilla flavour creamy muffins.
          </p>
          <button className="mt-4 px-5 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm">
            SHOW NOW
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
          <img
            src="https://www.allrecipes.com/thmb/RdyL1EgIB0Qq_fr5HjdsAmcpMlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228553-moist-chocolate-muffins-DDMFS-4x3-a9f73a46938547c99d921613dc167741.jpg"
            alt="Creamy Muffins"
            className="max-h-40 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanners;
