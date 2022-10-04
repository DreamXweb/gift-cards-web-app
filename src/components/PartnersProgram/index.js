import React from "react";
import Header from "../Header";
import Group8075 from "../Group8075";
import styled from "styled-components";
import {
  InterNormalSilverSand16px,
  InterSemiBoldOnyx24px,
  InterMediumOnyx16px,
  Border1pxCeleste,
  InterNormalOnyx12px,
  InterSemiBoldWhite14px,
  InterNormalOnyx16px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./PartnersProgram.css";
import Footer from "../Footer";

function PartnersProgram(props) {
  const {
    ifYouOrYourCompany,
    benefitsOfPartnerProgram,
    fasterPayout,
    higherPercentages,
    priorityCustomerService,
    applicationSubmission,
    lastName,
    surname,
    companyName,
    enterCompanyName,
    address,
    enterAddress,
    emailAddress,
    yourNameEmailCom1,
    messageBox,
    yourNameEmailCom2,
    phoneNumber,
    text1,
    number1,
    number2,
    number3,
    whenApplyingYouAr,
    place,
    group8080,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="partners-program screen">
        <Header />
        <IfYouOrYourCompany>{ifYouOrYourCompany}</IfYouOrYourCompany>
        <BenefitsOfPartnerProgram>{benefitsOfPartnerProgram}</BenefitsOfPartnerProgram>
        <OverlapGroupContainer>
          <FastContainer>
            <MdiCashFast src="https://anima-uploads.s3.amazonaws.com/projects/62c832c763ed96b1e323f642/releases/62cc27526b051dbe83bc63ff/img/mdi-cash-fast@2x.svg" />
            <FasterPayout>{fasterPayout}</FasterPayout>
          </FastContainer>
          <PercentContainer>
            <MdiCashFast src="https://anima-uploads.s3.amazonaws.com/projects/62c832c763ed96b1e323f642/releases/62cc27526b051dbe83bc63ff/img/ic-baseline-percent@2x.svg" />
            <HigherPercentages>{higherPercentages}</HigherPercentages>
          </PercentContainer>
          <CustomerContainer>
            <MdiCashFast src="https://anima-uploads.s3.amazonaws.com/projects/62c832c763ed96b1e323f642/releases/62cc27526b051dbe83bc63ff/img/ri-customer-service-2-line@2x.svg" />
            <PriorityCustomerService>{priorityCustomerService}</PriorityCustomerService>
          </CustomerContainer>
        </OverlapGroupContainer>
        <Title>{applicationSubmission}</Title>
        <Group8075 />
        <GroupContainer>
          <Group8076>
            <LastName>{lastName}</LastName>
            <OverlapGroup>
              <Surname>{surname}</Surname>
              <Rectangle72 />
            </OverlapGroup>
            <CompanyName>{companyName}</CompanyName>
            <OverlapGroup>
              <Surname>{enterCompanyName}</Surname>
              <Rectangle72 />
            </OverlapGroup>
            <CompanyName>{address}</CompanyName>
            <OverlapGroup>
              <Surname>{enterAddress}</Surname>
              <Rectangle72 />
            </OverlapGroup>
            <EmailAddress>{emailAddress}</EmailAddress>
            <OverlapGroup>
              <Surname>{yourNameEmailCom1}</Surname>
              <Rectangle72 />
            </OverlapGroup>
            <MessageBox>{messageBox}</MessageBox>
            <OverlapGroup4>
              <Surname>{yourNameEmailCom2}</Surname>
              <Rectangle72 />
            </OverlapGroup4>
          </Group8076>
          <Group8139>
            <PhoneNumber>{phoneNumber}</PhoneNumber>
            <OverlapGroup4>
              <Text1>{text1}</Text1>
              <Number>{number1}</Number>
              <Number1>{number2}</Number1>
              <Number2>{number3}</Number2>
              <Rectangle74 />
              <Rectangle75 />
              <IcChevron src="https://anima-uploads.s3.amazonaws.com/projects/62c832c763ed96b1e323f642/releases/62c834a54787cdaec3d8b7b7/img/ic-chevron-1@2x.svg" />
            </OverlapGroup4>
          </Group8139>
        </GroupContainer>
        <FormElements>
          <FlexRow>
            <Rectangle2 />
            <WhenApplyingYouAr>{whenApplyingYouAr}</WhenApplyingYouAr>
            <Icon src="https://anima-uploads.s3.amazonaws.com/projects/62c832c763ed96b1e323f642/releases/62cc27526b051dbe83bc63ff/img/icon@2x.svg" />
          </FlexRow>
          <Button>
            <Place>{place}</Place>
          </Button>
        </FormElements>
        <Footer />
        <Group8080 src={group8080} />
      </div>
    </div>
  );
}

const IfYouOrYourCompany = styled.div`
  ${ValignTextMiddle}
  width: 660px;
  height: 72px;
  margin-top: 100px;
  font-family: var(--font-family-inter);
  font-weight: 500;
  color: var(--onyx);
  font-size: var(--font-size-l2);
  text-align: center;
  letter-spacing: 0;
  line-height: 36px;
`;

const BenefitsOfPartnerProgram = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldOnyx24px}
            height: 29px;
  margin-top: 93px;
  min-width: 324px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroupContainer = styled.div`
  height: 305px;
  margin-top: 80px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 1140px;
`;

