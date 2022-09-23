import React from "react";
import styled from "styled-components";


function Container(props) {
  const { className } = props;

  return (
    <Container1 className={`container-1 ${className || ""}`}>
      <Circle className="circle" />
    </Container1>
  );
}

const Container1 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 143px;
  left: 383px;
  display: flex;
  padding: 0 5px;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;

  &.container-1.container-2 {
    top: 187px;
  }
  
  &.container-1.container-3 {
    top: 97px;
  }
  
  &.container-1.container-4 {
    top: 185px;
  }
  
  &.container-1.container-5 {
    top: 229px;
  }
  
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--oslo-gray);
  border-radius: 5px;
`;

export default Container;
