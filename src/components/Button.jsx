import { StyledButton } from '../styles/Button.styled';

export default function Button({ css, variant, onClick, children }) {
    return (
        <StyledButton
            variant={variant}
            css={css}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
}
