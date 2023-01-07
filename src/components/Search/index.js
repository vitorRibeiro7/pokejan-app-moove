import { useEffect, useState } from "react";
import { StyledInput, InputWapper, SearchButton, StyledSearchIcon, Container, StyledWarning } from "./style";
import { api } from "../../services/api";

function Search({ click, change, flag }) {



    return (
        <Container>
            <InputWapper>
                <StyledInput type={"text"} placeholder="Treine um Pokemon" onChange={change} />
                <SearchButton onClick={click}>Buscar <StyledSearchIcon /></SearchButton>

            </InputWapper>
            {flag && <StyledWarning>Pokemon não encontrado</StyledWarning>}
        </Container>
    )
}

export default Search;