import { Heading } from '../styles/Heading.styled';
import { StyledLogo } from '../styles/Logo.styled';

export default function Logo({ colorOne, colorTwo }) {
    return (
        <StyledLogo
            $colorOne={colorOne}
            $colorTwo={colorTwo}
        >
            <Heading>Good</Heading>
            <Heading>lyfe</Heading>
        </StyledLogo>
    );
}
