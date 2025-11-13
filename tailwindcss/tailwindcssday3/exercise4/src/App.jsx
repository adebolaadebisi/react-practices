import React from "react";

function App() {
  const products = [
    { id: 1, name: "Stylish Shirt", price: 5000, img: "https://i.pinimg.com/736x/05/af/22/05af22c47dabc8f85d4e6def86f7ca54.jpg" },
    { id: 2, name: "Cool Jacket", price: 12000, img: "https://plus.unsplash.com/premium_photo-1671030274122-b6ac34f87b8b?w=500&autA%3D%3D" },
    { id: 3, name: "Sneakers", price: 15000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MECkuP6PJuQ5fLfryCdXTulVfNzebx2V0Q&s" },
    { id: 4, name: "Jeans", price: 7000, img: "https://5.imimg.com/data5/DW/AP/TZ/SELLER-7318680/denim-jeans-1000x1000.jpg" },
    { id: 5, name: "Watch", price: 20000, img: "https://img.freepik.com/free-photo/stylish-golden-watch-white-surface_181624-27078.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 6, name: "Hat", price: 3000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKpqPXHAUDCqbxOR9fjokM6c0XtnA4egJBw&s" },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      
      <nav className="flex justify-between items-center p-5 bg-white shadow">
        <div className="text-2xl font-bold text-orange-500">ShopLogo</div>
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Products</li>
          <li className="hover:text-orange-500 cursor-pointer">Categories</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>
        <div className="cursor-pointer text-xl">🛒</div>
      </nav>

      
      <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Welcome to Our Store</h1>
        <p className="mb-8 text-lg md:text-xl">Find the best products at amazing prices!</p>
        <button className="px-6 py-3 bg-white text-orange-500 font-semibold rounded hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>

      
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-5 border rounded-lg text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-white"
            >
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
          ))}
        </div>
      </section>

      
      <section className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {["Shirts", "Jackets", "Shoes", "Accessories"].map((cat, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-lg text-center hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-2">📦</div>
              <p className="font-semibold">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      
      <footer className="p-6 bg-white shadow mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 shopwears. All rights reserved.</p>
          <div className="flex gap-4 text-2xl">
            <a href="#">🌐</a>
            <a href="#">🐦</a>
            <a href="#">📘</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
