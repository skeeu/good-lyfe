import { styled } from "../../theme";

export const StyledButton = styled('button', {
    borderRadius: '9999px',

    padding: '24px 32px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',

    color: 'white',
    fontWeight: "$semiBold",

    variants: {
        variant: {
            primary: {
                backgroundColor: '$primary',
                '&:hover': {
                    backgroundColor: "#BE285E",
                },

                '&:focus': {
                    boxShadow: '0 0 0 8px $secondary',
                }
            }
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})