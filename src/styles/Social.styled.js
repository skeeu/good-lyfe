import styled from 'styled-components';
import { Heading } from './Heading.styled';

export const SocialWrapper = styled.div`
    background: #ededed;
    width: 100%;
    height: 35%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.media.md}) {
        ${Heading} {
            font-size: 32px;
        }
    }
`;

export const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 96px;

    margin: 0 auto;
    padding-inline: 5%;

    svg {
        width: 32px;
        height: 32px;
    }

    @media (max-width: ${({ theme }) => theme.media.md}) {
        gap: 24px;
    }
    @media (max-width: ${({ theme }) => theme.media.sm}) {
        svg {
            width: 24px;
            height: 24px;
        }
    }
`;
