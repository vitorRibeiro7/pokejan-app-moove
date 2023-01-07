import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ShowCard from "./components/ShowCard";
import { MainWapper, Container } from "./style";
import { api } from "./services/api";

function App() {

  const [pokemon, setPokemon] = useState([])
  const [busca, setBusca] = useState("pikachu")
  const [flag, setFlag] = useState(false);

  const fetchPokemon = async () => {
    try {

      const { data } = await api.get(`/pokemon/${busca}`);
      setFlag(false)
      console.log(data);
      setPokemon(data);
    } catch (error) {
      // console.log(error);
      setFlag(true)
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [])

  const handleBusca = (e) => {
    setBusca(e.target.value.toLowerCase())
  }

  return (
    <Container>
      <Header />
      <MainWapper>
        <Search change={handleBusca} click={fetchPokemon} flag={flag} />
        <ShowCard data={pokemon} />
      </MainWapper>
    </Container>
  );
}

export default App;
