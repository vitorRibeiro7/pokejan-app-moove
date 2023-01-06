import { StyledInput, InputWapper, SearchButton, StyledSearchIcon } from "./style";

function Search() {

    return (
        <InputWapper>
            <StyledInput type={"text"} placeholder="Treine um Pokemon"></StyledInput>
            <SearchButton>Buscar <StyledSearchIcon /></SearchButton>
        </InputWapper>
    )
}

export default Search;