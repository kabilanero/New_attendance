import React from 'react'
import './Loader.css'
function Loaderpage() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="flex flex-col items-center">
            <div className="loader"></div>
            <p className="mt-4 text-gray-600 text-lg">Processing your file...</p>
          </div>
        </div>
      );
}

export default Loaderpage
