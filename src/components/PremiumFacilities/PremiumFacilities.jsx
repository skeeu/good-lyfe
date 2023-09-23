import PremiumFacilitiesPhotos from './PremiumFacilitiesPhotos';
import { PremiumFacilitiesWrapper } from '../../styles/PremiumFacilities.styled';
import { SectionContent } from '../../styles/Section.styled';
import { ContainerWithSide } from '../../styles/ContainerWithSide.styled';
import SideContent from '../SideContent';

function PremiumFacilities() {
    return (
        <PremiumFacilitiesWrapper>
            <SectionContent>
                <ContainerWithSide>
                    <SideContent
                        headingValue="Premium Facilities"
                        buttonValue="Learn more"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus eget lectus urna. Nulla magna tortor, bibendum
                        in molestie sed, gravida nec felis. Sed id
                        egestasegestas risus, ut imperdiet augue.
                    </SideContent>
                    <PremiumFacilitiesPhotos />
                </ContainerWithSide>
            </SectionContent>
        </PremiumFacilitiesWrapper>
    );
}

export default PremiumFacilities;
