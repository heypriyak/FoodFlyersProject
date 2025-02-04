import React from 'react'

function Contact() {
    return (
        <div className="contact-page p-6 max-w-5xl mx-auto font-sans">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          </header>
    
          <div className="text-center bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-6">
              We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
            </p>
    
            <form className="flex flex-col space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="p-2 border border-gray-300 rounded-lg" 
                required 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="p-2 border border-gray-300 rounded-lg" 
                required 
              />
              <textarea 
                placeholder="Your Message" 
                className="p-2 border border-gray-300 rounded-lg h-32" 
                required 
              />
              <button 
                type="submit" 
                className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      );
}

export default Contact
