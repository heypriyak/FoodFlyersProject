// src/components/Testimonials/Testimonials.js
import React from 'react';
import './Testimonial.css'; // Create this file for styling

const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      message: "Great shopping experience! I found everything I was looking for, and the customer support was excellent.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Sara Lee",
      message: "I love the variety of products! Delivery was quick, and the quality was amazing.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "David Smith",
      message: "The website was easy to navigate, and I found exactly what I needed. Will definitely shop again.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Sara Lee",
      message: "I love the variety of products! Delivery was quick, and the quality was amazing.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "David Smith",
      message: "The website was easy to navigate, and I found exactly what I needed. Will definitely shop again.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <div className="testimonials-container">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-message">"{review.message}"</p>
            <p className="testimonial-name">- {review.name}</p>
            <p className="testimonial-rating">{review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
