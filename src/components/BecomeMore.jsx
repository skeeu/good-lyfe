import Button from './Button';
import { Heading } from '../styles/Heading.styled';
import { BecomeMoreWrapper } from '../styles/BecomeMore.styled';
import { SectionContent } from '../styles/Section.styled';
import { Fade } from '../styles/Fade.styled';

export default function BecomeMore() {
    return (
        <BecomeMoreWrapper>
            <Fade />
            <SectionContent>
                <Heading size={1}>Become more than you are.</Heading>
                <span>
                    Staying active is great fun and keeps you healthy. <br />{' '}
                    Check out how you can join in.
                </span>
                <Button
                    variant="primary"
                    css={{ marginBlock: '12px', width: '238px' }}
                >
                    Let’s do it!
                </Button>
            </SectionContent>
        </BecomeMoreWrapper>
    );
}
