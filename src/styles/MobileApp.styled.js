import styled from 'styled-components';
import { Heading } from './Heading.styled';

export const MobileAppWrapper = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};

    color: white;
`;

export const MobileAppInner = styled.div`
    width: 100%;
    max-width: 900px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    margin: 0 auto;
    padding: 10% 5%;

    @media (max-width: ${({ theme }) => theme.media.md}) {
        ${Heading} {
            font-size: 32px;
        }
    }
`;
