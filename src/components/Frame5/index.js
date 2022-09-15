import React from "react";
import styled from "styled-components";
import { SpartanRegularNormalOnyx15px } from "../../styledMixins";
import {staticUrl} from "../../App";


function Frame5(props) {
  const { expiration, className } = props;

  return (
    <Frame51 className={`frame-5 ${className || ""}`}>
      <Expiration className="expiration">{expiration}</Expiration>
      <Line4 className="line-4-1" src={staticUrl + "/img/line-4-2@2x.svg"} />
    </Frame51>
  );
}

const Frame51 = styled.div`
  width: 252px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 31px;

  &.frame-5.frame-6 {
    margin-left: 12px;
  }
`;

const Expiration = styled.div`
  ${SpartanRegularNormalOnyx15px}
  width: 84px;
  margin-top: -1px;
  min-height: 25px;
  text-align: center;
  letter-spacing: 0.15px;
  line-height: 21.1px;
  white-space: nowrap;
`;

const Line4 = styled.img`
  width: 252px;
  height: 1px;
  margin-top: 6px;
`;

export default Frame5;
