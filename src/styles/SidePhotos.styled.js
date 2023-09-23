import styled from 'styled-components';

export const SidePhotos = styled.div`
    height: 65%;
    box-sizing: border-box;
    padding-inline: 4%;
`;

export const SidePhotosInner = styled.div`
    width: 100%;
    height: 100%;
    max-height: 550px;
    min-height: 320px;

    position: relative;

    img {
        max-width: 100%;
        max-height: 100%;
        height: auto;
    }
`;
