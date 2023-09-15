import Heading from '../../UI/Heading/Heading';
import Section from '../../UI/Section/Section';
import StoryCard from '../../UI/StoryCard/StoryCard';
import { StoryList } from '../../UI/StoryCard/StyledStoryCard';
import { Subhead } from '../../UI/Subhead/Subhead';
import { RealStoriesWrapper } from './RealStoriesWrapper';

const stories = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec felis. Sed id egestasegestas risu.',
        headingText: '3Kg lost!',
        person: {
            ava: './assets/stories/ava1.png',
            name: 'James John',
            description: 'Mechanic',
        },
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in mo.',
        headingText: '17Kg lost!',
        person: {
            ava: './assets/stories/ava3.png',
            name: 'Mary Patricia',
            description: 'Mother of two',
        },
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        headingText: '43Kg lost!',
        person: {
            ava: './assets/stories/ava2.png',
            name: 'Robert Micheal',
            description: 'Manager',
        },
    },
];

function RealStories() {
    return (
        <RealStoriesWrapper>
            <Section>
                <Heading size={2}>Real Stories from Real Customers</Heading>
                <Subhead>Be inspired with these experiences.</Subhead>
                <StoryList>
                    {stories.map((story, i) => {
                        return (
                            <StoryCard
                                key={i}
                                headingText={story.headingText}
                                person={story.person}
                            >
                                {story.text}
                            </StoryCard>
                        );
                    })}
                </StoryList>
            </Section>
        </RealStoriesWrapper>
    );
}

export default RealStories;
