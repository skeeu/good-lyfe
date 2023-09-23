import { useState } from 'react';
import { OpenMenuButton, StyledHeaderTop } from '../../styles/Header.styled';
import { NavbarListItem, StyledNavLinks } from '../../styles/NavLinks.styled';
import Logo from '../Logo';

const navLinks = ['Classes', 'Timetable', 'Clubs', 'Nutrition', 'Free trial'];

function HeaderTop() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <StyledHeaderTop>
            <Logo />
            <StyledNavLinks>
                {navLinks.map((item) => {
                    return (
                        <NavbarListItem key={item}>
                            <a href="#!">{item}</a>
                        </NavbarListItem>
                    );
                })}
            </StyledNavLinks>
            <OpenMenuButton variant="text">asd</OpenMenuButton>
            {/* <ExtendedNavLinks navLinks={navLinks} /> */}
        </StyledHeaderTop>
    );
}
export default HeaderTop;
