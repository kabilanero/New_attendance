import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Frontpage/Homepage";
import Csvtoxlsx from "./csvtoxlsx/Csvtoxlsx";
import Pdftoword from "./pdftoword/Pdftoword";
import Loaderpage from "./Loader/Loaderpage";

function App() {
  return (
    <div className="Jk_app_container">
        <Router basename="/Attendance_compiler">
      <h1 className="text-5xl font-bold text-center underline">
        Compiler attendance report
      </h1>
      
      {/* Navigation Bar */}
      <Homepage />

      {/* Routes Section */}
      {/* <div className="flex bg-gray-600 rounded px-8 mx-10 items-center justify-evenly"> */}
        <Routes>
          <Route path="/csvtoxlsx" element={<Csvtoxlsx />} />
          <Route path="/pdftoword" element={<Pdftoword />} />
          <Route path="/process" element={<Loaderpage/>}/>
        </Routes>

      {/* </div> */}
        </Router>
    </div>
  );
}

export default App;
