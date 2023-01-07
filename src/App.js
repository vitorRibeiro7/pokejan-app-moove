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
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pokemonByType, setPokemonByType] = useState([])
  const [pokemonByTypeControl, setPokemonByTypeControl] = useState(false)

  const fetchPokemon = async (nome) => {
    try {
      setLoading(true)

      const { data } = await api.get(`/pokemon/${nome}`);

      setErro(false)

      setPokemon(data);
    } catch (error) {
      // console.log(error);
      setErro(true)
    } finally {
      setLoading(false)
    }
  };



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

  const searchByType = (e) => {
    setBusca(e);
    setPokemonByTypeControl(false)
    fetchPokemon(e)
  }

  useEffect(() => {
    setPokemonByTypeControl(false)
    fetchPokemon(busca)
  }, [busca])

  useEffect(() => {
    fetchPokemon(busca)
  }, [])

  return (
    <Container>
      <Header />
      <MainWapper>
        <Search click={fetchPokemon} flag={erro} />
        <ShowCard pokeInfo={pokemon} loading={loading} handleTypess={handlePokeByTypes} />
        <TypesHub pokeInfo={pokemonByType} flag={pokemonByTypeControl} click={searchByType} />
      </MainWapper>
    </Container>
  );
}

export default App;
