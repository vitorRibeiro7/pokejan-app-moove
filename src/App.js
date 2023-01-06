import Header from "./components/Header";
import Search from "./components/Search";

import { MainWapper, Container } from "./style";

function App() {
  return (
    <Container>
      <Header />
      <MainWapper>
        <Search />
      </MainWapper>
    </Container>
  );
}

export default App;
