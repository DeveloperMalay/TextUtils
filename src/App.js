
import './App.css';
import Navbar from './componants/Navbar';
import Textarea from './componants/TextForm';
import React, { useState } from 'react'
import Alert from './componants/Alert';
//   import About from './componants/About';
//  import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
//  } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const  showAlert=(massage,type)=>{
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#20426c';
      showAlert("Darkmode has been enabled","success");
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Lightmode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }
  
  return (
    <>
    {/* <Router>  */}
    
  <Navbar title="TextUtils" About="About TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <Textarea showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>

  {/* <Routes> */}
          {/* <Route  exact path="/about" element={ <About />}>
           
          </Route> */}
       
          {/* <Route exact path="/" element={  <Textarea showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>}> */}
{/*         
          </Route>
   </Routes> 
  */}
     
  {/* </Router> */}
  </>
  );
}

export default App;
