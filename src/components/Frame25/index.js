import React from "react";
import Frame14 from "../Frame14";
import Frame5 from "../Frame5";
import styled from "styled-components";
import { SpartanRegularNormalOnyx15px } from "../../styledMixins";
import "./Frame25.css";

function Frame25(props) {
  const { byClickingConfirm, frame141Props, frame142Props, frame51Props, frame52Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-25 screen">
        <Frame14 enterNameOnCard={frame141Props.enterNameOnCard} />
        <Frame14 enterNameOnCard={frame142Props.enterNameOnCard} className={frame142Props.className} />
        <Frame16>
          <Frame5 expiration={frame51Props.expiration} />
          <Frame5 expiration={frame52Props.expiration} className={frame52Props.className} />
        </Frame16>
        <ByClickingConfirm>{byClickingConfirm}</ByClickingConfirm>
      </div>
    </div>
  );
}

const Frame16 = styled.div`
  height: 31px;
  position: relative;
  margin-top: 56px;
  display: flex;
  align-items: flex-start;
  min-width: 516px;
`;

const ByClickingConfirm = styled.p`
  ${SpartanRegularNormalOnyx15px}
  width: 453px;
  min-height: 42px;
  margin-top: 65px;
  margin-left: 10px;
  letter-spacing: 0.15px;
  line-height: 21.1px;
`;

export default Frame25;
