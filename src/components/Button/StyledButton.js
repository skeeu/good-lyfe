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
    fontSize: '16px',
    letterSpacing: '1px',

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
            },
            secondary: {
                color: '$primary',
                border: '2px solid $primary',
                '&:hover': {
                    color: '#BE285E',
                    border: '2px solid #BE285E',
                },
                '&:focus': {
                    boxShadow: '0 0 0 8px #FFDAE7',
                }
            },
            text: {
                backgroundColor: 'transparent',
                color: '$primary',

                '&:hover': {
                    color: "#BE285E",
                },

                '&:focus': {
                    backgroundColor: '$gray5',
                }
            }
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})