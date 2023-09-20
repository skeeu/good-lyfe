import styled from 'styled-components';

export const SectionWrapper = styled.div`
    min-height: 100lvh;
    height: 1px;
    width: 100%;

    display: flex;
    flex-direction: column;
`;

export const SectionContent = styled.div`
    width: 100%;
    flex: 1;

    background-size: cover;
    position: relative;

    text-align: center;
    font-style: normal;
`;

export const SectionContentInner = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    z-index: 2;
`;
