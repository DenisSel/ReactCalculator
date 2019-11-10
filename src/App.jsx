import React, { useState } from 'react';
import Result from './components/Result';
import Buttons from './components/Buttons';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  function reset(){
    setResult('');
  }

  function backspace(){
    setResult(result.slice(0, -1));
  }

  function calculate() {
    // eslint-disable-next-line
    setResult(eval(result).toFixed(2));
  }

  function calculateResult(val) {
    if(val === "C") {
      reset()
    } else if(result.length > 15) {
      setResult("Error: many symbols");
    } else if(val === "=") {
      calculate();
    } else if(val === "CE"){
      backspace()
    } else {
      setResult(result + val);
    }
  }



  return (
      <div>
        <div className="calculator">
          <h1>My Calculator</h1>
          <Result result={result}/>
          <Buttons onClick={calculateResult}/>
        </div>
      </div>
    );
}


export default App;
