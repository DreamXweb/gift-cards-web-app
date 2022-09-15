import React from "react";
import Header2 from "../Header2";
import Card4 from "../Card4";
import Footer from "../Footer";
import styled from "styled-components";
import {
  InterNormalFirefly16px,
  InterBoldOnyx22px,
  Border1pxOnyx,
  InterSemiBoldBlack40px,
  InterBoldOnyx16px,
  Border1pxBlack,
  InterNormalSonicSilver16px,
  InterMediumOnyx14px,
  InterMediumConcrete20px,
  Border2pxSonicSilver2,
  InterNormalOnyx16px,
  InterSemiBoldOnyx24px,
  InterMediumOnyx20px,
  InterNormalBlack20px,
  InterSemiBoldOnyx40px,
  InterMediumOnyx18px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./MainPage.css";
import {staticUrl} from "../../App";

function MainPage(props) {
  const {
    title,
    loremIpsumDolorSi,
    sellGiftCards2,
    signUp,
    submitYourGiftCard,
    getAQuoteInstantly,
    getPaidInCrypto,
    giftCardValueCalculator,
    calculate,
    proceed,
    sellCard,
    buyCard,
    label,
    label2,
    label3,
    number1,
    appleGiftCard,
    number2,
    ourValues,
    security,
    weMonitorEachTran,
    cardsicle1,
    loadMore,
    submitYourGiftCar,
    logIn,
    swapYourGiftCardsForCash,
    browseYourFavorite,
    buyGiftCards3,
    popularRetailers,
    apple,
    amazon,
    adidas,
    sellGiftCards3,
    airbnb,
    americanExpress,
    sellGiftCards1,
    buyGiftCards1,
    aboutUs1,
    refundAndCancellationPolicy1,
    faq1,
    x80Payout,
    buyGiftCardsAndG,
    surname,
    buyGiftCards2,
    card41Props,
    card42Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="main-page screen">
        <Header2 />
        <FlexRow>
          <FlexCol>
            <Title>{title}</Title>
            <LoremIpsumDolorSi>{loremIpsumDolorSi}</LoremIpsumDolorSi>
            <OverlapGroupContainer>
              <OverlapGroup3>
                <SellGiftCards>{sellGiftCards2}</SellGiftCards>
              </OverlapGroup3>
              <OverlapGroup2>
                <BuyGiftCards>{signUp}</BuyGiftCards>
              </OverlapGroup2>
            </OverlapGroupContainer>
          </FlexCol>
          <ImagePlaceholder src={staticUrl + "/img/image-placeholder@1x.svg"} />
        </FlexRow>
        <OverlapGroup14>
          <ByteSizeArrowBottom src={staticUrl + "/img/bytesize-arrow-bottom@2x.svg"} />
          <ByteSizeArrowBottom1 src={staticUrl + "/img/bytesize-arrow-bottom@2x.svg"} />
          <Group9>
            <OverlapGroup12>
              <Group6>
                <SubmitYourGiftCard>{submitYourGiftCard}</SubmitYourGiftCard>
                <Successful1 src={staticUrl + "/img/successful-1@2x.svg"} />
              </Group6>
              <Rectangle4 />
            </OverlapGroup12>
            <OverlapGroup11>
              <Group7>
                <GetAQuoteInstantly>{getAQuoteInstantly}</GetAQuoteInstantly>
                <Label1 src={staticUrl + "/img/label-1@2x.svg"} />
              </Group7>
              <Rectangle4 />
            </OverlapGroup11>
            <OverlapGroup11>
              <Group8>
                <GetPaidInCrypto>{getPaidInCrypto}</GetPaidInCrypto>
                <CurrencyExchange1 src={staticUrl + "/img/currency-exchange-1@2x.svg"} />
              </Group8>
              <Rectangle4 />
            </OverlapGroup11>
          </Group9>
        </OverlapGroup14>
        <GiftCardValueCalculator>{giftCardValueCalculator}</GiftCardValueCalculator>
        <Group13>
          <OverlapGroup4>
            <OverlapGroup>
              <Calculate>{calculate}</Calculate>
            </OverlapGroup>
            <OverlapGroup1>
              <Proceed>{proceed}</Proceed>
            </OverlapGroup1>
            <SELLCARD>{sellCard}</SELLCARD>
            <BUYCARD>{buyCard}</BUYCARD>
            <Rectangle7 />
            <OverlapGroup21>
              <Line2 src={staticUrl + "/img/line-2@2x.svg"} />
            </OverlapGroup21>
            <Label>{label}</Label>
            <Label2>{label2}</Label2>
            <Label3>{label3}</Label3>
            <Rectangle8 />
            <Rectangle9 />
            <Number>{number1}</Number>
            <Cursor />
            <IcSort src={staticUrl + "/img/ic-sort@2x.svg"} />
            <Rectangle10 />
            <IcChevron src={staticUrl + "/img/ic-chevron@2x.svg"} />
            <AppleGiftCard>{appleGiftCard}</AppleGiftCard>
            <Number1>{number2}</Number1>
          </OverlapGroup4>
        </Group13>
        <OurValues>{ourValues}</OurValues>
        <Group8081>
          <Card1>
            <VueSaxOutLineSecurity src={staticUrl + "/img/vuesax-outline-security@2x.svg"} />
            <Security>{security}</Security>
            <Rectangle342 />
            <WeMonitorEachTran>{weMonitorEachTran}</WeMonitorEachTran>
            <LearnMore>
              <LoadMore>{cardsicle1}</LoadMore>
              <Vector src={staticUrl + "/img/vector@2x.svg"} />
            </LearnMore>
          </Card1>
          <Card4 service={card41Props.service} ourSimpleAndPractical={card41Props.ourSimpleAndPractical} />
          <Card4
            service={card42Props.service}
            ourSimpleAndPractical={card42Props.ourSimpleAndPractical}
            className={card42Props.className}
          />
        </Group8081>
        <FlexRow1>
          <ImagePlaceholder1 src={staticUrl + "/img/image-placeholder-2@1x.svg"} />
          <Group8089>
            <SwapYourGiftCardsForCash>{loadMore}</SwapYourGiftCardsForCash>
            <SubmitYourGiftCar>{submitYourGiftCar}</SubmitYourGiftCar>
            <OverlapGroup5>
              <BuyGiftCards>{logIn}</BuyGiftCards>
            </OverlapGroup5>
          </Group8089>
        </FlexRow1>
        <FlexRow2>
          <Group8090>
            <BuyGiftCardsAndG>{swapYourGiftCardsForCash}</BuyGiftCardsAndG>
            <BrowseYourFavorite>{browseYourFavorite}</BrowseYourFavorite>
            <OverlapGroup6>
              <SellGiftCards>{buyGiftCards3}</SellGiftCards>
            </OverlapGroup6>
          </Group8090>
          <ImagePlaceholder2 src={staticUrl + "/img/image-placeholder-1@1x.svg"} />
        </FlexRow2>
        <PopularRetailers>{popularRetailers}</PopularRetailers>
        <FlexRow3>
          <Vector1 src={staticUrl + "/img/vector-1@2x.svg"} />
          <Group8085>
            <Apple>{apple}</Apple>
            <FlexCol1>
              <OverlapGroup61>
                <Amazon>{amazon}</Amazon>
              </OverlapGroup61>
              <Ellipse2 src={staticUrl + "/img/ellipse-2@2x.svg"} />
            </FlexCol1>
            <OverlapGroup8>
              <Adidas>{adidas}</Adidas>
            </OverlapGroup8>
            <OverlapGroup51>
              <AmericanExpress>{sellGiftCards3}</AmericanExpress>
            </OverlapGroup51>
            <OverlapGroup8>
              <AirBnb>{airbnb}</AirBnb>
            </OverlapGroup8>
            <OverlapGroup7>
              <Surname>{americanExpress}</Surname>
            </OverlapGroup7>
          </Group8085>
          <Vector2 src={staticUrl + "/img/vector@2x.svg"} />
        </FlexRow3>
        <PayoutContainer>
          <X80Payout>{sellGiftCards1}</X80Payout>
          <X75Payout>{buyGiftCards1}</X75Payout>
          <X60Payout>{aboutUs1}</X60Payout>
          <X82Payout>{refundAndCancellationPolicy1}</X82Payout>
          <X60Payout1>{faq1}</X60Payout1>
          <X75Payout1>{x80Payout}</X75Payout1>
        </PayoutContainer>
        <FlexRow4>
          <ImagePlaceholder1 src={staticUrl + "/img/image-placeholder-2@1x.svg"} />
          <Group8088>
            <SellGiftCardsOnlineFromTopBrands>{buyGiftCardsAndG}</SellGiftCardsOnlineFromTopBrands>
            <WeAcceptGiftCards>{surname}</WeAcceptGiftCards>
            <OverlapGroup9>
              <SeeAvailableCards>{buyGiftCards2}</SeeAvailableCards>
            </OverlapGroup9>
          </Group8088>
        </FlexRow4>
        <Footer />
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 418px;
  margin-top: 87px;
  margin-left: 111px;
  display: flex;
  align-items: center;
  min-width: 1189px;
`;

const FlexCol = styled.div`
  width: 524px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 418px;
`;

const Title = styled.h1`
  width: 516px;
  min-height: 144px;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--onyx);
  font-size: 60px;
  letter-spacing: 0.6px;
`;

const LoremIpsumDolorSi = styled.div`
  width: 524px;
  min-height: 108px;
  margin-top: 30px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
  line-height: 36px;
`;

const OverlapGroupContainer = styled.div`
  margin-top: 81px;
  display: flex;
  align-items: flex-start;
  min-width: 392px;
`;

const OverlapGroup3 = styled.div`
  height: 55px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  min-width: 180px;
  background-color: var(--granite-gray);
  border-radius: 10px;
`;

const SellGiftCards = styled.div`
  ${InterMediumConcrete20px}
  width: 139px;
  min-height: 19px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  height: 55px;
  margin-left: 30px;
  display: flex;
  padding: 15px 20px;
  align-items: flex-start;
  min-width: 180px;
  background-color: var(--granite-gray);
  border-radius: 10px;
`;

const BuyGiftCards = styled.div`
  ${InterMediumConcrete20px}
  min-height: 24px;
  letter-spacing: 0;
`;

const ImagePlaceholder = styled.img`
  width: 605px;
  height: 383px;
  margin-left: 60px;
  margin-top: 13px;
`;

const OverlapGroup14 = styled.div`
  width: 1081px;
  height: 91px;
  position: relative;
  margin-top: 128px;
  margin-right: 1px;
`;

const ByteSizeArrowBottom = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 16px;
  left: 336px;
`;

const ByteSizeArrowBottom1 = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 16px;
  left: 713px;
`;

const Group9 = styled.div`
  position: absolute;
  height: 91px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1081px;
`;

const OverlapGroup12 = styled.div`
  width: 327px;
  height: 91px;
  position: relative;
  border-radius: 8px;
`;

const Group6 = styled.div`
  position: absolute;
  width: 259px;
  top: 30px;
  left: 35px;
  display: flex;
  flex-direction: column;
  padding: 0 2px;
  align-items: flex-end;
  min-height: 35px;
`;

const SubmitYourGiftCard = styled.div`
  ${InterMediumOnyx20px}
  width: 207px;
  min-height: 22px;
  margin-top: 7px;
  letter-spacing: 0.2px;
`;

const Successful1 = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 823px;
  margin-right: 8px;
`;

const Rectangle4 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 327px;
  height: 91px;
  top: 0;
  left: 0;
  border-radius: 8px;
`;

const OverlapGroup11 = styled.div`
  width: 327px;
  height: 91px;
  position: relative;
  margin-left: 50px;
  border-radius: 8px;
`;

const Group7 = styled.div`
  position: absolute;
  height: 34px;
  top: 29px;
  left: 37px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 256px;
`;

const GetAQuoteInstantly = styled.div`
  ${InterMediumOnyx20px}
  min-height: 24px;
  min-width: 204px;
  letter-spacing: 0.2px;
`;

const Label1 = styled.img`
  width: 35px;
  height: 34px;
  align-self: flex-end;
  margin-left: 339px;
  margin-bottom: -851px;
`;

const Group8 = styled.div`
  position: absolute;
  height: 35px;
  top: 25px;
  left: 51px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 227px;
`;

const GetPaidInCrypto = styled.div`
  ${InterMediumOnyx20px}
  width: 175px;
  min-height: 23px;
  letter-spacing: 0.2px;
`;

const CurrencyExchange1 = styled.img`
  width: 35px;
  height: 35px;
  align-self: flex-end;
  margin-left: 759px;
  margin-bottom: -847px;
`;

const GiftCardValueCalculator = styled.div`
  ${InterSemiBoldOnyx40px}
  min-height: 48px;
  margin-top: 183px;
  margin-right: 8px;
  min-width: 496px;
  letter-spacing: 0;
`;

const Group13 = styled.div`
  margin-top: 71px;
  margin-left: 15px;
  display: flex;
  align-items: flex-start;
  min-width: 923px;
`;

const OverlapGroup4 = styled.div`
  width: 1148px;
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
  padding: 13px 49px;
  align-items: flex-start;
  min-width: 180px;
  border-radius: 10px;
`;

const Proceed = styled.div`
  ${InterMediumOnyx20px}
  width: 80px;
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

const OverlapGroup21 = styled.div`
  position: absolute;
  height: 1px;
  top: 116px;
  left: 378px;
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

const Label2 = styled.div`
  ${InterBoldOnyx16px}
  position: absolute;
  top: 156px;
  left: 461px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Label3 = styled.div`
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

const OurValues = styled.div`
  ${InterSemiBoldOnyx40px}
  min-height: 30px;
  margin-top: 167px;
  min-width: 212px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Group8081 = styled.div`
  height: 481px;
  position: relative;
  margin-top: 71px;
  display: flex;
  align-items: flex-start;
  min-width: 1136px;
`;

const Card1 = styled.div`
  width: 328px;
  display: flex;
  flex-direction: column;
  padding: 18px 0;
  align-items: flex-start;
  min-height: 481px;
  background-color: var(--gray-nurse);
  border-radius: 10px;
`;

const VueSaxOutLineSecurity = styled.img`
  width: 73px;
  height: 73px;
  align-self: center;
  margin-top: 67px;
  margin-right: 1px;
`;

const Security = styled.div`
  ${InterSemiBoldOnyx24px}
  min-height: 32px;
  margin-top: 72px;
  margin-left: 45px;
  letter-spacing: -0.1px;
  line-height: 32px;
  white-space: nowrap;
`;

const Rectangle342 = styled.div`
  width: 97px;
  height: 2px;
  margin-top: 2px;
  margin-left: 45px;
  background-color: var(--onyx);
  opacity: 0.8;
`;

const WeMonitorEachTran = styled.p`
  ${InterNormalOnyx16px}
  width: 238px;
  min-height: 96px;
  align-self: center;
  margin-top: 25px;
  letter-spacing: 0.1px;
  line-height: 24px;
`;

const LearnMore = styled.div`
  height: 60px;
  margin-top: 16px;
  margin-left: 45px;
  display: flex;
  align-items: center;
  min-width: 132px;
`;

const LoadMore = styled.div`
  ${ValignTextMiddle}
  ${InterNormalFirefly16px}
            height: 24px;
  min-width: 87px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Vector = styled.img`
  width: 34px;
  height: 16px;
  margin-left: 15px;
  margin-top: 2px;
`;

const FlexRow1 = styled.div`
  margin-top: 207px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  min-width: 1304px;
`;

const ImagePlaceholder1 = styled.img`
  width: 554px;
  height: 345px;
`;

const Group8089 = styled.div`
  width: 639px;
  margin-left: 111px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 210px;
`;

const SwapYourGiftCardsForCash = styled.div`
  ${InterSemiBoldOnyx40px}
  min-height: 30px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const SubmitYourGiftCar = styled.div`
  ${InterNormalBlack20px}
  width: 635px;
  min-height: 60px;
  margin-top: 25px;
  letter-spacing: 0;
  line-height: 30px;
`;

const OverlapGroup5 = styled.div`
  height: 55px;
  margin-top: 40px;
  display: flex;
  padding: 15px 20px;
  align-items: flex-start;
  min-width: 180px;
  background-color: var(--granite-gray);
  border-radius: 10px;
`;

const FlexRow2 = styled.div`
  margin-top: 198px;
  display: flex;
  align-items: center;
  min-width: 1300px;
`;

const Group8090 = styled.div`
  width: 610px;
  margin-bottom: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 284px;
`;

const BuyGiftCardsAndG = styled.div`
  ${InterSemiBoldOnyx40px}
  width: 606px;
  min-height: 104px;
  letter-spacing: 0;
  line-height: 52px;
`;

const BrowseYourFavorite = styled.div`
  ${InterNormalBlack20px}
  width: 606px;
  min-height: 60px;
  margin-top: 25px;
  letter-spacing: 0;
  line-height: 30px;
`;

const OverlapGroup6 = styled.div`
  height: 55px;
  margin-top: 40px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  min-width: 180px;
  background-color: var(--granite-gray);
  border-radius: 10px;
`;

const ImagePlaceholder2 = styled.img`
  width: 554px;
  height: 345px;
  margin-left: 136px;
`;

const PopularRetailers = styled.div`
  ${InterSemiBoldOnyx40px}
  min-height: 48px;
  margin-top: 196px;
  margin-right: 1px;
  min-width: 329px;
  letter-spacing: 0;
`;

const FlexRow3 = styled.div`
  margin-top: 71px;
  display: flex;
  align-items: center;
  min-width: 1300px;
`;

const Vector1 = styled.img`
  width: 34px;
  height: 16px;
`;

const Group8085 = styled.div`
  margin-left: 16px;
  display: flex;
  padding: 0 12px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1212px;
`;

const Apple = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            height: 24px;
  min-width: 51px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const FlexCol1 = styled.div`
  width: 240px;
  align-self: flex-end;
  margin-left: 19px;
  margin-bottom: -3821px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 3971px;
`;

const OverlapGroup61 = styled.div`
  height: 150px;
  align-self: flex-end;
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

const Ellipse2 = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 3671px;
`;

const OverlapGroup8 = styled.div`
  height: 150px;
  margin-left: 60px;
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

const OverlapGroup51 = styled.div`
  height: 150px;
  margin-left: 60px;
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

const AirBnb = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            height: 24px;
  min-width: 59px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup7 = styled.div`
  height: 150px;
  margin-left: 60px;
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

const Vector2 = styled.img`
  width: 34px;
  height: 16px;
  margin-left: 4px;
`;

const PayoutContainer = styled.div`
  ${InterMediumOnyx14px}
  height: 30px;
  margin-top: 13px;
  margin-right: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 1129px;
`;

const X80Payout = styled.div`
  min-height: 30px;
  min-width: 80px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const X75Payout = styled.div`
  min-height: 30px;
  margin-left: 131px;
  min-width: 79px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const X60Payout = styled.div`
  min-height: 30px;
  margin-left: 130px;
  min-width: 80px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const X82Payout = styled.div`
  min-height: 30px;
  margin-left: 130px;
  min-width: 79px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const X60Payout1 = styled.div`
  min-height: 30px;
  margin-left: 131px;
  min-width: 80px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const X75Payout1 = styled.div`
  min-height: 30px;
  margin-left: 130px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const FlexRow4 = styled.div`
  margin-top: 245px;
  margin-right: 107px;
  display: flex;
  align-items: flex-end;
  min-width: 1193px;
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

const OverlapGroup9 = styled.div`
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

export default MainPage;
