import { useState, useEffect } from "react";
import { StyledInput, InputWapper, SearchButton, StyledSearchIcon, Container, StyledWarning } from "./style";

function Search({ click, flag }) {

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    const doSearch = () => {
        click(search)
        setSearch("")
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEnterKey);
        return () => {
            document.removeEventListener("keydown", handleEnterKey);
        };
    });

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            doSearch()
        }
    };

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