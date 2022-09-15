import React from "react";
import Group80762 from "../Group80762";
import styled from "styled-components";
import {
  InterNormalSilverSand16px,
  InterMediumOnyx12px,
  InterMediumOnyx16px,
  Border1pxCeleste,
} from "../../styledMixins";


function Group8076(props) {
  const { className } = props;

  return (
    <Group80761 className={`group-8076 ${className || ""}`}>
      <EmailAddress className="email-address-1">Email Address</EmailAddress>
      <OverlapGroup className="overlap-group-2">
        <YourNameEmailCom className="yourNameEmailCom-1">yourname@email.com</YourNameEmailCom>
        <Rectangle72 className="rectangle-72-1" />
      </OverlapGroup>
      <Password className="password">Password</Password>
      <Group80762 />
      <RememberMe className="remember-me">Remember me</RememberMe>
    </Group80761>
  );
}

const Group80761 = styled.div`
  position: absolute;
  width: 406px;
  top: 306px;
  left: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 261px;

  &.group-8076.group-8076-1 {
    top: 0;
    left: 0;
  }
`;

const EmailAddress = styled.div`
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

const YourNameEmailCom = styled.div`
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

const Password = styled.div`
  ${InterMediumOnyx16px}
  min-height: 24px;
  margin-top: 25px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const RememberMe = styled.div`
  ${InterMediumOnyx12px}
  min-height: 24px;
  margin-top: 74px;
  margin-left: 25px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default Group8076;
