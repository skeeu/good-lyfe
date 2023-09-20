import { Heading } from '../styles/Heading.styled';
import { StyledLogo } from '../styles/Logo.styled';

export default function Logo({ size, colorOne, colorTwo }) {
    return (
        <StyledLogo
            $colorOne={colorOne}
            $colorTwo={colorTwo}
        >
            <Heading $size={size}>Good</Heading>
            <Heading $size={size}>lyfe</Heading>
        </StyledLogo>
    );
}
