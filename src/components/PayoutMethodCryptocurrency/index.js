import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import {
  InterMediumOnyx16px,
  InterBoldOnyx22px,
  Border1pxOnyx,
  InterSemiBoldOnyx16px,
  InterMediumConcrete20px,
  MulishNormalSonicSilver16px,
  Border2pxSonicSilver2,
  InterBoldOnyx24px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./PayoutMethodCryptocurrency.css";
import {staticUrl} from "../../App";

function PayoutMethodCryptocurrency(props) {
  const {
    sellGiftCards,
    usdt,
    ethereum,
    bitcoin,
    place,
    cryptoAddress,
    payoutMethod,
    cryptoAccount,
    verify,
    placeholder,
    buyGiftCards,
    headerProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="payout-method-cryptocurrency screen">
        <Header className={headerProps.className} />
        <FlexRow>
          <FlexCol>
            <SellGiftCards>{sellGiftCards}</SellGiftCards>
            <OverlapGroup2>
              <USDT>{usdt}</USDT>
              <Ethereum>{ethereum}</Ethereum>
              <Bitcoin>{bitcoin}</Bitcoin>
              <Place>{place}</Place>
              <CryptoAddress>{cryptoAddress}</CryptoAddress>
              <OverlapGroup1>
                <PayoutMethod>{payoutMethod}</PayoutMethod>
                <CryptoAccount>{cryptoAccount}</CryptoAccount>
                <Rectangle7 />
                <OverlapGroup>
                  <Verify>{verify}</Verify>
                </OverlapGroup>
                <Rectangle8 />
              </OverlapGroup1>
              <Placeholder>{placeholder}</Placeholder>
            </OverlapGroup2>
          </FlexCol>
          <FlexCol1>
            <BuyGiftCards>{buyGiftCards}</BuyGiftCards>
            <ImagePlaceholder src={staticUrl + "/img/image-placeholder-1@1x.svg"} />
          </FlexCol1>
        </FlexRow>
        <Footer className={footerProps.className} />
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 651px;
  margin-top: 49px;
  display: flex;
  align-items: flex-start;
  min-width: 1300px;
`;

const FlexCol = styled.div`
  width: 664px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 651px;
`;

const SellGiftCards = styled.div`
  ${InterBoldOnyx24px}
  width: 169px;
  min-height: 29px;
  align-self: flex-end;
  margin-right: 41px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  width: 652px;
  height: 571px;
  position: relative;
  margin-top: 51px;
  border-radius: 10px;
`;

const USDT = styled.div`
  ${InterMediumOnyx16px}
  position: absolute;
  top: 97px;
  left: 42px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Ethereum = styled.div`
  ${InterMediumOnyx16px}
  position: absolute;
  top: 229px;
  left: 40px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Bitcoin = styled.div`
  ${InterMediumOnyx16px}
  position: absolute;
  top: 185px;
  left: 42px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Place = styled.div`
  ${InterMediumOnyx16px}
  position: absolute;
  top: 141px;
  left: 42px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const CryptoAddress = styled.div`
  ${InterSemiBoldOnyx16px}
  position: absolute;
  top: 370px;
  left: 40px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 652px;
  height: 571px;
  top: 0;
  left: 0;
  border-radius: 10px;
`;

const Rectangle7 = styled.div`
  ${Border2pxSonicSilver2}
  position: absolute;
  width: 652px;
  height: 571px;
  top: 0;
  left: 0;
  border-radius: 10px;
`;

const PayoutMethod = styled.div`
  ${InterBoldOnyx22px}
  position: absolute;
  top: 30px;
  left: 40px;
  letter-spacing: 0;
`;

const CryptoAccount = styled.div`
  ${InterBoldOnyx22px}
  position: absolute;
  top: 313px;
  left: 40px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 55px;
  top: 486px;
  left: 40px;
  display: flex;
  padding: 15px 61px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 180px;
  background-color: var(--granite-gray);
  border-radius: 10px;
`;

const Verify = styled.div`
  ${InterMediumConcrete20px}
  min-height: 24px;
  min-width: 57px;
  letter-spacing: 0;
`;

const Rectangle8 = styled.div`
  ${Border1pxOnyx}
  position: absolute;
  width: 365px;
  height: 50px;
  top: 406px;
  left: 40px;
  border-radius: 8px;
`;

const Placeholder = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalSonicSilver16px}
            position: absolute;
  height: 21px;
  top: 420px;
  left: 56px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const FlexCol1 = styled.div`
  width: 627px;
  margin-left: 9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 518px;
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
  margin-top: 144px;
`;

export default PayoutMethodCryptocurrency;
