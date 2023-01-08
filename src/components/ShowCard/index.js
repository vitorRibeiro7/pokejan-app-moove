import { MainView, StyledImage, ImageWrapper, InfoWrapper, StyledH1, StyledText, TypesWrapper } from "./style";
import Loader from "../Loader";
import TypeCard from "../TypeCard";

const titles = [
    {
        default: "hp",
        ptBR: "Vida"
    },
    {
        default: "attack",
        ptBR: "Ataque"
    },
    {
        default: "defense",
        ptBR: "Defesa"
    },
    {
        default: "special-attack",
        ptBR: "Ataque especial"
    },
    {
        default: "special-defense",
        ptBR: "Defesa especial"
    },
    {
        default: "speed",
        ptBR: "Velocidade"
    },
]

const types = [
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

function ShowCard({ pokeInfo, loading, handleTypess }) {
    return (
        <>
            <MainView>
                {!loading ?
                    <>
                        <ImageWrapper>
                            <StyledImage src={`${pokeInfo?.sprites?.other.home.front_default}`} alt={``}></StyledImage>
                        </ImageWrapper>
                        <InfoWrapper>
                            <StyledH1>{`${pokeInfo?.name?.charAt(0).toUpperCase() + pokeInfo?.name?.slice(1)}`}</StyledH1>
                            <StyledText>{`Altura: ${pokeInfo?.height}`}</StyledText>
                            <StyledText>{`Peso: ${pokeInfo?.weight}`}</StyledText>
                            {
                                pokeInfo?.stats?.map((dado, key) => {
                                    const title = titles.find(title => title.default === dado.stat.name);
                                    return <StyledText key={key}>{`${title.ptBR}: ${dado.base_stat}`}</StyledText>;
                                })
                            }
                            <TypesWrapper>
                                <TypesWrapper>
                                    <StyledText>Tipo:</StyledText>
                                </TypesWrapper>
                                {
                                    pokeInfo?.types?.map((dado, key) => {
                                        const type = types.find(types => types.name === dado.type.name);
                                        return <TypeCard key={key} color={type.color} click={() => handleTypess(type)}>{`${type.text}`}</TypeCard>;
                                    })
                                }
                            </TypesWrapper>
                        </InfoWrapper>
                    </>
                    :
                    <Loader />
                }
            </MainView>
        </>
    )
}

ShowCard.defaultProps = {
    data: []
}

export default ShowCard;