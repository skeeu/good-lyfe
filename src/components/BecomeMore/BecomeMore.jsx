import Button from '../../UI/Button/Button';
import { StyledHeading } from '../../UI/Heading/StyledHeading';
import Section from '../../UI/Section/Section';
import { BecomeMoreWrapper } from './BecomeMoreWrapper';

export default function BecomeMore() {
    return (
        <BecomeMoreWrapper>
            <Section isContentFaded>
                <StyledHeading size={1}>
                    Become more than you are.
                </StyledHeading>
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
