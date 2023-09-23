import Button from '../Button';
import { Heading } from '../../styles/Heading.styled';
import {
    HeaderContent,
    HeaderInner,
    HeaderWrapper,
} from '../../styles/Header.styled';
import Logo from '../Logo';
import HeaderTop from './HeaderTop';
import { Fade } from '../../styles/Fade.styled';

export default function Header() {
    return (
        <HeaderWrapper>
            <Fade />
            <HeaderContent>
                <HeaderTop />
                <HeaderInner>
                    <Heading size={2}>
                        Welcome to <br /> <Logo /> Gyms
                    </Heading>
                    <Button variant="primary">See the benefits</Button>
                </HeaderInner>
            </HeaderContent>
        </HeaderWrapper>
    );
}
