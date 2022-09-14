import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
// import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter,
//   // Switch,
//   Route,
//   // Link,
//   Routes
// } from "react-router-dom";

function App() {
  // UseStates 
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState('success')
  // showAlert function for changing message and type when user click on dark button or showing alert message 
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
     
    }, 1500);
  }
  // toggleMode function when user enter button to change dark mode 
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      showAlert("Dark mode has been enabled", "Successfully")
      document.body.style.backgroundColor = '#4C564B'
      document.body.style.webkitTextFillColor = 'white';
      document.title = 'TextUtils- Dark Mode';
      // to change title with specific interval of time to get user attention

      // setInterval(() => {
      //   document.title='TextUtils- Dark Mode';

      // }, 1500);
      // setInterval(() => {
      //   document.title=' install TextUtils now';
      // }, 1100);
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      document.body.style.webkitTextFillColor = 'black';
      showAlert("Light mode has been enabled", "Successfully")
      document.title = 'TextUtils- Light Mode';
    }
  }
  return (
    <>
      <div >

        {/* <BrowserRouter> */}
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          {/* <Routes> */}
            {/* <Route path="about" element={<About />} /> */}
            <TextForm text="Enter your text here" mode={mode} showAlert={showAlert} />
            {/* <Route path="/" element={<TextForm text="Enter your text here" mode={mode} showAlert={showAlert} />}/> */}
            
          {/* </Routes> */}
        {/* </BrowserRouter> */}
      </div>
    </>
  );
}


export default App;
