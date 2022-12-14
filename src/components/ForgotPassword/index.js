import React from "react";
import Icon from "../Icon";
import Group8076 from "../Group8076";
import styled from "styled-components";
import {
  InterNormalOnyx18px,
  InterMediumOnyx16px,
  Border1pxCeleste,
  InterNormalOnyx12px,
  Border1pxOnyx,
  InterSemiBoldOnyx22px,
  InterNormalSonicSilver16px,
  InterSemiBoldWhite14px,
  InterNormalSilverSand16px,
  InterMediumBlack12px,
  InterBoldMineShaft22px,
  InterSemiBoldOnyx14px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./ForgotPassword.css";
import App, {staticUrl} from "../../App";
import Header from "../Header";
import Footer from "../Footer";

function ForgotPassword(props) {
  const {
    byLogInAnAccount,
    label1,
    label2,
    dontHaveAnAccount,
    logInToYourAccount,
    forgotYourPassword1,
    forgotYourPassword2,
    pleaseEnterYourEm,
    emailAddress,
    yourNameEmailCom,
    label3,
    label4,
    iconProps,
  } = props;

  return (
      <div className="container-center-horizontal">
        <div className="forgot-password screen">
          <OverlapGroup3>
            <ImagePlaceholder src={staticUrl + "/img/image-placeholder-1@1x.svg"} />
            <FormElements>
              <Icon />
              <FlexRow>
                <Icon className={iconProps.className} />
                <ByLogInAnAccount>{byLogInAnAccount}</ByLogInAnAccount>
              </FlexRow>
              <Button>
                <Label>{label1}</Label>
              </Button>
              <Button1>
                <Label1>{label2}</Label1>
              </Button1>
              <DontHaveAnAccount>{dontHaveAnAccount}</DontHaveAnAccount>
            </FormElements>
            <Group8076 />
            <LogInToYourAccount>{logInToYourAccount}</LogInToYourAccount>
            <Group8098 src={staticUrl + "/img/group-8098@2x.svg"} />
            <Header />
            <Footer marginTop={1044}/>
            <ForgotYourPassword>{forgotYourPassword1}</ForgotYourPassword>
            <Rectangle360 />
            <OverlapGroup2>
              <ForgotYourPassword1>{forgotYourPassword2}</ForgotYourPassword1>
              <PleaseEnterYourEm>{pleaseEnterYourEm}</PleaseEnterYourEm>
              <EmailAddress>{emailAddress}</EmailAddress>
              <OverlapGroup4>
                <YourNameEmailCom>{yourNameEmailCom}</YourNameEmailCom>
                <Rectangle72 />
              </OverlapGroup4>
              <Button2>
                <Label2>{label3}</Label2>
              </Button2>
              <Button3 onClick={() => window.location = App.homepage + '/log-in'}>
                <Label3>{label4}</Label3>
              </Button3>
            </OverlapGroup2>
          </OverlapGroup3>
        </div>
      </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 1442px;
  height: 1684px;
  position: relative;
`;

const ImagePlaceholder = styled.img`
  position: absolute;
  width: 554px;
  height: 345px;
  top: 382px;
  left: 766px;
`;

const FormElements = styled.div`
  position: absolute;
  width: 404px;
  top: 547px;
  left: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 269px;
`;

const FlexRow = styled.div`
  position: relative;
  margin-top: 25px;
  display: flex;
  align-items: center;
  min-width: 327px;
`;

const ByLogInAnAccount = styled.p`
  ${ValignTextMiddle}
  ${InterNormalOnyx12px}
            width: 302px;
  height: 30px;
  margin-left: 10px;
  letter-spacing: 0;
`;

const Button = styled.div`
  height: 55px;
  margin-top: 30px;
  display: flex;
  padding: 17px 176px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 400px;
  background-color: var(--granite-gray);
  border-radius: 12px;
`;

const Label = styled.div`
  ${ValignTextMiddle}
  height: 18px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Button1 = styled.div`
  ${Border1pxOnyx}
  height: 55px;
  margin-top: 20px;
  display: flex;
  padding: 17px 124px;
  align-items: flex-start;
  min-width: 400px;
  border-radius: 12px;
`;

const Label1 = styled.div`
  ${ValignTextMiddle}
  height: 18px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--onyx);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const DontHaveAnAccount = styled.div`
  ${ValignTextMiddle}
  ${InterNormalSonicSilver16px}
            height: 19px;
  align-self: center;
  margin-top: 20px;
  margin-left: 3px;
  min-width: 177px;
  letter-spacing: 0;
  text-decoration: underline;
`;

const LogInToYourAccount = styled.div`
  ${ValignTextMiddle}
  ${InterBoldMineShaft22px}
            position: absolute;
  height: 27px;
  top: 238px;
  left: 180px;
  letter-spacing: 0;
`;

const Group8098 = styled.img`
  position: absolute;
  width: 151px;
  height: 7px;
  top: 445px;
  left: 196px;
`;

const ForgotYourPassword = styled.div`
  ${InterMediumBlack12px}
  position: absolute;
  top: 488px;
  left: 180px;
  letter-spacing: 0;
  line-height: 24px;
  text-decoration: underline;
  white-space: nowrap;
`;

const Rectangle360 = styled.div`
  position: absolute;
  width: 1440px;
  height: 1684px;
  top: 0;
  left: 0;
  background-color: #393939b2;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 572px;
  top: 607px;
  left: 434px;
  display: flex;
  flex-direction: column;
  padding: 53px 73px;
  align-items: flex-start;
  min-height: 471px;
  background-color: var(--white);
  border-radius: 4px;
`;

const ForgotYourPassword1 = styled.div`
  ${InterSemiBoldOnyx22px}
  min-height: 16px;
  align-self: center;
  min-width: 246px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const PleaseEnterYourEm = styled.div`
  ${InterNormalOnyx18px}
  width: 421px;
  min-height: 46px;
  align-self: center;
  margin-top: 20px;
  margin-left: 1px;
  letter-spacing: 0;
  line-height: 23.4px;
`;

const EmailAddress = styled.div`
  ${InterMediumOnyx16px}
  min-height: 24px;
  margin-top: 40px;
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

const YourNameEmailCom = styled.div`
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

const Button2 = styled.div`
  height: 55px;
  margin-top: 40px;
  margin-left: 3px;
  display: flex;
  padding: 17px 136px;
  align-items: flex-start;
  min-width: 400px;
  background-color: var(--granite-gray);
  border-radius: 12px;
`;

const Label2 = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldWhite14px}
            height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Label3 = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldOnyx14px}
            height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Button3 = styled.div`
  ${Border1pxOnyx}
  height: 55px;
  margin-top: 20px;
  margin-left: 3px;
  display: flex;
  padding: 17px 144px;
  align-items: flex-start;
  min-width: 400px;
  border-radius: 12px;
  cursor: pointer;
`;

export default ForgotPassword;
