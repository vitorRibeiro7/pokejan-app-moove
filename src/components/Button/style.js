import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    width: 144px;
    height: 55px;

    background: #FFFFFF;
    border-radius: 6px;
    border: none;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;

    color: #0162C4;

    @media (max-width: 1450px) {
    width: 140px;
    height: 50px;
    }

    @media (max-width: 1290px) {
    width: 130px;
    height: 45px;
    }

    @media (max-width: 992px) {
    width: 120px;
    height: 45px;
    }

    @media (max-width: 600px) {
    width: 100px;
    height: 40px;
    }
`