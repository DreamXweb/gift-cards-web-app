import React from "react";
import IcCaratLeft from "../IcCaratLeft";
import styled from "styled-components";
import { Border1pxMercury } from "../../styledMixins";


function PageMaster() {
  return (
    <PageDisabled>
      <IcCaratLeft />
    </PageDisabled>
  );
}

const PageDisabled = styled.div`
  ${Border1pxMercury}
  width: 32px;
  height: 32px;
  position: relative;
  display: flex;
  padding: 0 4px;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  opacity: 0.5;
`;

export default PageMaster;
