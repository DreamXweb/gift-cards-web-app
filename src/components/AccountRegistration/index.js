import React from "react";
import Header from "../Header";
import Group80762 from "../Group80762";
import styled from "styled-components";
import {
  InterNormalSilverSand16px,
  InterNormalWaterloo16px,
  InterMediumOnyx16px,
  Border1pxCeleste,
  InterBoldMineShaft22px,
  InterNormalOnyx16px,
  ValignTextMiddle,
  InterSemiBoldOnyx20px,
  InterBoldOnyx24px,
  InterBlackOnyx30px,
  InterSemiBoldWhite14px, InterNormalOnyx12px,
} from "../../styledMixins";
import "./AccountRegistration.css";
import {staticUrl} from "../../App";

function AccountRegistration(props) {
  const {
    sellGiftCards1,
    accountRegistration,
    firstName,
    name,
    lastName,
    surname,
    emailAddress,
    yourNameEmailCom,
    password,
    confirmPassword,
    placeholder,
    buyGiftCards1,
    byCreatingAnAccount,
    label,
    alreadyHaveAnAccount,
    phoneNumberOptional,
    text1,
    number1,
    number2,
    number3,
    cardsicle,
    company,
    sellGiftCards2,
    buyGiftCards2,
    aboutUs,
    refundAndCancellationPolicy,
    faq,
    partnersProgram,
    contactingUs,
    ifYouHaveAnyQues,
    privacyPolicy,
    termsConditions,
    supportCardsicleCom,
    headerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="account-registration screen">
        <Header className={headerProps.className} />
        <FlexRow>
          <FlexCol>
            <SellGiftCards>{sellGiftCards1}</SellGiftCards>
            <AccountRegistration1>{accountRegistration}</AccountRegistration1>
            <Group8075>
              <FirstName>{firstName}</FirstName>
              <OverlapGroup>
                <Name>{name}</Name>
                <Rectangle72 />
              </OverlapGroup>
            </Group8075>
            <GroupContainer>
              <Group8076>
                <FirstName>{lastName}</FirstName>
                <OverlapGroup>
                  <Name>{surname}</Name>
                  <Rectangle72 />
                </OverlapGroup>
                <EmailAddress>{emailAddress}</EmailAddress>
                <OverlapGroup>
                  <Name>{yourNameEmailCom}</Name>
                  <Rectangle72 />
                </OverlapGroup>
                <EmailAddress>{password}</EmailAddress>
                <Group80762 />
                <EmailAddress>{confirmPassword}</EmailAddress>
                <OverlapGroup>
                  <Placeholder>{placeholder}</Placeholder>
                  <Rectangle72 />
                  <VueSaxOutLineEye src={staticUrl + "/img/vuesax-outline-eye@2x.svg"} />
                </OverlapGroup>
              </Group8076>
              <Group8098 src={staticUrl + "/img/group-8098@2x.svg"} />
            </GroupContainer>
          </FlexCol>
          <FlexCol1>
            <BuyGiftCards>{buyGiftCards1}</BuyGiftCards>
            <ImagePlaceholder src={staticUrl + "/img/image-placeholder-1@1x.svg"} />
          </FlexCol1>
        </FlexRow>
        <OverlapGroup4>
          <FormElements>
            <FlexRow1>
              <Rectangle2 />
              <OverlapGroup1>
                <ByCreatingAnAccount>{byCreatingAnAccount}</ByCreatingAnAccount>
                <Icon src={staticUrl + "/img/icon@2x.svg"} />
              </OverlapGroup1>
            </FlexRow1>
            <Button>
              <Label>{label}</Label>
            </Button>
            <AlreadyHaveAnAccount>{alreadyHaveAnAccount}</AlreadyHaveAnAccount>
          </FormElements>
          <Group8080>
            <FirstName>{phoneNumberOptional}</FirstName>
            <Group8078>
              <OverlapGroup2>
                <Text1>{text1}</Text1>
                <Number>{number1}</Number>
                <Number1>{number2}</Number1>
                <Number2>{number3}</Number2>
                <Rectangle74 />
              </OverlapGroup2>
              <Group8079 src={staticUrl + "/img/group-8079@2x.svg"} />
            </Group8078>
          </Group8080>
          <Rectangle75 />
          <OverlapGroup3>
            <Cardsicle>{cardsicle}</Cardsicle>
            <Group68>
              <Company>{company}</Company>
              <SellGiftCards1>{sellGiftCards2}</SellGiftCards1>
              <BuyGiftCards1>{buyGiftCards2}</BuyGiftCards1>
              <BuyGiftCards1>{aboutUs}</BuyGiftCards1>
              <RefundAndCancellationPolicy>{refundAndCancellationPolicy}</RefundAndCancellationPolicy>
              <FAQ>{faq}</FAQ>
              <FAQ>{partnersProgram}</FAQ>
            </Group68>
            <OverlapGroup5>
              <Group200>
                <Company>{contactingUs}</Company>
                <IfYouHaveAnyQues>{ifYouHaveAnyQues}</IfYouHaveAnyQues>
                <FlexRow2>
                  <PrivacyPolicy>{privacyPolicy}</PrivacyPolicy>
                  <TermsConditions>{termsConditions}</TermsConditions>
                </FlexRow2>
              </Group200>
              <SupportCardsicleCom>{supportCardsicleCom}</SupportCardsicleCom>
            </OverlapGroup5>
          </OverlapGroup3>
          <IcChevron src={staticUrl + "/img/ic-chevron-1@2x.svg"} />
        </OverlapGroup4>
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 592px;
  margin-top: 49px;
  margin-left: 60px;
  display: flex;
  align-items: flex-start;
  min-width: 1140px;
`;

const FlexCol = styled.div`
  width: 513px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 592px;
`;

const SellGiftCards = styled.div`
  ${InterBoldOnyx24px}
  width: 169px;
  min-height: 29px;
  align-self: flex-end;
  letter-spacing: 0;
`;

const AccountRegistration1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldMineShaft22px}
            height: 27px;
  margin-top: 50px;
  letter-spacing: 0;
`;

const Group8075 = styled.div`
  width: 402px;
  margin-top: 41px;
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

const GroupContainer = styled.div`
  width: 408px;
  height: 351px;
  position: relative;
  margin-top: 25px;
`;

const Group8076 = styled.div`
  position: absolute;
  width: 408px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 351px;
`;

const EmailAddress = styled.div`
  ${InterMediumOnyx16px}
  min-height: 24px;
  margin-top: 25px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Placeholder = styled.div`
  ${ValignTextMiddle}
  ${InterNormalSilverSand16px}
            position: absolute;
  height: 21px;
  top: 10px;
  left: 16px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const VueSaxOutLineEye = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 12px;
  left: 368px;
`;

const Group8098 = styled.img`
  position: absolute;
  width: 151px;
  height: 7px;
  top: 233px;
  left: 16px;
`;

const FlexCol1 = styled.div`
  width: 577px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 568px;
`;

const BuyGiftCards = styled.div`
  ${InterBoldOnyx24px}
  width: 173px;
  min-height: 29px;
  letter-spacing: 0;
`;

const ImagePlaceholder = styled.img`
  width: 554px;
  height: 345px;
  align-self: flex-end;
  margin-top: 194px;
`;

const OverlapGroup4 = styled.div`
  width: 1442px;
  height: 908px;
  position: relative;
  margin-top: 25px;
  margin-left: 2px;
`;

const FormElements = styled.div`
  position: absolute;
  width: 404px;
  top: 89px;
  left: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 154px;
`;

const FlexRow1 = styled.div`
  display: flex;
  align-items: center;
  min-width: 327px;
`;

const Rectangle2 = styled.div`
  width: 15px;
  height: 15px;
  margin-bottom: 7px;
  background-color: var(--celeste);
  border-radius: 2px;
`;

const OverlapGroup1 = styled.div`
  width: 302px;
  height: 30px;
  position: relative;
  margin-left: 10px;
`;

const ByCreatingAnAccount = styled.p`
  ${ValignTextMiddle}
  ${InterNormalOnyx12px}
            position: absolute;
  width: 302px;
  height: 30px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const Icon = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 4px;
  left: 155px;
`;

const Button = styled.div`
  height: 55px;
  margin-top: 30px;
  display: flex;
  padding: 17px 171px;
  align-items: flex-start;
  min-width: 400px;
  background-color: var(--granite-gray);
  border-radius: 12px;
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldWhite14px}
            height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const AlreadyHaveAnAccount = styled.div`
  ${ValignTextMiddle}
  ${InterNormalOnyx16px}
            height: 19px;
  align-self: center;
  margin-top: 20px;
  margin-right: 3px;
  min-width: 195px;
  letter-spacing: 0;
  text-decoration: underline;
`;

const Group8080 = styled.div`
  position: absolute;
  width: 402px;
  top: 0;
  left: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 560px;
`;

const Group8078 = styled.div`
  width: 408px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 531px;
`;

const OverlapGroup2 = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
  border-radius: 4px;
`;

const Text1 = styled.div`
  ${InterNormalOnyx16px}
  position: absolute;
  top: 12px;
  left: 60px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Number = styled.div`
  ${InterNormalSilverSand16px}
  position: absolute;
  top: 12px;
  left: 102px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Number1 = styled.div`
  ${InterNormalSilverSand16px}
  position: absolute;
  top: 12px;
  left: 179px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Number2 = styled.div`
  ${InterNormalSilverSand16px}
  position: absolute;
  top: 12px;
  left: 136px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Rectangle74 = styled.div`
  ${Border1pxCeleste}
  position: absolute;
  width: 400px;
  height: 40px;
  top: 0;
  left: 0;
  border-radius: 4px;
`;

const Group8079 = styled.img`
  width: 16px;
  height: 26px;
  margin-top: 465px;
  margin-left: 36px;
`;

const Rectangle75 = styled.div`
  position: absolute;
  width: 19px;
  height: 14px;
  top: 42px;
  left: 196px;
  background-color: var(--celeste);
  border-radius: 4px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  height: 470px;
  top: 438px;
  left: 0;
  display: flex;
  padding: 0 165px;
  align-items: center;
  min-width: 1440px;
  background-color: var(--gray-nurse);
`;

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

const SellGiftCards1 = styled.div`
  ${InterNormalWaterloo16px}
  min-height: 26px;
  margin-top: 40px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const BuyGiftCards1 = styled.div`
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

const OverlapGroup5 = styled.div`
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

const FlexRow2 = styled.div`
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

const IcChevron = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 41px;
  left: 218px;
`;

export default AccountRegistration;
