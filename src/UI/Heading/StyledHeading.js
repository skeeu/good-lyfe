import { styled } from "../../theme";

export const StyledHeading = styled('h1', {
    margin: 0,
    padding: 0,
    fontWeight: '$black',
    fontFamily: '$poppins',

    variants: {
        size: {
            1: {
                fontSize: '70px'
            },
            2: {
                fontSize: '48px'
            },
            3: {
                fontSize: '40px'
            },
            4: {
                fontSize: '38px'
            }
        }
    },

    defaultVariants: {
        size: 1
    }
})