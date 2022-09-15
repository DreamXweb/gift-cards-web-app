import React from "react";
import PageMaster3 from "../PageMaster3";
import styled from "styled-components";


function PageDefault(props) {
  const { pageMaster3Props } = props;

  return (
    <PageDefault1>
      <PageMaster3>{pageMaster3Props.children}</PageMaster3>
    </PageDefault1>
  );
}

const PageDefault1 = styled.div`
  height: 32px;
  position: relative;
  margin-left: 8px;
  display: flex;
  align-items: flex-start;
  min-width: 32px;
`;

export default PageDefault;
