import { Container, BoolWrapper, StyledText } from "./style";
import TypeBool from "./TypeBool";

const typesArray = [
    {
        name: "normal",
        text: "Normal",
        color: "#151515"
    },
    {
        name: "fighting",
        text: "Lutador",
        color: "#B93538"
    },
    {
        name: "flying",
        text: "Voador",
        color: "#2D8AB5",
    },
    {
        name: "poison",
        text: "Veneno",
        color: "#923233",
    },
    {
        name: "ground",
        text: "Terra",
        color: "#7D4E32",
    },
    {
        name: "rock",
        text: "Pedra",
        color: "#A38C61",
    },
    {
        name: "bug",
        text: "Inseto",
        color: "#6D7815",
    },
    {
        name: "ghost",
        text: "Fantasma",
        color: "#6F5499",
    },
    {
        name: "steel",
        text: "Aço",
        color: "#B8B8D3",
    },
    {
        name: "fire",
        text: "Fogo",
        color: "#FD7D24",
    },
    {
        name: "water",
        text: "Água",
        color: "#4592C4",
    },
    {
        name: "grass",
        text: "Grama",
        color: "#9BBD2F",
    },
    {
        name: "electric",
        text: "Elétrico",
        color: "#F8D030",
    },
    {
        name: "psychic",
        text: "Psíquico",
        color: "#ED4882",
    },
    {
        name: "ice",
        text: "Gelo",
        color: "#99D9EA",
    },
    {
        name: "dragon",
        text: "Dragão",
        color: "#A27DFA",
    },
    {
        name: "dark",
        text: "Sombrio",
        color: "#707070",
    },
    {
        name: "fairy",
        text: "Fada",
        color: "#F4BDC9",
    },
    {
        name: "unknown",
        text: "Desconhecido",
        color: "#A292BC",
    },
    {
        name: "shadow",
        text: "Sombra",
        color: "#B6B6B4",
    }

]

function InfoBar({ children, types }) {
    return (
        <Container>
            <StyledText>
                {children}
            </StyledText>
            <BoolWrapper>
                {
                    types.map((dado) => {
                        const type = typesArray.find(types => types.name === dado.type.name);
                        return <TypeBool color={type.color} />
                    })
                }
            </BoolWrapper>
        </Container>
    )
}

export default InfoBar;