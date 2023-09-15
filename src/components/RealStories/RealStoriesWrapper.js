import { SectionContent } from '../../UI/Section/StyledSection';
import { styled } from '../../theme';

export const RealStoriesWrapper = styled('div', {
    [`& ${SectionContent}`]: {
        background:
            'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), #F4E3E9',
    },
});
