import React, { useEffect } from "react";
import {useNavigate, Routes, Link, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Potrait from "./Potrait";

function App() {
  const navigate = useNavigate();
  useEffect(()=>{
  
      navigate("/")
   
  },[]);
  
  
  
  return (
   
   <div>
    
   
      <Routes>
      <Route exact path = "/" element= {<HomePage/>}></Route>
    <Route exact path = "/potrait" element= {<Potrait/>}></Route>
    
    </Routes>
   
    </div>
   
  );
} 

export default App;
