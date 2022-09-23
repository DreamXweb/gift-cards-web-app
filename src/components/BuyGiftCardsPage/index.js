import React from "react";
import PageDisabled from "../PageDisabled";
import PageActive from "../PageActive";
import PageDefault from "../PageDefault";
import PageMaster4 from "../PageMaster4";
import Footer from "../Footer";
import styled from "styled-components";
import {
  InterMediumOnyx16px,
  Border1pxOnyx,
  InterSemiBoldOnyx22px,
  InterNormalBlack18px,
  ValignTextMiddle,
  InterMediumBlack14px,
  InterNormalSonicSilver16px,
  InterSemiBoldOnyx40px,
  InterMediumOnyx14px,
  InterMediumOnyx18px,
  InterSemiBoldBlack22px,
} from "../../styledMixins";
import "./BuyGiftCardsPage.css";
import App, {staticUrl} from "../../App";
import Header from "../Header";

function BuyGiftCardsPage(props) {
  const {
    buyGiftCards,
    searchBrands,
    sortBy,
    nameAZ,
    byCashback,
    percent1,
    percent2,
    surname,
    x25AndUnder,
    text4,
    text5,
    text6,
    text7,
    all,
    categories,
    place,
    restaurantsEntertainment,
    sportingGoods,
    homeImprovement,
    subscriptions,
    travel,
    electronics,
    pets,
    retail,
    miscellaneous,
    apple,
    amazon,
    adidas,
    americanExpress,
    x80Payout,
    x75Payout,
    x60Payout1,
    x82Payout,
    airbnb,
    costco,
    dicksSportingGoods,
    name,
    x60Payout2,
    ebay,
    x97Payout,
    x95Payout1,
    eastBay,
    x95Payout2,
    x98Payout,
    gameStop,
    x95Payout3,
    x95Payout4,
    googlePlay,
    x95Payout5,
    kohlS,
    nike,
    ikea,
    nordstrom,
    x94Payout,
    x95Payout6,
    x95Payout7,
    x95Payout8,
    pageActiveProps,
    pageDefault1Props,
    pageDefault2Props,
    pageDefault3Props,
    pageDefault4Props,
    pageMaster4Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="buy-gift-cards-page screen">
        <FlexCol>
          <Header />
          <FlexRow>
            <FlexCol1>
              <Rectangle343 />
              <BuyGiftCards>{buyGiftCards}</BuyGiftCards>
              <OverlapGroup>
                <OverlapGroup1>
                  <SearchBrands>{searchBrands}</SearchBrands>
                  <Cursor />
                </OverlapGroup1>
                <IconSearch src={staticUrl + "/img/search@2x.svg"} />
              </OverlapGroup>
            </FlexCol1>
            <SortBy>{sortBy}</SortBy>
            <OverlapGroup2>
              <NameAZ>{nameAZ}</NameAZ>
              <IcChevron src={staticUrl + "/img/ic-chevron-2@2x.svg"} />
            </OverlapGroup2>
          </FlexRow>
        </FlexCol>
        <FlexRow1>
          <GroupContainer>
            <Group8097>
              <ByCashback>{byCashback}</ByCashback>
              <PercentContainer>
                <Percent>{percent1}</Percent>
                <Percent1>{percent2}</Percent1>
              </PercentContainer>
              <SliderRange>
                <OverlapGroup3>
                  <MinValue />
                </OverlapGroup3>
              </SliderRange>
            </Group8097>
            <Group8102>
              <FlexCol2>
                <Rectangle355 />
                <Rectangle356 />
                <Rectangle356 />
                <Rectangle356 />
              </FlexCol2>
              <FlexCol3>
                <Surname>{surname}</Surname>
                <OverlapGroup12>
                  <Group8100 src={staticUrl + "/img/group-8100@2x.svg"} />
                  <X25AndUnder>{x25AndUnder}</X25AndUnder>
                </OverlapGroup12>
                <Text4>{text4}</Text4>
                <Text4>{text5}</Text4>
                <Text4>{text6}</Text4>
                <Text4>{text7}</Text4>
              </FlexCol3>
            </Group8102>
            <Group8101>
              <FlexCol4>
                <Rectangle355 />
                <Rectangle346 />
                <Rectangle346 />
                <Rectangle346 />
                <Rectangle346 />
                <Rectangle346 />
                <Rectangle346 />
                <Rectangle346 />
                <Rectangle346 />
                <Rectangle346 />
              </FlexCol4>
              <FlexCol5>
                <FlexRow2>
                  <All>{all}</All>
                  <FlexCol6>
                    <Categories>{categories}</Categories>
                    <Group81001 src={staticUrl + "/img/group-8100@2x.svg"} />
                  </FlexCol6>
                </FlexRow2>
                <Place>{place}</Place>
                <RestaurantsEntertainment>{restaurantsEntertainment}</RestaurantsEntertainment>
                <RestaurantsEntertainment>{sportingGoods}</RestaurantsEntertainment>
                <RestaurantsEntertainment>{homeImprovement}</RestaurantsEntertainment>
                <RestaurantsEntertainment>{subscriptions}</RestaurantsEntertainment>
                <RestaurantsEntertainment>{travel}</RestaurantsEntertainment>
                <RestaurantsEntertainment>{electronics}</RestaurantsEntertainment>
                <RestaurantsEntertainment>{pets}</RestaurantsEntertainment>
                <RestaurantsEntertainment>{retail}</RestaurantsEntertainment>
                <RestaurantsEntertainment>{miscellaneous}</RestaurantsEntertainment>
              </FlexCol5>
            </Group8101>
          </GroupContainer>
          <FlexCol7>
            <FlexCol8>
              <FlexCol9>
                <FlexRow3>
                  <OverlapGroup19 onClick={() => window.location = App.homepage + '/checkout-page'}>
                    <Apple>{apple}</Apple>
                  </OverlapGroup19>
                  <OverlapGroup18>
                    <Apple>{amazon}</Apple>
                  </OverlapGroup18>
                  <OverlapGroup20>
                    <Apple>{adidas}</Apple>
                  </OverlapGroup20>
                  <OverlapGroup13>
                    <AmericanExpress>{americanExpress}</AmericanExpress>
                  </OverlapGroup13>
                  <Vector src={staticUrl + "/img/vector@2x.png"} />
                </FlexRow3>
                <PayoutContainer>
                  <X80Payout>{x80Payout}</X80Payout>
                  <X75Payout>{x75Payout}</X75Payout>
                  <X60Payout1>{x60Payout1}</X60Payout1>
                  <X82Payout>{x82Payout}</X82Payout>
                </PayoutContainer>
                <GroupContainer1>
                  <Group8088>
                    <OverlapGroup4>
                      <AirBnb>{airbnb}</AirBnb>
                    </OverlapGroup4>
                    <OverlapGroup31>
                      <Costco>{costco}</Costco>
                    </OverlapGroup31>
                  </Group8088>
                  <Group8094>
                    <OverlapGroup8>
                      <DicksSportingGoods>{dicksSportingGoods}</DicksSportingGoods>
                    </OverlapGroup8>
                    <OverlapGroup7>
                      <Name>{name}</Name>
                    </OverlapGroup7>
                  </Group8094>
                </GroupContainer1>
              </FlexCol9>
              <FlexRow4>
                <FlexCol10>
                  <X60Payout>{x60Payout2}</X60Payout>
                  <OverlapGroup17>
                    <Ebay>{ebay}</Ebay>
                  </OverlapGroup17>
                  <X97Payout>{x97Payout}</X97Payout>
                </FlexCol10>
                <FlexCol11>
                  <X60Payout>{x95Payout1}</X60Payout>
                  <OverlapGroup15>
                    <Ebay>{eastBay}</Ebay>
                  </OverlapGroup15>
                  <X95Payout>{x95Payout2}</X95Payout>
                </FlexCol11>
                <FlexCol11>
                  <X60Payout>{x98Payout}</X60Payout>
                  <OverlapGroup14>
                    <Ebay>{gameStop}</Ebay>
                  </OverlapGroup14>
                  <X95Payout1>{x95Payout3}</X95Payout1>
                </FlexCol11>
                <FlexCol11>
                  <X60Payout>{x95Payout4}</X60Payout>
                  <OverlapGroup16>
                    <GooglePlay>{googlePlay}</GooglePlay>
                  </OverlapGroup16>
                  <X95Payout1>{x95Payout5}</X95Payout1>
                </FlexCol11>
              </FlexRow4>
              <GroupContainer1>
                <Group8088>
                  <OverlapGroup6>
                    <Kohls>{kohlS}</Kohls>
                  </OverlapGroup6>
                  <OverlapGroup5>
                    <Nike>{nike}</Nike>
                  </OverlapGroup5>
                </Group8088>
                <Group8094>
                  <OverlapGroup9>
                    <Ikea>{ikea}</Ikea>
                  </OverlapGroup9>
                  <OverlapGroup10>
                    <Nordstrom>{nordstrom}</Nordstrom>
                  </OverlapGroup10>
                </Group8094>
              </GroupContainer1>
            </FlexCol8>
            <PayoutContainer1>
              <X80Payout>{x94Payout}</X80Payout>
              <X60Payout1>{x95Payout6}</X60Payout1>
              <X60Payout1>{x95Payout7}</X60Payout1>
              <X82Payout>{x95Payout8}</X82Payout>
            </PayoutContainer1>
            <Pagination>
              <PageDisabled />
              <PageActive pageMaster2Props={pageActiveProps.pageMaster2Props} />
              <PageDefault pageMaster3Props={pageDefault1Props.pageMaster3Props} />
              <PageDefault pageMaster3Props={pageDefault2Props.pageMaster3Props} />
              <PageDefault pageMaster3Props={pageDefault3Props.pageMaster3Props} />
              <PageDefault pageMaster3Props={pageDefault4Props.pageMaster3Props} />
              <PageMaster4 icCaratRightProps={pageMaster4Props.icCaratRightProps} />
            </Pagination>
          </FlexCol7>
        </FlexRow1>
        <Footer className={footerProps.className} />
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 1312px;
  position: relative;
  align-self: center;
  margin-top: 55px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 378px;
`;

const FlexRow = styled.div`
  height: 234px;
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  align-items: flex-end;
  min-width: 858px;
`;

const FlexCol1 = styled.div`
  width: 596px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 234px;
`;

const Rectangle343 = styled.div`
  width: 97px;
  height: 2px;
  margin-right: 48px;
  background-color: var(--onyx);
  opacity: 0.8;
`;

const BuyGiftCards = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldOnyx40px}
            height: 48px;
  margin-top: 87px;
  margin-right: 27px;
  min-width: 281px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  ${Border1pxOnyx}
  height: 56px;
  margin-top: 41px;
  margin-right: 2px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 594px;
  background-color: #fcfcfc;
  border-radius: 8px;
`;

const OverlapGroup1 = styled.div`
  width: 123px;
  height: 26px;
  position: relative;
`;

const SearchBrands = styled.div`
  position: absolute;
  top: 3px;
  left: 0;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: #969ba0;
  font-size: var(--font-size-m);
  letter-spacing: 0;
`;

const Cursor = styled.div`
  position: absolute;
  width: 2px;
  height: 26px;
  top: 0;
  left: 0;
  background-color: var(--onyx);
`;

const IconSearch = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 414px;
  margin-bottom: 2px;
`;

const SortBy = styled.div`
  ${InterMediumOnyx16px}
  min-height: 30px;
  margin-left: 17px;
  margin-bottom: 14px;
  min-width: 61px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  ${Border1pxOnyx}
  height: 56px;
  margin-left: 12px;
  display: flex;
  padding: 12px 11px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 170px;
  border-radius: 8px;
`;

const NameAZ = styled.div`
  ${InterNormalSonicSilver16px}
  min-height: 30px;
  min-width: 77px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const IcChevron = styled.img`
  width: 24px;
  height: 24px;
  align-self: center;
  margin-left: 43px;
  margin-bottom: 2px;
`;

const FlexRow1 = styled.div`
  height: 1101px;
  margin-top: 60px;
  margin-right: -384px;
  display: flex;
  align-items: flex-start;
  min-width: 1754px;
`;

const GroupContainer = styled.div`
  width: 307px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1019px;
`;

const Group8097 = styled.div`
  width: 262px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 81px;
`;

const ByCashback = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldOnyx22px}
            height: 27px;
  margin-right: 7px;
  min-width: 139px;
  letter-spacing: 0;
`;

const PercentContainer = styled.div`
  ${InterMediumBlack14px}
  margin-top: 10px;
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 254px;
`;

const Percent = styled.div`
  ${ValignTextMiddle}
  height: 17px;
  min-width: 21px;
  letter-spacing: 0;
`;

const Percent1 = styled.div`
  ${ValignTextMiddle}
  height: 17px;
  margin-left: 205px;
  letter-spacing: 0;
`;

const SliderRange = styled.div`
  height: 8px;
  position: relative;
  margin-top: 19px;
  margin-right: 6px;
  display: flex;
  padding: 0 1px;
  align-items: flex-start;
  min-width: 256px;
  background-color: #d4d4d4;
  border-radius: 4px;
`;

const OverlapGroup3 = styled.div`
  width: 71px;
  height: 24px;
  position: relative;
  margin-top: -8px;
`;

const MinValue = styled.div`
  position: absolute;
  width: 58px;
  height: 8px;
  top: 8px;
  left: 13px;
`;

const Group8102 = styled.div`
  height: 267px;
  margin-top: 100px;
  display: flex;
  align-items: flex-end;
  min-width: 206px;
`;

const FlexCol2 = styled.div`
  width: 24px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 159px;
`;

const Rectangle355 = styled.div`
  width: 24px;
  height: 24px;
  background-color: var(--bon-jour);
  border-radius: 5px;
`;

const Rectangle356 = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 21px;
  background-color: var(--bon-jour);
  border-radius: 5px;
`;

const FlexCol3 = styled.div`
  width: 155px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 267px;
`;

const Surname = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldBlack22px}
            height: 27px;
  align-self: flex-end;
  min-width: 134px;
  letter-spacing: 0;
