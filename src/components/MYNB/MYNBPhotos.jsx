import { Box } from '../../UI/Box/Box';

function MYNBPhotos() {
    return (
        <Box
            css={{
                position: 'relative',
                flex: 1,
            }}
        >
            <img
                style={{
                    width: '75%',
                    height: 'auto',
                }}
                src="../../assets/2.jpg"
            />
            <img
                style={{
                    position: 'absolute',
                    width: 'auto',
                    height: '100%',
                }}
                src="../../assets/1.jpg"
            />
        </Box>
    );
}

export default MYNBPhotos;
