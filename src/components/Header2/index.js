import React from "react";
import styled from "styled-components";
import {
  InterMediumOnyx20px,
  InterMediumConcrete20px,
  Border1pxGraniteGray,
  InterBoldOnyx24px,
  InterBlackOnyx30px,
} from "../../styledMixins";


function Header2(props) {
  const { className } = props;

  return (
    <Header className={`header-5 ${className || ""}`}>
      <FlexRow className="flex-row-7">
        <Cardsicle className="cardsicle-2">Cardsicle</Cardsicle>
        <AboutUs className="about-us-2">About us</AboutUs>
        <RefundAndCancellationPolicy className="refund-and-cancellation-policy-2">
          Refund and Cancellation Policy
        </RefundAndCancellationPolicy>
        <FAQ className="faq-2">FAQ</FAQ>
        <OverlapGroup className="overlap-group-8">
          <SignUp className="sign-up-1">Sign Up</SignUp>
        </OverlapGroup>
        <OverlapGroup1 className="overlap-group1-3">
          <LogIn className="log-in-1">Log In</LogIn>
        </OverlapGroup1>
      </FlexRow>
      <GiftCardsContainer className="gift-cards-container">
        <SellGiftCards className="sell-gift-cards-4">Sell Gift Cards</SellGiftCards>
        <BuyGiftCards className="buy-gift-cards-4">Buy Gift Cards</BuyGiftCards>
      </GiftCardsContainer>
    </Header>
  );
}

const Header = styled.div`
  width: 1312px;
  margin-top: 55px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 134px;

  &.header-5.header-6 {
    margin-top: unset;
    margin-left: unset;
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  min-width: 1300px;
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

const GiftCardsContainer = styled.div`
  ${InterBoldOnyx24px}
  height: 29px;
  align-self: center;
  margin-top: 50px;
  margin-right: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 392px;
`;

const SellGiftCards = styled.div`
  width: 169px;
  min-height: 29px;
  letter-spacing: 0;
`;

const BuyGiftCards = styled.div`
  width: 173px;
  min-height: 29px;
  margin-left: 50px;
  letter-spacing: 0;
`;

export default Header2;
