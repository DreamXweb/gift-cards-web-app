import React from "react";
import IcCaratRight from "../IcCaratRight";
import styled from "styled-components";
import { Border1pxMercury } from "../../styledMixins";


function PageMaster4(props) {
  const { icCaratRightProps } = props;

  return (
    <PageMaster>
      <IcCaratRight icCaratLeftProps={icCaratRightProps.icCaratLeftProps} />
    </PageMaster>
  );
}

const PageMaster = styled.div`
  ${Border1pxMercury}
  width: 32px;
  height: 32px;
  position: relative;
  margin-left: 8px;
  display: flex;
  padding: 0 4px;
  align-items: center;
  background-color: var(--white);
  border-radius: 4px;
  overflow: hidden;
`;

export default PageMaster4;
