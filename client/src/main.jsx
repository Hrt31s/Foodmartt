import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <App />
    
  </React.StrictMode>,
)
      //  <div>
      //     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      //       {/* Product Image with Discount and Favorite */}
      //       <div className="relative">
      //         <img
      //           className="w-full h-48 object-cover rounded-md"
      //           src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
      //           alt="Sunstar Fresh Melon Juice"
      //         />
      //         <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
      //           -30%
      //         </div>
      //         <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
      //           <svg
      //             className="w-5 h-5 text-gray-500"
      //             fill="none"
      //             stroke="currentColor"
      //             viewBox="0 0 24 24"
      //           >
      //             <path
      //               strokeLinecap="round"
      //               strokeLinejoin="round"
      //               strokeWidth="2"
      //               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      //         2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
      //         14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
      //         11.54L12 21.35z"
      //             />
      //           </svg>
      //         </button>
      //       </div>

      //       {/* Product Info */}
      //       <div className="mt-4">
      //         <h3 className="font-bold text-lg text-gray-800 mb-1">
      //           Sunstar Fresh Melon Juice
      //         </h3>
      //         <div className="flex items-center mb-1">
      //           <span className="text-yellow-500 text-sm font-semibold">
      //            Category
      //           </span>
      //           <svg
      //             className="w-4 h-4 text-yellow-500 ml-1"
      //             fill="currentColor"
      //             viewBox="0 0 20 20"
      //           >
      //             <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
      //           </svg>
      //         </div>
      //         <p className="text-gray-700 font-medium">$18.00</p>
      //       </div>

      //       {/* Quantity and Add to Cart */}
      //       <div className="mt-4 flex items-center">
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
      //           -
      //         </button>
      //         <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
      //           1
      //         </span>
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
      //           +
      //         </button>
      //         <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      //           Add to Cart
      //         </button>
      //       </div>
      //     </div>
      //   </div>

      //   <div>
      //     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      //       {/* Product Image with Discount and Favorite */}
      //       <div className="relative">
      //         <img
      //           className="w-full h-48 object-cover rounded-md"
      //           src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
      //           alt="Sunstar Fresh Melon Juice"
      //         />
      //         <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
      //           -30%
      //         </div>
      //         <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
      //           <svg
      //             className="w-5 h-5 text-gray-500"
      //             fill="none"
      //             stroke="currentColor"
      //             viewBox="0 0 24 24"
      //           >
      //             <path
      //               strokeLinecap="round"
      //               strokeLinejoin="round"
      //               strokeWidth="2"
      //               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      //         2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
      //         14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
      //         11.54L12 21.35z"
      //             />
      //           </svg>
      //         </button>
      //       </div>

      //       {/* Product Info */}
      //       <div className="mt-4">
      //         <h3 className="font-bold text-lg text-gray-800 mb-1">
      //           Sunstar Fresh Melon Juice
      //         </h3>
      //         <div className="flex items-center mb-1">
      //           <span className="text-yellow-500 text-sm font-semibold">
      //             4.5
      //           </span>
      //           <svg
      //             className="w-4 h-4 text-yellow-500 ml-1"
      //             fill="currentColor"
      //             viewBox="0 0 20 20"
      //           >
      //             <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
      //           </svg>
      //         </div>
      //         <p className="text-gray-700 font-medium">$18.00</p>
      //       </div>

      //       {/* Quantity and Add to Cart */}
      //       <div className="mt-4 flex items-center">
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
      //           -
      //         </button>
      //         <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
      //           1
      //         </span>
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
      //           +
      //         </button>
      //         <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      //           Add to Cart
      //         </button>
      //       </div>
      //     </div>
      //   </div>

      //   <div>
      //     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      //       {/* Product Image with Discount and Favorite */}
      //       <div className="relative">
      //         <img
      //           className="w-full h-48 object-cover rounded-md"
      //           src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
      //           alt="Sunstar Fresh Melon Juice"
      //         />
      //         <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
      //           -30%
      //         </div>
      //         <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
      //           <svg
      //             className="w-5 h-5 text-gray-500"
      //             fill="none"
      //             stroke="currentColor"
      //             viewBox="0 0 24 24"
      //           >
      //             <path
      //               strokeLinecap="round"
      //               strokeLinejoin="round"
      //               strokeWidth="2"
      //               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      //         2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
      //         14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
      //         11.54L12 21.35z"
      //             />
      //           </svg>
      //         </button>
      //       </div>

      //       {/* Product Info */}
      //       <div className="mt-4">
      //         <h3 className="font-bold text-lg text-gray-800 mb-1">
      //           Sunstar Fresh Melon Juice
      //         </h3>
      //         <div className="flex items-center mb-1">
      //           <span className="text-yellow-500 text-sm font-semibold">
      //             4.5
      //           </span>
      //           <svg
      //             className="w-4 h-4 text-yellow-500 ml-1"
      //             fill="currentColor"
      //             viewBox="0 0 20 20"
      //           >
      //             <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
      //           </svg>
      //         </div>
      //         <p className="text-gray-700 font-medium">$18.00</p>
      //       </div>

      //       {/* Quantity and Add to Cart */}
      //       <div className="mt-4 flex items-center">
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
      //           -
      //         </button>
      //         <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
      //           1
      //         </span>
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
      //           +
      //         </button>
      //         <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      //           Add to Cart
      //         </button>
      //       </div>
      //     </div>
      //   </div>

      //   <div>
      //     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      //       {/* Product Image with Discount and Favorite */}
      //       <div className="relative">
      //         <img
      //           className="w-full h-48 object-cover rounded-md"
      //           src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
      //           alt="Sunstar Fresh Melon Juice"
      //         />
      //         <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
      //           -30%
      //         </div>
      //         <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
      //           <svg
      //             className="w-5 h-5 text-gray-500"
      //             fill="none"
      //             stroke="currentColor"
      //             viewBox="0 0 24 24"
      //           >
      //             <path
      //               strokeLinecap="round"
      //               strokeLinejoin="round"
      //               strokeWidth="2"
      //               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      //         2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
      //         14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
      //         11.54L12 21.35z"
      //             />
      //           </svg>
      //         </button>
      //       </div>

      //       {/* Product Info */}
      //       <div className="mt-4">
      //         <h3 className="font-bold text-lg text-gray-800 mb-1">
      //           Sunstar Fresh Melon Juice
      //         </h3>
      //         <div className="flex items-center mb-1">
      //           <span className="text-yellow-500 text-sm font-semibold">
      //             4.5
      //           </span>
      //           <svg
      //             className="w-4 h-4 text-yellow-500 ml-1"
      //             fill="currentColor"
      //             viewBox="0 0 20 20"
      //           >
      //             <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
      //           </svg>
      //         </div>
      //         <p className="text-gray-700 font-medium">$18.00</p>
      //       </div>

      //       {/* Quantity and Add to Cart */}
      //       <div className="mt-4 flex items-center">
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
      //           -
      //         </button>
      //         <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
      //           1
      //         </span>
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
      //           +
      //         </button>
      //         <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      //           Add to Cart
      //         </button>
      //       </div>
      //     </div>
      //   </div>

      //   <div>
      //     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      //       {/* Product Image with Discount and Favorite */}
      //       <div className="relative">
      //         <img
      //           className="w-full h-48 object-cover rounded-md"
      //           src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
      //           alt="Sunstar Fresh Melon Juice"
      //         />
      //         <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
      //           -30%
      //         </div>
      //         <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
      //           <svg
      //             className="w-5 h-5 text-gray-500"
      //             fill="none"
      //             stroke="currentColor"
      //             viewBox="0 0 24 24"
      //           >
      //             <path
      //               strokeLinecap="round"
      //               strokeLinejoin="round"
      //               strokeWidth="2"
      //               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      //         2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
      //         14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
      //         11.54L12 21.35z"
      //             />
      //           </svg>
      //         </button>
      //       </div>

      //       {/* Product Info */}
      //       <div className="mt-4">
      //         <h3 className="font-bold text-lg text-gray-800 mb-1">
      //           Sunstar Fresh Melon Juice
      //         </h3>
      //         <div className="flex items-center mb-1">
      //           <span className="text-yellow-500 text-sm font-semibold">
      //             4.5
      //           </span>
      //           <svg
      //             className="w-4 h-4 text-yellow-500 ml-1"
      //             fill="currentColor"
      //             viewBox="0 0 20 20"
      //           >
      //             <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
      //           </svg>
      //         </div>
      //         <p className="text-gray-700 font-medium">$18.00</p>
      //       </div>

      //       {/* Quantity and Add to Cart */}
      //       <div className="mt-4 flex items-center">
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
      //           -
      //         </button>
      //         <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
      //           1
      //         </span>
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
      //           +
      //         </button>
      //         <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      //           Add to Cart
      //         </button>
      //       </div>
      //     </div>
      //   </div>

      //   <div>
      //     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      //       {/* Product Image with Discount and Favorite */}
      //       <div className="relative">
      //         <img
      //           className="w-full h-48 object-cover rounded-md"
      //           src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
      //           alt="Sunstar Fresh Melon Juice"
      //         />
      //         <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
      //           -30%
      //         </div>
      //         <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
      //           <svg
      //             className="w-5 h-5 text-gray-500"
      //             fill="none"
      //             stroke="currentColor"
      //             viewBox="0 0 24 24"
      //           >
      //             <path
      //               strokeLinecap="round"
      //               strokeLinejoin="round"
      //               strokeWidth="2"
      //               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      //         2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
      //         14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
      //         11.54L12 21.35z"
      //             />
      //           </svg>
      //         </button>
      //       </div>

      //       {/* Product Info */}
      //       <div className="mt-4">
      //         <h3 className="font-bold text-lg text-gray-800 mb-1">
      //           Sunstar Fresh Melon Juice
      //         </h3>
      //         <div className="flex items-center mb-1">
      //           <span className="text-yellow-500 text-sm font-semibold">
      //             4.5
      //           </span>
      //           <svg
      //             className="w-4 h-4 text-yellow-500 ml-1"
      //             fill="currentColor"
      //             viewBox="0 0 20 20"
      //           >
      //             <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
      //           </svg>
      //         </div>
      //         <p className="text-gray-700 font-medium">$18.00</p>
      //       </div>

      //       {/* Quantity and Add to Cart */}
      //       <div className="mt-4 flex items-center">
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
      //           -
      //         </button>
      //         <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
      //           1
      //         </span>
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
      //           +
      //         </button>
      //         <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      //           Add to Cart
      //         </button>
      //       </div>
      //     </div>
      //   </div>

      //   <div>
      //     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      //       {/* Product Image with Discount and Favorite */}
      //       <div className="relative">
      //         <img
      //           className="w-full h-48 object-cover rounded-md"
      //           src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
      //           alt="Sunstar Fresh Melon Juice"
      //         />
      //         <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
      //           -30%
      //         </div>
      //         <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
      //           <svg
      //             className="w-5 h-5 text-gray-500"
      //             fill="none"
      //             stroke="currentColor"
      //             viewBox="0 0 24 24"
      //           >
      //             <path
      //               strokeLinecap="round"
      //               strokeLinejoin="round"
      //               strokeWidth="2"
      //               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      //         2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
      //         14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
      //         11.54L12 21.35z"
      //             />
      //           </svg>
      //         </button>
      //       </div>

      //       {/* Product Info */}
      //       <div className="mt-4">
      //         <h3 className="font-bold text-lg text-gray-800 mb-1">
      //           Sunstar Fresh Melon Juice
      //         </h3>
      //         <div className="flex items-center mb-1">
      //           <span className="text-yellow-500 text-sm font-semibold">
      //             4.5
      //           </span>
      //           <svg
      //             className="w-4 h-4 text-yellow-500 ml-1"
      //             fill="currentColor"
      //             viewBox="0 0 20 20"
      //           >
      //             <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
      //           </svg>
      //         </div>
      //         <p className="text-gray-700 font-medium">$18.00</p>
      //       </div>

      //       {/* Quantity and Add to Cart */}
      //       <div className="mt-4 flex items-center">
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
      //           -
      //         </button>
      //         <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
      //           1
      //         </span>
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
      //           +
      //         </button>
      //         <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      //           Add to Cart
      //         </button>
      //       </div>
      //     </div>
      //   </div>

      //   <div>
      //     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      //       {/* Product Image with Discount and Favorite */}
      //       <div className="relative">
      //         <img
      //           className="w-full h-48 object-cover rounded-md"
      //           src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
      //           alt="Sunstar Fresh Melon Juice"
      //         />
      //         <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
      //           -30%
      //         </div>
      //         <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
      //           <svg
      //             className="w-5 h-5 text-gray-500"
      //             fill="none"
      //             stroke="currentColor"
      //             viewBox="0 0 24 24"
      //           >
      //             <path
      //               strokeLinecap="round"
      //               strokeLinejoin="round"
      //               strokeWidth="2"
      //               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      //         2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
      //         14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
      //         11.54L12 21.35z"
      //             />
      //           </svg>
      //         </button>
      //       </div>

      //       {/* Product Info */}
      //       <div className="mt-4">
      //         <h3 className="font-bold text-lg text-gray-800 mb-1">
      //           Sunstar Fresh Melon Juice
      //         </h3>
      //         <div className="flex items-center mb-1">
      //           <span className="text-yellow-500 text-sm font-semibold">
      //             4.5
      //           </span>
      //           <svg
      //             className="w-4 h-4 text-yellow-500 ml-1"
      //             fill="currentColor"
      //             viewBox="0 0 20 20"
      //           >
      //             <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
      //           </svg>
      //         </div>
      //         <p className="text-gray-700 font-medium">$18.00</p>
      //       </div>

      //       {/* Quantity and Add to Cart */}
      //       <div className="mt-4 flex items-center">
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
      //           -
      //         </button>
      //         <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
      //           1
      //         </span>
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
      //           +
      //         </button>
      //         <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      //           Add to Cart
      //         </button>
      //       </div>
      //     </div>
      //   </div>

      //   <div>
      //     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      //       {/* Product Image with Discount and Favorite */}
      //       <div className="relative">
      //         <img
      //           className="w-full h-48 object-cover rounded-md"
      //           src="https://themewagon.github.io/FoodMart/images/thumb-milk.png"
      //           alt="Sunstar Fresh Melon Juice"
      //         />
      //         <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
      //           -30%
      //         </div>
      //         <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
      //           <svg
      //             className="w-5 h-5 text-gray-500"
      //             fill="none"
      //             stroke="currentColor"
      //             viewBox="0 0 24 24"
      //           >
      //             <path
      //               strokeLinecap="round"
      //               strokeLinejoin="round"
      //               strokeWidth="2"
      //               d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      //         2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
      //         14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
      //         11.54L12 21.35z"
      //             />
      //           </svg>
      //         </button>
      //       </div>

      //       {/* Product Info */}
      //       <div className="mt-4">
      //         <h3 className="font-bold text-lg text-gray-800 mb-1">
      //           Sunstar Fresh Melon Juice
      //         </h3>
      //         <div className="flex items-center mb-1">
      //           <span className="text-yellow-500 text-sm font-semibold">
      //             4.5
      //           </span>
      //           <svg
      //             className="w-4 h-4 text-yellow-500 ml-1"
      //             fill="currentColor"
      //             viewBox="0 0 20 20"
      //           >
      //             <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545L10 15z" />
      //           </svg>
      //         </div>
      //         <p className="text-gray-700 font-medium">$18.00</p>
      //       </div>

      //       {/* Quantity and Add to Cart */}
      //       <div className="mt-4 flex items-center">
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-l">
      //           -
      //         </button>
      //         <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
      //           1
      //         </span>
      //         <button className="bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-r">
      //           +
      //         </button>
      //         <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      //           Add to Cart
      //         </button>
      //       </div>
      //     </div>