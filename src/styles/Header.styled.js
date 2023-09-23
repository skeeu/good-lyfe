import styled from 'styled-components';
import { SectionContent, SectionWrapper } from './Section.styled';
import { Heading } from './Heading.styled';
import { StyledButton } from './Button.styled';

export const StyledHeaderTop = styled.div`
    --header-y-padding: 32px;
    --header-x-padding: 36px;
    --header-height: 100px;

    width: 100%;
    max-height: var(--header-height);
    padding: var(--header-y-padding) var(--header-x-padding);

    background-color: ${({ theme }) => theme.colors.primary};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 40px;

    @media (max-width: ${({ theme }) => theme.media.md}) {
        --header-y-padding: 20px;
        --header-x-padding: 16px;
        --header-height: 56px;

        font-size: 24px;
    }
`;

export const HeaderWrapper = styled(SectionWrapper)`
    color: white;

    height: 100lvh;
    background-image: url('./assets/5.jpg');
    background-position: 60% 60%;
    background-size: cover;

    &::after {
        content: '';
        display: block;
        position: absolute;
        height: 34px;
        left: 0;
        right: 0;
        bottom: -4px;
        background-image: url('./assets/el-1.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        z-index: 2;
    }

    @media (min-width: ${({ theme }) => theme.media.xl}) {
        background-position: 100% 0%;
    }
`;

export const HeaderContent = styled(SectionContent)`
    display: flex;
    flex-direction: column;

    & > *:nth-child(1) {
        flex: 1 1 20%;
    }

    & > *:nth-child(2) {
        flex: 1 1 80%;
    }
`;

export const HeaderInner = styled.div`
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
`;

export const OpenMenuButton = styled.button`
    display: none;

    @media (max-width: ${({ theme }) => theme.media.md}) {
        display: block;
    }
`;
