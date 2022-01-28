import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar'; 
import TextForm from './components/textform';
import Alert from './components/alert';
import About from './components/About';
import React, { useState } from 'react';
//import {
 // BrowserRouter as Router,
  //Routes,
  //Route,
//} from "react-router-dom";
function App(){
  const [mode, setMode] = useState('light');
  const [alert, setAlert]= useState(null);
  const showAlert=(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode = () =>{
    if(mode=== "light"){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return(
    <>
    <Alert alert={alert}/>
    <Navbar title="TextUtils" AboutUs="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <TextForm />
    </div>
    </>
  )
}

export default App;

