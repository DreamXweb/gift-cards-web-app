import React from "react";
import styled from "styled-components";
import {staticUrl} from "../../App";


function IcCaratLeft(props) {
  const { className } = props;

  return (
    <IcCaratLeft1 className={`ic-carat-left ${className || ""}`}>
      <IcCaratLeft2 className="ic-carat-left-1" src={staticUrl + "/img/ic---carat---left@2x.svg"} />
    </IcCaratLeft1>
  );
}

const IcCaratLeft1 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 24px;

  &.ic-carat-left.ic-carat-right {
    transform: rotate(-180deg);
  }
`;

const IcCaratLeft2 = styled.img`
  width: 24px;
  height: 24px;
`;

export default IcCaratLeft;
