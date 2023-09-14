import { styled } from '../../theme';

export const SectionWrapper = styled('div', {
    minHeight: '100lvh',
    width: '100%',
});

export const SectionContent = styled('div', {
    width: '100%',
    minHeight: '705px',
    height: '100%',

    backgroundSize: 'cover',
    backgroundPosition: '100% 20%',

    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    lineHeight: '400%',
    textAlign: 'center',
    fontStyle: 'normal',
});

export const SectionContentInner = styled('div', {
    width: '100%',
    height: '100%',

    zIndex: 2,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
});
