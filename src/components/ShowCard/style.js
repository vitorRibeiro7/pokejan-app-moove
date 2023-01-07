import styled from "styled-components";

export const MainView = styled.div`
    width: 100%;
    height: 600px;
    margin-top: 64px;

    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    overflow: hidden;
    object-position: center;
`

export const StyledImage = styled.img`
    width: auto;

    object-fit: contain;

    /* filter: drop-shadow( 2px 2px 9px #0059B2); */
`

export const InfoWrapper = styled.div`
    width: 50%;
    height: 100%;

    padding: 24px;
`

export const ImageWrapper = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    object-fit: contain;

    padding: 24px;
`