const FastContainer = styled.div`
  width: 334px;
  display: flex;
  flex-direction: column;
  padding: 60px 87px;
  align-items: flex-end;
  min-height: 305px;
  background-color: var(--gray-nurse);
  border-radius: 10px;
`;

const MdiCashFast = styled.img`
  width: 73px;
  height: 73px;
  align-self: center;
  margin-left: 1px;
`;

const FasterPayout = styled.div`
  ${InterSemiBoldOnyx24px}
  min-height: 32px;
  margin-top: 30px;
  min-width: 159px;
  letter-spacing: -0.1px;
  line-height: 32px;
  white-space: nowrap;
`;

const PercentContainer = styled.div`
  width: 334px;
  margin-left: 68px;
  display: flex;
  flex-direction: column;
  padding: 60px 52px;
  align-items: flex-end;
  min-height: 305px;
  background-color: var(--gray-nurse);
  border-radius: 10px;
`;

const HigherPercentages = styled.div`
  ${InterSemiBoldOnyx24px}
  min-height: 32px;
  margin-top: 30px;
  min-width: 229px;
  letter-spacing: -0.1px;
  line-height: 32px;
  white-space: nowrap;
`;

const CustomerContainer = styled.div`
  width: 334px;
  margin-left: 68px;
  display: flex;
  flex-direction: column;
  padding: 60px 39px;
  align-items: flex-start;
  min-height: 305px;
  background-color: var(--gray-nurse);
  border-radius: 10px;
`;

const PriorityCustomerService = styled.div`
  ${InterSemiBoldOnyx24px}
  width: 255px;
  min-height: 64px;
  margin-top: 30px;
  text-align: center;
  letter-spacing: -0.1px;
  line-height: 32px;
`;

const Title = styled.h1`
  min-height: 32px;
  margin-top: 99px;
  margin-left: 1px;
  min-width: 441px;
  font-family: var(--font-family-inter);
  font-weight: 500;
  color: var(--black);
  font-size: var(--font-size-xl2);
  text-align: center;
  letter-spacing: -0.1px;
  line-height: 32px;
  white-space: nowrap;
`;

const GroupContainer = styled.div`
  width: 411px;
  height: 539px;
  position: relative;
  margin-top: 25px;
  margin-left: 9px;
`;

const Group8076 = styled.div`
  position: absolute;
  width: 411px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 539px;
`;

const LastName = styled.div`
  ${InterMediumOnyx16px}
  min-height: 24px;
  margin-left: 1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
  margin-top: 5px;
  margin-left: 1px;
  border-radius: 4px;
`;

const Surname = styled.div`
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

const CompanyName = styled.div`
  ${InterMediumOnyx16px}
  min-height: 24px;
  margin-top: 25px;
  margin-left: 1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const EmailAddress = styled.div`
  ${InterMediumOnyx16px}
  min-height: 24px;
  margin-top: 119px;
  margin-left: 1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const MessageBox = styled.div`
  ${InterMediumOnyx16px}
  min-height: 24px;
  margin-top: 25px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
  margin-top: 5px;
  border-radius: 4px;
`;

const Group8139 = styled.div`
  position: absolute;
  width: 410px;
  top: 282px;
  left: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 69px;
`;

const PhoneNumber = styled.div`
  ${InterMediumOnyx16px}
  min-height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
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

const Rectangle75 = styled.div`
  position: absolute;
  width: 19px;
  height: 14px;
  top: 13px;
  left: 16px;
  background-color: var(--celeste);
  border-radius: 4px;
`;

const IcChevron = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 12px;
  left: 38px;
`;

const FormElements = styled.div`
  width: 402px;
  margin-top: 47px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 115px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  min-width: 535px;
`;

const Rectangle2 = styled.div`
  width: 15px;
  height: 15px;
  margin-bottom: 7px;
  background-color: var(--celeste);
  border-radius: 2px;
`;

const WhenApplyingYouAr = styled.p`
  ${ValignTextMiddle}
  ${InterNormalOnyx12px}
            width: 302px;
  height: 30px;
  margin-left: 10px;
  letter-spacing: 0;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 193px;
  margin-bottom: 7px;
`;

const Button = styled.div`
  height: 55px;
  margin-top: 30px;
  display: flex;
  padding: 18px 180px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 400px;
  background-color: var(--granite-gray);
  border-radius: 12px;
`;

const Place = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldWhite14px}
            height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Group8080 = styled.img`
  width: 16px;
  height: 40px;
  margin-top: 270px;
  margin-right: 680px;
`;

export default PartnersProgram;
