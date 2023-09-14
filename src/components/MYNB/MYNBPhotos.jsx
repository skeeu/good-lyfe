import { Box } from '../../UI/Box/Box';

function MYNBPhotos() {
    return (
        <Box css={{ position: 'relative' }}>
            <img
                style={{
                    position: 'relative',
                    width: '350px',
                    height: '400px',
                    objectFit: 'cover',
                }}
                src="../../assets/2.jpg"
            />
            <img
                style={{
                    position: 'absolute',
                    width: '240px',
                    height: '359px',
                    right: '-90px',
                    bottom: '-100px',
                    objectFit: 'cover',
                }}
                src="../../assets/1.jpg"
            />
        </Box>
    );
}

export default MYNBPhotos;
