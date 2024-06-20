import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextUtil from './components/TextUtil';
import Offcanvas from './components/Search';
function App() {

  const [theme, settheme] = useState("white")

  let handletheme = () => {
    let defaulttheme = document.getElementById('flexRadioDefault1');
    let darktheme = document.getElementById('flexRadioDefault2');
    let apocalypsetheme = document.getElementById('flexRadioDefault3');
    let autumntheme = document.getElementById('flexRadioDefault4');
    let doomtheme = document.getElementById('flexRadioDefault5');
    if (defaulttheme.checked) {
      settheme("white");
      document.body.style.backgroundColor='white';
      document.body.style.color='Black';
      document.getElementById('text').style.backgroundColor="white";
      document.querySelector('.navbar').style.backgroundColor='#DDF2FD';

    }else if (darktheme.checked) {
      settheme("dark");
      document.body.style.backgroundColor="#191919";
      document.body.style.color='white';
      document.getElementById('text').style.backgroundColor="#4F4A45";

    }else if (apocalypsetheme.checked) {
      settheme("dark");
      document.body.style.backgroundColor="#12372A";
      document.body.style.color='white';
      document.getElementById('text').style.backgroundColor="#436850";
    }
    else if (doomtheme.checked) {
      settheme("dark");
      document.body.style.backgroundColor="#1D2B53";
      document.body.style.color='white';
      document.getElementById('text').style.backgroundColor="#474F7A";
    }
    else if (autumntheme.checked) {
      settheme("dark");
      document.body.style.backgroundColor="#5D3587";
      document.body.style.color='white';
      document.getElementById('text').style.backgroundColor="#A367B1";
    }
}

  return (
    <>
      <Navbar theme={theme} title="TextWallah" handletheme={handletheme}/>
      <TextUtil />
      <Offcanvas/>
    </>
  );
}

export default App;
