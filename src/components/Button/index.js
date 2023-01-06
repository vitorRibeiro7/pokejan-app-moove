import { StyledButton } from "./style";

function Button({ text, onClick }) {
    return (
        <a href={onClick} target="_blank" rel="noreferrer">
            <StyledButton>
                {text}
            </StyledButton>
        </a>
    );
}

export default Button;