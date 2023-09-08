import { StyledNavbar, StyledNavbarItem } from "./StyledNavbar";

const navItems = ['Classes', 'Timetable', 'Clubs', 'Nutrition', 'Free trial']

export default function Navbar() {
    return (
        <StyledNavbar>
            {navItems.map(item => { return <StyledNavbarItem key={item}>{item}</StyledNavbarItem> })}
        </StyledNavbar>
    )
}