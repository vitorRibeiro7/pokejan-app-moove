import styled from "styled-components";

export const MainView = styled.div`
    width: 100%;
    height: auto;

    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    margin-top: 32px;
`
export const InfoWrapper = styled.div`
    width: 50%;
    height: 600px;
    min-width: 400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    text-decoration: dashed;

    padding: 32px;
`

export const ImageWrapper = styled.div`
    width: 50%;
    height: 600px;
    min-width: 400px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledImage = styled.img`
    max-width: 600;

    object-fit: contain;
    /* filter: drop-shadow( 2px 2px 9px #0059B2); */
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