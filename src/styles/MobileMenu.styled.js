import styled from 'styled-components';

export const MobileMenuWrapper = styled.div`
    height: 100lvh;
    width: 100%;

    position: fixed;
    left: 0;
    top: var(--header-height);
    z-index: 999;

    background-color: ${({ theme }) => theme.colors.primary};

    transform: ${({ menuOpen }) =>
        menuOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all 0.3s ease-in-out;

    padding-top: 15%;
`;

export const MobileMenuLinks = styled.ul`
    list-style: none;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
`;

export const MobileMenuListItem = styled.li`
    & a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;
