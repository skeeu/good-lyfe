import styled from 'styled-components';
import { Heading } from './Heading.styled';

export const StyledLogo = styled.div`
    display: inline-flex;
    flex-direction: row;

    ${Heading} {
        font-size: inherit;
    }

    & :first-child {
        color: ${({ colorOne }) => colorOne || 'white'};
    }
    & :nth-child(2) {
        color: ${({ colorTwo, theme }) =>
            theme.colors[colorTwo] || colorTwo || theme.colors.secondary};
    }
`;
