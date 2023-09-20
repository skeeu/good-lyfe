import { Box } from '../Box/Box';
import Button from '../../components/Button';
import { Heading } from '../../styles/Heading.styled';

function GridSideContent({ headingValue, buttonValue, children }) {
    return (
        <Box
            css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                maxWidth: '560px',
                lineHeight: '37px',
                gap: '24px',
            }}
        >
            <Heading
                size={2}
                color="$primary"
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
        </Box>
    );
}

export default GridSideContent;
