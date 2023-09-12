import { styled } from "../../theme";

export const StyledNavbar = styled('div', {
    width: '100%',
    paddingBlock: '26px',
    minHeight: '50px',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

})

export const NavbarList = styled('ul', {
    display: 'flex',
    gap: '76px',

    fontFamily: '$poppins',
    fontSize: '16px',
    fontWeight: 400,

    color: 'white',
    margin: 0,
    padding: 0,
    listStyle: 'none'
})

export const NavbarListItem = styled('li', {
    'a': {
        color: 'inherit',
        textDecoration: 'none',
        cursor: 'pointer',

        '&:hover': {
            color: '$secondary'
        }
    }
})