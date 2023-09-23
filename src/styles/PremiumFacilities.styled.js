import styled from 'styled-components';
import { SectionWrapper } from './Section.styled';
import { ContainerWithSide } from './ContainerWithSide.styled';
import { StyledSideContent } from './SideContent.styled';
import { StyledButton } from './Button.styled';

export const PremiumFacilitiesWrapper = styled(SectionWrapper)`
    ${ContainerWithSide} {
        flex-wrap: wrap-reverse;
    }

    @media (min-width: ${({ theme }) => theme.media.md}) {
        height: 100lvh;

        ${StyledSideContent} {
            padding-left: 10%;
        }
    }
    @media (max-width: ${({ theme }) => theme.media.md}) {
        margin-block: 96px;

        ${StyledButton} {
            width: 100%;
        }
    }
`;
