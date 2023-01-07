import styled from "styled-components";

export const MainView = styled.div`
    width: auto;
    height: auto;
    min-height: 200px;
    min-width: 70vw;
    max-width: 70vw;

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
export const InfoWrapper = styled.div`
    width: 40ww;
    height: 600px;
    min-width: 400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    padding: 32px;
    padding-left: 0;

    @media (max-width: 1450px) {
        width: 50%;
        height: auto;
        min-width: 0;


        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: left;

        padding: 10px 0px 20px 0px;
    }
    
    @media (max-width: 1290px) {
        width: 90%;
        height: auto;
        min-width: 0;


        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: left;

        padding: 10px 0px 20px 0px;
    }

    @media (max-width: 992px) {
        width: 90%;
        height: auto;
        min-width: 0;


        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: left;

        padding: 10px 0px 20px 0px;
    }

    @media (max-width: 600px) {
        width: 90%;
        height: auto;
        min-width: 0;


        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: left;

        padding: 10px 0px 20px 0px;
    }
`

export const ImageWrapper = styled.div`
    width: 40vw;
    max-height: 600px;
    min-width: 400px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 10px;
`

export const StyledImage = styled.img`
    max-width: 40vw;
    min-width: 300px;

    object-fit: cover;

    @media (max-width: 1450px) {
        width: 400px;
    }
    
    @media (max-width: 1290px) {

    }

    @media (max-width: 992px) {

    }


    @media (max-width: 600px) {
        width: 50%;
        max-width: 50%;
    }
`
export const StyledH1 = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;

    margin-bottom: 10px;

    color: #0A1929;
`

export const StyledText = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;

    margin: 2px 0px;

    color: #0A1929;
`

export const EvolutionButton = styled.button`
    cursor: pointer;

    width: auto;
    height: auto;
    padding: 8px 32px;
    background: #007FFF;

    border-radius: 10px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    
    color: #FFF;

    border: none;
`

export const TypesWrapper = styled.div`
    width: 100%;
    height: auto;

    margin-top: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`