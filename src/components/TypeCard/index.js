import { Container } from "./style";

function TypeCard(props) {

    return (
        <Container style={{ backgroundColor: props.color }}>
            {props.children}
        </Container>
    )
}

export default TypeCard;