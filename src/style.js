import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const MainWapper = styled.div`
    width: 100vw;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 40px;
    padding: 10px;

    @media (max-width: 600px) {
        padding: 0;
    }
`
