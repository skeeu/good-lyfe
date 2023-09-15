import { styled } from '../../theme';

export const GridСontainer = styled('div', {
    height: '100%',
    width: '100%',

    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '100%',
    alignItems: 'center',
    justifyItems: 'center',
    textAlign: 'left',
});
