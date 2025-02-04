import React from 'react'

function About() {
    return (
        <div className="about-page p-6 max-w-5xl mx-auto font-sans">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          </header>
    
          <div className="text-center bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              {/* At ShopSmart, we are passionate about providing high-quality clothing that combines style and comfort.  */}
              At ShopSmart, we are passionate about providing high-quality clothing that combines style and comfort. 
              Founded in [Year], we have been dedicated to offering our customers the latest trends and timeless pieces.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to empower individuals through fashion, ensuring everyone finds something that reflects their unique style.
            </p>
            <p className="text-lg text-indigo-500 font-medium">
              Join us on our journey to make the world a more stylish place!
            </p>
          </div>
        </div>
      );
    };


export default About
