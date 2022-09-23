import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import {
  InterMediumOnyx20px,
  InterBoldOnyx22px,
  Border1pxOnyx,
  InterSemiBoldBlack40px,
  InterBoldOnyx16px,
  Border1pxBlack,
  InterNormalBlack20px,
  InterNormalSonicSilver16px,
  InterSemiBoldOnyx40px,
  InterMediumConcrete20px,
  InterMediumOnyx18px,
  Border2pxSonicSilver2,
  InterMediumOnyx14px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./SellGiftCardsPage.css";
import {staticUrl} from "../../App";

function SellGiftCardsPage(props) {
  const {
    youFoundTheBestP,
    chooseFromTheMost,
    calculate,
    addCards,
    sellCard,
    buyCard,
    label1,
    label2,
    label3,
    number1,
    appleGiftCard,
    number2,
    popularRetailers,
    apple,
    x80Payout,
    amazon,
    x75Payout1,
    adidas,
    x60Payout1,
    americanExpress,
    x82Payout,
    airbnb,
    x60Payout2,
    surname,
    x75Payout2,
    sellGiftCardsOnlineFromTopBrands,
    weAcceptGiftCards,
    seeAvailableCards,
    footerProps,
  } = props;

  return (
      <div className="container-center-horizontal">
        <div className="sell-gift-cards-page screen">
          <Header />
          <Rectangle343 />
          <YouFoundTheBestP>{youFoundTheBestP}</YouFoundTheBestP>
          <ChooseFromTheMost>{chooseFromTheMost}</ChooseFromTheMost>
          <Group13>
            <OverlapGroup8>
              <OverlapGroup>
                <Calculate>{calculate}</Calculate>
              </OverlapGroup>
              <OverlapGroup1>
                <AddCards>{addCards}</AddCards>
              </OverlapGroup1>
              <SELLCARD>{sellCard}</SELLCARD>
              <BUYCARD>{buyCard}</BUYCARD>
              <Rectangle7 />
              <OverlapGroup2>
                <Line2 src={staticUrl + "/img/line-2@2x.svg"} />
              </OverlapGroup2>
              <Label>{label1}</Label>
              <Label1>{label2}</Label1>
              <Label2>{label3}</Label2>
              <Rectangle8 />
              <Rectangle9 />
              <Number>{number1}</Number>
              <Cursor />
              <IcSort src={staticUrl + "/img/ic-sort@2x.svg"} />
              <Rectangle10 />
              <IcChevron src={staticUrl + "/img/ic-chevron@2x.svg"} />
              <AppleGiftCard>{appleGiftCard}</AppleGiftCard>
              <Number1>{number2}</Number1>
            </OverlapGroup8>
          </Group13>
          <Group8085>
            <PopularRetailers>{popularRetailers}</PopularRetailers>
            <FlexRow>
              <FlexCol>
                <OverlapGroup7>
                  <Apple>{apple}</Apple>
                  <Vector src={staticUrl + "/img/vector-1@2x.svg"} />
                </OverlapGroup7>
                <X80Payout>{x80Payout}</X80Payout>
              </FlexCol>
              <FlexCol1>
                <OverlapGroup4>
                  <Amazon>{amazon}</Amazon>
                </OverlapGroup4>
                <X75Payout>{x75Payout1}</X75Payout>
              </FlexCol1>
              <FlexCol1>
                <OverlapGroup3>
                  <Adidas>{adidas}</Adidas>
                </OverlapGroup3>
                <X80Payout>{x60Payout1}</X80Payout>
              </FlexCol1>
              <FlexCol1>
                <OverlapGroup21>
                  <AmericanExpress>{americanExpress}</AmericanExpress>
                </OverlapGroup21>
                <X82Payout>{x82Payout}</X82Payout>
              </FlexCol1>
              <FlexCol1>
                <OverlapGroup3>
                  <AirBnb>{airbnb}</AirBnb>
                </OverlapGroup3>
                <X80Payout>{x60Payout2}</X80Payout>
              </FlexCol1>
              <FlexCol1>
                <OverlapGroup5>
                  <Surname>{surname}</Surname>
                </OverlapGroup5>
                <X82Payout>{x75Payout2}</X82Payout>
              </FlexCol1>
              <Vector1 src={staticUrl + "/img/vector@2x.svg"} />
            </FlexRow>
          </Group8085>
          <FlexRow1>
            <ImagePlaceholder src={staticUrl + "/img/image-placeholder-1@1x.svg"} />
            <Group8088>
              <SellGiftCardsOnlineFromTopBrands>{sellGiftCardsOnlineFromTopBrands}</SellGiftCardsOnlineFromTopBrands>
              <WeAcceptGiftCards>{weAcceptGiftCards}</WeAcceptGiftCards>
              <OverlapGroup6>
                <SeeAvailableCards>{seeAvailableCards}</SeeAvailableCards>
              </OverlapGroup6>
            </Group8088>
          </FlexRow1>
          <Footer className={footerProps.className} />
        </div>
      </div>
  );
}

const Rectangle343 = styled.div`
  width: 97px;
  height: 2px;
  margin-top: 10px;
  margin-right: 295px;
  background-color: var(--onyx);
  opacity: 0.8;
`;

const YouFoundTheBestP = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldOnyx40px}
            width: 660px;
  height: 96px;
  margin-top: 87px;
  text-align: center;
  letter-spacing: 0;
