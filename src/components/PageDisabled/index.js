import React from "react";
import PageMaster from "../PageMaster";
import styled from "styled-components";


function PageDisabled() {
  return (
    <PageDisabled1>
      <PageMaster />
    </PageDisabled1>
  );
}

const PageDisabled1 = styled.div`
  height: 32px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 32px;
`;

export default PageDisabled;
