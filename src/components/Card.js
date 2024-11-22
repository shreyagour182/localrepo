 import React , { useState } from "react";
import data from "../data";
import Tours from "./Tours";

function Card( { id , info , name , image , price , removeTour } ){

const [readmore , setReadMore] = useState(false) ;
const description = readmore ? info : `${info.substring(0,200)}....` ;

function readmoreHandler(){
    setReadMore(!readmore);
}

    return (
        <div className="card">
           <img src={image} className="image"></img>

          <div className="tour-info">
            <div className="tour-deatils">
               <h4 className="tour-price">₹{price}</h4>
               <h4 className="tour-name">{name}</h4>
           </div>

           <div className="description">
                    {description}
                    <span onClick={readmoreHandler}>
                        { readmore ? `Show Less` : `Read More` }
                    </span>
           </div>

          </div>
           <button onClick={() => removeTour(id)} className="btn-red">Not Interested</button>
        </div>
    );}
export default Card;