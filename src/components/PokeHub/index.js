import { MainView, StyledLogo } from "./style";
import Loader from "../Loader";
import { api } from "../../services/api";
import TypeCard from "../TypeCard";


function PokeHub({ pokeInfo, flag, click }) {



    return (
        <MainView>
            {flag ?
                pokeInfo.map((poke, key) => {
                    return <TypeCard key={key} color={`#007FFF`} click={() => click(poke.pokemon.name)} > {`${poke.pokemon.name}`}</TypeCard>;
                })
                :
                <StyledLogo />
            }
        </MainView>
    )
}

export default PokeHub;