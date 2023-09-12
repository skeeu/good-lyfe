import { StyledHeading } from "./StyledHeading";

export default function Heading({ color, css, size, children }) {
    return <StyledHeading size={size} css={{ color, ...css }} >{children}</StyledHeading>
}