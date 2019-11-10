import React, {useState} from 'react';
import styled from 'styled-components';
import Result from './components/Result';
import Buttons from './components/Buttons';

const CalculatorBlock = styled.div`
  max-width: 400px;
  margin: 30px auto;
`;

function App() {
  const [result, setResult] = useState('');
  const [isResult, setIsResult] = useState(false);

  function reset() {
    setResult('');
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function calculate() {
    // eslint-disable-next-line
    let calcResult = eval(result);
    setResult(calcResult);
    setIsResult(true);
  }

  function calculateResult(val) {
    if (isResult) {
      setIsResult(false);
      reset();
      setResult(val);
    } else if (val === "C" || isResult) {
      setIsResult(false);
      reset();
    } else if (result.length > 15) {
      setResult("Error: many symbols");
    } else if (val === "=") {
      calculate();
      setIsResult(true)
    } else if (val === "CE") {
      backspace()
    } else {
      setResult(result + val);
    }
  }


  return (
    <div>
      <CalculatorBlock>
        <Result result={result}/>
        <Buttons onClick={calculateResult}/>
      </CalculatorBlock>
    </div>
  );
}


export default App;
