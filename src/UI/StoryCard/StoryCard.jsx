import { Box } from '../Box/Box';
import Heading from '../Heading/Heading';
import CitationSign from './CitationSign';
import {
    StoryCardAva,
    StoryCardContent,
    StoryCardPersonBox,
    StoryCardTextBox,
    StoryCardWrapper,
} from './StyledStoryCard';

function StoryCard({ headingText, person, children }) {
    return (
        <StoryCardWrapper>
            <Heading
                color="$primary"
                size={4}
            >
                {headingText}
            </Heading>
            <StoryCardContent>
                <CitationSign />
                <StoryCardTextBox>{children}</StoryCardTextBox>
                <StoryCardPersonBox>
                    <StoryCardAva src={person.ava} />
                    <Box>
                        <Heading
                            color="#424242"
                            css={{ display: 'inline' }}
                            size={5}
                        >
                            {person.name}
                        </Heading>
                        <br />
                        <Box css={{ color: '#969BAB', display: 'inline' }}>
                            {person.description}
                        </Box>
                    </Box>
                </StoryCardPersonBox>
            </StoryCardContent>
        </StoryCardWrapper>
    );
}

export default StoryCard;
