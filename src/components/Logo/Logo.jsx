import { Box } from "../Box/Box";
import { StyledHeading } from "../Heading/StyledHeading";

export default function Logo({ size = 1, colorOne = 'white', colorTwo = '$secondary' }) {
    return (
        <Box css={{ display: 'inline-flex', flexDirection: 'row', gap: 0 }}>
            <StyledHeading size={size} css={{ color: colorOne }}>Good</StyledHeading>
            <StyledHeading size={size} css={{ color: colorTwo }}>lyfe</StyledHeading>
        </Box>
    )
}