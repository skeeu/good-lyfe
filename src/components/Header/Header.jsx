import Button from "../Button/Button";
import Container from "../Container/StyledContainer";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { StyledHeader, StyledHeaderInner } from "./StyledHeader";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <StyledHeaderInner>
                    <Logo size={3} colorOne='white' colorTwo={'$secondary'} />
                    <Navbar />
                    <Button variant='secondary'>Login</Button>
                </StyledHeaderInner>
            </Container>
        </StyledHeader>
    )
}