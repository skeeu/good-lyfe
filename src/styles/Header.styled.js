import styled from 'styled-components';
import {
    SectionContent,
    SectionContentInner,
} from '../UI/Section/StyledSection';
import Button from '../components/Button';

export const StyledHeaderTop = styled.div`
    --header-y-padding: 32px;
    --header-x-padding: 36px;
    --header-height: 100px;

    width: calc(100% - 2 * var(--header-x-padding));
    height: calc(var(--header-height) - 2 * var(--header-y-padding));
    padding: var(--header-y-padding) var(--header-x-padding);

    background-color: ${({ theme }) => theme.colors.primary};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.media.tablets}) {
        --header-y-padding: 20px;
        --header-x-padding: 16px;
        --header-height: 56px;
    }
`;

export const HeaderWrapper = styled.div`
    ${SectionContent} {
        color: white;
        position: relative;
        background-image: url('./assets/5.jpg');
        background-position: 60% 90%;

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

        @media (min-width: ${({ theme }) => theme.media.desktop}) {
            background-position: 100% 20%;
        }
    }
    ${SectionContentInner} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
    }
`;

export const OpenMenuButton = styled.button`
    display: none;

    @media (max-width: ${({ theme }) => theme.media.tablets}) {
        display: block;
    }
`;
