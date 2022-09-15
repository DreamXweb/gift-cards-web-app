import React from "react";
import styled from "styled-components";
import { InterMediumOnyx20px, Border4pxWhite, InterBoldOnyx24px, InterBlackOnyx30px } from "../../styledMixins";
import {staticUrl} from "../../App";


function Header3(props) {
  const { className } = props;

  return (
    <Header className={`header-8 ${className || ""}`}>
      <FlexRow className="flex-row-23">
        <Cardsicle className="cardsicle-6">Cardsicle</Cardsicle>
        <AboutUs className="about-us-6">About us</AboutUs>
        <RefundAndCancellationPolicy className="refund-and-cancellation-policy-6">
          Refund and Cancellation Policy
        </RefundAndCancellationPolicy>
        <FAQ className="faq-6">FAQ</FAQ>
        <Placeholder className="placeholder-7" />
        <IconoIrLogOut src={staticUrl + "/img/iconoir-log-out@2x.svg"} />
      </FlexRow>
      <GiftCardsContainer className="gift-cards-container-1">
        <SellGiftCards className="sell-gift-cards-12">Sell Gift Cards</SellGiftCards>
        <BuyGiftCards className="buy-gift-cards-12">Buy Gift Cards</BuyGiftCards>
      </GiftCardsContainer>
    </Header>
  );
}

const Header = styled.div`
  position: absolute;
  width: 1312px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 133px;

  &.header-8.header-9 {
    margin-top: 56px;
    margin-left: 12px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.header-8.header-10 {
    margin-top: 56px;
    margin-left: 12px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.header-8.header-11 {
    position: unset;
    top: unset;
    left: unset;
  }
`;

const FlexRow = styled.div`
  margin-top: -4px;
  display: flex;
  align-items: center;
  min-width: 1300px;
`;

const Cardsicle = styled.div`
  ${InterBlackOnyx30px}
  min-height: 36px;
  margin-top: 4px;
  min-width: 161px;
  letter-spacing: 2.1px;
`;

const AboutUs = styled.div`
  ${InterMediumOnyx20px}
  min-height: 24px;
  margin-left: 228px;
  margin-top: 2px;
  min-width: 86px;
  letter-spacing: 0;
`;

const RefundAndCancellationPolicy = styled.div`
  ${InterMediumOnyx20px}
  width: 297px;
  min-height: 23px;
  margin-left: 50px;
  margin-top: 1px;
  letter-spacing: 0;
`;

const FAQ = styled.div`
  ${InterMediumOnyx20px}
  min-height: 24px;
  margin-left: 50px;
  margin-top: 2px;
  min-width: 39px;
  letter-spacing: 0;
`;

const Placeholder = styled.div`
  ${Border4pxWhite}
  width: 58px;
  height: 58px;
  margin-left: 288px;
  background-color: var(--mist-gray);
  border-radius: 29px;
`;

const IconoIrLogOut = styled.img`
  width: 27px;
  height: 27px;
  margin-left: 16px;
  margin-bottom: 1px;
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

export default Header3;
