import React, {useState} from "react";
import styled from "styled-components";
import {
  InterMediumOnyx20px,
  InterMediumConcrete20px,
  Border1pxGraniteGray,
  InterBoldOnyx24px,
  InterBlackOnyx30px, InterNormalBlack18px, Border1pxOnyx, Border4pxWhite,
} from "../../styledMixins";
import {staticUrl} from "../../App";

const loggedInPages = ['user-profile', 'my-orders', 'checkout-page', 'edit-profile'];

const isLoggedIn = () => {
  for (let page of loggedInPages) {
    if (window.location.href.indexOf(page) !== -1) {
      return true;
    }
  }
  return false;
}

function Header2(props) {
  const { className } = props;

  // TODO change it only in case of successful login
  const [loggedIn] = useState(isLoggedIn());

  const signUpLogInButtons = <>
    <OverlapGroup className="overlap-group-8">
      <SignUp className="sign-up-1">Sign Up</SignUp>
    </OverlapGroup>
    <OverlapGroup1 className="overlap-group1-3">
      <LogIn className="log-in-1">Log In</LogIn>
    </OverlapGroup1>
  </>

  const myProfileButtons = <>
    <Placeholder className="placeholder-7" />
    <OverlapGroup3>
      <MyProfile>My Profile</MyProfile>
      <MyOrders>My Orders</MyOrders>
    </OverlapGroup3>
    <IconoIrLogOut src={staticUrl + "/img/iconoir-log-out@2x.svg"} />
  </>

  return (
    <Header className={`header-5 ${className || ""}`}>
      <FlexRow className="flex-row-7">
        <Cardsicle className="cardsicle-2">GiftCards</Cardsicle>
        <AboutUs className="about-us-2">About us</AboutUs>
        <RefundAndCancellationPolicy className="refund-and-cancellation-policy-2">
          Refund and Cancellation Policy
        </RefundAndCancellationPolicy>
        <FAQ className="faq-2">FAQ</FAQ>

        {loggedIn ? myProfileButtons : signUpLogInButtons}

      </FlexRow>
      <GiftCardsContainer className="gift-cards-container">
        <SellGiftCards className="sell-gift-cards-4">Sell Gift Cards</SellGiftCards>
        <BuyGiftCards className="buy-gift-cards-4">Buy Gift Cards</BuyGiftCards>
      </GiftCardsContainer>
    </Header>
  );
}

const OverlapGroup3 = styled.div`
  ${InterNormalBlack18px}
  ${Border1pxOnyx}
            position: absolute;
  width: 110px;
  top: 60px;
  left: 1143px;
  display: flex;
  flex-direction: column;
  padding: 9px;
  align-items: flex-start;
  min-height: 81px;
  border-radius: 4px;
`;

const MyProfile = styled.div`
  width: 89px;
  margin-bottom: -3px;
  min-height: 27px;
  align-self: center;
  margin-right: 1px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const MyOrders = styled.div`
  margin-bottom: -3px;
  min-height: 27px;
  margin-top: 7px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
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

// TODO cancel duplicated code
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
