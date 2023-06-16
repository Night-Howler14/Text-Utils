import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';  
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode , setMode]= useState('light');
  const [alert , setAlert]= useState('default');

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert('null')
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode ==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    
      
    <BrowserRouter>
    <Navbar title="Navbar" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />

    <div className="container my-3">
     {/* my-3 is gives margin in y -axis 3 units(3 is fixed)  */}


        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            
          </Route>
          <Route exact path="/"  element={<TextForm showAlert={showAlert} heading="Enter the text analyze below" mode={mode} />}>
           
          </Route>
        </Routes>
    </div>

    </BrowserRouter>
  </>
  );
}

export default App;
