import styled from 'styled-components';
import { Heading } from './Heading.styled';

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: #0b0d17;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #d9dbe1;
`;

export const FooterInner = styled.div`
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;
    padding: 5% 5%;
    padding-bottom: 15px;

    display: flex;
    flex-direction: column;
    gap: 50px;

    a {
        text-transform: capitalize;
        text-decoration: none;
        color: inherit;
    }

    li a:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 36px;

    & > * {
        flex-grow: 1;
        flex-basis: 250px;
    }
`;

export const FooterListWrapper = styled.div`
    display: flex;
    flex-direction: column;

    gap: 24px;

    ${Heading} {
        font-size: 20px;
    }
`;
export const FooterList = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 12px;

    li a {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;

        svg {
            width: 26px;
            height: 26px;
            color: inherit;
        }
    }
`;

export const SubFooter = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;

    ul {
        list-style: none;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4px;
    }

    li {
        text-transform: capitalize;
        text-decoration: none;
        color: inherit;
    }
    li + li:before {
        padding: 4px;
        content: '|';
    }
`;
