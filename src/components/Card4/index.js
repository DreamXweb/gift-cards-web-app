import React from "react";
import styled from "styled-components";
import {
  InterSemiBoldOnyx24px,
  InterNormalFirefly16px,
  InterNormalOnyx16px,
  ValignTextMiddle,
} from "../../styledMixins";
import {staticUrl} from "../../App";


function Card4(props) {
  const { service, ourSimpleAndPractical, className } = props;

  return (
    <Card41 className={`card-4 ${className || ""}`}>
      <VueSaxOutLineData className="VueSaxOutLineData" src={staticUrl + "/img/vuesax-outline-data@2x.svg"} />
      <Frame1366 className="frame-1366">
        <Service className="service">{service}</Service>
        <Rectangle342 className="rectangle-342-1" />
      </Frame1366>
      <OurSimpleAndPractical>{ourSimpleAndPractical}</OurSimpleAndPractical>
      <LearnMore className="learn-more-1">
        <LoadMore className="load-more-1">Learn More</LoadMore>
        <Vector className="vector-4" src={staticUrl + "/img/vector@2x.svg"} />
      </LearnMore>
    </Card41>
  );
}

const Card41 = styled.div`
  width: 328px;
  margin-left: 76px;
  display: flex;
  flex-direction: column;
  padding: 21px 0;
  align-items: flex-start;
  min-height: 481px;
  background-color: var(--gray-nurse);
  border-radius: 10px;

  &.card-4.card-3 {
    padding: 21px 17px;
  }
`;

const VueSaxOutLineData = styled.img`
  width: 73px;
  height: 73px;
  align-self: center;
  margin-top: 64px;
  margin-left: 1px;
`;

const Frame1366 = styled.div`
  width: 97px;
  margin-top: 73px;
  margin-left: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 35px;
`;

const Service = styled.div`
  ${InterSemiBoldOnyx24px}
  margin-top: -1px;
  min-height: 32px;
  letter-spacing: -0.1px;
  line-height: 32px;
  white-space: nowrap;
`;

const Rectangle342 = styled.div`
  width: 97px;
  height: 2px;
  margin-top: 2px;
  background-color: var(--onyx);
  opacity: 0.8;
`;

const OurSimpleAndPractical = styled.p`
  ${InterNormalOnyx16px}
  width: 238px;
  min-height: 72px;
  align-self: center;
  margin-top: 24px;
  letter-spacing: 0.1px;
  line-height: 24px;
`;

const LearnMore = styled.div`
  height: 60px;
  margin-top: 38px;
  margin-left: 45px;
  display: flex;
  padding: 15px 0;
  align-items: flex-end;
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
  margin-bottom: 3px;
`;

export default Card4;
