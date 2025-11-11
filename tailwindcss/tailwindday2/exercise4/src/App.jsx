import React from "react";

function App() {
  const plans = [
    {
      name: "Basic",
      price: "₦5,000/month",
      features: ["Access to basic features", "Email support", "Community access"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "₦15,000/month",
      features: ["All Basic features", "Priority support", "Advanced analytics"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "₦50,000/month",
      features: ["All Pro features", "Dedicated manager", "Custom solutions"],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Pricing Plans</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
              rounded-xl p-6 text-center shadow-md flex flex-col items-center transition-transform transform
              ${plan.highlighted ? "bg-green-600 text-white scale-105" : "bg-white text-gray-800"}
              hover:shadow-xl hover:-translate-y-2
            `}
          >
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-2xl font-semibold mb-4">{plan.price}</p>
            <ul className="space-y-2 mb-6 text-left w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2">{plan.highlighted ? "✔️" : "✅"}</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`
                px-4 py-2 rounded-lg font-semibold transition
                ${plan.highlighted ? "bg-white text-green-600 hover:bg-gray-100" : "bg-green-600 text-white hover:bg-green-700"}
              `}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
