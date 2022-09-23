import React, {useState} from "react";
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
  ValignTextMiddle,
} from "../../styledMixins";
import "./PayoutMethodACH.css";
import {staticUrl} from "../../App";
import Header2 from "../Header";

function PayoutMethod(props) {
  const {
    usdt,
    ethereum,
    bitcoin,
    place,
    routingNumber,
    accountNumber,
    payoutMethod,
    bankAccount,
    verify,
    placeholder1,
    placeholder2,
    footerProps,
  } = props;

  // USDT, ACH, Bitcoin, Ethereum
  const [paymentMethod, setPaymentMethod] = useState('USDT');

  const ach = paymentMethod === 'ACH';

  return (
    <div className="container-center-horizontal">
      <div className="payout-method-ach screen">
        <Header2 />
        <FlexRow>
          <FlexCol>
            <OverlapGroup2>
              <USDT>{usdt}</USDT>
              <Ethereum>{ethereum}</Ethereum>
              <Bitcoin>{bitcoin}</Bitcoin>
              <Place>{place}</Place>
              <RoutingNumber>{routingNumber}</RoutingNumber>
              <AccountNumber>{accountNumber}</AccountNumber>
              <OverlapGroup1>
                <PayoutMethodContainer>{payoutMethod}</PayoutMethodContainer>
                <BankAccount>{bankAccount}</BankAccount>
                <Rectangle7 />
                <OverlapGroup>
                  <Verify>{verify}</Verify>
                </OverlapGroup>
                <Rectangle8 />
                <Rectangle9 />
              </OverlapGroup1>
              <Placeholder>{placeholder1}</Placeholder>
              <Placeholder1>{placeholder2}</Placeholder1>
            </OverlapGroup2>
          </FlexCol>
          <FlexCol1>
            <ImagePlaceholder src={staticUrl + "/img/image-placeholder-1@1x.svg"} />
          </FlexCol1>
        </FlexRow>
        <Footer className={footerProps.className} />
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 758px;
  margin-top: 49px;
  display: flex;
  align-items: flex-start;
  min-width: 1300px;
`;

const FlexCol = styled.div`
  width: 668px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 758px;
`;

const OverlapGroup2 = styled.div`
  width: 652px;
  height: 678px;
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

const RoutingNumber = styled.div`
  ${InterSemiBoldOnyx16px}
  position: absolute;
  top: 370px;
  left: 40px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const AccountNumber = styled.div`
  ${InterSemiBoldOnyx16px}
  position: absolute;
  top: 477px;
  left: 40px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 652px;
  height: 678px;
  top: 0;
  left: 0;
  border-radius: 10px;
`;

const Rectangle7 = styled.div`
  ${Border2pxSonicSilver2}
  position: absolute;
  width: 652px;
  height: 678px;
  top: 0;
  left: 0;
  border-radius: 10px;
`;

const PayoutMethodContainer = styled.div`
  ${InterBoldOnyx22px}
  position: absolute;
  top: 30px;
  left: 40px;
  letter-spacing: 0;
`;

const BankAccount = styled.div`
  ${InterBoldOnyx22px}
  position: absolute;
  top: 313px;
  left: 40px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 55px;
  top: 593px;
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

const Rectangle9 = styled.div`
  ${Border1pxOnyx}
  position: absolute;
  width: 365px;
  height: 50px;
  top: 513px;
  left: 40px;
  border-radius: 8px;
`;

const Placeholder = styled.div`
  ${ValignTextMiddle}
  ${MulishNormalSonicSilver16px}
            position: absolute;
  height: 21px;
  top: 528px;
  left: 56px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const Placeholder1 = styled.div`
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
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 518px;
`;

const ImagePlaceholder = styled.img`
  width: 554px;
  height: 345px;
  align-self: flex-end;
  margin-top: 144px;
`;

export default PayoutMethod;
