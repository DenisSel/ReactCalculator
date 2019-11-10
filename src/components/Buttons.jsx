import React from 'react';
import styled from 'styled-components';

const ButtonsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #08f50a;
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  box-sizing: border-box;
  height: 60px;
  font-size: 30px;
  color: #08f50a;
  border: 1px solid #08f50a;
  background-color: #000000;
  cursor: pointer;
  
  &:hover {
    color: #000000;
  background-color: #08f50a;
  }
`;

function Buttons(props) {
    return (
      <ButtonsBlock>
        <ButtonBlock onClick={() => props.onClick("1")}>1</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("2")}>2</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("3")}>3</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("+")}>+</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("4")}>4</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("5")}>5</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("6")}>6</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("-")}>-</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("7")}>7</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("8")}>8</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("9")}>9</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("*")}>&#8226;</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick(".")}>.</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("0")}>0</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("=")}>=</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("/")}>÷</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("(")}>(</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("CE")}>CE</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick(")")}>)</ButtonBlock>
        <ButtonBlock onClick={() => props.onClick("C")}>C</ButtonBlock>
      </ButtonsBlock>
    );
}


export default Buttons;
