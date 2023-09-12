import Button from "../../UI/Button/Button";
import Container from "../../UI/Container/Container";
import { Fade } from "../../UI/Fade/Fade";
import { StyledHeading } from "../../UI/Heading/StyledHeading";
import { SectionContentInner, SectionWrapper } from "../../UI/Section/Section";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { HeaderContent } from "./HeaderContent";
import { HeaderTop } from "./HeaderTop";

export default function Header() {
    return (
        <SectionWrapper>
            <HeaderTop>
                <Container>
                    <Navbar />
                </Container>
            </HeaderTop>
            <HeaderContent css={{ backgroundImage: `url('./assets/5.jpg')` }}>
                <Fade />
                <SectionContentInner>
                    <StyledHeading size={1}>
                        Welcome to <br /> <Logo /> Gyms
                    </StyledHeading>
                    <Button variant='primary' css={{ marginBlock: '12px' }}>See the benefits</Button>
                </SectionContentInner>
            </HeaderContent>
        </SectionWrapper>
    )
}