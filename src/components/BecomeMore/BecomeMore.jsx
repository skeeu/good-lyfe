import Button from '../Button';
import Section from '../../UI/Section/Section';
import { BecomeMoreWrapper } from './BecomeMoreWrapper';
import { Heading } from '../../styles/Heading.styled';

export default function BecomeMore() {
    return (
        <BecomeMoreWrapper>
            <Section isContentFaded>
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
            </Section>
        </BecomeMoreWrapper>
    );
}
