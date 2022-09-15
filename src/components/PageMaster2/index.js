import React from "react";
import styled from "styled-components";
import { Border1pxOnyx } from "../../styledMixins";


function PageMaster2(props) {
  const { children } = props;

  return (
    <PageActive>
      <Num>{children}</Num>
    </PageActive>
  );
}

const PageActive = styled.div`
  ${Border1pxOnyx}
  width: 32px;
  height: 32px;
  display: flex;
  padding: 4px;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 4px;
  overflow: hidden;
`;

const Num = styled.div`
  width: 24px;
  min-height: 22px;
  font-family: var(--font-family-sf_pro_text-bold);
  font-weight: 700;
  color: var(--onyx);
  font-size: var(--font-size-s);
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default PageMaster2;
