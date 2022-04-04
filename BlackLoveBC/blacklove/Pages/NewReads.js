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
            <h3 className="Title">New Reads</h3>
        </div>
        </>
    )
}

export default NewReads;