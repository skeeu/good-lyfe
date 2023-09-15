import { styled } from '../../theme';

export const Subhead = styled('span', {
    color: '#424242',
    fontWeight: 400,

    variants: {
        size: {
            1: {
                fontSize: '18px',
            },
        },
    },

    defaultVariants: {
        size: 1,
    },
});
