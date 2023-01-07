import { StyledInput, InputWapper, SearchButton, StyledSearchIcon, Container, StyledWarning } from "./style";

function Search({ click, change, flag }) {

    return (
        <Container> 
            <InputWapper>
                <StyledInput type={"text"} placeholder="Try to get some" onChange={change} />
                <SearchButton onClick={click}>Search <StyledSearchIcon /></SearchButton>
            </InputWapper>
            {flag && <StyledWarning>Pokemon not found</StyledWarning>}
        </Container>
    )
}

export default Search;