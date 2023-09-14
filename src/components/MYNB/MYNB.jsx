import Section from '../../UI/Section/Section';
import MYNBPhotos from './MYNBPhotos';
import { GridСontainer } from '../../UI/Grid/GridСontainer';
import GridSideContent from '../../UI/Grid/GridSideContent';

export default function MYNB() {
    return (
        <Section>
            <GridСontainer>
                <MYNBPhotos />
                <GridSideContent
                    headingValue="Meet your new body"
                    buttonValue="View the FAQ"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eget lectus urna. Nulla magna tortor, bibendum in
                    molestie sed, gravida nec felis. Sed id egestasegestas
                    risus, ut imperdiet augue.
                </GridSideContent>
            </GridСontainer>
        </Section>
    );
}