`;

const ChooseFromTheMost = styled.div`
  ${ValignTextMiddle}
  width: 403px;
  height: 60px;
  margin-top: 20px;
  margin-left: 1px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: var(--onyx);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
`;

const Group13 = styled.div`
  margin-top: 36px;
  margin-left: 17px;
  display: flex;
  align-items: flex-start;
  min-width: 923px;
`;

const OverlapGroup8 = styled.div`
  width: 1149px;
  height: 447px;
  position: relative;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 50px;
  top: 309px;
  left: 461px;
  display: flex;
  padding: 0 45px;
  align-items: center;
  min-width: 180px;
  background-color: var(--granite-gray);
  border-radius: 10px;
`;

const Calculate = styled.div`
  ${InterMediumConcrete20px}
  width: 90px;
  min-height: 22px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  height: 50px;
  top: 309px;
  left: 671px;
  display: flex;
  padding: 13px 37px;
  align-items: flex-start;
  min-width: 180px;
  border-radius: 10px;
`;

const AddCards = styled.div`
  ${InterMediumOnyx20px}
  width: 105px;
  min-height: 22px;
  letter-spacing: 0;
`;

const SELLCARD = styled.div`
  ${InterBoldOnyx22px}
  position: absolute;
  top: 70px;
  left: 56px;
  letter-spacing: 0;
`;

const BUYCARD = styled.div`
  ${InterBoldOnyx22px}
  position: absolute;
  top: 70px;
  left: 206px;
  letter-spacing: 0;
`;

const Rectangle7 = styled.div`
  ${Border2pxSonicSilver2}
  position: absolute;
  width: 907px;
  height: 447px;
  top: 0;
  left: 0;
  border-radius: 10px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  height: 1px;
  top: 116px;
  left: 379px;
  display: flex;
  align-items: flex-start;
  min-width: 770px;
  background-image: url(/img/line-1@1x.svg);
  background-size: 100% 100%;
`;

const Line2 = styled.img`
  width: 122px;
  height: 1px;
`;

const Label = styled.div`
  ${InterBoldOnyx16px}
  position: absolute;
  top: 156px;
  left: 56px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Label1 = styled.div`
  ${InterBoldOnyx16px}
  position: absolute;
  top: 156px;
  left: 461px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Label2 = styled.div`
  ${InterBoldOnyx16px}
  position: absolute;
  top: 267px;
  left: 56px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

// TODO cancel duplicated code
const Rectangle8 = styled.div`
  ${Border1pxOnyx}
  position: absolute;
  width: 365px;
  height: 50px;
  top: 198px;
  left: 56px;
  border-radius: 8px;
`;

const Rectangle9 = styled.div`
  ${Border1pxOnyx}
  position: absolute;
  width: 390px;
  height: 50px;
  top: 198px;
  left: 461px;
  border-radius: 8px;
`;

const Number = styled.div`
  ${InterNormalSonicSilver16px}
  position: absolute;
  top: 208px;
  left: 477px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Cursor = styled.div`
  position: absolute;
  width: 2px;
  height: 26px;
  top: 210px;
  left: 497px;
  background-color: var(--onyx);
