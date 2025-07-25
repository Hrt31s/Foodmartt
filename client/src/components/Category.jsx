import React from 'react';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const categories = [
  { name: "Fruits", img: "https://th.bing.com/th/id/OIP.fAaAiWK2-aapekJAne81DQHaEc?w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { name: "Pulses", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNX1VLc0MUXsOWWr6njpK_qrZ4iLVH-WnOg&s" },
  { name: "Snacks", img: "https://media.istockphoto.com/id/175012912/photo/crisps.jpg?s=612x612&w=0&k=20&c=wiKGE9D2MPtqZV6VYKm-K7mcFfHaGSPEpSzTu59_eHk=" },
  { name: "Food-item", img: "https://th.bing.com/th/id/OIP.609ZvTLi8z0sUiJ9LynPywHaE8?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { name: "Sweet", img: "https://th.bing.com/th/id/OIP.xihuWKonuIg3XL56myVjhwHaGn?w=211&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { name: "Fresh-veggies", img: "https://th.bing.com/th/id/OIP.29qf0SF7PV3Ofr_tJtEuxQHaE8?w=302&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
];

export default function Category() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/filter/${encodeURIComponent(category)}`);
  };

  return (
    <div className="max-w-screen-7xl mx-auto px-8 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Category</h2>
        
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="pb-6"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.name}>
            <div
              onClick={() => handleCategoryClick(cat.name)}
              className="cursor-pointer bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl h-44"
            >
              <img src={cat.img} alt={cat.name} className="w-20 h-20 object-contain mb-2" />
              <p className="text-base font-semibold text-gray-800 mt-2">{cat.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}