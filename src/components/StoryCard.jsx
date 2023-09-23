import { Heading } from '../styles/Heading.styled';
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
                    <div>
                        <Heading
                            color="#424242"
                            style={{ display: 'inline' }}
                            size={5}
                        >
                            {person.name}
                        </Heading>
                        <div style={{ color: '#969BAB', display: 'inline' }}>
                            {person.description}
                        </div>
                    </div>
                </StoryCardPersonBox>
            </StoryCardContent>
        </StoryCardWrapper>
    );
}

export default StoryCard;