`;

const IcSort = styled.img`
  position: absolute;
  width: 11px;
  height: 14px;
  top: 216px;
  left: 826px;
`;

const Rectangle10 = styled.div`
  ${Border1pxOnyx}
  position: absolute;
  width: 365px;
  height: 50px;
  top: 309px;
  left: 56px;
  border-radius: 8px;
`;

const IcChevron = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 211px;
  left: 383px;
`;

const AppleGiftCard = styled.div`
  ${InterNormalSonicSilver16px}
  position: absolute;
  top: 208px;
  left: 72px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Number1 = styled.div`
  ${InterNormalSonicSilver16px}
  position: absolute;
  top: 319px;
  left: 72px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Group8085 = styled.div`
  width: 1326px;
  margin-top: 160px;
  margin-left: 26px;
  display: flex;
  flex-direction: column;
  padding: 0 26px;
  align-items: flex-end;
  min-height: 312px;
`;

const PopularRetailers = styled.div`
  ${InterSemiBoldOnyx40px}
  min-height: 48px;
  align-self: center;
  margin-right: 27px;
  min-width: 329px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 194px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  min-width: 1250px;
`;

const FlexCol = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 194px;
`;

const OverlapGroup7 = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  background-image: url(/img/ellipse-2@2x.svg);
  background-size: 100% 100%;
`;

const Apple = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            position: absolute;
  height: 24px;
  top: 63px;
  left: 50px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Vector = styled.img`
  position: absolute;
  width: 34px;
  height: 16px;
  top: 67px;
  left: 54px;
`;

const X80Payout = styled.div`
  ${InterMediumOnyx14px}
  min-height: 30px;
  margin-top: 14px;
  min-width: 80px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const FlexCol1 = styled.div`
  width: 150px;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 194px;
`;

const OverlapGroup4 = styled.div`
  height: 150px;
  display: flex;
  padding: 0 39px;
  justify-content: flex-end;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const Amazon = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            height: 24px;
  min-width: 71px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const X75Payout = styled.div`
  ${InterMediumOnyx14px}
  min-height: 30px;
  margin-top: 14px;
  margin-left: 1px;
  min-width: 79px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  height: 150px;
  display: flex;
  padding: 0 45px;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const Adidas = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            height: 24px;
  min-width: 60px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup21 = styled.div`
  height: 150px;
  display: flex;
  padding: 0 32px;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const AmericanExpress = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            width: 86px;
  height: 48px;
  text-align: center;
  letter-spacing: 0.1px;
  line-height: 24px;
`;

const X82Payout = styled.div`
  ${InterMediumOnyx14px}
  min-height: 30px;
  margin-top: 14px;
  margin-right: 1px;
  min-width: 79px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const AirBnb = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            height: 24px;
  min-width: 59px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup5 = styled.div`
  height: 150px;
  display: flex;
  padding: 0 36px;
  justify-content: flex-end;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const Surname = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            height: 24px;
  min-width: 77px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Vector1 = styled.img`
  width: 34px;
  height: 16px;
  margin-left: 16px;
  margin-bottom: 44px;
`;

const FlexRow1 = styled.div`
  margin-top: 134px;
  margin-right: 107px;
  display: flex;
  align-items: flex-end;
  min-width: 1193px;
`;

const ImagePlaceholder = styled.img`
  width: 554px;
  height: 345px;
`;

const Group8088 = styled.div`
  width: 528px;
  margin-left: 111px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 344px;
`;

const SellGiftCardsOnlineFromTopBrands = styled.div`
  ${InterSemiBoldBlack40px}
  width: 443px;
  min-height: 104px;
  letter-spacing: 0;
  line-height: 52px;
`;

const WeAcceptGiftCards = styled.div`
  ${InterNormalBlack20px}
  width: 524px;
  min-height: 120px;
  margin-top: 25px;
  letter-spacing: 0;
  line-height: 30px;
`;

const OverlapGroup6 = styled.div`
  height: 55px;
  margin-top: 40px;
  display: flex;
  padding: 15px 20px;
  align-items: flex-end;
  min-width: 233px;
  background-color: var(--granite-gray);
  border-radius: 10px;
`;

const SeeAvailableCards = styled.div`
  ${InterMediumConcrete20px}
  width: 193px;
  min-height: 24px;
  letter-spacing: 0;
`;

export default SellGiftCardsPage;
