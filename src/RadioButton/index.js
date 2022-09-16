import React from "react";
import styled from "styled-components";


function RadioButton(props) {
  const { className } = props;

  return (
    <RadioButton1 className={`radio-button ${className || ""}`}>
      <Container className="container" />
    </RadioButton1>
  );
}

const RadioButton1 = styled.div`
  position: absolute;
  height: 24px;
  top: 97px;
  left: 381px;
  display: flex;
  padding: 0 2px;
  align-items: center;
  min-width: 24px;
  border-radius: 10px;

  &.radio-button.radio-button-1 {
    top: 185px;
  }

  &.radio-button.radio-button-2 {
    top: 229px;
  }

  &.radio-button.radio-button-4 {
    top: 141px;
  }

  &.radio-button.radio-button-5 {
    top: 229px;
  }
`;

const Container = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

export default RadioButton;
