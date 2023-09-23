import { Heading } from '../styles/Heading.styled';
import { StyledSideContent } from '../styles/SideContent.styled';
import Button from './Button';

function SideContent({ headingValue, buttonValue, children }) {
    return (
        <StyledSideContent>
            <Heading
                size={2}
                color="primary"
            >
                {headingValue}
            </Heading>

            <span>{children}</span>

            {buttonValue && (
                <Button
                    variant="secondary"
                    css={{ width: '236px' }}
                >
                    {buttonValue}
                </Button>
            )}
        </StyledSideContent>
    );
}
export default SideContent;
