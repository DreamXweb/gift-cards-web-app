import React from "react";
import styled from "styled-components";
import { SfprotextBoldSilverChalice14px, Border1pxMercury } from "../../styledMixins";


function PageMaster3(props) {
  const { children } = props;

  return (
    <PageDefault>
      <Num>{children}</Num>
    </PageDefault>
  );
}

const PageDefault = styled.div`
  ${Border1pxMercury}
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
  ${SfprotextBoldSilverChalice14px}
  width: 24px;
  min-height: 22px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default PageMaster3;
