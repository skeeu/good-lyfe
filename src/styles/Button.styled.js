import styled from 'styled-components';

export const StyledButton = styled.button`
    border-radius: 9999px;

    padding: 24px 32px;

    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    color: white;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    font-size: 16px;
    letter-spacing: 1px;

    ${({ variant, theme }) => {
        switch (variant) {
            case 'primary':
                return `
                background-color: ${theme.colors.primary};
                &:hover {
                    background-color: #BE285E;
                }
                &:focus {
                    box-shadow: 0 0 0 8px ${theme.colors.secondary};
                }
            `;
            case 'secondary':
                return `
                color: ${theme.colors.primary};
                border: 2px solid ${theme.colors.primary};
                background-color: transparent;
                &:hover {
                    color: #BE285E;
                    border: 2px solid #BE285E;
                }
                &:focus {
                    box-shadow: 0 0 0 8px #FFDAE7;
                }
        `;
            case 'text':
                return `
                background-color: transparent;
                color: ${theme.colors.primary};
                &:hover {
                    color: #BE285E;
                }

                &:focus {
                    background-color: ${theme.colors.gray5};
                }
        `;
            default:
                return ``;
        }
    }}
`;

StyledButton.defaultProps = {
    variant: 'primary',
};
