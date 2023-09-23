import styled from 'styled-components';
import { SectionContent, SectionWrapper } from './Section.styled';
import { Heading } from './Heading.styled';
import { StyledButton } from './Button.styled';

export const BecomeMoreWrapper = styled(SectionWrapper)`
    height: 100lvh;

    color: white;
    background-image: url('./assets/1.jpg');
    background-size: cover;
    background-position: 100% 60%;
    line-height: normal;

    @media (max-width: ${({ theme }) => theme.media.md}) {
        background-position: 60% 20%;
    }

    ${SectionContent} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;

        ${StyledButton} {
            width: 210px;
        }

        @media (max-width: ${({ theme }) => theme.media.md}) {
            ${Heading} {
                font-size: 40px;
            }

            ${StyledButton} {
                width: 200px;
            }
        }
    }
`;