`;

const OverlapGroup12 = styled.div`
  width: 128px;
  height: 30px;
  position: relative;
  margin-top: 30px;
`;

const Group8100 = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 3px;
  left: 31px;
`;

const X25AndUnder = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Text4 = styled.div`
  ${InterNormalBlack18px}
  min-height: 30px;
  margin-top: 15px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Group8101 = styled.div`
  height: 471px;
  margin-top: 100px;
  display: flex;
  align-items: flex-start;
  min-width: 307px;
`;

const FlexCol4 = styled.div`
  width: 24px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 375px;
`;

const Rectangle346 = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 15px;
  background-color: var(--bon-jour);
  border-radius: 5px;
`;

const FlexCol5 = styled.div`
  ${InterNormalBlack18px}
  width: 244px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 469px;
`;

const FlexRow2 = styled.div`
  height: 81px;
  display: flex;
  align-items: flex-end;
  min-width: 138px;
`;

const All = styled.div`
  ${ValignTextMiddle}
  height: 22px;
  min-width: 21px;
  letter-spacing: 0;
`;

const FlexCol6 = styled.div`
  width: 117px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 81px;
`;

const Categories = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldOnyx22px}
            height: 27px;
  letter-spacing: 0;
`;

const Group81001 = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 30px;
  margin-left: 10px;
`;

