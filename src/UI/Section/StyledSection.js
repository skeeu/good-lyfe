import { styled } from '../../theme';

export const SectionWrapper = styled('div', {
    minHeight: '100lvh',
    height: '1px',
    width: '100%',
});

export const SectionContent = styled('div', {
    width: '100%',
    height: '100%',

    backgroundSize: 'cover',
    backgroundPosition: '100% 20%',

    position: 'relative',

    textAlign: 'center',
    fontStyle: 'normal',
});

export const SectionContentInner = styled('div', {
    width: '100%',
    height: '100%',

    position: 'relative',
    zIndex: 2,
});
