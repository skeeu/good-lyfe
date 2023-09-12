import { SectionContent } from '../../UI/Section/Section';
import { styled } from '../../theme';

export const HeaderContent = styled(SectionContent, {
    color: 'White',

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
});
