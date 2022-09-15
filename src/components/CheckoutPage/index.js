import React from "react";
import Header3 from "../Header3";
import Footer from "../Footer";
import styled from "styled-components";
import {
  InterMediumOnyx16px,
  Border1pxCeleste,
  InterNormalOnyx14px,
  Border1pxOnyx,
  InterSemiBoldOnyx22px,
  InterNormalNobel16px,
  InterSemiBoldWhite14px,
  InterMediumBlack16px,
  InterMediumNobel16px,
  InterSemiBoldOnyx14px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./CheckoutPage.css";
import {staticUrl} from "../../App";

function CheckoutPage(props) {
  const {
    checkout,
    card1,
    price1,
    loremIpsumDolorSitAmet1,
    card2,
    price2,
    loremIpsumDolorSitAmet2,
    total,
    personalDetails,
    fullName,
    name,
    billingAddress,
    city,
    zipCode,
    place1,
    number,
    country,
    place2,
    creditCardDetails,
    nameOnCard,
    enterNameOnCard,
    cardNumber,
    enterCardNumber,
    expirationDate,
    price3,
    mm,
    text8,
    yy,
    cvc1,
    cvc2,
    label1,
    label2,
    header3Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="checkout-page screen">
        <FlexCol>
          <Header3 className={header3Props.className} />
          <FlexRow>
            <FlexCol1>
              <Checkout>{checkout}</Checkout>
              <Border />
              <FlexRow1>
                <Card1>{card1}</Card1>
                <Price>{price1}</Price>
              </FlexRow1>
              <LoremIpsumDolorSitAmet>{loremIpsumDolorSitAmet1}</LoremIpsumDolorSitAmet>
              <FlexRow2>
                <Card2>{card2}</Card2>
                <Price1>{price2}</Price1>
              </FlexRow2>
              <LoremIpsumDolorSitAmet1>{loremIpsumDolorSitAmet2}</LoremIpsumDolorSitAmet1>
              <Border1 />
              <FlexRow3>
                <FlexCol2>
                  <Total>{total}</Total>
                  <PersonalDetails>{personalDetails}</PersonalDetails>
                  <FullName>{fullName}</FullName>
                  <OverlapGroup3>
                    <Name>{name}</Name>
                    <Rectangle72 />
                  </OverlapGroup3>
                  <BillingAddress>{billingAddress}</BillingAddress>
                  <OverlapGroup3>
                    <IconLocationPin src={staticUrl + "/img/akar-icons-location@2x.svg"} />
                    <Rectangle72 />
                  </OverlapGroup3>
                  <FlexRow4>
                    <City>{city}</City>
                    <ZIPCode>{zipCode}</ZIPCode>
                  </FlexRow4>
                  <OverlapGroupContainer>
                    <OverlapGroup11>
                      <Place>{place1}</Place>
                    </OverlapGroup11>
                    <OverlapGroup9>
                      <Place>{number}</Place>
                    </OverlapGroup9>
                  </OverlapGroupContainer>
                  <Country>{country}</Country>
                  <OverlapGroup3>
                    <Name>{place2}</Name>
                    <Rectangle72 />
                    <IconLocationPin src={staticUrl + "/img/ic-chevron-2@2x.svg"} />
                  </OverlapGroup3>
                  <CreditCardDetails>{creditCardDetails}</CreditCardDetails>
                  <FullName>{nameOnCard}</FullName>
                  <OverlapGroup3>
                    <Name>{enterNameOnCard}</Name>
                    <Rectangle72 />
                  </OverlapGroup3>
                  <CardNumber>{cardNumber}</CardNumber>
                  <OverlapGroup3>
                    <EnterCardNumber>{enterCardNumber}</EnterCardNumber>
                    <Rectangle72 />
                  </OverlapGroup3>
                  <ExpirationDate>{expirationDate}</ExpirationDate>
                </FlexCol2>
                <Price2>{price3}</Price2>
              </FlexRow3>
            </FlexCol1>
            <ImagePlaceholder src={staticUrl + "/img/image-placeholder-5@1x.svg"} />
          </FlexRow>
        </FlexCol>
        <FlexRow5>
          <OverlapGroup5>
            <MM>{mm}</MM>
            <Group8076 />
          </OverlapGroup5>
          <Text8>{text8}</Text8>
          <OverlapGroup6>
            <YY>{yy}</YY>
            <Group8076 />
          </OverlapGroup6>
        </FlexRow5>
        <CVC>{cvc1}</CVC>
        <Group8130>
          <OverlapGroup7>
            <Place>{cvc2}</Place>
          </OverlapGroup7>
        </Group8130>
        <ButtonContainer>
          <Button>
            <Label>{label1}</Label>
          </Button>
          <Button1>
            <Label1>{label2}</Label1>
          </Button1>
        </ButtonContainer>
        <Footer className={footerProps.className} />
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 1312px;
  position: relative;
  align-self: center;
  margin-top: 56px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1319px;
`;

const FlexRow = styled.div`
  height: 1087px;
  margin-top: 99px;
  margin-left: 49px;
  display: flex;
  align-items: flex-start;
  min-width: 1139px;
`;

const FlexCol1 = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1087px;
`;

const Checkout = styled.div`
  ${InterSemiBoldOnyx22px}
  min-height: 31px;
  min-width: 105px;
  text-align: center;
  letter-spacing: 0.22px;
  line-height: 31px;
  white-space: nowrap;
`;

const Border = styled.div`
  width: 449px;
  height: 1px;
  margin-top: 15px;
  background-color: var(--mist-gray);
  opacity: 0.7;
`;

const FlexRow1 = styled.div`
  ${InterMediumBlack16px}
  height: 24px;
  margin-top: 9px;
  display: flex;
  align-items: center;
  min-width: 449px;
`;

const Card1 = styled.div`
  min-height: 16px;
  margin-top: 2px;
  min-width: 49px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Price = styled.div`
  min-height: 24px;
  margin-left: 361px;
  min-width: 39px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const LoremIpsumDolorSitAmet = styled.p`
  ${InterNormalOnyx14px}
  min-height: 21px;
  margin-top: 5px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const FlexRow2 = styled.div`
  ${InterMediumBlack16px}
  height: 24px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  min-width: 449px;
`;

const Card2 = styled.div`
  min-height: 16px;
  min-width: 51px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Price1 = styled.div`
  width: 41px;
  min-height: 24px;
  margin-left: 357px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const LoremIpsumDolorSitAmet1 = styled.p`
  ${InterNormalOnyx14px}
  min-height: 21px;
  margin-top: 4px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const Border1 = styled.div`
  width: 449px;
  height: 1px;
  margin-top: 16px;
  background-color: var(--mist-gray);
  opacity: 0.7;
`;

const FlexRow3 = styled.div`
  height: 889px;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  min-width: 450px;
`;

const FlexCol2 = styled.div`
  width: 402px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 885px;
`;

const Total = styled.div`
  ${InterMediumBlack16px}
  min-height: 16px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Place = styled.div`
  ${InterMediumNobel16px}
  min-height: 16px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const PersonalDetails = styled.div`
  ${InterSemiBoldOnyx22px}
  min-height: 31px;
  margin-top: 100px;
  margin-left: 1px;
  min-width: 181px;
  text-align: center;
  letter-spacing: 0.22px;
  line-height: 31px;
  white-space: nowrap;
`;

const FullName = styled.div`
  ${InterMediumOnyx16px}
  min-height: 16px;
  margin-top: 30px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  width: 400px;
  height: 40px;
  position: relative;
  margin-top: 11px;
  border-radius: 4px;
`;

const Name = styled.div`
  ${InterNormalNobel16px}
  position: absolute;
  top: 9px;
  left: 16px;
  letter-spacing: 0.16px;
  line-height: 22.5px;
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

const BillingAddress = styled.div`
  ${InterMediumOnyx16px}
  min-height: 16px;
  margin-top: 24px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const IconLocationPin = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  left: 366px;
`;

const FlexRow4 = styled.div`
  ${InterMediumOnyx16px}
  height: 16px;
  margin-top: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 219px;
`;

const City = styled.div`
  min-height: 16px;
  min-width: 31px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const ZIPCode = styled.div`
  min-height: 16px;
  margin-left: 118px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const OverlapGroupContainer = styled.div`
  margin-top: 11px;
  display: flex;
  align-items: flex-start;
  min-width: 266px;
`;

const OverlapGroup11 = styled.div`
  ${Border1pxCeleste}
  height: 40px;
  display: flex;
  padding: 10px 15px;
  align-items: flex-start;
  min-width: 118px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

const OverlapGroup9 = styled.div`
  ${Border1pxCeleste}
  height: 40px;
  margin-left: 30px;
  display: flex;
  padding: 10px 15px;
  align-items: flex-start;
  min-width: 118px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

const Country = styled.div`
  ${InterMediumOnyx16px}
  min-height: 16px;
  margin-top: 19px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const CreditCardDetails = styled.div`
  ${InterSemiBoldOnyx22px}
  min-height: 31px;
  margin-top: 99px;
  min-width: 206px;
  text-align: center;
  letter-spacing: 0.22px;
  line-height: 31px;
  white-space: nowrap;
`;

const CardNumber = styled.div`
  ${InterMediumOnyx16px}
  min-height: 16px;
  margin-top: 34px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const EnterCardNumber = styled.div`
  position: absolute;
  top: 8px;
  left: 16px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: #b4b1b1;
  font-size: var(--font-size-m);
  letter-spacing: 0.16px;
  line-height: 22.5px;
  white-space: nowrap;
`;

const ExpirationDate = styled.div`
  ${InterMediumOnyx16px}
  min-height: 16px;
  margin-top: 34px;
  margin-left: 1px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Price2 = styled.div`
  ${InterMediumBlack16px}
  min-height: 24px;
  margin-left: 6px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const ImagePlaceholder = styled.img`
  width: 554px;
  height: 345px;
  margin-left: 135px;
  margin-top: 94px;
`;

const FlexRow5 = styled.div`
  margin-top: 11px;
  margin-left: 181px;
  display: flex;
  align-items: center;
  min-width: 268px;
`;

const OverlapGroup5 = styled.div`
  width: 118px;
  height: 40px;
  position: relative;
  border-radius: 4px;
`;

const MM = styled.div`
  ${InterNormalNobel16px}
  position: absolute;
  top: 8px;
  left: 16px;
  letter-spacing: 0.16px;
  line-height: 22.5px;
  white-space: nowrap;
`;

const Group8076 = styled.div`
  ${Border1pxCeleste}
  position: absolute;
  width: 118px;
  height: 40px;
  top: 0;
  left: 0;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

const Text8 = styled.div`
  ${InterMediumOnyx16px}
  min-height: 16px;
  margin-left: 12px;
  margin-bottom: 2px;
  min-width: 6px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const OverlapGroup6 = styled.div`
  width: 118px;
  height: 40px;
  position: relative;
  margin-left: 12px;
  border-radius: 4px;
`;

const YY = styled.div`
  ${InterMediumNobel16px}
  position: absolute;
  top: 12px;
  left: 16px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const CVC = styled.div`
  ${InterMediumOnyx16px}
  min-height: 16px;
  margin-top: 29px;
  margin-left: 182px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Group8130 = styled.div`
  margin-top: 21px;
  margin-left: 181px;
  display: flex;
  align-items: flex-start;
  min-width: 120px;
`;

const OverlapGroup7 = styled.div`
  ${Border1pxCeleste}
  height: 40px;
  display: flex;
  padding: 11px 15px;
  align-items: flex-start;
  min-width: 118px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px #cccccc1a;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  margin-left: 181px;
  display: flex;
  align-items: flex-start;
  min-width: 400px;
`;

const Button = styled.div`
  ${Border1pxOnyx}
  height: 55px;
  display: flex;
  padding: 17px 71px;
  align-items: flex-start;
  min-width: 181px;
  border-radius: 12px;
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldOnyx14px}
            height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Label1 = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldWhite14px}
            height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Button1 = styled.div`
  height: 55px;
  margin-left: 25px;
  display: flex;
  padding: 17px 64px;
  align-items: flex-start;
  min-width: 194px;
  background-color: var(--granite-gray);
  border-radius: 12px;
`;

export default CheckoutPage;