const Place = styled.div`
  ${ValignTextMiddle}
  height: 22px;
  margin-top: 15px;
  letter-spacing: 0;
`;

const RestaurantsEntertainment = styled.div`
  ${ValignTextMiddle}
  height: 22px;
  margin-top: 17px;
  letter-spacing: 0;
`;

const FlexCol7 = styled.div`
  width: 1341px;
  align-self: flex-end;
  margin-left: 106px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1058px;
`;

const FlexCol8 = styled.div`
  width: 1341px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 882px;
`;

const FlexCol9 = styled.div`
  ${InterMediumOnyx18px}
  width: 1341px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 394px;
`;

const FlexRow3 = styled.div`
  display: flex;
  align-items: center;
  min-width: 1341px;
`;

const OverlapGroup19 = styled.div`
  height: 150px;
  display: flex;
  padding: 62px 49px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 150px;
  background-image: url(/img/ellipse-2@2x.svg);
  background-size: 100% 100%;
  cursor: pointer;
`;

const Apple = styled.div`
  ${ValignTextMiddle}
  height: 24px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Ebay = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            height: 24px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup18 = styled.div`
  height: 150px;
  margin-left: 60px;
  display: flex;
  padding: 62px 39px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const OverlapGroup20 = styled.div`
  height: 150px;
  margin-left: 60px;
  display: flex;
  padding: 62px 45px;
  align-items: flex-start;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const OverlapGroup13 = styled.div`
  height: 150px;
  margin-left: 60px;
  display: flex;
  padding: 50px 32px;
  align-items: flex-start;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const AmericanExpress = styled.div`
  ${ValignTextMiddle}
  width: 86px;
  height: 48px;
  text-align: center;
  letter-spacing: 0.1px;
  line-height: 24px;
`;

