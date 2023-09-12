import Button from '../../UI/Button/Button';
import { Fade } from '../../UI/Fade/Fade';
import { StyledHeading } from '../../UI/Heading/StyledHeading';
import {
    SectionContent,
    SectionContentInner,
    SectionWrapper,
} from '../../UI/Section/Section';

export default function BecomeMore() {
    return (
        <SectionWrapper>
            <SectionContent
                css={{
                    backgroundImage: `url('./assets/1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: '100% 60%',
                    color: 'white',
                    lineHeight: 'normal',
                }}
            >
                <Fade />
                <SectionContentInner>
                    <StyledHeading size={1}>
                        Become more than you are.
                    </StyledHeading>
                    <span>
                        Staying active is great fun and keeps you healthy.{' '}
                        <br /> Check out how you can join in.
                    </span>
                    <Button
                        variant="primary"
                        css={{ marginBlock: '12px', width: '238px' }}
                    >
                        Let’s do it!
                    </Button>
                </SectionContentInner>
            </SectionContent>
        </SectionWrapper>
    );
}
