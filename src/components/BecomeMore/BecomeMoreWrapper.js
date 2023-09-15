import {
    SectionContent,
    SectionContentInner,
} from '../../UI/Section/StyledSection';
import { styled } from '../../theme';

export const BecomeMoreWrapper = styled('div', {
    [`& ${SectionContent}`]: {
        color: 'White',
        backgroundImage: `url('./assets/1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: '100% 60%',
        lineHeight: 'normal',
    },
    [`& ${SectionContentInner}`]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
    },
});
