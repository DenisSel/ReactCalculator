import React, { useState } from 'react';
import Result from './components/Result';
import Buttons from './components/Buttons';
import './App.css';

function App() {
  const [result, setResult] = useState(0);

  return (
      <div>
        <div className="calculator">
          <h1>My Calculator</h1>
          <Result result={result}/>
          <Buttons onClick={(val) => setResult(val)}/>
        </div>
      </div>
    );
}


export default App;
