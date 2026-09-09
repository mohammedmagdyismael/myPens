import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const InnerContainer = styled.div`
    border-radius: 8px;
    border: 1px solid rgb(204, 204, 204);
    min-height: 377px;
    width: 400px;
    margin: auto;
    position: relative;
    box-shadow: rgb(204, 204, 204) 0px 0px 5px;
`;

export const Logo = styled.img`
    width: 45px;
    height: 45px;
    background-color: white;
    position: absolute;
    top: -20px;
    right: 44%;
`;

export const ContentContainer = styled.div`
    padding: 45px 12px 12px;
`;

export const ContainerLabel = styled.p`
    margin: 0;
    color: black;
    text-align: center;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
`;

export const ContainerLabelDescritpion = styled.p`
    margin: 0;
    color: #666;
    text-align: center;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`;

export const InputFieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 10px;
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const FieldLabel = styled.p`
     margin: 0;
    color: #666;
    font-family: sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    font-weight: 700;
`;

export const InputField = styled.input`
    border-radius: 8px;
    border: 2px solid rgb(204, 204, 204);
    height: 30px;
    padding: 0px 8px;
`;

export const CardValidationInput = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5px;
`;

export const SubmitBtn = styled.div`
    display: flex;
    width: 100%;
    background-color: #0070CD;
    color: #fff;
    text-align: center;
    font-family: sans-serif;
    border-radius: 8px;
    border: 1px solid #0070CD;
    height: 35px;
    margin-top: 8px;
    cursor: pointer;
`;

export const SubmitBtnMsg = styled.p`
    margin: auto;
`;

export const CardLogo = styled.img`
    margin: auto 0;
    height: 22px;
    width: 38px;
    display: flex;
`;

export const ErrorMsg = styled.p`
    margin: 0;
    color: red;
    font-family: sans-serif;
    font-size: 10px;
    font-style: normal;
`;