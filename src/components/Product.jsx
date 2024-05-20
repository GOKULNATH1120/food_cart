import React from "react";
import "../components/Product.css";

const Product = ({ product, cart, setCart }) => {
  const addCart = () => {
    setCart([...cart, product]);
  };

  const removeCart = () => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <>
      <div className="product"> 
        <div className="imggg">
            <img src={product.pic} alt="productimage" />
        </div>
        <div className="details">
          <h3>{product.name}</h3>
          <p>Price Rs: {product.amt}</p>
          {cart.includes(product) ? (
            <button className="btnRemove" onClick={removeCart}>Remove Cart</button>
          ) : (
            <button className="addCart" onClick={addCart}>Add to Cart</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
