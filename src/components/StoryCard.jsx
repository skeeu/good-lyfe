import { Heading } from '../styles/Heading.styled';
import { Box } from '../UI/Box/Box';
import {
    StoryCardAva,
    StoryCardContent,
    StoryCardPersonBox,
    StoryCardTextBox,
    StoryCardWrapper,
} from '../styles/StoryCard.styled';
import { CitationSign } from '../styles/CitationSign.styled';

function StoryCard({ headingText, person, children }) {
    return (
        <StoryCardWrapper>
            <Heading
                color="primary"
                size={4}
            >
                {headingText}
            </Heading>
            <StoryCardContent>
                <CitationSign>“</CitationSign>
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
