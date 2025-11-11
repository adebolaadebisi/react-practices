import React from "react";

function App() {
  const relatedPosts = [
    "Top 5 Naija Foods You Must Try",
    "Fashion Trends in Nigeria 2025",
    "How to Make Perfect Jollof Rice",
    "Palm Wine: Traditions and Benefits",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
        <img
          src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=1200&q=80"
          alt="Featured"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">The Ultimate Guide to Naija Cuisine</h1>
        <p className="text-gray-600 text-sm">
          By <span className="font-semibold">Adebola</span> | Nov 11, 2025 | 8 min read
        </p>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
       
        <div className="lg:col-span-2 space-y-4 text-gray-800">
          <p>
            Nigerian cuisine is a vibrant mix of flavors, traditions, and culture. From spicy jollof rice
            to sweet chin chin, every dish tells a story. In this guide, we explore the must-try foods,
            how to prepare them, and the history behind each delicacy.
          </p>
          <p>
            Suya, for example, is a spicy skewered meat that originated in Northern Nigeria. It's
            popular street food and often enjoyed with onions and tomatoes. Jollof rice, on the other
            hand, is a beloved party staple that has sparked friendly debates across West Africa!
          </p>
          <p>
            Whether you're a foodie, a beginner cook, or just curious about Naija culture, this guide
            will help you discover flavors that delight and stories that inspire.
          </p>
        </div>

       
        <div className="space-y-4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Related Posts</h2>
          <ul className="space-y-2">
            {relatedPosts.map((post, index) => (
              <li key={index} className="hover:text-green-700 cursor-pointer transition">
                {post}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
