import { useState } from "react";
import { StyledInput, InputWapper, SearchButton, StyledSearchIcon, Container, StyledWarning } from "./style";

function Search({ click, change, flag }) {

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    const [search, setSearch] = useState("")

    return (
        <Container>
            <InputWapper>
                <StyledInput type={"text"} placeholder="Invoque um pokemon" onChange={handleSearch} />
                <SearchButton onClick={() => click(search)}><StyledSearchIcon /></SearchButton>
            </InputWapper>
            {flag && <StyledWarning>Pokemon não encontrado</StyledWarning>}
        </Container>
    )
}

export default Search;