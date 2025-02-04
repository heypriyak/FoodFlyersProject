import React from 'react'

function Company() {
    return (
        <div className="company-page p-6 max-w-7xl mx-auto font-sans">
          <header className="company-header text-center mb-10">
            {/* <h1 className="text-4xl font-bold text-gray-800">About ShopSmart</h1> */}
            <h1 className="text-4xl font-bold text-gray-800">About ShopSmart</h1>
            <p className="text-lg text-gray-600 mt-2">Your one-stop shop for the best shopping experience!</p>
          </header>
    
          <section className="company-overview mb-10">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-base leading-7">
              {/* At ShopSmart, our mission is to provide our customers with the highest quality products  */}
              At ShopSmart, our mission is to provide our customers with the highest quality products 
              at the best prices, all while offering excellent customer service.
            </p>
          </section>
    
          <section className="company-values mb-10">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Core Values</h2>
            <ul className="list-disc list-inside text-gray-600 text-base leading-7">
              <li>Customer Satisfaction</li>
              <li>Integrity & Trust</li>
              <li>Quality Assurance</li>
              <li>Innovation & Growth</li>
            </ul>
          </section>
    
          <section className="company-history mb-10">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our History</h2>
            <p className="text-gray-600 text-base leading-7">
              {/* ShopSmart was founded in 2022 with a vision to redefine online shopping. Over the years,  */}
              ShopSmart was founded in 2022 with a vision to redefine online shopping. Over the years, 
              we’ve expanded our offerings to cater to a wide range of customers, offering products from 
              clothing to electronics, and everything in between.
            </p>
          </section>
    
          <section className="company-team mb-10">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-base leading-7">
              Our team consists of dedicated professionals with years of experience in e-commerce, customer 
              {/* service, and product development. We are committed to making ShopSmart the best shopping  */}
              service, and product development. We are committed to making ShopSmart the best shopping 
              destination for you.
            </p>
          </section>
    
          <footer className="company-footer text-center mt-10">
            {/* <p className="text-gray-500 text-sm">&copy; 2024 ShopSmart - All Rights Reserved.</p> */}
            <p className="text-gray-500 text-sm">&copy; 2024 ShopSmart - All Rights Reserved.</p>
          </footer>
        </div>
      );
}

export default Company
