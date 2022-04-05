import react from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import BestReads from "./Pages/BestReads";
import NewReads from "./Pages/NewReads";
import MyBooks from "./Pages/MyBooks";

// import './src/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Best" element={<BestReads />} />
        <Route path="/New" element={<NewReads />} />
        <Route path="/My" element={<MyBooks />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
