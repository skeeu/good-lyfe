import styled from 'styled-components';

export const StyledNavLinks = styled.ul`
    width: 70%;
    display: flex;
    justify-content: space-evenly;

    font-size: 16px;
    font-weight: 400;

    color: white;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (max-width: ${({ theme }) => theme.media.md}) {
        display: none;
    }
`;

export const NavbarListItem = styled.li`
    & a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;
