import StoryCard from './StoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Heading } from '../styles/Heading.styled';
import {
    RealStoriesContainer,
    RealStoriesContent,
    RealStoriesWrapper,
} from '../styles/RealStories.styled';
import { Subhead } from '../styles/Subhead.styled';

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
            <RealStoriesContent>
                <Heading
                    size={2}
                    color="black"
                >
                    Real Stories from Real Customers
                </Heading>
                <Subhead>Be inspired with these experiences.</Subhead>

                <RealStoriesContainer>
                    <Swiper
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={'12px'}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="swiper-cards"
                        style={{ width: '100%' }}
                    >
                        {stories.map((story, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <StoryCard
                                        headingText={story.headingText}
                                        person={story.person}
                                    >
                                        {story.text}
                                    </StoryCard>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </RealStoriesContainer>
            </RealStoriesContent>
        </RealStoriesWrapper>
    );
}

export default RealStories;
