import React from "react";
import {useNavigate} from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();
  const potrait = ()=>{
    navigate("/potrait")
  }
  return (
   
   <>
   <div>
    <h2 className="staticText">Happy Birthday</h2>
    <h2 className="animatedText" data-text="MINIKI !!!">MINIKI !!!</h2>
   </div>
   <div>
   <a href='#' className="neon-button" onClick={potrait}>click for surprise</a>
   </div>
   </>
   
  );
} 

export default HomePage;
