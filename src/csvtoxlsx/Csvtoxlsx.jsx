import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Csvtoxlsx() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  // Handle File Selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // Delete Selected File
  const deleteFile = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
  };

  // Function to Process & Download the Files
  const handleProcess = async () => {
    setIsProcessing(true);
  
    const formData = new FormData();
    if (selectedFiles.length === 0) {
      alert("Please upload at least one CSV file before processing.");
      setIsProcessing(false);
      return;
    }
    
    // Append all files to the formData
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });
  
    try {
      const response = await fetch("https://msteams-backend.onrender.com/download", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) throw new Error("Failed to process attendance data");
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = url;
      link.download = "AttendanceSummary.xlsx";
      document.body.appendChild(link);
      link.click();
      link.remove();
  
      setIsProcessing(false);
    } catch (error) {
      console.error("Error processing files:", error);
      alert("Error processing attendance files. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="text-center m-10 min-h-3">
        <h2 className="text-2xl font-semibold">Attendance Tracking System</h2>
      </div>
      <div className="flex flex-col bg-slate-100 h-auto justify-center p-5">
        <div>
          <h1 className="text-center text-xl mb-3">Upload Meeting Attendance CSV Files</h1>
          <p className="text-center text-gray-600 mb-4">Upload multiple CSV files to track student attendance across different meetings</p>
        </div>
        <div className="m-5 text-center">
          <input type="file" multiple accept=".csv" onChange={handleFileChange} />
        </div>
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold">Selected files: ({selectedFiles.length})</h3>
          <ul className="mt-2 space-y-2">
            {selectedFiles.map((file, index) => (
              <li key={index} className="p-2 bg-gray-200 rounded flex justify-between">
                <span>{file.name}</span>
                <button 
                  onClick={() => deleteFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-center mt-4">
        <button
          onClick={handleProcess}
          className="m-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
          disabled={selectedFiles.length === 0 || isProcessing}
        >
          {isProcessing ? "Processing..." : "Generate Attendance Report"}
        </button>
      </div>

      {/* Loader (Only visible while processing) */}
      {isProcessing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
          <div className="p-5 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold">Processing attendance files...</h2>
            <p className="text-gray-600 mt-2">This may take a moment</p>
            <div className="loader mt-3 h-2 w-32 bg-gray-200 mx-auto">
              <div className="animate-pulse h-2 bg-green-500 w-full"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Csvtoxlsx;
