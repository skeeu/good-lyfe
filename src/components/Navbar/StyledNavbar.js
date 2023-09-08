import { styled } from "../../theme";

export const StyledNavbar = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%'
})

export const StyledNavbarItem = styled('a', {
    textDecoration: 'none',
    fontFamily: '$poppins',
    fontSize: '16px',
    fontWeight: 400,

    cursor: 'pointer',

    '&:hover': {
        color: '$secondary'
    }
})