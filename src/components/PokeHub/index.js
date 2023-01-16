import { MainView, StyledText } from "./style";
import PokeCard from "../PokeCard";
import { api } from "../../services/api";
import { useState, useEffect } from "react";


function PokeHub({ pokeInfo, flag, click }) {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        if (flag) {
            const loadPokemons = async () => {
                const loadedPokemons = await Promise.all(pokeInfo.map(async (poke) => {
                    const { data } = await api.get(`/pokemon/${poke.pokemon.name}`);
                    return {
                        name: data.name,
                        image: data.sprites?.other.home.front_default,
                        types: data.types,
                        key: poke.key
                    }
                }));
                setPokemons(loadedPokemons);
            }
            loadPokemons();
        }
    }, [flag])

    return (
        <MainView>
            {flag ?
                pokemons.map(poke => (
                    <PokeCard key={poke.key} image={poke.image} click={() => click(poke.name)} types={poke.types}>{poke.name}</PokeCard>
                ))
                :
                <StyledText>Dica: clique em algum tipo do pokemon para listar outros do mesmo tipo...</StyledText>
            }
        </MainView >
    )

}

export default PokeHub;