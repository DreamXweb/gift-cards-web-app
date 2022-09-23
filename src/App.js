import React, {createContext, useEffect, useState} from "react";

// TODO kill the warning
// noinspection ES6CheckImport
import {Route, BrowserRouter, Routes} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import MainPage from "./components/MainPage";
import LogIn from "./components/LogIn";
import AccountRegistration from "./components/AccountRegistration";
import PayoutMethodContainer from "./components/PayoutMethod";
import UserProfile from "./components/UserProfile";
import MyOrders from "./components/MyOrders";
import EditProfile from "./components/EditProfile";
import BuyGiftCardsPage from "./components/BuyGiftCardsPage";
import CheckoutPage from "./components/CheckoutPage";
import SellGiftCardsPage from "./components/SellGiftCardsPage";
import packageJson from '../package.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PartnersProgram from "./components/PartnersProgram";

window.notify = (message) => toast(message);

export const staticUrl = 'https://dreamxweb.com/cardsicle/static';

export const MainContext = createContext(null);

function App() {

    App.homepage = packageJson.homepage;

    // TODO save needed user data ...
    const [loggedIn, setLoggedIn] = useState('true' === localStorage.getItem('loggedIn'));

    useEffect(() => {
        localStorage.setItem('loggedIn', loggedIn + '')
    }, [loggedIn]);

    return (
        <MainContext.Provider value={{loggedIn, setLoggedIn}}>
            <BrowserRouter>
                <Routes>
                    <Route path={App.homepage + '/'}>
                        <Route index element={<MainPage {...mainPageData} />} />
                        <Route path={'registration'} element={<AccountRegistration {...accountRegistrationData} />} />

                        {/* TODO it is modal window */}
                        <Route path={'forgot-password'} element={<ForgotPassword {...forgotPasswordData} />} />

                        <Route path={'log-in'} element={<LogIn {...logInData} />} />
                        <Route path={'payout-method'} element={<PayoutMethodContainer {...payoutMethodACHData} />} />

                        <Route path={'user-profile'} element={<UserProfile {...userProfileData} />} />
                        <Route path={'my-orders'} element={<MyOrders {...myOrdersData} />} />

                        {/* TODO it is functionality of user-profile */}
                        <Route path={'edit-profile'} element={<EditProfile {...editProfileData} />} />

                        <Route path={'buy-gift-cards-page'} element={<BuyGiftCardsPage {...buyGiftCardsPageData} />} />
                        <Route path={'checkout-page'} element={<CheckoutPage {...checkoutPageData} />} />
                        <Route path={'sell-gift-cards-page'} element={<SellGiftCardsPage {...sellGiftCardsPageData} />} />

                        <Route path={'partners-program'} element={<PartnersProgram {...partnersProgramData} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </MainContext.Provider>
    );
}

export default App;
const icon2Data = {
    className: "icon-1",
};

const partnersProgramData = {
    sellGiftCards1: "Sell Gift Cards",
    buyGiftCards1: "Buy Gift Cards",
    ifYouOrYourCompany: "If you or your company sells gift cards in bulk, we are interested in partnering with you",
    benefitsOfPartnerProgram: "Benefits of Partner Program",
    fasterPayout: "Faster Payout",
    higherPercentages: "Higher Percentages",
    priorityCustomerService: "Priority Customer Service",
    applicationSubmission: "Application submission",
    lastName: "Last Name",
    surname: "Miller",
    companyName: "Company Name",
    enterCompanyName: "Enter Company Name",
    address: "Address",
    enterAddress: "Enter Address",
    emailAddress: "Email Address",
    yourNameEmailCom1: "yourname@email.com",
    messageBox: "Message Box",
    yourNameEmailCom2: "yourname@email.com",
    phoneNumber: "Phone Number",
    text1: "+123",
    number1: "800",
    number2: "9700",
    number3: "2738",
    whenApplyingYouAr: "When applying you are agreeing to our Terms and Conditions and Privacy Policy",
    place: "SEND",
    cardsicle: "Cardsicle",
    company: "Company",
    sellGiftCards2: "Sell Gift Cards",
    buyGiftCards2: "Buy Gift Cards",
    aboutUs: "About Us",
    refundAndCancellationPolicy: "Refund and Cancellation Policy",
    faq: "FAQ",
    partnersProgram: "Partners Program",
    career: "Career",
    contactingUs: "Contacting us",
    ifYouHaveAnyQues: "If you have any questions regarding this privacy policy you may contact us at:",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    supportCardsicleCom: "support@cardsicle.com",
    group8080: "https://anima-uploads.s3.amazonaws.com/projects/62c832c763ed96b1e323f642/releases/62c834a54787cdaec3d8b7b7/img/vector@2x.png",
};

const forgotPasswordData = {
    byLogInAnAccount: "By Log In an account you are agreeing to our Terms and Conditions and Privacy Policy",
    label1: "LOG IN",
    label2: "LOG IN WITH GOOGLE",
    dontHaveAnAccount: "Don’t have an account?",
    logInToYourAccount: "Log in to your account",
    cardsicle: "GiftCards",
    company: "Company",
    sellGiftCards1: "Sell Gift Cards",
    buyGiftCards1: "Buy Gift Cards",
    aboutUs: "About Us",
    refundAndCancellationPolicy: "Refund and Cancellation Policy",
    faq: "FAQ",
    partnersProgram: "Partners Program",
    contactingUs: "Contacting us",
    ifYouHaveAnyQues: "If you have any questions regarding this privacy policy you may contact us at:",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    supportCardsicleCom: "support@cardsicle.com",
    sellGiftCards2: "Sell Gift Cards",
    buyGiftCards2: "Buy Gift Cards",
    forgotYourPassword1: "Forgot your password?",
    forgotYourPassword2: "Forgot Your Password?",
    pleaseEnterYourEm: "Please enter your email Address. You will receive a link to create a new password via email.",
    emailAddress: "Email Address",
    yourNameEmailCom: "yourname@email.com",
    label3: "RESET PASSWORD",
    label4: "BACK TO LOG IN",
    iconProps: icon2Data,
};

const card41Data = {
    service: "Service",
    ourSimpleAndPractical: "Our simple and practical platform makes it easy for you to turn your cards into cash.",
};

const card42Data = {
    service: "Satisfaction",
    ourSimpleAndPractical: <React.Fragment>Your time is valuable. Our customer service is here to address all your concerns in<br />a prompt and professional manner.</React.Fragment>,
    className: "card-3",
};

const mainPageData = {
    title: "Get cash for your gift cards fast",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sellGiftCards2: "Sell Gift Cards",
    signUp: "Buy Gift Cards",
    submitYourGiftCard: "Submit your gift card",
    getAQuoteInstantly: "Get a quote instantly",
    getPaidInCrypto: "Get paid in crypto",
    giftCardValueCalculator: "Gift Card Value calculator",
    calculate: "Calculate",
    proceed: "Proceed",
    sellCard: "SELL CARD",
    buyCard: "BUY CARD",
    label: "Gift Card Type",
    label2: "Amount",
    label3: "Amount payable",
    number1: "50",
    appleGiftCard: "Apple Gift Card",
    number2: "100",
    ourValues: "Our Values",
    security: "Security",
    weMonitorEachTran: <React.Fragment>We monitor each transaction ensuring that you can sell your gift cards with complete <br />security and confidence.</React.Fragment>,
    cardsicle1: "Learn More",
    loadMore: "Swap your gift cards for cash",
    submitYourGiftCar: "Submit your gift card details. Check out our offer. Click accept and turn your card into cash...or crypto!",
    logIn: "Buy Gift Cards",
    swapYourGiftCardsForCash: "Buy gift cards and get cash back instantly",
    browseYourFavorite: "Browse your Favorite brands to score big cash back savings that can be applied toward your next purchase.",
    buyGiftCards3: "Sell Gift Cards",
    popularRetailers: "Popular Retailers",
    apple: "Apple",
    amazon: "Amazon",
    adidas: "Adidas",
    sellGiftCards3: "American Express",
    airbnb: "AirBnb",
    americanExpress: "Best Buy",
    sellGiftCards1: "80% Payout",
    buyGiftCards1: "75% Payout",
    aboutUs1: "60% Payout",
    refundAndCancellationPolicy1: "82% Payout",
    faq1: "60% Payout",
    x80Payout: "75% Payout",
    buyGiftCardsAndG: "Sell gift cards online from top brands",
    surname: "We accept gift cards from the coolest retailers. Browse our Available Cards page to find your unwanted or lightly used gift cards. Plus, check your card balance at the same time!",
    buyGiftCards2: "See Available Cards",
    card41Props: card41Data,
    card42Props: card42Data,
};

const header3Data = {
    className: "header-1",
};

const icon4Data = {
    className: "icon-3",
};

const group80763Data = {
    className: "group-8076-1",
};

const footer2Data = {
    className: "footer-1",
};

const logInData = {
    sellGiftCards: "Sell Gift Cards",
    logInToYourAccount: "Log in to your account",
    byLogInAnAccount: "By Log In an account you are agreeing to our Terms and Conditions and Privacy Policy",
    label1: "LOG IN",
    label2: "LOG IN WITH GOOGLE",
    dontHaveAnAccount: "Don’t have an account?",
    forgottenPassword: "Forgot password",
    buyGiftCards: "Buy Gift Cards",
    headerProps: header3Data,
    iconProps: icon4Data,
    group8076Props: group80763Data,
    footerProps: footer2Data,
};

const header4Data = {
    className: "header-2",
};

const accountRegistrationData = {
    sellGiftCards1: "Sell Gift Cards",
    accountRegistration: "Account Registration",
    firstName: "First Name",
    name: "Mark",
    lastName: "Last Name",
    surname: "Miller",
    emailAddress: "Email Address",
    yourNameEmailCom: "yourname@email.com",
    password: "Password",
    confirmPassword: "Confirm Password",
    placeholder: "1234G6578Y",
    buyGiftCards1: "Buy Gift Cards",
    byCreatingAnAccount: "By creating an account you are agreeing to our Terms and Conditions and Privacy Policy",
    label: "SIGN UP",
    alreadyHaveAnAccount: "Already have an account?",
    phoneNumberOptional: "Phone Number (Optional)",
    text1: "+123",
    number1: "800",
    number2: "9700",
    number3: "2738",
    cardsicle: "GiftCards",
    company: "Company",
    sellGiftCards2: "Sell Gift Cards",
    buyGiftCards2: "Buy Gift Cards",
    aboutUs: "About Us",
    refundAndCancellationPolicy: "Refund and Cancellation Policy",
    faq: "FAQ",
    partnersProgram: "Partners Program",
    contactingUs: "Contacting us",
    ifYouHaveAnyQues: "If you have any questions regarding this privacy policy you may contact us at:",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    supportCardsicleCom: "support@cardsicle.com",
    headerProps: header4Data,
};

const header5Data = {
    className: "header-3",
};

const radioButton2Data = {
    className: "radio-button-1",
};

const radioButton3Data = {
    className: "radio-button-2",
};

const footer3Data = {
    className: "footer-2",
};

const payoutMethodACHData = {
    sellGiftCards: "Sell Gift Cards",
    usdt: "USDT",
    ethereum: "Ethereum",
    bitcoin: "Bitcoin",
    place: "ACH",
    routingNumber: "Routing Number",
    accountNumber: "Account Number",
    payoutMethod: "Payout method",
    bankAccount: "Bank Account",
    verify: "Verify",
    placeholder1: "123446578943214",
    placeholder2: "135790446578943",
    buyGiftCards: "Buy Gift Cards",
    headerProps: header5Data,
    radioButton1Props: radioButton2Data,
    radioButton2Props: radioButton3Data,
    footerProps: footer3Data,
};

const userProfileData = {
    myProfile1: "My Profile",
    myOrders: "My Orders",
    name1: "Mark Miller",
    editProfile: "Edit Profile",
    myProfile2: "My Profile",
    personalInformation: "Personal information",
    firstName: "First Name",
    name2: "Mark",
    lastName: "Last Name",
    surname: "Miller",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    yourNameEmailCom: "yourname@email.com",
    changePassword: "Change Password",
    bankAccount: "Bank Account",
    routingNumber: "Routing Number",
    placeholder1: "135790446578943",
    accountNumber: "Account Number",
    placeholder2: "123446578943214",
    cryptoAccount: "Crypto Account",
    cryptoAddress: "Crypto Address",
    placeholder3: "135790446578943",
    cardsicle: "GiftCards",
    company: "Company",
    sellGiftCards: "Sell Gift Cards",
    buyGiftCards: "Buy Gift Cards",
    aboutUs: "About Us",
    refundAndCancellationPolicy: "Refund and Cancellation Policy",
    faq: "FAQ",
    partnersProgram: "Partners Program",
    contactingUs: "Contacting us",
    ifYouHaveAnyQues: "If you have any questions regarding this privacy policy you may contact us at:",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    supportCardsicleCom: "support@cardsicle.com",
};

const header33Data = {
    className: "header-9",
};

const image2Data = {
    className: "image-4",
};

const image3Data = {
    className: "image-5",
};

const image4Data = {
    className: "image-6",
};

const image5Data = {
    className: "image-7",
};

const image6Data = {
    className: "image-8",
};

const footer5Data = {
    className: "footer-4",
};

const myOrdersData = {
    total25Orders: "Total: 25 orders",
    sortByAmount: "Sort by: Amount",
    filter: "Filter",
    amount: "Amount",
    cardType: "Card Type",
    address: "Order Number",
    status: "Status",
    c0045601: "#C-004560",
    c0045602: "#C-004560",
    c0045621: "#C-004562",
    c0045622: "#C-004562",
    c0045623: "#C-004562",
    c0045624: "#C-004562",
    c0045625: "#C-004562",
    c0045626: "#C-004562",
    processing1: "processing",
    processing2: "processing",
    completed1: " completed",
    completed2: " completed",
    processing3: "processing",
    processing4: "processing",
    canceled1: "canceled",
    canceled2: "canceled",
    price1: "$50",
    price2: "$70",
    price3: "$80",
    price4: "$100",
    price5: "$120",
    price6: "$150",
    price7: "$200",
    price8: "$500",
    apple: "Apple",
    amazon: "Amazon",
    airbnb: "AirBnb",
    adidas1: "Adidas",
    adidas2: "Adidas",
    ebay: "Ebay",
    eastBay: "eastBay",
    name: "Kelvin Klein",
    loadMore: "Load More",
    header3Props: header33Data,
    image1Props: image2Data,
    image2Props: image3Data,
    image3Props: image4Data,
    image4Props: image5Data,
    image5Props: image6Data,
    footerProps: footer5Data,
};

const header34Data = {
    className: "header-10",
};

const group81152Data = {
    className: "group-8118",
};

const editProfileData = {
    place: "Change",
    name1: "Mark Miller",
    editProfile: "Edit Profile",
    myProfile: "My Profile",
    personalInformation: "Personal information",
    firstName: "First Name",
    name2: "Mark",
    lastName: "Last Name",
    surname: "Miller",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    yourNameEmailCom: "yourname@email.com",
    changePassword: "Change Password",
    bankAccount: "Bank Account",
    routingNumber: "Routing Number",
    placeholder1: "135790446578943",
    accountNumber: "Account Number",
    placeholder2: "123446578943214",
    cryptoAccount: "Crypto Account",
    cryptoAddress: "Crypto Address",
    placeholder3: "135790446578943",
    cardsicle: "GiftCards",
    company: "Company",
    sellGiftCards: "Sell Gift Cards",
    buyGiftCards: "Buy Gift Cards",
    aboutUs: "About Us",
    refundAndCancellationPolicy: "Refund and Cancellation Policy",
    faq: "FAQ",
    partnersProgram: "Partners Program",
    contactingUs: "Contacting us",
    ifYouHaveAnyQues: "If you have any questions regarding this privacy policy you may contact us at:",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    supportCardsicleCom: "support@cardsicle.com",
    header3Props: header34Data,
    group8115Props: group81152Data,
};

const header22Data = {
    className: "header-6",
};

const rightThumb2Data = {
    className: "right-thumb-1",
};

const pageMaster2Data = {
    children: "1",
};

const pageActiveData = {
    pageMaster2Props: pageMaster2Data,
};

const pageMaster31Data = {
    children: "2",
};

const pageDefault1Data = {
    pageMaster3Props: pageMaster31Data,
};

const pageMaster32Data = {
    children: "...",
};

const pageDefault2Data = {
    pageMaster3Props: pageMaster32Data,
};

const pageMaster33Data = {
    children: "9",
};

const pageDefault3Data = {
    pageMaster3Props: pageMaster33Data,
};

const pageMaster34Data = {
    children: "10",
};

const pageDefault4Data = {
    pageMaster3Props: pageMaster34Data,
};

const icCaratLeft2Data = {
    className: "ic-carat-right",
};

const icCaratRightData = {
    icCaratLeftProps: icCaratLeft2Data,
};

const pageMaster4Data = {
    icCaratRightProps: icCaratRightData,
};

const footer6Data = {
    className: "footer-5",
};

const buyGiftCardsPageData = {
    buyGiftCards: "Buy Gift Cards",
    searchBrands: "Search brands...",
    sortBy: "Sort By:",
    nameAZ: "Name A-Z",
    byCashback: "By Cashback",
    percent1: "0%",
    percent2: "10%",
    surname: "Price Range:",
    x25AndUnder: "$25 and Under",
    text4: "$25 - $50",
    text5: "$50 - $100",
    text6: "$100 - $250",
    text7: "$250 - $500",
    all: "All",
    categories: "Categories",
    place: "Beauty",
    restaurantsEntertainment: "Restaurants & Entertainment",
    sportingGoods: "Sporting Goods",
    homeImprovement: "Home Improvement",
    subscriptions: "Subscriptions",
    travel: "Travel",
    electronics: "Electronics",
    pets: "Pets",
    retail: "Retail",
    miscellaneous: "Miscellaneous",
    apple: "Apple",
    amazon: "Amazon",
    adidas: "Adidas",
    americanExpress: "American Express",
    x80Payout: "80% Payout",
    x75Payout: "75% Payout",
    x60Payout1: "60% Payout",
    x82Payout: "82% Payout",
    airbnb: "AirBnb",
    costco: "Costco",
    dicksSportingGoods: "Dick’s Sporting Goods",
    name: "Kelvin Klein",
    x60Payout2: "60% Payout",
    ebay: "Ebay",
    x97Payout: "97% Payout",
    x95Payout1: "95% Payout",
    eastBay: "eastBay",
    x95Payout2: "95% Payout",
    x98Payout: "98% Payout",
    gameStop: "gameStop",
    x95Payout3: "95% Payout",
    x95Payout4: "95% Payout",
    googlePlay: "Google Play",
    x95Payout5: "95% Payout",
    kohlS: "Kohl's",
    nike: "Nike",
    ikea: "Ikea",
    nordstrom: "Nordstrom",
    x94Payout: "94% Payout",
    x95Payout6: "95% Payout",
    x95Payout7: "95% Payout",
    x95Payout8: "95% Payout",
    header2Props: header22Data,
    rightThumbProps: rightThumb2Data,
    pageActiveProps: pageActiveData,
    pageDefault1Props: pageDefault1Data,
    pageDefault2Props: pageDefault2Data,
    pageDefault3Props: pageDefault3Data,
    pageDefault4Props: pageDefault4Data,
    pageMaster4Props: pageMaster4Data,
    footerProps: footer6Data,
};

const header35Data = {
    className: "header-11",
};

const footer7Data = {
    className: "footer-6",
};

const checkoutPageData = {
    checkout: "Checkout",
    card1: "Card 1",
    price1: "100$",
    loremIpsumDolorSitAmet1: "Lorem ipsum dolor sit amet",
    card2: "Card 2",
    price2: "200$",
    loremIpsumDolorSitAmet2: "Lorem ipsum dolor sit amet",
    total: "Total",
    personalDetails: "Personal  Details",
    fullName: "Full Name",
    name: "Mark Miller",
    billingAddress: "Billing Address",
    city: "City",
    zipCode: "ZIP Code",
    place1: "Chicago",
    number: "45612",
    country: "Country",
    place2: "USA",
    creditCardDetails: "Credit Card Details",
    nameOnCard: "Name on Card",
    enterNameOnCard: "Enter Name on Card",
    cardNumber: "Card Number",
    enterCardNumber: "Enter Card Number",
    expirationDate: "Expiration Date",
    price3: "300$",
    mm: "MM",
    text8: "/",
    yy: "YY",
    cvc1: "CVC",
    cvc2: "CVC",
    label1: "BACK",
    label2: "CONFIRM",
    header3Props: header35Data,
    footerProps: footer7Data,
};

const footer8Data = {
    className: "footer-7",
};

const sellGiftCardsPageData = {
    youFoundTheBestP: "You found the best place to sell gift cards online",
    chooseFromTheMost: "Choose from the most popular retailers: (payout percentages included)",
    calculate: "Calculate",
    addCards: "Add Cards",
    sellCard: "SELL CARD",
    buyCard: "BUY CARD",
    label1: "Gift Card Type",
    label2: "Amount",
    label3: "Amount payable",
    number1: "50",
    appleGiftCard: "Apple Gift Card",
    number2: "100",
    popularRetailers: "Popular Retailers",
    apple: "Apple",
    x80Payout: "80% Payout",
    amazon: "Amazon",
    x75Payout1: "75% Payout",
    adidas: "Adidas",
    x60Payout1: "60% Payout",
    americanExpress: "American Express",
    x82Payout: "82% Payout",
    airbnb: "AirBnb",
    x60Payout2: "60% Payout",
    surname: "Best Buy",
    x75Payout2: "75% Payout",
    sellGiftCardsOnlineFromTopBrands: "Sell gift cards online from top brands",
    weAcceptGiftCards: "We accept gift cards from the coolest retailers. Browse our Available Cards page to find your unwanted or lightly used gift cards. Plus, check your card balance at the same time!",
    seeAvailableCards: "See Available Cards",
    footerProps: footer8Data,
};

