import styled from 'styled-components';
export const Heading = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: ${({ theme }) => theme.fontWeights.black};
    color: ${({ $color }) => $color || 'white'};

    ${({ $size, theme }) => {
        switch ($size) {
            case 1:
                return `
                font-size: 70px;
            `;
            case 2:
                return `
                font-size: 48px;
            `;
            case 3:
                return `
                font-size: 40px;
            `;
            case 4:
                return `
                font-size: 38px;
            `;
            case 5:
                return `
                font-size: 18px;
            `;
        }
    }}
`;

Heading.defaultProps = {
    $size: 1,
};
