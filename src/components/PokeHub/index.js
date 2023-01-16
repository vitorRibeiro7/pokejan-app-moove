import { MainView, StyledText } from "./style";
import PokeCard from "../PokeCard";


function PokeHub({ pokeInfo, flag, click }) {

    return (
        <MainView>
            {flag ?
                pokeInfo.map((poke, key) => {
                    return <PokeCard key={key} click={() => click(poke.pokemon.name)} > {`${poke.pokemon.name}`}</PokeCard>;
                })
                :
                <StyledText>Dica: clique em algum tipo do pokemon para listar outros do mesmo tipo...</StyledText>
            }
        </MainView>
    )
}

export default PokeHub;