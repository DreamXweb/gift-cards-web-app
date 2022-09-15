import React from "react";
import styled from "styled-components";
import { Border1pxCeleste } from "../../styledMixins";
import {staticUrl} from "../../App";


function Group80762() {
  return (
    <Group8076>
      <VueSaxOutLineEyeSlash src={staticUrl + "/img/vuesax-outline-eye-slash-2@2x.svg"} />
    </Group8076>
  );
}

const Group8076 = styled.div`
  ${Border1pxCeleste}
  height: 40px;
  margin-top: 5px;
  display: flex;
  padding: 11px 17px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 400px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

const VueSaxOutLineEyeSlash = styled.img`
  width: 16px;
  height: 16px;
`;

export default Group80762;
