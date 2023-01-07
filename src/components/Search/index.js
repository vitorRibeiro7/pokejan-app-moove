import { useState } from "react";
import { StyledInput, InputWapper, SearchButton, StyledSearchIcon, Container, StyledWarning } from "./style";

function Search({ click, change, flag }) {

    const handleBusca = (e) => {
        setBusca(e.target.value)
    }

    const [busca, setBusca] = useState("")

    return (
        <Container>
            <InputWapper>
                <StyledInput type={"text"} placeholder="Invoque seu pokemon" onChange={handleBusca} />
                <SearchButton onClick={() => click(busca)}>Search <StyledSearchIcon /></SearchButton>
            </InputWapper>
            {flag && <StyledWarning>Pokemon not found</StyledWarning>}
        </Container>
    )
}

export default Search;