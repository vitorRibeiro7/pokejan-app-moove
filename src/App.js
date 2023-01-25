import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ShowCard from "./components/ShowCard";
import { MainWapper, Container } from "./style";
import { api } from "./services/api";
import PokeHub from "./components/PokeHub";

function App() {

  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("pikachu")
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pokemonByType, setPokemonByType] = useState([])
  const [pokemonByTypeControl, setPokemonByTypeControl] = useState(false)

  const fetchPokemon = async (nome) => {
    try {
      if (!nome) {
        return
      }

      setLoading(true)
      const { data } = await api.get(`/pokemon/${nome}`);
      setError(false)
      setPokemon(data);
      setPokemonByTypeControl(false)

    } catch (error) {
      // console.log(error);
      setError(true)
    } finally {
      setLoading(false)
    }
  };


  const handlePokeByTypes = async (e) => {
    try {
      setPokemonByTypeControl(false)
      const { data } = await api.get(`https://pokeapi.co/api/v2/type/${e.name}`)
      setPokemonByType(data.pokemon);
    } catch (error) {
      // console.log(error);
    } finally {
      setPokemonByTypeControl(true)
    }
  }

  const searchByType = (e) => {
    setSearch(e);
    setPokemonByTypeControl(false)
    fetchPokemon(e)
  }

  useEffect(() => {
    setPokemonByTypeControl(false)
    fetchPokemon(search)
  }, [search])

  useEffect(() => {
    fetchPokemon(search)
  }, [search])

  return (
    <Container>
      <Header />
      <MainWapper>
        <Search click={fetchPokemon} flag={error} />
        <ShowCard pokeInfo={pokemon} loading={loading} handleTypess={handlePokeByTypes} />
        <PokeHub pokeInfo={pokemonByType} flag={pokemonByTypeControl} click={searchByType} />
      </MainWapper>
    </Container>
  );
}

export default App;
