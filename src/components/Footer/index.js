import React from "react";
import styled from "styled-components";
import {
  InterNormalWaterloo16px,
  InterSemiBoldOnyx20px,
  InterBlackOnyx30px,
  InterNormalOnyx16px,
} from "../../styledMixins";


function Footer(props) {
  const { className } = props;

  return (
    <Footer1 className={`footer ${className || ""}`}>
      <OverlapGroup13 className="overlap-group13">
        <Cardsicle className="cardsicle-3">GiftCards</Cardsicle>
        <Group68 className="group-68-1">
          <Company className="company-1">Company</Company>
          <SellGiftCards className="sell-gift-cards-5">Sell Gift Cards</SellGiftCards>
          <BuyGiftCards className="buy-gift-cards-5">Buy Gift Cards</BuyGiftCards>
          <BuyGiftCards className="about-us-3">About Us</BuyGiftCards>
          <RefundAndCancellationPolicy className="refund-and-cancellation-policy-3">
            Refund and Cancellation Policy
          </RefundAndCancellationPolicy>
          <FAQ className="faq-3">FAQ</FAQ>
          <FAQ className="partners-program-1">Partners Program</FAQ>
        </Group68>
        <OverlapGroup className="overlap-group-9">
          <Group200 className="group-200-1">
            <Company className="contacting-us-1">Contacting us</Company>
            <IfYouHaveAnyQues className="if-you-have-any-ques-1">
              If you have any questions regarding this privacy policy you may contact us at:
            </IfYouHaveAnyQues>
            <FlexRow className="flex-row-8">
              <PrivacyPolicy className="privacy-policy-1">Privacy Policy</PrivacyPolicy>
              <TermsConditions>Terms &amp; Conditions</TermsConditions>
            </FlexRow>
          </Group200>
          <SupportCardsicleCom>support@giftcards.com</SupportCardsicleCom>
        </OverlapGroup>
      </OverlapGroup13>
    </Footer1>
  );
}

const Footer1 = styled.div`
  margin-top: 207px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 1442px;

  &.footer.footer-1 {
    margin-top: 398px;
  }

  &.footer.footer-2 {
    margin-top: 225px;
  }

  &.footer.footer-3 {
    margin-top: 225px;
  }

  &.footer.footer-4 {
    margin-top: 122px;
  }

  &.footer.footer-5 {
    margin-top: 106px;
    margin-right: -2px;
    margin-left: unset;
  }

  &.footer.footer-6 {
    margin-top: 63px;
    margin-left: unset;
  }

  &.footer.footer-7 {
    margin-top: 177px;
  }
`;

const OverlapGroup13 = styled.div`
  height: 470px;
  display: flex;
  padding: 0 165px;
  align-items: center;
  min-width: 1440px;
  background-color: var(--gray-nurse);
`;

// TODO cancel duplicated code
const Cardsicle = styled.div`
  ${InterBlackOnyx30px}
  min-height: 36px;
  align-self: flex-start;
  margin-top: 77px;
  min-width: 161px;
  letter-spacing: 2.1px;
`;

const Group68 = styled.div`
  width: 166px;
  margin-left: 269px;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 313px;
`;

const Company = styled.div`
  ${InterSemiBoldOnyx20px}
  min-height: 24px;
  letter-spacing: 0;
`;

const SellGiftCards = styled.div`
  ${InterNormalWaterloo16px}
  min-height: 26px;
  margin-top: 40px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const BuyGiftCards = styled.div`
  ${InterNormalWaterloo16px}
  min-height: 26px;
  margin-top: 20px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const RefundAndCancellationPolicy = styled.div`
  ${InterNormalWaterloo16px}
  width: 152px;
  min-height: 33px;
  margin-top: 20px;
  letter-spacing: 0;
`;

const FAQ = styled.div`
  ${InterNormalWaterloo16px}
  min-height: 19px;
  margin-top: 20px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  width: 322px;
  height: 313px;
  position: relative;
  margin-left: 186px;
  margin-top: 3px;
`;

const Group200 = styled.div`
  position: absolute;
  width: 322px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 313px;
`;

const IfYouHaveAnyQues = styled.p`
  ${InterNormalWaterloo16px}
  width: 314px;
  min-height: 52px;
  margin-top: 40px;
  letter-spacing: 0;
  line-height: 26px;
`;

const FlexRow = styled.div`
  ${InterNormalWaterloo16px}
  height: 26px;
  margin-top: 171px;
  display: flex;
  align-items: flex-start;
  min-width: 296px;
`;

const PrivacyPolicy = styled.div`
  min-height: 26px;
  min-width: 105px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const TermsConditions = styled.div`
  min-height: 26px;
  margin-left: 35px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const SupportCardsicleCom = styled.div`
  ${InterNormalOnyx16px}
  position: absolute;
  top: 136px;
  left: 0;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export default Footer;
