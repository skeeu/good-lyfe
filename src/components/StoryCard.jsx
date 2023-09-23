import { Heading } from '../styles/Heading.styled';
import {
    StoryCardAva,
    StoryCardContent,
    StoryCardDescription,
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
                    <StoryCardDescription>
                        <Heading
                            color="#424242"
                            size={5}
                        >
                            {person.name}
                        </Heading>
                        <div style={{ color: '#969BAB' }}>
                            {person.description}
                        </div>
                    </StoryCardDescription>
                </StoryCardPersonBox>
            </StoryCardContent>
        </StoryCardWrapper>
    );
}

export default StoryCard;
