import Navbar from "./MyComponents/Navbar/Navbar";
import Main from "./MyComponents/Main/Main";
// import AboutUs from "./MyComponents/AboutUs/AboutUs";
// import ContactUs from "./MyComponents/ContactUs/ContactUs";
import { useState } from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [bgmode, setBgMode] = useState('white');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBgMode('dark');
    }
    else {
      setMode('light');
      setBgMode('white');
    }
  }

  return (
    <>
      <Navbar title1="Text" title2="Utils" mode={mode} bgmode={bgmode} toggleMode={toggleMode} /> {/* props (Properties) : Eg. title1, title2 */}
      <Main bgmode={bgmode} />

      {/* <Router>
        <Navbar title1="Text" title2="Utils" mode={mode} bgmode={bgmode} toggleMode={toggleMode} /> {// props (Properties) : Eg. title1, title2 }
        <Routes>
          <Route exact path="/" element={<Main bgmode={bgmode} />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} /> 
        </Routes>
      </Router> */}

    </>
  );
}

export default App;
