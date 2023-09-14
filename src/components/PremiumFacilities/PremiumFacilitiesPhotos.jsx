import { Box } from '../../UI/Box/Box';

function PremiumFacilitiesPhotos() {
    return (
        <Box
            css={{
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
            }}
        >
            <img
                style={{
                    position: 'absolute',
                    width: '422px',
                    height: '281px',
                    objectFit: 'cover',
                }}
                src="../../assets/4.jpg"
            />
            <img
                style={{
                    position: 'relative',
                    width: '444px',
                    height: '296px',
                    left: '-160px',
                    top: '-160px',
                    objectFit: 'cover',
                }}
                src="../../assets/3.jpg"
            />
        </Box>
    );
}

export default PremiumFacilitiesPhotos;
