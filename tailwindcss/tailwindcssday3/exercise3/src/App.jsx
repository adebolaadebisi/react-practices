import React from "react";

function App() {
  const statsData = [
    { title: "Total Sales", value: "₦2.5M", change: "+12% ↑", color: "bg-orange-500", icon: "💰" },
    { title: "Orders", value: "1,234", change: "+8% ↑", color: "bg-blue-500", icon: "📦" },
    { title: "Customers", value: "567", change: "+23% ↑", color: "bg-green-500", icon: "👥" },
    { title: "Revenue", value: "₦4.2M", change: "+15% ↑", color: "bg-purple-500", icon: "💵" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-2xl font-bold mb-6">Stats Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-lg text-white ${stat.color} transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg`}
          >
            <p className="text-xl">{stat.icon} {stat.title}</p>
            <h2 className="text-2xl font-bold mt-2">{stat.value}</h2>
            <span className="text-sm opacity-90">{stat.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
