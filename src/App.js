// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title = 'SANSKAR' mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
        <TextForm heading="Enter text to analyse below" mode={mode}/>
        {/* <About/>  */}
      </div>
    </>
  );
}   
export default App;
