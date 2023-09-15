import {
    SectionContent,
    SectionContentInner,
} from '../../UI/Section/StyledSection';
import { styled } from '../../theme';

export const HeaderWrapper = styled('div', {
    [`& ${SectionContent}`]: {
        color: 'White',
        backgroundImage: `url('./assets/5.jpg')`,

        '&:after': {
            content: '',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '34px',
            left: 0,
            bottom: '-10px',
            background: 'url(./assets/el-1.svg)',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            zIndex: 2,
        },
    },
    [`& ${SectionContentInner}`]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
    },
});
