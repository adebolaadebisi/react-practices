import React from "react";

function App() {
  const products = [
    {
      name: "Jollof Rice",
      price: "₦1,500",
      image:
        "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ankara Fabric",
      price: "₦5,000",
      image:
        "https://images.unsplash.com/photo-1602810317536-4ef58b2c6c0f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Suya",
      price: "₦1,000",
      image:
        "https://images.unsplash.com/photo-1605475128021-8f2e79a9aa5c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Aso-Ebi",
      price: "₦15,000",
      image:
        "https://images.unsplash.com/photo-1620812093339-dc252e21b90e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Palm Wine",
      price: "₦1,200",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Agbada",
      price: "₦25,000",
      image:
        "https://images.unsplash.com/photo-1632463541642-7e8cb0cfb8c8?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Chin Chin",
      price: "₦500",
      image:
        "https://images.unsplash.com/photo-1648840747662-41b69d6345b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Puff Puff",
      price: "₦300",
      image:
        "https://images.unsplash.com/photo-1621267471651-df3683faaa91?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        🛒 Naija Market
      </h1>

      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {products.map((item, i) => (
          <div
            key={i}
            className="
              bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
              transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl
            "
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover hover:opacity-90 transition-opacity"
            />

            {/* Product Info */}
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-green-600 font-bold mb-3">{item.price}</p>
              <button
                className="
                  bg-green-600 text-white px-4 py-2 rounded-lg w-full
                  hover:bg-green-700 transition-colors
                "
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
