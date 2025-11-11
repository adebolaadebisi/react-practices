import React from "react";

const newsData = [
  {
    category: "Politics",
    headline: "Nigeria Approves New Economic Policy",
    excerpt:
      "The federal government has introduced a new economic policy aimed at boosting local industries and creating more jobs for Nigerians.",
    author: "Chinedu Okeke",
    date: "Nov 10, 2025",
    readTime: "5 min read",
  },
  {
    category: "Sports",
    headline: "Super Eagles Qualify for AFCON",
    excerpt:
      "Nigeria's national football team, the Super Eagles, has successfully qualified for the Africa Cup of Nations, thrilling fans across the country.",
    author: "Amaka Nwosu",
    date: "Nov 9, 2025",
    readTime: "3 min read",
  },
  {
    category: "Entertainment",
    headline: "Nollywood Star Wins International Award",
    excerpt:
      "A renowned Nollywood actor has taken home a prestigious international award, putting Nigerian cinema on the global map.",
    author: "Tunde Adebayo",
    date: "Nov 8, 2025",
    readTime: "4 min read",
  },
];

const NewsCard = ({ category, headline, excerpt, author, date, readTime }) => {
  const categoryColors = {
    Politics: "bg-green-600 text-white",
    Sports: "bg-orange-500 text-white",
    Entertainment: "bg-purple-600 text-white",
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 w-80 hover:shadow-xl hover:scale-105 transition-transform duration-300 space-y-3">
      {/* Category Badge */}
      <span
        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[category]} transition-colors duration-300 hover:bg-opacity-80`}
      >
        {category}
      </span>

      {/* Headline */}
      <h2 className="text-lg font-bold text-gray-900">{headline}</h2>

      {/* Excerpt */}
      <p className="text-gray-700 text-sm line-clamp-3">{excerpt}</p>

      {/* Author & Date */}
      <div className="flex items-center justify-between text-gray-500 text-xs">
        <span>{author}</span>
        <span>{date}</span>
      </div>

      {/* Read Time & Read More */}
      <div className="flex items-center justify-between text-sm mt-2">
        <span className="text-gray-500">{readTime}</span>
        <a
          href="#"
          className="text-green-600 font-semibold hover:underline"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

const NewsGrid = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Latest News</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {newsData.map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;
