import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <h1 className="text-xl font-bold">NaijaMarket</h1>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200 transition">Home</a>
          <a href="#" className="hover:text-gray-200 transition">Shop</a>
          <a href="#" className="hover:text-gray-200 transition">Blog</a>
          <a href="#" className="hover:text-gray-200 transition">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
         
          <span className="text-2xl cursor-pointer">🛒</span>

        
          <button className="bg-white text-green-700 px-3 py-1 rounded font-semibold hover:bg-gray-100 transition">
            Login
          </button>

          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "❌" : "☰"}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-green-600 flex flex-col space-y-2 px-4 pb-4 transition-all duration-300">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">Shop</a>
          <a href="#" className="hover:text-gray-200">Blog</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default App;
