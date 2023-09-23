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
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

const navLinks = ['Classes', 'Timetable', 'Clubs', 'Nutrition', 'Free trial'];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'scroll';
    }, [isMenuOpen]);

    return (
        <HeaderWrapper>
            <MobileMenu
                navLinks={navLinks}
                isMenuOpen={isMenuOpen}
            />
            <HeaderTop
                navLinks={navLinks}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <Fade />
            <HeaderContent>
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
