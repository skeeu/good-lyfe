import styled from 'styled-components';

export const StyledLogo = styled.div`
    display: inline-flex;
    flex-direction: row;

    & :first-child {
        color: ${({ colorOne }) => colorOne || 'white'};
    }
    & :nth-child(2) {
        color: ${({ colorTwo, theme }) => colorTwo || theme.colors.secondary};
    }
`;
