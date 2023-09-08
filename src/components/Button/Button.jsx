import { StyledButton } from "./StyledButton";

export default function Button({ css, variant, onClick, children }) {
    return (
        <StyledButton variant={variant} css={css} onClick={onClick}>
            {children}
        </StyledButton>
    )
}