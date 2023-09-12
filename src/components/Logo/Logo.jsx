import { Box } from "../../UI/Box/Box";
import { StyledHeading } from "../../UI/Heading/StyledHeading";

export default function Logo({ size = 1, colorOne = 'white', colorTwo = '$secondary' }) {
    return (
        <Box css={{ display: 'inline-flex', flexDirection: 'row', gap: 0, lineHeight: '109.5%' }}>
            <StyledHeading size={size} css={{ color: colorOne }}>Good</StyledHeading>
            <StyledHeading size={size} css={{ color: colorTwo }}>lyfe</StyledHeading>
        </Box>
    )
}