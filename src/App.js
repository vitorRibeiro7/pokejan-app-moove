import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ShowCard from "./components/ShowCard";
import { MainWapper, Container } from "./style";
import { api } from "./services/api";
import TypesHub from "./components/PokeHub";

function App() {

  const [pokemon, setPokemon] = useState([])
  const [busca, setBusca] = useState("pikachu")
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pokemonByType, setPokemonByType] = useState([])
  const [pokemonByTypeControl, setPokemonByTypeControl] = useState(false)

  const fetchPokemon = async () => {
    try {
      setLoading(true)

      const { data } = await api.get(`/pokemon/${busca}`);

      setFlag(false)

      setPokemon(data);
    } catch (error) {
      // console.log(error);
      setFlag(true)
    } finally {
      setLoading(false)
    }
  };

  const searchByType = (e) => {
    setBusca(e)
  }

  const handlePokeByTypes = async (e) => {
    try {
      setPokemonByTypeControl(false)
      const { data } = await api.get(`https://pokeapi.co/api/v2/type/${e.name}`)
      console.log(data)
      setPokemonByType(data.pokemon);
    } catch (error) {
      console.log(error);
    } finally {
      setPokemonByTypeControl(true)
    }
  }

  useEffect(() => {
    setPokemonByTypeControl(false)
    fetchPokemon()
  }, [busca])

  useEffect(() => {
    fetchPokemon()
  }, [])

  const handleBusca = (e) => {
    setBusca(e.target.value.toLowerCase())
  }

  return (
    <Container>
      <Header />
      <MainWapper>
        <Search change={handleBusca} click={fetchPokemon} flag={flag} />
        <ShowCard pokeInfo={pokemon} loading={loading} handleTypess={handlePokeByTypes} />
        <TypesHub pokeInfo={pokemonByType} flag={pokemonByTypeControl} click={searchByType} />
      </MainWapper>
    </Container>
  );
}

export default App;
