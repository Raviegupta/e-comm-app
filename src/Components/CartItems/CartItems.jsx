import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((item, index) => {
        if (cartItems[item.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img
                  className="carticon-product-icon"
                  src={item.image}
                  alt=""
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <div className="cartitems-quantity-box">
                  <span onClick={()=>{addToCart(item.id)}} className="cartitems-quantity-add">➕ </span>
                  <button className="cartitems-quantity">{cartItems[item.id]}</button>  
                  <span onClick={()=>{removeFromCart(item.id)}} className="cartitems-quantity-minus"> ➖</span>
                </div>
                <p>${item.new_price * cartItems[item.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={()=>{
                    removeFromCart(item.id)
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" name="" id="" placeholder="promo code" />
                <button>Submit</button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default CartItems;
