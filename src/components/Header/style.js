import styled from 'styled-components';
import { ReactComponent as Logo } from "../../assets/logos/Logo.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 14px 4vw;
    gap: 10px;

    width: 90vw;

    background: linear-gradient(270deg, #0059B2 0%, #007FFF 100%);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;


`;

export const StyledLogo = styled(Logo)`
    width: 10vw;

    @media (max-width: 1450px) {
        width: 15vw !important;
    }
    
    @media (max-width: 1290px) {
        width: 20vw !important;
    }

    @media (max-width: 992px) {
        width: 30vw !important;
    }

    @media (max-width: 600px) {
        width: 40vw !important;
    }

`
