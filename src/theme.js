import { createStitches } from '@stitches/react'

export const { styled, css } = createStitches({
    theme: {
        colors: {
            primary: '#E43071',
            secondary: '#FFC1D8',
            green: '#26D68A',
            greenSecondary: '#9BE8C7',
            gray1: '#252525',
            gray2: '#424242',
            gray3: '#858585',
            gray4: '#D2D2D2',
            gray5: '#EDEDED',
            gray6: '#EFF0F6'
        },
        space: {},
        fontSizes: {},
        fonts: {
            poppins: 'Poppins, sans-serif'
        },
        fontWeights: {
            black: 800,
            extraBold: 700,
            semiBold: 600
        },
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {},
        shadows: {
            secondary: '$colors$secondary'
        },
        zIndices: {},
        transitions: {},
    },
    media: {
        desktop: '(min-width: 1440px)',
        mobile: '(min-width: 320px)',
    }
});