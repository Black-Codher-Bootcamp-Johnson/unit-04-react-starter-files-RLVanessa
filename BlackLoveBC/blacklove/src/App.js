import react from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";

// import './src/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
