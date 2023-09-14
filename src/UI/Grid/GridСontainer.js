import { styled } from '../../theme';

export const GridСontainer = styled('div', {
    height: '100%',
    width: '100%',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    justifyItems: 'center',
    textAlign: 'left',
});
