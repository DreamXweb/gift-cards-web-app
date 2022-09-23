import React, {useContext, useState} from "react";
import Icon from "../Icon";
import Footer from "../Footer";
import styled from "styled-components";
import {
  InterMediumBlack12px,
  Border1pxOnyx,
  InterBoldMineShaft22px,
  InterNormalSonicSilver16px,
  InterSemiBoldWhite14px,
  InterSemiBoldOnyx14px,
  ValignTextMiddle, InterMediumOnyx16px, InterMediumOnyx12px,
} from "../../styledMixins";
import "./LogIn.css";
import App, {MainContext, staticUrl} from "../../App";
import Header from "../Header";
import s from './style.module.scss';

function LogIn(props) {
  const {
    logInToYourAccount,
    byLogInAnAccount,
    label1,
    label2,
    dontHaveAnAccount,
    forgottenPassword,
    iconProps,
    group8076Props,
    footerProps,
  } = props;

  // noinspection JSCheckFunctionSignatures
  const {setLoggedIn} = useContext(MainContext);

  // TODO use it
  const [passwordHidden, setPasswordHidden] = useState(true);

  {/* TODO use react hook form */}
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (email === '***' && password === '***') {
      setLoggedIn(true);
      window.location = App.homepage + '/user-profile';
    } else {
      window.notify('Wrong credentials!');
    }
  }

  return (
      <div className="container-center-horizontal">
        <div className="log-in screen">
          <Header />
          <FlexRow>
            <FlexCol>
              <LogInToYourAccount>{logInToYourAccount}</LogInToYourAccount>
              <OverlapGroup2>
                <FormElements>
                  <Icon />
                  <FlexRow1>
                    <Icon className={iconProps.className} />
                    <ByLogInAnAccount>{byLogInAnAccount}</ByLogInAnAccount>
                  </FlexRow1>
                  <Button onClick={login}>
                    <Label>{label1}</Label>
                  </Button>
                  <Button1>
                    <Label1>{label2}</Label1>
                  </Button1>
                  <DontHaveAnAccount>{dontHaveAnAccount}</DontHaveAnAccount>
                </FormElements>

                <Group80761 className={`group-8076 ${group8076Props.className || ""}`}>
                  <EmailAddress className="email-address-1">Email Address</EmailAddress>

                  {/* TODO right border color */}
                  {/* TODO Enter -> password */}
                  <input type={'email'} className={s['input']} placeholder={'yourname@email.com'} onChange={e => setEmail(e.target.value)} />

                  <Password className="password">Password</Password>

                  {/* TODO make it clickable */}
                  <img id={s['eye']} src={staticUrl + "/img/vuesax-outline-eye-slash-2@2x.svg"} alt={'eye'} />

                  {/* TODO right border color */}
                  {/* TODO Enter -> submit */}
                  <input type={passwordHidden ? 'password' : 'text'} className={s['input'] + ' ' + (password.length ? '' : s['password-empty'])} placeholder={'·········'} onChange={e => setPassword(e.target.value)} />

                  <RememberMe className="remember-me">Remember me</RememberMe>
                </Group80761>

                <ForgotPassword onClick={() => window.location = App.homepage + '/forgot-password'}>{forgottenPassword}</ForgotPassword>
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

const Group80761 = styled.div`
  position: absolute;
  width: 406px;
  top: 306px;
  left: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 261px;

  &.group-8076.group-8076-1 {
    top: 0;
    left: 0;
  }
`;

const EmailAddress = styled.div`
  ${InterMediumOnyx16px}
  min-height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Password = styled.div`
  ${InterMediumOnyx16px}
  min-height: 24px;
  margin-top: 25px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const RememberMe = styled.div`
  ${InterMediumOnyx12px}
  min-height: 24px;
  margin-top: 74px;
  margin-left: 25px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const FlexRow = styled.div`
  height: 657px;
  margin-top: 49px;
  margin-left: 60px;
  display: flex;
  align-items: flex-start;
  min-width: 1140px;
`;

const FlexCol = styled.div`
  width: 513px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 657px;
`;

const LogInToYourAccount = styled.div`
  ${ValignTextMiddle}
  ${InterBoldMineShaft22px}
            height: 27px;
  margin-top: 50px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  width: 406px;
  height: 510px;
  position: relative;
  margin-top: 41px;
`;

const FormElements = styled.div`
  position: absolute;
  width: 404px;
  top: 241px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 269px;
`;

const FlexRow1 = styled.div`
  position: relative;
  margin-top: 25px;
  display: flex;
  align-items: center;
  min-width: 327px;
`;

const ByLogInAnAccount = styled.p`
  ${ValignTextMiddle}
  width: 302px;
  height: 30px;
  margin-left: 10px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: var(--sonic-silver);
  font-size: var(--font-size-xs);
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
  cursor: pointer;
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldWhite14px}
            height: 18px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Label1 = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldOnyx14px}
            height: 18px;
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

const ForgotPassword = styled.div`
  ${InterMediumBlack12px}
  position: absolute;
  top: 182px;
  left: 0;
  letter-spacing: 0;
  line-height: 24px;
  text-decoration: underline;
  white-space: nowrap;
  cursor: pointer;
`;

const FlexCol1 = styled.div`
  width: 577px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 568px;
`;

const ImagePlaceholder = styled.img`
  width: 554px;
  height: 345px;
  align-self: flex-end;
  margin-top: 194px;
`;

export default LogIn;
