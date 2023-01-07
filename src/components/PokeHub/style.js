import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logos/LogoAzul.svg";

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

export const StyledLogo = styled(Logo)`
    width: 5vw;

    @media (max-width: 1450px) {
        width: 10vw !important;
    }
    
    @media (max-width: 1290px) {
        width: 15vw !important;
    }

    @media (max-width: 992px) {
        width: 20vw !important;
    }

    @media (max-width: 600px) {
        width: 25vw !important;
    }

    animation: spin 10s linear infinite;

    @keyframes spin {
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
}
`
