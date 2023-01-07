import styled from "styled-components"

export const StyledLoader = styled.div`
    height: 100px;
    width: 100px;
    background: linear-gradient(to bottom, #0059B2 50%, #007FFF 50% );
    border-radius: 50%;
    border: 8px solid black;
    animation: spin 1s linear infinite;

    margin-top: 200px;

    ::before {
        content: '';
        position: absolute;
        height: 10px;
        width: 90px;
        background: black;
        top: 50%;
        transform: translatey(-60%);
    }

    ::after {
        content: '';
        position: absolute;
        height: 38px;
        width: 38px;
        border-radius: 50%;
        background: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: inset 0 0 0 8px black, inset 0 0 0 10px white, inset 0 0 0 12px black;
    }

    @keyframes spin {
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
}
`