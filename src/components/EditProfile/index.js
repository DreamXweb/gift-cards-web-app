import React from "react";
import Header3 from "../Header3";
import Group8115 from "../Group8115";
import styled from "styled-components";
import {
  InterNormalWaterloo16px,
  InterMediumOnyx16px,
  Border1pxCeleste,
  InterBoldOnyx22px,
  InterSemiBoldBlack22px,
  InterSemiBoldOnyx18px,
  InterSemiBoldBlack18px,
  InterSemiBoldOnyx20px,
  InterNormalSonicSilver16px,
  InterBoldBlack22px,
  MulishNormalSonicSilver16px,
  Border1pxAthensGray,
  InterNormalOnyx16px,
  InterBlackOnyx30px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./EditProfile.css";
import {staticUrl} from "../../App";

function EditProfile(props) {
  const {
    place,
    name1,
    editProfile,
    myProfile,
    personalInformation,
    firstName,
    name2,
    lastName,
    surname,
    phoneNumber,
    emailAddress,
    yourNameEmailCom,
    changePassword,
    bankAccount,
    routingNumber,
    placeholder1,
    accountNumber,
    placeholder2,
    cryptoAccount,
    cryptoAddress,
    placeholder3,
    cardsicle,
    company,
    sellGiftCards,
    buyGiftCards,
    aboutUs,
    refundAndCancellationPolicy,
    faq,
    partnersProgram,
    contactingUs,
    ifYouHaveAnyQues,
    privacyPolicy,
    termsConditions,
    supportCardsicleCom,
    header3Props,
    group8115Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="edit-profile screen">
        <Header3 className={header3Props.className} />
        <FlexRow>
          <FlexCol>
            <OverlapGroup10>
              <Place>{place}</Place>
            </OverlapGroup10>
            <Name>{name1}</Name>
            <OverlapGroup2>
              <VueSaxOutLineEdit2 src={staticUrl + "/img/vuesax-outline-edit-2@2x.svg"} />
              <EditProfile1>{editProfile}</EditProfile1>
              <Rectangle359 />
            </OverlapGroup2>
          </FlexCol>
          <FlexCol1>
            <MyProfile>{myProfile}</MyProfile>
            <Rectangle342 />
            <PersonalInformation>{personalInformation}</PersonalInformation>
            <FlexRow1>
              <FirstName>{firstName}</FirstName>
              <OverlapGroup3>
                <Name1>{name2}</Name1>
                <Rectangle72 />
              </OverlapGroup3>
            </FlexRow1>
            <FlexRow2>
              <LastName>{lastName}</LastName>
              <OverlapGroup4>
                <Name1>{surname}</Name1>
                <Rectangle72 />
              </OverlapGroup4>
            </FlexRow2>
            <FlexRow3>
              <PhoneNumber>{phoneNumber}</PhoneNumber>
              <OverlapGroup5>
                <Group8115 className={group8115Props.className} />
                <Rectangle72 />
              </OverlapGroup5>
            </FlexRow3>
          </FlexCol1>
        </FlexRow>
        <FlexCol2>
          <FlexRow4>
            <EmailAddress>{emailAddress}</EmailAddress>
            <OverlapGroup6>
              <YourNameEmailCom>{yourNameEmailCom}</YourNameEmailCom>
            </OverlapGroup6>
          </FlexRow4>
          <FlexRow5>
            <ChangePassword>{changePassword}</ChangePassword>
            <Group8122>
              <Group8121 src={staticUrl + "/img/group-8098@2x.svg"} />
            </Group8122>
          </FlexRow5>
          <Border />
          <BankAccount>{bankAccount}</BankAccount>
          <FlexRow6>
            <RoutingNumber>{routingNumber}</RoutingNumber>
            <OverlapGroup7>
              <Placeholder>{placeholder1}</Placeholder>
            </OverlapGroup7>
          </FlexRow6>
          <FlexRow7>
            <AccountNumber>{accountNumber}</AccountNumber>
            <OverlapGroup8>
              <Placeholder>{placeholder2}</Placeholder>
            </OverlapGroup8>
          </FlexRow7>
          <Border1 />
          <CryptoAccount>{cryptoAccount}</CryptoAccount>
          <FlexRow6>
            <CryptoAddress>{cryptoAddress}</CryptoAddress>
            <OverlapGroup9>
              <Placeholder>{placeholder3}</Placeholder>
            </OverlapGroup9>
          </FlexRow6>
          <OverlapGroup>
            <Cardsicle>{cardsicle}</Cardsicle>
            <Group68>
              <Company>{company}</Company>
              <SellGiftCards>{sellGiftCards}</SellGiftCards>
              <BuyGiftCards>{buyGiftCards}</BuyGiftCards>
              <BuyGiftCards>{aboutUs}</BuyGiftCards>
              <RefundAndCancellationPolicy>{refundAndCancellationPolicy}</RefundAndCancellationPolicy>
              <FAQ>{faq}</FAQ>
              <FAQ>{partnersProgram}</FAQ>
            </Group68>
            <OverlapGroup1>
              <Group200>
                <Company>{contactingUs}</Company>
                <IfYouHaveAnyQues>{ifYouHaveAnyQues}</IfYouHaveAnyQues>
                <FlexRow8>
                  <PrivacyPolicy>{privacyPolicy}</PrivacyPolicy>
                  <TermsConditions>{termsConditions}</TermsConditions>
                </FlexRow8>
              </Group200>
              <SupportCardsicleCom>{supportCardsicleCom}</SupportCardsicleCom>
            </OverlapGroup1>
          </OverlapGroup>
        </FlexCol2>
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 287px;
  margin-top: 59px;
  margin-right: 190px;
  display: flex;
  align-items: flex-start;
  min-width: 888px;
`;

const FlexCol = styled.div`
  width: 152px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 267px;
`;

const OverlapGroup10 = styled.div`
  height: 150px;
  margin-right: 2px;
  display: flex;
  padding: 63px 45px;
  align-items: flex-start;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const Place = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx16px}
            height: 21px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const Placeholder = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalSonicSilver16px}
            height: 21px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const Name = styled.div`
  ${InterSemiBoldBlack22px}
  min-height: 27px;
  margin-top: 19px;
  margin-left: 1px;
  min-width: 119px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  width: 143px;
  height: 50px;
  position: relative;
  margin-top: 21px;
  margin-left: 5px;
  border-radius: 8px;
`;

const VueSaxOutLineEdit2 = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 13px;
  left: 109px;
`;

const EditProfile1 = styled.div`
  ${InterMediumOnyx16px}
  position: absolute;
  top: 10px;
  left: 16px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Rectangle359 = styled.div`
  ${Border1pxAthensGray}
  position: absolute;
  width: 143px;
  height: 50px;
  top: 0;
  left: 0;
  border-radius: 8px;
`;

const FlexCol1 = styled.div`
  width: 592px;
  margin-left: 144px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 287px;
`;

const MyProfile = styled.div`
  ${InterSemiBoldBlack18px}
  margin-bottom: -3px;
  min-height: 27px;
  margin-left: 4px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Rectangle342 = styled.div`
  width: 88px;
  height: 2px;
  margin-top: 11px;
  margin-left: 4px;
  background-color: var(--onyx);
  opacity: 0.8;
`;

const PersonalInformation = styled.div`
  ${InterBoldBlack22px}
  min-height: 27px;
  margin-top: 49px;
  letter-spacing: 0;
`;

const FlexRow1 = styled.div`
  margin-top: 23px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  min-width: 588px;
`;

const FirstName = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  margin-bottom: 2px;
  min-width: 95px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
  margin-left: 91px;
  border-radius: 4px;
`;

const Name1 = styled.div`
  ${InterNormalSonicSilver16px}
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

const FlexRow2 = styled.div`
  margin-top: 14px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  min-width: 588px;
`;

const LastName = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  margin-bottom: 2px;
  min-width: 93px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
  margin-left: 93px;
  border-radius: 4px;
`;

const FlexRow3 = styled.div`
  margin-top: 14px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  min-width: 586px;
`;

const PhoneNumber = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  margin-bottom: 2px;
  min-width: 130px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup5 = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
  margin-left: 56px;
  border-radius: 4px;
`;

const FlexCol2 = styled.div`
  width: 1442px;
  margin-top: 14px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 978px;
`;

const FlexRow4 = styled.div`
  margin-left: 108px;
  display: flex;
  align-items: center;
  min-width: 588px;
`;

const EmailAddress = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  margin-bottom: 2px;
  min-width: 124px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup6 = styled.div`
  ${Border1pxCeleste}
  height: 40px;
  margin-left: 62px;
  display: flex;
  padding: 11px 15px;
  align-items: flex-start;
  min-width: 400px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

const YourNameEmailCom = styled.div`
  ${InterNormalSonicSilver16px}
  min-height: 16px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const FlexRow5 = styled.div`
  margin-top: 14px;
  margin-left: 106px;
  display: flex;
  align-items: center;
  min-width: 586px;
`;

const ChangePassword = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  margin-bottom: 2px;
  min-width: 158px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Group8122 = styled.div`
  ${Border1pxCeleste}
  height: 40px;
  margin-left: 28px;
  display: flex;
  padding: 16px 15px;
  align-items: flex-start;
  min-width: 400px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

const Group8121 = styled.img`
  width: 151px;
  height: 7px;
`;

const Border = styled.div`
  width: 627px;
  height: 1px;
  margin-top: 17px;
  margin-left: 147px;
  background-color: var(--mist-gray);
  opacity: 0.7;
`;

const BankAccount = styled.div`
  ${InterBoldOnyx22px}
  min-height: 27px;
  margin-top: 29px;
  margin-right: 329px;
  min-width: 151px;
  letter-spacing: 0;
`;

const FlexRow6 = styled.div`
  margin-top: 23px;
  margin-left: 108px;
  display: flex;
  align-items: center;
  min-width: 588px;
`;

const RoutingNumber = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  margin-bottom: 2px;
  min-width: 142px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup7 = styled.div`
  ${Border1pxCeleste}
  height: 40px;
  margin-left: 44px;
  display: flex;
  padding: 9px 15px;
  align-items: flex-start;
  min-width: 400px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

const FlexRow7 = styled.div`
  margin-top: 14px;
  margin-left: 108px;
  display: flex;
  align-items: center;
  min-width: 588px;
`;

const AccountNumber = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  margin-bottom: 2px;
  min-width: 148px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup8 = styled.div`
  ${Border1pxCeleste}
  height: 40px;
  margin-left: 38px;
  display: flex;
  padding: 9px 15px;
  align-items: flex-start;
  min-width: 400px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

const Border1 = styled.div`
  width: 627px;
  height: 1px;
  margin-top: 17px;
  margin-left: 145px;
  background-color: var(--mist-gray);
  opacity: 0.7;
`;

const CryptoAccount = styled.div`
  ${InterBoldOnyx22px}
  min-height: 27px;
  margin-top: 29px;
  margin-right: 309px;
  min-width: 171px;
  letter-spacing: 0;
`;

const CryptoAddress = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  margin-bottom: 2px;
  min-width: 138px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup9 = styled.div`
  ${Border1pxCeleste}
  height: 40px;
  margin-left: 48px;
  display: flex;
  padding: 9px 15px;
  align-items: flex-start;
  min-width: 400px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

const OverlapGroup = styled.div`
  height: 470px;
  margin-top: 86px;
  margin-right: 2px;
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

const OverlapGroup1 = styled.div`
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

const FlexRow8 = styled.div`
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

export default EditProfile;
