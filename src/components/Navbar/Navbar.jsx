import Logo from "../Logo/Logo";
import { NavbarList, NavbarListItem, StyledNavbar } from "./StyledNavbar";

const navbarListItems = ['Classes', 'Timetable', 'Clubs', 'Nutrition', 'Free trial']

export default function Navbar() {
    return (
        <StyledNavbar>
            <Logo size={3} colorOne='white' colorTwo={'$secondary'} />
            <NavbarList>
                {navbarListItems.map(item => {
                    return (<NavbarListItem key={item}>
                        <a href="#!">
                            {item}
                        </a>
                    </NavbarListItem>)
                })}
            </NavbarList>
        </StyledNavbar>
    )
}