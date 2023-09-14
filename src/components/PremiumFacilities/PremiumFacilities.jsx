import GridSideContent from '../../UI/Grid/GridSideContent';
import Section from '../../UI/Section/Section';
import { GridСontainer } from '../../UI/Grid/GridСontainer';
import PremiumFacilitiesPhotos from './PremiumFacilitiesPhotos';

function PremiumFacilities() {
    return (
        <Section>
            <GridСontainer>
                <GridSideContent
                    headingValue="Premium Facilities"
                    buttonValue="Learn more"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eget lectus urna. Nulla magna tortor, bibendum in
                    molestie sed, gravida nec felis. Sed id egestasegestas
                    risus, ut imperdiet augue.
                </GridSideContent>
                <PremiumFacilitiesPhotos />
            </GridСontainer>
        </Section>
    );
}

export default PremiumFacilities;
