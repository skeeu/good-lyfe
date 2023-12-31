import styled from 'styled-components';
import { SectionWrapper } from './Section.styled';
import { StyledButton } from './Button.styled';

export const MYNBWrapper = styled(SectionWrapper)`
    @media (min-width: ${({ theme }) => theme.media.md}) {
        height: 100lvh;
    }
    @media (max-width: ${({ theme }) => theme.media.md}) {
        margin-block: 96px;
        ${StyledButton} {
            width: 100%;
        }
    }
`;
