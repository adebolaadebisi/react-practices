import './App.css';
import ProductCard from './component/ProductCard';
function App() {
  return (
    <div className="App">
      <ProductCard
        name="HP Laptop"
        price={450000}
        image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        inStock={true}
      />
      <ProductCard
        name="iPhone 14 Pro"
        price={1200000}
        image="https://d.newsweek.com/en/full/2118672/iphone-14-pro.jpg"
        inStock={false}
      />
      <ProductCard
        name="Samsung Smart TV"
        price={350000}
        image="https://images.unsplash.com/photo-1583394838336-acd977736f90"
        inStock={true}
      />
    </div>
  );
}
export default App;

