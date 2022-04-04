import react from "react";
import "./Pages/NewReads.css";
import "./Pages/NewReads";
import "./src/br.png";

const NewReads=()=>{
    return(
        <>
        <div className="newReads">
            <img src="./src/black-love-prints.png" 
           alt="newreadsicon"/> 
           <div className="bottom">
            <h3 className="Title">New Reads</h3>
             <p className="description"></p>
            </div>
        </div>
        </>
    )
}

export default NewReads;