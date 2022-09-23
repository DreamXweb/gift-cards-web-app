import React from "react";
import Group8115 from "../Group8115";
import styled from "styled-components";
import {
  InterMediumOnyx16px,
  Border1pxCeleste,
  InterBoldOnyx22px,
  InterSemiBoldOnyx18px,
  InterSemiBoldBlack18px,
  InterNormalSonicSilver16px,
  InterBoldBlack22px,
  MulishNormalSonicSilver16px,
  InterSemiBoldWhite14px,
  InterSemiBoldBlack22px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./EditProfile.css";
import Header from "../Header";
import App from "../../App";
import Footer from "../Footer";

function EditProfile(props) {
  const {
    place,
    name1,
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
  } = props;

  return (
      <div className="container-center-horizontal">
        <div className="edit-profile screen">
          <Header />
          <FlexRow>
            <FlexCol>
              <OverlapGroup9>
                <Place>{place}</Place>
              </OverlapGroup9>
              <Name>{name1}</Name>
            </FlexCol>
            <FlexCol1>
              <MyProfile>{myProfile}</MyProfile>
              <Rectangle342 />
              <PersonalInformation>{personalInformation}</PersonalInformation>
              <FlexRow1>
                <FirstName>{firstName}</FirstName>
                <OverlapGroup2>
                  <Name1>{name2}</Name1>
                  <Rectangle72 />
                </OverlapGroup2>
              </FlexRow1>
              <FlexRow2>
                <LastName>{lastName}</LastName>
                <OverlapGroup3>
                  <Name1>{surname}</Name1>
                  <Rectangle72 />
                </OverlapGroup3>
              </FlexRow2>
            </FlexCol1>
          </FlexRow>
          <FlexCol2>
            <FlexRow3>
              <PhoneNumber>{phoneNumber}</PhoneNumber>
              <OverlapGroup4>
                <Group8115 />
                <Rectangle72 />
              </OverlapGroup4>
            </FlexRow3>
            <FlexRow4>
              <EmailAddress>{emailAddress}</EmailAddress>
              <OverlapGroup5>
                <YourNameEmailCom>{yourNameEmailCom}</YourNameEmailCom>
              </OverlapGroup5>
            </FlexRow4>
            <FlexRow5>
              <ChangePassword>{changePassword}</ChangePassword>
              <Group8122>
                <Group8121 src="https://anima-uploads.s3.amazonaws.com/projects/62c832c763ed96b1e323f642/releases/62c834a54787cdaec3d8b7b7/img/group-8098@2x.svg" />
              </Group8122>
            </FlexRow5>
            <Border />
            <BankAccount>{bankAccount}</BankAccount>
            <FlexRow6>
              <RoutingNumber>{routingNumber}</RoutingNumber>
              <OverlapGroup6>
                <Placeholder>{placeholder1}</Placeholder>
              </OverlapGroup6>
            </FlexRow6>
            <FlexRow4>
              <AccountNumber>{accountNumber}</AccountNumber>
              <OverlapGroup7>
                <Placeholder>{placeholder2}</Placeholder>
              </OverlapGroup7>
            </FlexRow4>
            <Border1 />
            <CryptoAccount>{cryptoAccount}</CryptoAccount>
            <FlexRow6>
              <CryptoAddress>{cryptoAddress}</CryptoAddress>
              <OverlapGroup8>
                <Placeholder>{placeholder3}</Placeholder>
              </OverlapGroup8>
            </FlexRow6>
            <FlexRow6>
              <Button onClick={() => window.location = App.homepage + '/payout-method'}>
                <Label>CONFIGURE PAYMENT METHOD</Label>
              </Button>
              <Button onClick={() => window.location = App.homepage + '/user-profile'}>
                <Label>SAVE</Label>
              </Button>
            </FlexRow6>

            <Footer marginTop={150} />

          </FlexCol2>
        </div>
      </div>
  );
}

const FlexRow = styled.div`
  height: 233px;
  margin-top: 59px;
  margin-right: 190px;
  display: flex;
  align-items: flex-start;
  min-width: 888px;
`;

const FlexCol = styled.div`
  width: 150px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 196px;
`;

const OverlapGroup9 = styled.div`
  height: 150px;
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
  margin-left: 3px;
  min-width: 119px;
  letter-spacing: 0;
`;

const FlexCol1 = styled.div`
  width: 592px;
  margin-left: 146px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 233px;
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

const OverlapGroup2 = styled.div`
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

const OverlapGroup3 = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
  margin-left: 93px;
  border-radius: 4px;
`;

const FlexCol2 = styled.div`
  width: 1442px;
  margin-top: 14px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1157px;
`;

const FlexRow3 = styled.div`
  margin-left: 106px;
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

const OverlapGroup4 = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
  margin-left: 56px;
  border-radius: 4px;
`;

const FlexRow4 = styled.div`
  margin-top: 14px;
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

const OverlapGroup5 = styled.div`
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

const OverlapGroup6 = styled.div`
  height: 40px;
  margin-left: 44px;
  display: flex;
  padding: 9px 15px;
  align-items: flex-start;
  min-width: 400px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
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

const OverlapGroup7 = styled.div`
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

const OverlapGroup8 = styled.div`
  height: 40px;
  margin-left: 48px;
  display: flex;
  padding: 9px 15px;
  align-items: flex-start;
  min-width: 400px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

const Button = styled.div`
  height: 55px;
  margin-top: 60px;
  margin-right: 2px;
  display: flex;
  padding: 18px 78px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 194px;
  background-color: var(--granite-gray);
  border-radius: 12px;
  cursor: pointer;
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldWhite14px}
            height: 18px;
  min-width: 37px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default EditProfile;
