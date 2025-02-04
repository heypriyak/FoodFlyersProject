// import React, { useContext } from 'react';
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assets/cart_cross_icon.png';

// const CartItems = () => {
//   const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  
//   return (
//     <div className='cartitems'>
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_product.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div key={e.id}>
//               <div className="cartitems-format cartitems-format-main">
//                 <img src={e.image} alt="" className='carticon-product-icon' />
//                 <p>{e.name}</p>
//                 <p>₹{e.new_price}</p>
//                 <button className='cartitems-quantity'>{cartItems[e.id]}</button>
//                 <p>₹{e.new_price * cartItems[e.id]}</p>
//                 <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
//               </div>
//               <hr />
//             </div>
//           );
//         }
//         return null;
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Cart Totals</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>₹{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>₹{getTotalCartAmount()}</h3>
//             </div>
//           </div>
//           <button >PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cartitems-promocode">
//           <p>If you have a promocode, Enter it here</p>
//           <div className="cartitems-promobox">
//             <input type="text" placeholder='promocode' />
//             <button>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// };

// export default CartItems;


import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import axios from 'axios';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();
  
  const userEmail = localStorage.getItem('userEmail'); // Example if stored in local storage

  const handleCheckout = async () => {
    try {
        const items = Object.keys(cartItems)
            .filter(key => cartItems[key] > 0)
            .map(key => ({
                productId: key,
                quantity: cartItems[key]
            }));
        
            const response = await axios.post('https://shop-smart-fxg5.onrender.com/create-checkout-session', {
              items: items, // Ensure this structure matches the expected structure on the server
              email: userEmail // Ensure the email is properly passed
          });
          
        if (response.data.success) {
            window.location.href = response.data.url;
        } else {
            console.error('Error:', response.data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>₹{e.new_price * cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, Enter it here</p>
          <div className="cartitems-promobox flex">
            <input type="text" placeholder='promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItems;