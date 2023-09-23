import { SidePhotos, SidePhotosInner } from '../../styles/SidePhotos.styled';

function MYNBPhotos() {
    return (
        <SidePhotos>
            <SidePhotosInner>
                <img
                    style={{
                        width: '75%',
                        height: '75%',
                        objectFit: 'cover',
                        position: 'absolute',
                        left: 0,
                    }}
                    src="../../assets/2.jpg"
                />
                <img
                    style={{
                        width: '55%',
                        height: '75%',
                        objectFit: 'cover',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                    }}
                    src="../../assets/1.jpg"
                />
            </SidePhotosInner>
        </SidePhotos>
    );
}

export default MYNBPhotos;
