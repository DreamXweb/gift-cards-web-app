import React from "react";
import styled from "styled-components";
import {
  InterMediumOnyx20px,
  InterMediumConcrete20px,
  Border1pxGraniteGray,
  InterBlackOnyx30px,
} from "../../styledMixins";


function Header(props) {
  const { className } = props;

  return (
    <Header1 className={`header ${className || ""}`}>
      <Cardsicle className="cardsicle-1">GiftCards</Cardsicle>
      <AboutUs className="about-us-1">About us</AboutUs>
      <RefundAndCancellationPolicy className="refund-and-cancellation-policy-1">
        Refund and Cancellation Policy
      </RefundAndCancellationPolicy>
      <FAQ className="faq-1">FAQ</FAQ>
      <OverlapGroup className="overlap-group-3">
        <SignUp className="sign-up">Sign Up</SignUp>
      </OverlapGroup>
      <OverlapGroup1 className="overlap-group1-1">
        <LogIn className="log-in">Log In</LogIn>
      </OverlapGroup1>
    </Header1>
  );
}

const Header1 = styled.div`
  position: absolute;
  height: 55px;
  top: 55px;
  left: 70px;
  display: flex;
  align-items: center;
  min-width: 1308px;

  &.header.header-1 {
    margin-top: 55px;
    margin-left: 8px;
    position: unset;
    height: unset;
    top: unset;
    left: unset;
  }

  &.header.header-2 {
    margin-top: 55px;
    margin-left: 8px;
    position: unset;
    height: unset;
    top: unset;
    left: unset;
  }

  &.header.header-3 {
    margin-top: 55px;
    margin-left: 8px;
    position: unset;
    height: unset;
    top: unset;
    left: unset;
  }

  &.header.header-4 {
    margin-top: 55px;
    margin-left: 8px;
    position: unset;
    height: unset;
    top: unset;
    left: unset;
  }
`;

const Cardsicle = styled.div`
  ${InterBlackOnyx30px}
  min-height: 36px;
  margin-top: 1px;
  min-width: 161px;
  letter-spacing: 2.1px;
`;

const AboutUs = styled.div`
  ${InterMediumOnyx20px}
  min-height: 24px;
  margin-left: 228px;
  margin-bottom: 1px;
  min-width: 86px;
  letter-spacing: 0;
`;

const RefundAndCancellationPolicy = styled.div`
  ${InterMediumOnyx20px}
  width: 297px;
  min-height: 23px;
  margin-left: 50px;
  margin-bottom: 2px;
  letter-spacing: 0;
`;

const FAQ = styled.div`
  ${InterMediumOnyx20px}
  min-height: 24px;
  margin-left: 50px;
  margin-bottom: 1px;
  min-width: 39px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  height: 55px;
  margin-left: 137px;
  display: flex;
  padding: 0 18px;
  align-items: center;
  min-width: 111px;
  background-color: var(--granite-gray);
  border-radius: 12px;
`;

const SignUp = styled.div`
  ${InterMediumConcrete20px}
  width: 75px;
  min-height: 23px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  ${Border1pxGraniteGray}
  height: 55px;
  margin-left: 30px;
  display: flex;
  padding: 15px 25px;
  align-items: flex-start;
  min-width: 111px;
  border-radius: 12px;
`;

const LogIn = styled.div`
  ${InterMediumOnyx20px}
  width: 59px;
  min-height: 23px;
  letter-spacing: 0;
`;

export default Header;
