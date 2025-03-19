import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center justify-center space-x-4 my-4">
      <button
        onClick={() => navigate("/csvtoxlsx")}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        CSV to XLSX
      </button>

      <button
        onClick={() => navigate("/pdftoword")}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        PDF to Word
      </button>
    </div>
  );
}

export default Homepage;
