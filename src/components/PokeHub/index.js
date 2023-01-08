import { MainView, StyledLogo } from "./style";
import PokeCard from "../PokeCard";


function PokeHub({ pokeInfo, flag, click }) {

    return (
        <MainView>
            {flag ?
                pokeInfo.map((poke, key) => {
                    return <PokeCard key={key} click={() => click(poke.pokemon.name)} > {`${poke.pokemon.name}`}</PokeCard>;
                })
                :
                <StyledLogo />
            }
        </MainView>
    )
}

export default PokeHub;