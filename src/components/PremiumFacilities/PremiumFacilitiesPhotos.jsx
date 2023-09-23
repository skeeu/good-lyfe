import { SidePhotos, SidePhotosInner } from '../../styles/SidePhotos.styled';

function PremiumFacilitiesPhotos() {
    return (
        <SidePhotos>
            <SidePhotosInner>
                <img
                    style={{
                        width: '75%',
                        height: '75%',
                        objectFit: 'cover',
                        position: 'absolute',

                        bottom: 0,
                        right: 0,
                    }}
                    src="../../assets/4.jpg"
                />
                <img
                    style={{
                        width: '75%',
                        height: '70%',
                        objectFit: 'cover',
                        position: 'absolute',
                        left: 0,
                    }}
                    src="../../assets/3.jpg"
                />
            </SidePhotosInner>
        </SidePhotos>
    );
}

export default PremiumFacilitiesPhotos;
