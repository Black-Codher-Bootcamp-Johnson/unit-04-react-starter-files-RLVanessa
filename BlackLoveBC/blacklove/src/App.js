import react from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {Header} from "../Header";
import Home from "./Home";
import AboutUs from "./AboutUs";
import NewReads from "./NewReads";
import MyBooks from "./MyBooks";
import BestReads from "./BestReads";

// import './src/index.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="./" element={
      <>
      <Header />
    <Home />
    </>
    } 
     path="./AboutUs" element={
        <>
        <Header />
        <AboutUs />
      </>
      }
      path="./NewReads" element={<NewReads />}/>
  

     
    //   <>
    //   </>

    // </Routes>



    //   <BestReads/>
    //   <NewReads/>
    //   <MyBooks/>
    // </>

    {/* 
        <Route path=".Components/Header" element ={<Header/>}/>
        <Route path="./" element={<Home />} />
        <Route path="./AboutUs" element={<AboutUs />} />
        <Route path="./NewReads" element={<NewReads />}/>
        <Route path="./MyBooks" element={<MyBook/>} />
        <Route path="./BestReads" element={<BestReads/>}/> 
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