const GooglePlay = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            width: 86px;
  height: 48px;
  text-align: center;
  letter-spacing: 0.1px;
  line-height: 24px;
`;

const Vector = styled.img`
  width: 34px;
  height: 16px;
  margin-left: 527px;
  margin-bottom: 12px;
`;

const PayoutContainer = styled.div`
  ${InterMediumOnyx14px}
  height: 30px;
  margin-top: 13px;
  margin-left: 35px;
  display: flex;
  align-items: flex-start;
  min-width: 709px;
`;

const X80Payout = styled.div`
  min-height: 30px;
  min-width: 80px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const X60Payout = styled.div`
  ${InterMediumOnyx14px}
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

const X60Payout1 = styled.div`
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
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const GroupContainer1 = styled.div`
  margin-top: 51px;
  display: flex;
  align-items: flex-start;
  min-width: 784px;
`;

const Group8088 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 364px;
`;

const OverlapGroup4 = styled.div`
  height: 150px;
  display: flex;
  padding: 0 45px;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const AirBnb = styled.div`
  ${ValignTextMiddle}
  height: 24px;
  min-width: 59px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup31 = styled.div`
  height: 150px;
  margin-left: 60px;
  display: flex;
  padding: 0 44px;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const Costco = styled.div`
  ${ValignTextMiddle}
  height: 24px;
  min-width: 62px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Group8094 = styled.div`
  margin-left: 56px;
  display: flex;
  align-items: flex-start;
  min-width: 364px;
