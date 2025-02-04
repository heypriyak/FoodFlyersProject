import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  

    const { product } = props;  
    const { addToCart } = useContext(ShopContext);  
    const [selectedSize, setSelectedSize] = useState(null); // New state to track selected size

    const handleSizeSelect = (size) => {
        setSelectedSize(size); // Set the selected size
    }

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product.id, selectedSize); // Pass the selected size to addToCart
        } else {
            alert("Please select a size before adding to cart."); // Alert if size is not selected
        }
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img w-[700px] ">
                    <img className='productdisplay-main-img ' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-start flex gap-1">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹{product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur totam odit distinctio dignissimos autem officiis repudiandae ipsam sed fugit facere.
                </div>
                <div className="productdisplay-right-size">
            <h1 className="text-xl font-semibold">Select Size</h1>
            <div className="flex gap-2 mt-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <div 
                        key={size} 
                        className={`flex items-center justify-center px-4 py-2 border rounded cursor-pointer transition duration-300 
                            ${selectedSize === size ? 'bg-gray-300 text-black ' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`} 
                        onClick={() => handleSizeSelect(size)} // Update selected size on click
                    >
                        {size}
                    </div>
                ))}
            </div>
        </div>
                <button className='mt-12' onClick={handleAddToCart}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Modern , Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay;
