import React from "react";

function App() {
  const product = {
    name: "Stylish Shirt",
    price: 5000,
    img: "https://i.pinimg.com/736x/05/af/22/05af22c47dabc8f85d4e6def86f7ca54.jpg",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200">
      <div className="w-64 p-5 border rounded-lg text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white">
        <img
          src={product.img}
          alt={product.name}
          className="w-full rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <h2 className="mt-3 text-lg font-semibold transition-colors duration-300 hover:text-orange-500">
          {product.name}
        </h2>
        <p className="text-gray-700 mt-1">₦{product.price.toLocaleString()}</p>
        <button className="mt-3 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 active:scale-95 transition-all duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default App;


