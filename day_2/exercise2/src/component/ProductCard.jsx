
import './ProductCard.css';
function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={name} className={!inStock ? 'out-of-stock' : ''} />
        {!inStock && <div className="overlay">Out of Stock</div>}
      </div>
      <h3>{name}</h3>
      <p className="price">₦{price.toLocaleString()}</p>
      <p className={inStock ? 'in-stock' : 'out-stock'}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
}
export default ProductCard;
