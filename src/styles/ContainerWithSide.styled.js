import styled from 'styled-components';

export const ContainerWithSide = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;

    box-sizing: border-box;
    padding: 0 1rem;

    & > * {
        flex: 1 1 320px;
    }
`;
