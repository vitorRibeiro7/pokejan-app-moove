import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ShowCard from "./components/ShowCard";
import { MainWapper, Container } from "./style";
import { api } from "./services/api";
import Loader from "./components/Loader";

function App() {

  const [pokemon, setPokemon] = useState([])
  const [busca, setBusca] = useState("pikachu")
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async () => {
    try {
      setLoading(true)
      const { data } = await api.get(`/pokemon/${busca}`);
      setFlag(false)
      console.log(data);
      setPokemon(data);
    } catch (error) {
      // console.log(error);
      setFlag(true)
    } finally {
      setLoading(false)
    }
  };

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
        
        {
          !loading ? <ShowCard data={pokemon} /> : <Loader />
        }

      </MainWapper>
    </Container>
  );
}

export default App;
