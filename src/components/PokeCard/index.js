import { Container } from "./style";

function PokeCard({ children, click, img }) {

    return (
        <Container onClick={click}>
            {children}
        </Container>
    )
}

export default PokeCard;