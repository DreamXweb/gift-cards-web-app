import React from "react";
import styled from "styled-components";


function RightThumb(props) {
  const { className } = props;

  return (
    <RightThumb1 className={`right-thumb ${className || ""}`}>
      <Ellipse className="ellipse" />
    </RightThumb1>
  );
}

const RightThumb1 = styled.div`
  position: absolute;
  height: 24px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 24px;
  transform: rotate(-180deg);

  &.right-thumb.right-thumb-1 {
    margin-left: 159px;
    margin-top: -8px;
    position: unset;
    height: unset;
    top: unset;
    left: unset;
  }
`;

const Ellipse = styled.div`
  width: 24px;
  height: 24px;
  background-color: var(--onyx);
  border-radius: 12px;
  transform: rotate(-180deg);
`;

export default RightThumb;
