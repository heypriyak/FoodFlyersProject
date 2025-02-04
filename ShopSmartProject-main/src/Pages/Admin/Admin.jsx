import React, { useState } from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';

const Admin = () => {
  const location = useLocation(); // Get the current route
  const [showWelcomeBox, setShowWelcomeBox] = useState(true); // State to control welcome box visibility
  const [showSidebar, setShowSidebar] = useState(false); // State to control sidebar visibility

  // Function to handle button click
  const handleButtonClick = () => {
    setShowWelcomeBox(false);
    setShowSidebar(true);
  };

  return (
    <div className='admin'>
      {/* Render Sidebar only if showSidebar is true */}
      {showSidebar && <Sidebar />}
      
      {/* Conditionally render the welcome box if showWelcomeBox is true */}
      {showWelcomeBox && (
        <div className="admin-page">
          <div className="welcome-box">
            <h2>Welcome to the Admin Page</h2>
            <p>Select an option below to manage products:</p>
            <div className="button-container">
              <Link to="/addproduct" className="admin-btn" onClick={handleButtonClick}>Add Product</Link>
              <Link to="/listproduct" className="admin-btn" onClick={handleButtonClick}>List Product</Link>
            </div>
          </div>
        </div>
      )}

      {/* Define Routes */}
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
      </Routes>
    </div>
  );
}

export default Admin;
