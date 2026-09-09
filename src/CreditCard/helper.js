import React from 'react';
import { CardLogo } from './CreditCard.style';
import VisaImg from './assets/visa.png';
import MasterCardImg from './assets/master-card.png';

/**
 * 
 * Validations
 * 
 */
export const isValidDate = val => {
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return expiryDatePattern.test(val);
}

export const isNumber = val => {
    const numbersOnly = /^(\(?\+?[0-9]*\)?)?[0-9_\- ()]*$/;
    return numbersOnly.test(val);
}

export const isValidCreditCardNumber = val => {
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardPattern = /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/;
    return val && val.length === 16 && (visaPattern.test(val) || mastercardPattern.test(val))
}

export const getCardLogo = cardNumber => {
    // const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    // const mastercardPattern = /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/;
    const cardNumberFirstFourNumbersString = String(cardNumber).slice(0, 4);
    if (cardNumberFirstFourNumbersString.length >= 4 && !(cardNumber && cardNumber.length > 16)) {
        if (cardNumberFirstFourNumbersString.startsWith(4)) {
            return <CardLogo style={{ position: 'absolute', right: '8px', top: '10px', height: '14px' }} src={VisaImg} alt='card-logo' />;
          } else if (cardNumberFirstFourNumbersString >= '5100' && cardNumberFirstFourNumbersString <= '5599') {
            return <CardLogo style={{ position: 'absolute', right: '8px', top: '6px' }} src={MasterCardImg} alt='card-logo' />;
          } else {
            return '';
          }
    }
    return '';
}

