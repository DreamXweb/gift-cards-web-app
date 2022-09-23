import React from "react";
import Footer from "../Footer";
import styled from "styled-components";
import {
  InterNormalOnyx18px,
  InterMediumOnyx16px,
  PoppinsNormalMako18px,
  InterNormalBlack18px,
  Border1pxGraniteGray,
  InterSemiBoldOnyx18px,
  InterMediumOnyx14px,
  Border1pxAthensGray,
  InterNormalOnyx16px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./MyOrders.css";
import {staticUrl} from "../../App";
import Header from "../Header";

function MyOrders(props) {
  const {
    total25Orders,
    sortByAmount,
    filter,
    amount,
    cardType,
    address,
    status,
    c0045601,
    c0045602,
    c0045621,
    c0045622,
    c0045623,
    c0045624,
    c0045625,
    c0045626,
    processing1,
    processing2,
    completed1,
    completed2,
    processing3,
    processing4,
    canceled1,
    canceled2,
    price1,
    price2,
    price3,
    price4,
    price5,
    price6,
    price7,
    price8,
    apple,
    amazon,
    airbnb,
    adidas1,
    adidas2,
    ebay,
    eastBay,
    name,
    loadMore,
    footerProps,
  } = props;

  return (
      <div className="container-center-horizontal">
        <div className="my-orders screen">
          <Header />
          <FlexRow>
            <Total25Orders>{total25Orders}</Total25Orders>
            <SortBy>
              <SortByAmount>{sortByAmount}</SortByAmount>
              <IcChevron src={staticUrl + "/img/ic-chevron-2@2x.svg"} />
            </SortBy>

            {/* TODO filter */}
            <Filter>
              <Filter1>{filter}</Filter1>
              <IcRoundFilterList src={staticUrl + "/img/ic-round-filter-list@2x.svg"} />
            </Filter>

          </FlexRow>
          <Group8113>
            <Amount>{amount}</Amount>
            <CardType>{cardType}</CardType>
            <Address>{address}</Address>
            <Status>{status}</Status>
            <Border />
            <Border1 />
            <Border2 />
            <Border3 />
            <Border4 />
            <Border5 />
            <Border6 />
            <Border7 />
            <Image1 />
            <Image2 />
            <C004560>{c0045601}</C004560>
            <C0045601>{c0045602}</C0045601>
            <C004562>{c0045621}</C004562>
            <C0045621>{c0045622}</C0045621>
            <C0045622>{c0045623}</C0045622>
            <C0045623>{c0045624}</C0045623>
            <C0045624>{c0045625}</C0045624>
            <C0045625>{c0045626}</C0045625>
            <OverlapGroup>
              <Processing>{processing1}</Processing>
              <Rectangle359 />
            </OverlapGroup>
            <OverlapGroup1>
              <Processing>{processing2}</Processing>
              <Rectangle359 />
            </OverlapGroup1>
            <OverlapGroup2>
              <Completed>{completed1}</Completed>
              <Rectangle359 />
            </OverlapGroup2>
            <OverlapGroup3>
              <Completed>{completed2}</Completed>
              <Rectangle359 />
            </OverlapGroup3>
            <OverlapGroup4>
              <Processing>{processing3}</Processing>
              <Rectangle359 />
            </OverlapGroup4>
            <OverlapGroup5>
              <Processing>{processing4}</Processing>
              <Rectangle359 />
            </OverlapGroup5>
            <OverlapGroup6>
              <Canceled>{canceled1}</Canceled>
              <Rectangle359 />
            </OverlapGroup6>
            <OverlapGroup7>
              <Canceled>{canceled2}</Canceled>
              <Rectangle359 />
            </OverlapGroup7>
            <Price>{price1}</Price>
            <Price1>{price2}</Price1>
            <Price2>{price3}</Price2>
            <Price3>{price4}</Price3>
            <Price4>{price5}</Price4>
            <Price5>{price6}</Price5>
            <Price6>{price7}</Price6>
            <Price7>{price8}</Price7>
            <Apple>{apple}</Apple>
            <Amazon>{amazon}</Amazon>
            <AirBnb>{airbnb}</AirBnb>
            <Adidas>{adidas1}</Adidas>
            <Adidas1>{adidas2}</Adidas1>
            <Ebay>{ebay}</Ebay>
            <EastBay>{eastBay}</EastBay>
            <Name>{name}</Name>
          </Group8113>
          <Group11>
            <OverlapGroup8>
              <LoadMore>{loadMore}</LoadMore>
            </OverlapGroup8>
          </Group11>
          <Footer className={footerProps.className} />
        </div>
      </div>
  );
}

const FlexRow = styled.div`
  margin-top: 60px;
  margin-left: 14px;
  display: flex;
  align-items: center;
  min-width: 1084px;
`;

const Total25Orders = styled.div`
  min-height: 30px;
  margin-bottom: 2px;
  min-width: 139px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--onyx);
  font-size: var(--font-size-l);
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const SortBy = styled.div`
  ${Border1pxAthensGray}
  width: 210px;
  height: 50px;
  margin-left: 589px;
  display: flex;
  padding: 9px 16px;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
`;

const SortByAmount = styled.div`
  ${InterMediumOnyx14px}
  min-height: 30px;
  margin-left: 12px;
  min-width: 109px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const IcChevron = styled.img`
  width: 24px;
  height: 24px;
  align-self: center;
  margin-left: 32px;
  margin-bottom: 0;
`;

const Filter = styled.div`
  ${Border1pxAthensGray}
  width: 116px;
  height: 50px;
  margin-left: 30px;
  display: flex;
  padding: 9px 16px;
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
`;

const Filter1 = styled.div`
  ${InterMediumOnyx14px}
  min-height: 30px;
  margin-left: 9px;
  min-width: 34px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const IcRoundFilterList = styled.img`
  width: 24px;
  height: 24px;
  align-self: center;
  margin-left: 17px;
`;

const Group8113 = styled.div`
  width: 1153px;
  height: 700px;
  position: relative;
  margin-top: 60px;
  margin-left: 57px;
`;

const Amount = styled.div`
  ${InterSemiBoldOnyx18px}
  position: absolute;
  top: 0;
  left: 948px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const CardType = styled.div`
  ${InterSemiBoldOnyx18px}
  position: absolute;
  top: 0;
  left: 658px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Address = styled.div`
  ${InterSemiBoldOnyx18px}
  position: absolute;
  top: 0;
  left: 13px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Status = styled.div`
  ${InterSemiBoldOnyx18px}
  position: absolute;
  top: 0;
  left: 403px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Border = styled.div`
  position: absolute;
  width: 1097px;
  height: 1px;
  top: 44px;
  left: 0;
  background-color: var(--mist-gray-2);
`;

const Border1 = styled.div`
  position: absolute;
  width: 1097px;
  height: 1px;
  top: 129px;
  left: 0;
  background-color: var(--mist-gray-2);
`;

const Border2 = styled.div`
  position: absolute;
  width: 1097px;
  height: 1px;
  top: 213px;
  left: 0;
  background-color: var(--mist-gray-2);
`;

const Border3 = styled.div`
  position: absolute;
  width: 1097px;
  height: 1px;
  top: 296px;
  left: 0;
  background-color: var(--mist-gray-2);
`;

const Border4 = styled.div`
  position: absolute;
  width: 1097px;
  height: 1px;
  top: 381px;
  left: 0;
  background-color: var(--mist-gray-2);
`;

const Border5 = styled.div`
  position: absolute;
  width: 1097px;
  height: 1px;
  top: 465px;
  left: 0;
  background-color: var(--mist-gray-2);
`;

const Border6 = styled.div`
  position: absolute;
  width: 1097px;
  height: 1px;
  top: 548px;
  left: 0;
  background-color: var(--mist-gray-2);
`;

const Border7 = styled.div`
  position: absolute;
  width: 1097px;
  height: 1px;
  top: 633px;
  left: 0;
  background-color: var(--mist-gray-2);
`;

const Image1 = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  top: 149px;
  left: 13px;
  background-color: var(--mist-gray);
  border-radius: 100px;
`;

const Image2 = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  top: 65px;
  left: 12px;
  background-color: var(--mist-gray);
  border-radius: 100px;
`;

const C004560 = styled.div`
  ${PoppinsNormalMako18px}
  position: absolute;
  top: 159px;
  left: 78px;
  letter-spacing: 0;
`;

const C0045601 = styled.div`
  ${PoppinsNormalMako18px}
  position: absolute;
  top: 75px;
  left: 78px;
  letter-spacing: 0;
`;

const C004562 = styled.div`
  ${PoppinsNormalMako18px}
  position: absolute;
  top: 243px;
  left: 79px;
  letter-spacing: 0;
`;

const C0045621 = styled.div`
  ${PoppinsNormalMako18px}
  position: absolute;
  top: 327px;
  left: 79px;
  letter-spacing: 0;
`;

const C0045622 = styled.div`
  ${PoppinsNormalMako18px}
  position: absolute;
  top: 411px;
  left: 79px;
  letter-spacing: 0;
`;

const C0045623 = styled.div`
  ${PoppinsNormalMako18px}
  position: absolute;
  top: 495px;
  left: 79px;
  letter-spacing: 0;
`;

const C0045624 = styled.div`
  ${PoppinsNormalMako18px}
  position: absolute;
  top: 579px;
  left: 79px;
  letter-spacing: 0;
`;

const C0045625 = styled.div`
  ${PoppinsNormalMako18px}
  position: absolute;
  top: 663px;
  left: 79px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 116px;
  height: 50px;
  top: 62px;
  left: 375px;
  border-radius: 30px;
`;

const Processing = styled.div`
  ${InterNormalOnyx16px}
  position: absolute;
  top: 15px;
  left: 16px;
  letter-spacing: 0;
`;

const Rectangle359 = styled.div`
  ${Border1pxAthensGray}
  position: absolute;
  width: 116px;
  height: 50px;
  top: 0;
  left: 0;
  border-radius: 30px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 116px;
  height: 50px;
  top: 146px;
  left: 375px;
  border-radius: 30px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 116px;
  height: 50px;
  top: 230px;
  left: 375px;
  border-radius: 30px;
`;

const Completed = styled.div`
  ${InterNormalOnyx16px}
  position: absolute;
  top: 15px;
  left: 15px;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 116px;
  height: 50px;
  top: 314px;
  left: 375px;
  border-radius: 30px;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 116px;
  height: 50px;
  top: 398px;
  left: 375px;
  border-radius: 30px;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 116px;
  height: 50px;
  top: 482px;
  left: 375px;
  border-radius: 30px;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  width: 116px;
  height: 50px;
  top: 566px;
  left: 375px;
  border-radius: 30px;
`;

const Canceled = styled.div`
  ${InterNormalOnyx16px}
  position: absolute;
  top: 15px;
  left: 23px;
  letter-spacing: 0;
`;

const OverlapGroup7 = styled.div`
  position: absolute;
  width: 116px;
  height: 50px;
  top: 650px;
  left: 375px;
  border-radius: 30px;
`;

const Price = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 72px;
  left: 966px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Price1 = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 157px;
  left: 966px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Price2 = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 240px;
  left: 966px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Price3 = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 324px;
  left: 961px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Price4 = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 409px;
  left: 962px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Price5 = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 492px;
  left: 961px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Price6 = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 576px;
  left: 960px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Price7 = styled.div`
  ${InterNormalBlack18px}
  position: absolute;
  top: 655px;
  left: 960px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Apple = styled.div`
  ${ValignTextMiddle}
  ${InterNormalOnyx18px}
            position: absolute;
  height: 24px;
  top: 75px;
  left: 676px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Amazon = styled.div`
  ${ValignTextMiddle}
  ${InterNormalOnyx18px}
            position: absolute;
  height: 24px;
  top: 159px;
  left: 666px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const AirBnb = styled.div`
  ${ValignTextMiddle}
  ${InterNormalOnyx18px}
            position: absolute;
  height: 24px;
  top: 243px;
  left: 672px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Adidas = styled.div`
  ${ValignTextMiddle}
  ${InterNormalOnyx18px}
            position: absolute;
  height: 24px;
  top: 327px;
  left: 671px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Adidas1 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalOnyx18px}
            position: absolute;
  height: 24px;
  top: 412px;
  left: 671px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Ebay = styled.div`
  ${ValignTextMiddle}
  ${InterNormalOnyx18px}
            position: absolute;
  height: 24px;
  top: 579px;
  left: 679px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const EastBay = styled.div`
  ${ValignTextMiddle}
  ${InterNormalOnyx18px}
            position: absolute;
  height: 24px;
  top: 663px;
  left: 666px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  ${InterNormalOnyx18px}
            position: absolute;
  height: 24px;
  top: 495px;
  left: 651px;
  letter-spacing: 0.1px;
  line-height: 24px;
  white-space: nowrap;
`;

const Group11 = styled.div`
  margin-top: 70px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 132px;
`;

const OverlapGroup8 = styled.div`
  ${Border1pxGraniteGray}
  height: 57px;
  display: flex;
  padding: 18px 22px;
  align-items: flex-start;
  min-width: 130px;
  border-radius: 12px;
`;

const LoadMore = styled.div`
  ${InterMediumOnyx16px}
  width: 84px;
  min-height: 19px;
  letter-spacing: 0;
`;

export default MyOrders;
