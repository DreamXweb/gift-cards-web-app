import React from "react";
import IcCaratLeft from "../IcCaratLeft";
import styled from "styled-components";


function IcCaratRight(props) {
  const { icCaratLeftProps } = props;

  return (
    <IcCaratRight1>
      <IcCaratLeft className={icCaratLeftProps.className} />
    </IcCaratRight1>
  );
}

const IcCaratRight1 = styled.div`
  height: 24px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 24px;
`;

export default IcCaratRight;
