import styled from 'styled-components';
import { Heading } from './Heading.styled';

export const StyledSideContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 2rem;
    gap: 24px;
    text-align: left;

    ${Heading} {
        line-height: 1em;
    }
`;
