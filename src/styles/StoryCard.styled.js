import styled from 'styled-components';

export const StoryCardWrapper = styled.div`
    min-height: 100%;

    border-radius: 10px;
    background: #fff;
    box-shadow: 1px 4px 8px 0px rgba(0, 0, 0, 0.18);

    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: start;

    padding: 35px 32px;
`;

export const StoryCardContent = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
    grid-gap: 14px;
`;

export const StoryCardTextBox = styled.div`
    color: #424242;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
`;

export const StoryCardAva = styled.img`
    width: 58px;
    height: 58px;

    border-radius: 99999px;

    object-fit: cover;
`;

export const StoryCardPersonBox = styled.div`
    grid-column: 2;

    display: flex;
    flex-direction: row;
    gap: 17px;
`;

export const StoryCardDescription = styled.div`
    display: flex;
    flex-direction: column;
`;
