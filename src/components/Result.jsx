import React from 'react';
import styled from 'styled-components';

const ResultBlock = styled.div`
  height: 60px;
  background-color: #000000;
  width: 100%;
  border: 1px solid #08f50a;
`;
const Paragraph = styled.p`
  font-size: 40px;
  margin: 5px;
  color: #08f50a;
`;

function Result(props) {
  return (
    <ResultBlock>
      <Paragraph>{props.result}</Paragraph>
    </ResultBlock>
  );
}


export default Result;