`;

const OverlapGroup8 = styled.div`
  height: 150px;
  display: flex;
  padding: 0 35px;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const DicksSportingGoods = styled.div`
  ${ValignTextMiddle}
  width: 80px;
  height: 72px;
  text-align: center;
  letter-spacing: 0.1px;
  line-height: 24px;
`;

const OverlapGroup7 = styled.div`
  height: 150px;
  margin-left: 60px;
  display: flex;
  padding: 0 25px;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  height: 24px;
  min-width: 100px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const FlexRow4 = styled.div`
  height: 274px;
  margin-top: 13px;
  display: flex;
  align-items: flex-start;
  min-width: 780px;
`;

const FlexCol10 = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 274px;
`;

const OverlapGroup17 = styled.div`
  height: 150px;
  margin-top: 51px;
  display: flex;
  padding: 62px 53px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 150px;
  background-image: url(/img/ellipse-2@2x.svg);
  background-size: 100% 100%;
`;

const X97Payout = styled.div`
  ${InterMediumOnyx14px}
  min-height: 30px;
  margin-top: 13px;
  margin-right: 1px;
  min-width: 79px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const FlexCol11 = styled.div`
  width: 150px;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 274px;
`;

const OverlapGroup15 = styled.div`
  height: 150px;
  margin-top: 51px;
  display: flex;
  padding: 62px 40px;
  align-items: flex-start;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const X95Payout = styled.div`
  ${InterMediumOnyx14px}
  min-height: 30px;
  margin-top: 13px;
  margin-left: 2px;
  min-width: 80px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup14 = styled.div`
  height: 150px;
  margin-top: 51px;
  display: flex;
  padding: 62px 30px;
  align-items: flex-start;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const X95Payout1 = styled.div`
  ${InterMediumOnyx14px}
  min-height: 30px;
  margin-top: 13px;
  min-width: 80px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup16 = styled.div`
  height: 150px;
  margin-top: 51px;
  display: flex;
  padding: 50px 32px;
  align-items: flex-start;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const OverlapGroup6 = styled.div`
  height: 150px;
  display: flex;
  padding: 0 49px;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const Kohls = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            height: 24px;
  min-width: 52px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup5 = styled.div`
  height: 150px;
  margin-left: 60px;
  display: flex;
  padding: 0 55px;
  justify-content: flex-end;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const Nike = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            height: 24px;
  min-width: 39px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup9 = styled.div`
  height: 150px;
  display: flex;
  padding: 0 57px;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const Ikea = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            height: 24px;
  min-width: 36px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup10 = styled.div`
  height: 150px;
  margin-left: 60px;
  display: flex;
  padding: 0 28px;
  justify-content: flex-end;
  align-items: center;
  min-width: 150px;
  background-color: var(--concrete);
  border-radius: 75px;
`;

const Nordstrom = styled.div`
  ${ValignTextMiddle}
  ${InterMediumOnyx18px}
            height: 24px;
  min-width: 93px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const PayoutContainer1 = styled.div`
  ${InterMediumOnyx14px}
  height: 30px;
  margin-top: 13px;
  margin-left: 35px;
  display: flex;
  align-items: flex-start;
  min-width: 710px;
`;

const Pagination = styled.div`
  height: 32px;
  position: relative;
  margin-top: 101px;
  margin-left: 248px;
  display: flex;
  align-items: flex-start;
  min-width: 272px;
`;

export default BuyGiftCardsPage;
