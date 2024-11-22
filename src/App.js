import React from "react";
import Tours from "./components/Tours";
import data from "./data";
import { useState } from "react";
import './components/Card';

const App = () => {

const [tours , setTours] = useState(data); 
// esa krke humne ye tours k anadar sara ka sara data of 7 cities dal diya

function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
}

if(tours.length === 0){
  return (
   <div className="refresh">
     <h2>No Tours Left</h2>
     <button className="btn-white"
     onClick = {() => setTours(data)}> Refresh </button>
   </div>
  );
}

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
