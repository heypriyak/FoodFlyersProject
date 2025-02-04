import React from 'react'

function CheckoutSuccess() {
    return (
        <div className="flex items-center justify-center py-12 bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center w-[30%] h-[300px] flex justify-center flex-col items-center">
                <h1 className="text-2xl font-bold mb-4 text-green-600">Payment Successful!</h1>
                <p className="text-gray-700 mb-4">Thank you for your purchase.</p>
                <a href="/" className=" font-semibold border-[1px] border-black px-8 py-3 rounded-full hover:bg-gray-100">
                    Return to Homepage
                </a>
            </div>
        </div>
    );
}

export default CheckoutSuccess
