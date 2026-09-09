import React, { useState } from "react";
import PropTypes from 'prop-types';
import VezeetaLogo from './assets/download.svg';
import CVVLogo from './assets/cvv.png';
import {
    ErrorMsg,
    CardLogo,
    SubmitBtnMsg,
    SubmitBtn,
    CardValidationInput,
    InputField,
    FieldLabel,
    FieldContainer,
    InputFieldsContainer,
    ContainerLabelDescritpion,
    ContainerLabel,
    ContentContainer,
    Logo,
    InnerContainer,
    Container
} from './CreditCard.style';
import { getCardLogo, isNumber, isValidDate, isValidCreditCardNumber } from './helper';

const CerditCard = ({ ...props }) => {
    const {
        amount,
        currency,
        payfortMerchantPageLink,
        transactionKey,
        language,
        merchantIdentifier,
        accessCode,
        servicesCommand,
        returnUrl,
        merchantReference,
        signature,
        token,
        rememberMe,
    } = props;
    const [validation, setValidation] = useState({
        isValidCVV: true,
        isValidCardNumber: true,
        isValidName: true,
        isValidDate: true,
    });
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const [cardInfo, setCardInfo] = useState({
        cvv: '',
        name: '',
        expiryDate: '',
        cardNumber: '',
    });

    const onChangeCVV = val => {
        if (val.length < 4 && isNumber(val)) {
            setCardInfo({
                ...cardInfo,
                cvv: val,
            });
        }
    }

    const onChangeName = val => {
        setCardInfo({
            ...cardInfo,
            name: val,
        });
    }

    const onChangeCardNumber = val => {
        if (val.length < 17 && isNumber(val)) {
            setCardInfo({
                ...cardInfo,
                cardNumber: val,
            });
        }
    }

    const onChangeExpiry = val => {
        setCardInfo({
            ...cardInfo,
            expiryDate: val,
        });
    }

    const isValid = () => {
        const isValidCVV = cardInfo.cvv.length === 3;
        const isValidName = !!cardInfo.name;
        const isValidCardNumber = isValidCreditCardNumber(cardInfo.cardNumber);
        const isValidExpiryDate = isValidDate(cardInfo.expiryDate);

        setValidation({
            isValidCVV: isValidCVV,
            isValidCardNumber: isValidCardNumber,
            isValidName: isValidName,
            isValidDate: isValidExpiryDate,
        });
        return  isValidCVV && isValidName && isValidCardNumber && isValidExpiryDate;
    }

    const onSubmit = () => {
        // todo
        if (isValid()) {
            /* action={payfortMerchantPageLink}
            method="post" */
        }
    }

    const creditCardLogo = getCardLogo(cardInfo.cardNumber);


    return (
        <Container>
            <InnerContainer>
                <Logo src={VezeetaLogo} alt="vezeeta-logo" />
                <ContentContainer>
                    <ContainerLabel>Credit Card Payment</ContainerLabel>
                    <ContainerLabelDescritpion>Visa, MasterCard</ContainerLabelDescritpion>
                    <InputFieldsContainer>
                        {/** CardHolder name */}
                        <FieldContainer>
                            <FieldLabel>CardHolder name</FieldLabel>
                            <InputField placeholder="Your name" onChange={e => onChangeName(e.target.value)} value={cardInfo.name}/>
                            {!validation.isValidName &&  <ErrorMsg>CardHolder name is not valid</ErrorMsg>}
                        </FieldContainer>
                        {/** Card number */}
                        <FieldContainer>
                            <FieldLabel>Card number</FieldLabel>
                            <div style={{ display: 'flex', width: '100%', gap: '5px', position: 'relative'  }}>
                                <InputField style={{ width: '100%' }} placeholder="**** **** **** ****" onChange={e => onChangeCardNumber(e.target.value)} value={cardInfo.cardNumber}/>
                                {creditCardLogo}
                            </div>
                            {!validation.isValidCardNumber &&  <ErrorMsg>Card number is not valid</ErrorMsg>}
                        </FieldContainer>
                        {/** Expirty and CVV */}
                        <CardValidationInput>
                            <FieldContainer style={{ width: 'calc(50% - 5px)' }}>
                                <FieldLabel>Expiry Date</FieldLabel>
                                <InputField placeholder="MM / YY" onChange={e => onChangeExpiry(e.target.value)} value={cardInfo.expiryDate}/>
                                {!validation.isValidDate && <ErrorMsg>Expiry Date is not valid</ErrorMsg>}
                            </FieldContainer>
                            <FieldContainer style={{ width: 'calc(50% - 5px)' }}>
                                <FieldLabel>CVV</FieldLabel>
                                <div style={{ display: 'flex', width: '100%', gap: '5px', position: 'relative' }}>
                                    <InputField  style={{ width: '100%' }} placeholder="123" onChange={e => onChangeCVV(e.target.value)} value={cardInfo.cvv}/>
                                    <CardLogo style={{ width: '28px', height: '25px', position: 'absolute', right: '8px', top: '4px' }} src={CVVLogo} alt='cvv-logo' />
                                </div>
                                {!validation.isValidCVV && <ErrorMsg>CVV is not valid</ErrorMsg>}
                            </FieldContainer>
                        </CardValidationInput>
                        {/** Submit btn */}
                        <SubmitBtn onClick={onSubmit}>
                            <SubmitBtnMsg>{`Pay ${amount || ''} ${currency || ''}`}</SubmitBtnMsg>
                        </SubmitBtn>
                    </InputFieldsContainer>
                </ContentContainer>
            </InnerContainer>
        </Container>
      );
};

CerditCard.propTypes = {

};

export default CerditCard;