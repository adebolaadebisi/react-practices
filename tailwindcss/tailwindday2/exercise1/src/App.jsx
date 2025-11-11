import React from "react";

const products = [
  { name: "Jollof Rice", price: "₦1,500", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Jollof_Rice_with_Stew.jpg/1024px-Jollof_Rice_with_Stew.jpg" },
  { name: "Ankara Fabric", price: "₦5,000", image: "https://i.ebayimg.com/images/g/Xq0AAOSwsEBivdJn/s-l1600.webp"},
  { name: "Aso-Ebi", price: "₦15,000", image: "https://lh3.googleusercontent.com/p/AF1QipPF6Z8jN4YEKS7yg0404G_VUhWTs2TFk6AZ0Ibb=w260-h175-n-k-no" },
  { name: "Palm Wine", price: "₦1,200", image: "https://www.shutterstock.com/image-photo/palm-wine-date-tree-clay-260nw-1407988373.jpg"},
  { name: "Agbada", price: "₦25,000",   image: "https://wp-media-dejiandkola.s3.eu-west-2.amazonaws.com/2022/01/271991584_678990703272715_7196684419559663964_n.jpg"},
  { name: "Chin Chin", price: "₦500", image: "https://egunsifoods.com/cdn/shop/articles/Chin_Chin_2100x.jpg?v=1639595235"},
  { name: "Puff Puff", price: "₦300", image: "https://allnigerianfoods.com/wp-content/uploads/puff_puff_recipe-500x500.jpg" },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-green-600 font-bold">{product.price}</p>
            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
