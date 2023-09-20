import Button from '../Button';
import { Heading } from '../../styles/Heading.styled';
import Section from '../../UI/Section/Section';
import { HeaderWrapper } from '../../styles/Header.styled';
import Logo from '../Logo';
import HeaderTop from './HeaderTop';

export default function Header() {
    return (
        <HeaderWrapper>
            <Section
                header={<HeaderTop />}
                isContentFaded
            >
                <Heading $size={2}>
                    Welcome to <br /> <Logo size={2} /> Gyms
                </Heading>
                <Button
                    variant="primary"
                    css={{
                        marginBlock: '12px',
                        // width: { '@initial': '238px', '@mobile': '208px' },
                    }}
                >
                    See the benefits
                </Button>
            </Section>
        </HeaderWrapper>
    );
}
