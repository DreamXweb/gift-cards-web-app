import React, {useContext} from "react";
import styled from "styled-components";
import {
  InterMediumOnyx20px,
  InterMediumConcrete20px,
  Border1pxGraniteGray,
  InterBoldOnyx24px,
  InterBlackOnyx30px, InterNormalBlack18px, Border1pxOnyx, Border4pxWhite,
} from "../../styledMixins";
import App, {MainContext, staticUrl} from "../../App";

function Header () {

  // noinspection JSCheckFunctionSignatures
  const {loggedIn, setLoggedIn} = useContext(MainContext);

  const signUpLogInButtons = <>
    <OverlapGroup onClick={() => window.location = App.homepage + '/registration'}>
      <SignUp>Sign Up</SignUp>
    </OverlapGroup>
    <OverlapGroup1 onClick={() => window.location = App.homepage + '/log-in'}>
      <LogIn>Log In</LogIn>
    </OverlapGroup1>
  </>

  const logout = () => {
    setLoggedIn(false);
    window.location = App.homepage;
  }

  const myProfileButtons = <>
    <Placeholder/>

    {/* TODO open on avatar click, hide on somewhere else click */}
    <OverlapGroup3>
      <MyProfile onClick={() => window.location = App.homepage + '/user-profile'}>My Profile</MyProfile>
      <MyOrders onClick={() => window.location = App.homepage + '/my-orders'}>My Orders</MyOrders>
    </OverlapGroup3>

    <IconoIrLogOut onClick={logout} src={staticUrl + "/img/iconoir-log-out@2x.svg"} />
  </>

  return (
      <HeaderContainer>
        <FlexRow>
          <Cardsicle onClick={() => window.location = App.homepage}>Cardsicle</Cardsicle>
          <AboutUs onClick={() => window.notify('In development ... ')}>About us</AboutUs>
          <RefundAndCancellationPolicy onClick={() => window.notify('In development ... ')}>Refund and Cancellation Policy</RefundAndCancellationPolicy>
          <FAQ onClick={() => window.notify('In development ... ')}>FAQ</FAQ>
          {loggedIn ? myProfileButtons : signUpLogInButtons}
        </FlexRow>
        <GiftCardsContainer>
          <SellGiftCards onClick={() => window.location = App.homepage + '/sell-gift-cards-page'}>Sell Gift Cards</SellGiftCards>
          <BuyGiftCards onClick={() => window.location = App.homepage + '/buy-gift-cards-page'}>Buy Gift Cards</BuyGiftCards>
        </GiftCardsContainer>
      </HeaderContainer>
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
  cursor: pointer;
`;

const MyOrders = styled.div`
  margin-bottom: -3px;
  min-height: 27px;
  margin-top: 7px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
  cursor: pointer;
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
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  width: 1312px;
  margin-top: 55px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 134px;
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
  cursor: pointer;
`;

const AboutUs = styled.div`
  ${InterMediumOnyx20px}
  min-height: 24px;
  margin-left: 228px;
  margin-bottom: 1px;
  min-width: 86px;
  letter-spacing: 0;
  cursor: pointer;
`;

const RefundAndCancellationPolicy = styled.div`
  ${InterMediumOnyx20px}
  width: 297px;
  min-height: 23px;
  margin-left: 50px;
  margin-bottom: 2px;
  letter-spacing: 0;
  cursor: pointer;
`;

const FAQ = styled.div`
  ${InterMediumOnyx20px}
  min-height: 24px;
  margin-left: 50px;
  margin-bottom: 1px;
  min-width: 39px;
  letter-spacing: 0;
  cursor: pointer;
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
  cursor: pointer;
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
  cursor: pointer;
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
  cursor: pointer;
`;

const BuyGiftCards = styled.div`
  width: 173px;
  min-height: 29px;
  margin-left: 50px;
  letter-spacing: 0;
  cursor: pointer;
`;

export default Header;
