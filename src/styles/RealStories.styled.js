import styled from 'styled-components';
import { SectionContent, SectionWrapper } from './Section.styled';

export const RealStoriesWrapper = styled(SectionWrapper)``;

export const RealStoriesContent = styled(SectionContent)`
    background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%),
        #f4e3e9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    padding-block: 10%;
`;

export const RealStoriesContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    padding-inline: 5%;

    .swiper-slide {
        flex-shrink: 0;
        flex-grow: 1;
        flex-basis: 350px;
        min-height: 100% !important;
        height: auto;
    }
`;
