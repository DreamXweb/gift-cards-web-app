import React from "react";
import styled from "styled-components";
import {staticUrl} from "../../App";


function Icon(props) {
  const { className } = props;

  return (
    <Icon1 className={`icon ${className || ""}`}>
      <Vector className="vector" src={staticUrl + "/img/vector@2x.svg"} />
    </Icon1>
  );
}

const Icon1 = styled.div`
  height: 15px;
  display: flex;
  padding: 3.7px 2.9px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 15px;
  background-color: var(--celeste);
  border-radius: 2px;

  &.icon.icon-1 {
    margin-bottom: 7px;
  }

  &.icon.icon-3 {
    margin-bottom: 7px;
  }
`;

const Vector = styled.img`
  width: 9px;
  height: 8px;
`;

export default Icon;
