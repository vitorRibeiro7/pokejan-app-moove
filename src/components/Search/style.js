import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/icones/search-icon.svg";


export const InputWapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));

    width: auto;
`

export const StyledInput = styled.input`
    padding: 16px 5px 16px 29px;

    width: 20vw;
    height: 3vw;

    background: #FFFFFF;
    border: 2px solid #007FFF;
    border-radius: 15px 0px 0px 15px;

    outline: none;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 1vw;
    line-height: 33px;

    color: #0A1929;

    @media (max-width: 1450px) {
        width: 25vw !important;
        height: 4vw;
        font-size: 1.5vw;
    }
    
    @media (max-width: 1290px) {
        width: 40vw !important;
        height: 5vw;
        font-size: 2vw;
    }

    @media (max-width: 992px) {
        width: 50vw !important;
        height: 8vw;
        font-size: 3vw;
    }

    @media (max-width: 600px) {
        width: 60vw !important;
        height: 12vw;
        font-size: 4vw;
    }
`

export const SearchButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 17px;
    gap: 10px;

    border: none;

    width: 10vw;
    height: 3vw;

    background: #007FFF;
    border-radius: 0px 15px 15px 0px;
    border: 1px solid #007FFF;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 1.3vw;

    color: #FFFFFF;

    @media (max-width: 1450px) {
        width: 15vw !important;
        height: 4vw;
        font-size: 1.5vw;
    }
    
    @media (max-width: 1290px) {
        width: 20vw !important;
        height: 5vw;
        font-size: 2vw;
    }

    @media (max-width: 992px) {
        width: 20vw !important;
        height: 8vw;
        font-size: 3vw;
    }

    @media (max-width: 600px) {
        width: 30vw !important;
        height: 12vw;
        font-size: 4vw;
    }
`

export const StyledSearchIcon = styled(Icon)`
    width: 2vw;

    @media (max-width: 1450px) {
        width: 3vw;
    }
    
    @media (max-width: 1290px) {
        width: 4vw;
    }

    @media (max-width: 992px) {
        width: 5vw;
    }

    @media (max-width: 600px) {
        width: 6vw;
    }
`