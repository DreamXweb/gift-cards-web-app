import React from "react";
import PageMaster2 from "../PageMaster2";
import styled from "styled-components";


function PageActive(props) {
  const { pageMaster2Props } = props;

  return (
    <PageActive1>
      <PageMaster2>{pageMaster2Props.children}</PageMaster2>
    </PageActive1>
  );
}

const PageActive1 = styled.div`
  height: 32px;
  position: relative;
  margin-left: 8px;
  display: flex;
  align-items: flex-start;
  min-width: 32px;
`;

export default PageActive;
