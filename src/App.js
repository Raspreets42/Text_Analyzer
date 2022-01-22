import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Texting from './Components/Texting';

function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setMode("light");
    }
    else{
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      setMode("dark");
    }
  }
  
  return (
    <>
      <Navbar mode = {mode} toggleMode={toggleMode}/>
      <Texting mode = {mode} />
    </>
  );
}

export default App;