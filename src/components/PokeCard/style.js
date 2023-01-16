import styled from "styled-components";

export const Container = styled.button`
    border: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 20px;

    cursor: pointer;

    width: 300px;
    max-width: 400px;
    height: auto;

    background-color: #F3F6F9;

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    color: #0A1929;

    margin: 2px;

    flex-grow: 5;
`

export const StyledImg = styled.img`
    width: 150px;
    min-width: 150px;
    max-width: 150px;
    height: 150px;
    min-height: 150px;
    max-height: 150px;

    object-fit: cover;

    border-radius: 10px;
`