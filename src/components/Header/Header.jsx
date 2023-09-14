import Button from '../../UI/Button/Button';
import Container from '../../UI/Container/Container';
import { StyledHeading } from '../../UI/Heading/StyledHeading';
import Section from '../../UI/Section/Section';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import { HeaderWrapper } from './HeaderContent';
import { HeaderTop } from './HeaderTop';

export default function Header() {
    const header = (
        <HeaderTop>
            <Container>
                <Navbar />
            </Container>
        </HeaderTop>
    );
    return (
        <HeaderWrapper>
            <Section
                header={header}
                isContentFaded
            >
                <StyledHeading size={1}>
                    Welcome to <br /> <Logo /> Gyms
                </StyledHeading>
                <Button
                    variant="primary"
                    css={{ marginBlock: '12px' }}
                >
                    See the benefits
                </Button>
            </Section>
        </HeaderWrapper>
    );
}
