import {
    SectionContent,
    SectionContentInner,
    SectionWrapper,
} from './StyledSection';
import { Fade } from '../Fade/Fade';

function Section({ header, isContentFaded, children }) {
    return (
        <SectionWrapper>
            {header}
            <SectionContent>
                {isContentFaded && <Fade />}
                <SectionContentInner>{children}</SectionContentInner>
            </SectionContent>
        </SectionWrapper>
    );
}
Section.toString = () => '.section';
export default Section;
