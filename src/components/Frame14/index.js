import React from "react";
import styled from "styled-components";
import { SpartanRegularNormalOnyx15px } from "../../styledMixins";
import {staticUrl} from "../../App";


function Frame14(props) {
  const { enterNameOnCard, className } = props;

  return (
    <Frame141 className={`frame-14 ${className || ""}`}>
      <EnterNameOnCard className="enter-name-on-card-1">{enterNameOnCard}</EnterNameOnCard>
      <Line4 className="line-4" src={staticUrl + "/img/line-4@1x.svg"} />
    </Frame141>
  );
}

const Frame141 = styled.div`
  width: 575px;
  margin-top: 168px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 30px;

  &.frame-14.frame-13 {
    margin-top: 56px;
  }
`;

const EnterNameOnCard = styled.div`
  ${SpartanRegularNormalOnyx15px}
  width: 167px;
  margin-top: -1px;
  min-height: 25px;
  text-align: center;
  letter-spacing: 0.15px;
  line-height: 21.1px;
  white-space: nowrap;
`;

const Line4 = styled.img`
  width: 575px;
  height: 2px;
  margin-top: 7px;
  margin-left: 0;
`;

export default Frame14;
