import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <>
      {click ? <Navbar /> : null}
      <button className="btn-style" onClick={() => setClick(!click)}>
        Click me
      </button>
    </>
  );
}

export default App;
