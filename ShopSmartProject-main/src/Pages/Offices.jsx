import React from 'react'

function Offices() {
    return (
        <div className="offices-page p-6 max-w-5xl mx-auto font-sans">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">Our Offices</h1>
          </header>
    
          <div className="text-center bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Physical Offices... Yet!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Currently, we operate entirely online, but we are expanding rapidly.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Very soon, we'll be establishing physical offices in key locations to better serve you!
            </p>
            <p className="text-lg text-indigo-500 font-medium">
              Stay tuned for updates and announcements!
            </p>
          </div>
        </div>
      );
    };

 

export default Offices
