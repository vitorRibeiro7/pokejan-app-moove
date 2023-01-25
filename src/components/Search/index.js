import { useState } from "react";
import { StyledInput, InputWapper, SearchButton, StyledSearchIcon, Container, StyledWarning } from "./style";

function Search({ click, change, flag }) {

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    const doSearch = () => {
        click(search)
        setSearch("")
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            doSearch()
        }
    });

    const [search, setSearch] = useState("")

    return (
        <Container>
            <InputWapper id="teste">
                <StyledInput type={"text"} value={search} placeholder="Invoque um pokemon" onChange={handleSearch} />
                <SearchButton onClick={() => doSearch()}><StyledSearchIcon /></SearchButton>
            </InputWapper>
            {flag && <StyledWarning>Pokemon não encontrado</StyledWarning>}
        </Container>
    )
}

export default Search;