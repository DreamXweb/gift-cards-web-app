import React from "react";
import Group8115 from "../Group8115";
import styled from "styled-components";
import {
  InterMediumOnyx16px,
  InterBoldOnyx22px,
  ValignTextMiddle,
  InterSemiBoldOnyx18px,
  InterSemiBoldBlack18px,
  InterNormalSonicSilver16px,
  InterBoldBlack22px,
  MulishNormalSonicSilver16px,
  Border1pxAthensGray,
  InterSemiBoldBlack22px,
} from "../../styledMixins";
import "./UserProfile.css";
import App, {staticUrl} from "../../App";
import Header from "../Header";
import Footer from "../Footer";

function UserProfile(props) {
  const {
    name1,
    editProfile,
    myProfile2,
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
        <div className="user-profile screen">
          <OverlapGroup4>
            <Header />
          </OverlapGroup4>
          <FlexRow>
            <FlexCol>
              <Ellipse4 />
              <Name>{name1}</Name>
              <OverlapGroup2 onClick={() => window.location = App.homepage + '/edit-profile'}>
                <VueSaxOutLineEdit2 src={staticUrl + "/img/vuesax-outline-edit-2@2x.svg"} />
                <EditProfile>{editProfile}</EditProfile>
                <Rectangle359 />
              </OverlapGroup2>
            </FlexCol>
            <FlexCol1>
              <MyProfile1>{myProfile2}</MyProfile1>
              <Rectangle342 />
              <PersonalInformation>{personalInformation}</PersonalInformation>
              <NameContainer>
                <FirstName>{firstName}</FirstName>
                <Name1>{name2}</Name1>
              </NameContainer>
              <NameContainer>
                <LastName>{lastName}</LastName>
                <Surname>{surname}</Surname>
              </NameContainer>
              <FlexRow1>
                <PhoneNumber>{phoneNumber}</PhoneNumber>
                <Group8115 />
              </FlexRow1>
            </FlexCol1>
          </FlexRow>
          <FlexCol2>
            <EmailContainer>
              <EmailAddress>{emailAddress}</EmailAddress>
              <YourNameEmailCom>{yourNameEmailCom}</YourNameEmailCom>
            </EmailContainer>
            <FlexRow2>
              <ChangePassword>{changePassword}</ChangePassword>
              <Group8098 src={staticUrl + "/img/group-8098@2x.svg"} />
              <VueSaxOutLineEdit21 src={staticUrl + "/img/vuesax-outline-edit-2@2x.svg"} />
            </FlexRow2>
            <Border />
            <BankAccount>{bankAccount}</BankAccount>
            <FlexRow3>
              <RoutingNumber>{routingNumber}</RoutingNumber>
              <Placeholder>{placeholder1}</Placeholder>
            </FlexRow3>
            <FlexRow3>
              <AccountNumber>{accountNumber}</AccountNumber>
              <Placeholder1>{placeholder2}</Placeholder1>
            </FlexRow3>
            <Border1 />
            <CryptoAccount>{cryptoAccount}</CryptoAccount>
            <FlexRow4>
              <CryptoAddress>{cryptoAddress}</CryptoAddress>
              <Placeholder2>{placeholder3}</Placeholder2>
            </FlexRow4>

            <Footer marginTop={150} />

          </FlexCol2>
        </div>
      </div>
  );
}

const OverlapGroup4 = styled.div`
  width: 1312px;
  height: 141px;
  position: relative;
  align-self: center;
  margin-top: 56px;
  margin-left: 12px;
`;

const FlexRow = styled.div`
  height: 279px;
  margin-top: 51px;
  margin-left: 181px;
  display: flex;
  align-items: flex-start;
  min-width: 652px;
`;

const FlexCol = styled.div`
  width: 152px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 267px;
`;

const Ellipse4 = styled.div`
  width: 150px;
  height: 150px;
  margin-right: 2px;
  background-color: var(--concrete);
  border-radius: 75px;
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
  cursor: pointer;
`;

const VueSaxOutLineEdit2 = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 13px;
  left: 109px;
`;

const EditProfile = styled.div`
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
  width: 356px;
  margin-left: 144px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 279px;
`;

const MyProfile1 = styled.div`
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

const NameContainer = styled.div`
  height: 24px;
  margin-top: 30px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  min-width: 227px;
`;

const FirstName = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  min-width: 95px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Name1 = styled.div`
  min-height: 16px;
  margin-left: 91px;
  min-width: 39px;
  font-family: var(--font-family-inter);
  font-weight: 500;
  color: var(--sonic-silver);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const LastName = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  min-width: 93px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Surname = styled.div`
  ${InterNormalSonicSilver16px}
  min-height: 16px;
  margin-left: 93px;
  margin-top: 2px;
  min-width: 41px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const FlexRow1 = styled.div`
  height: 25px;
  position: relative;
  margin-top: 30px;
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 352px;
`;

const PhoneNumber = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  min-width: 130px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const FlexCol2 = styled.div`
  width: 1442px;
  margin-top: 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 971px;
`;

const EmailContainer = styled.div`
  height: 24px;
  margin-right: 127px;
  display: flex;
  align-items: center;
  min-width: 353px;
`;

const EmailAddress = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  min-width: 124px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const YourNameEmailCom = styled.div`
  ${InterNormalSonicSilver16px}
  min-height: 16px;
  margin-left: 62px;
  margin-top: 2px;
  min-width: 167px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const FlexRow2 = styled.div`
  height: 25px;
  margin-top: 30px;
  margin-right: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 461px;
`;

const ChangePassword = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  min-width: 158px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Group8098 = styled.img`
  width: 151px;
  height: 7px;
  align-self: center;
  margin-left: 28px;
  margin-top: 8px;
`;

const VueSaxOutLineEdit21 = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-end;
  margin-left: 100px;
`;

const Border = styled.div`
  width: 627px;
  height: 1px;
  margin-top: 25px;
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

const FlexRow3 = styled.div`
  height: 24px;
  margin-top: 30px;
  margin-right: 150px;
  display: flex;
  align-items: center;
  min-width: 330px;
`;

const RoutingNumber = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  min-width: 142px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Placeholder = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalSonicSilver16px}
            height: 21px;
  margin-left: 44px;
  margin-top: 1px;
  min-width: 144px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const AccountNumber = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  min-width: 148px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Placeholder1 = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalSonicSilver16px}
            height: 21px;
  margin-left: 38px;
  margin-top: 1px;
  min-width: 144px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const Border1 = styled.div`
  width: 627px;
  height: 1px;
  margin-top: 26px;
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

const FlexRow4 = styled.div`
  height: 26px;
  margin-top: 28px;
  margin-right: 145px;
  display: flex;
  align-items: flex-start;
  min-width: 335px;
`;

const CryptoAddress = styled.div`
  ${InterSemiBoldOnyx18px}
  min-height: 24px;
  align-self: flex-end;
  min-width: 138px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Placeholder2 = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalSonicSilver16px}
            height: 21px;
  margin-left: 53px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

export default UserProfile;
