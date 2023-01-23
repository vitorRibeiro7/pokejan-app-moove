import { Container, StyledImg } from "./style";
import InfoBar from "./InfoBar";

function PokeCard({ children, click, image, types }) {

    if (image == null) {
        image = "https://www.nigiloc.com/themes/default/images/image-not-found.png"
    }

    return (
        <Container onClick={click}>
            <StyledImg src={image} />
            <InfoBar types={types}>
                {children}
            </InfoBar>
        </Container>
    )
}

export default PokeCard;