import { StyledButton } from '../styles/Button.styled';

export default function Button({ children, ...rest }) {
    return <StyledButton {...rest}>{children}</StyledButton>;
}
