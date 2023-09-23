import { OpenMenuButton, StyledHeaderTop } from '../../styles/Header.styled';
import { NavbarListItem, StyledNavLinks } from '../../styles/NavLinks.styled';
import Logo from '../Logo';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

function HeaderTop({ navLinks, isMenuOpen, setIsMenuOpen }) {
    return (
        <StyledHeaderTop>
            <Logo />
            <StyledNavLinks>
                {navLinks.map((item) => {
                    return (
                        <NavbarListItem key={item}>
                            <a href="#">{item}</a>
                        </NavbarListItem>
                    );
                })}
            </StyledNavLinks>
            <OpenMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </OpenMenuButton>
        </StyledHeaderTop>
    );
}
export default HeaderTop;
