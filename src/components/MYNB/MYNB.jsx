import MYNBPhotos from './MYNBPhotos';
import { ContainerWithSide } from '../../styles/ContainerWithSide.styled';
import SideContent from '../SideContent';
import { SectionContent } from '../../styles/Section.styled';
import { MYNBWrapper } from '../../styles/MYNB.styled';

export default function MYNB() {
    return (
        <MYNBWrapper>
            <SectionContent>
                <ContainerWithSide>
                    <MYNBPhotos />
                    <SideContent
                        headingValue="Meet your new body"
                        buttonValue="View the FAQ"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus eget lectus urna. Nulla magna tortor, bibendum
                        in molestie sed, gravida nec felis. Sed id
                        egestasegestas risus, ut imperdiet augue.
                    </SideContent>
                </ContainerWithSide>
            </SectionContent>
        </MYNBWrapper>
    );
}
