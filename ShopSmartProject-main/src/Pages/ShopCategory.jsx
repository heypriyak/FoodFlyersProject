import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [showWomenSection, setShowWomenSection] = useState(false); // State to manage women's section visibility

  // Function to handle "Explore More" click
  const handleExploreMoreClick = () => {
    setShowWomenSection(true); // Show the women's section when clicked
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        {/* <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div> */}
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          // Render products based on the selected category
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}

        {/* Conditionally render women's section if showWomenSection is true */}
        {showWomenSection && all_product.map((item, i) => {
          if (item.category === 'women') { // Assuming 'women' is the category for women's products
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory-loadmore" onClick={handleExploreMoreClick}>
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
