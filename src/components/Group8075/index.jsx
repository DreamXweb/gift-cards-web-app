import React from "react";
import styled from "styled-components";
import { InterNormalSilverSand16px, InterMediumOnyx16px, Border1pxCeleste } from "../../styledMixins";


function Group8075() {
  return (
    <Group80751>
      <FirstName>First Name</FirstName>
      <OverlapGroup>
        <Name>Mark</Name>
        <Rectangle72 />
      </OverlapGroup>
    </Group80751>
  );
}

const Group80751 = styled.div`
  width: 402px;
  margin-top: 71px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 69px;
`;

const FirstName = styled.div`
  ${InterMediumOnyx16px}
  min-height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
  margin-top: 5px;
  border-radius: 4px;
`;

const Name = styled.div`
  ${InterNormalSilverSand16px}
  position: absolute;
  top: 12px;
  left: 16px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Rectangle72 = styled.div`
  ${Border1pxCeleste}
  position: absolute;
  width: 400px;
  height: 40px;
  top: 0;
  left: 0;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

export default Group8075;
