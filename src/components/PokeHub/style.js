import styled from "styled-components";

export const MainView = styled.div`
    width: auto;
    height: auto;
    min-height: 200px;
    min-width: 60vw;
    max-width: 60vw;

    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin-top: 32px;

    padding: 20px;

    @media (max-width: 1450px) {
        width: 80vw !important;
    }
    
    @media (max-width: 1290px) {
        height: auto;
        min-height: 0;
        width: 80vw !important;

        max-width: none;
    }

    @media (max-width: 992px) {
        height: auto;
        min-height: 0;
        width: 95vw !important;

        max-width: none;
    }

    @media (max-width: 600px) {
        height: auto;
        min-height: 160px;
        width: 95vw !important;
        padding: 0;
    
        max-width: none;
    }
`

export const StyledText = styled.p`

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;

`