import { Container } from "./style";

function TypeCard({ children, color, click }) {

    return (
        <Container style={{ backgroundColor: color }} onClick={click}>
            {children}
        </Container>
    )
}

export default TypeCard;