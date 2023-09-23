import {
    MobileMenuLinks,
    MobileMenuListItem,
    MobileMenuWrapper,
} from '../../styles/MobileMenu.styled';

function MobileMenu({ navLinks, isMenuOpen }) {
    return (
        <MobileMenuWrapper menuOpen={isMenuOpen}>
            <MobileMenuLinks>
                {navLinks.map((el, i) => {
                    return (
                        <MobileMenuListItem key={i}>
                            <a href="#">{el}</a>
                        </MobileMenuListItem>
                    );
                })}
            </MobileMenuLinks>
        </MobileMenuWrapper>
    );
}
export default MobileMenu;
