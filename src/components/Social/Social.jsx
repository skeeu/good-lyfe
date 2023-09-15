import Heading from '../../UI/Heading/Heading';
import { SocialWrapper } from './StyledSocial';
import { FaFacebookF } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { AiOutlineInstagram } from 'react-icons/ai';
import Button from '../../UI/Button/Button';
import { Box } from '../../UI/Box/Box';

const icons = [
    <FaFacebookF style={{ width: '32px', height: '32px' }} />,
    <ImYoutube2 style={{ width: '32px', height: '32px' }} />,
    <AiOutlineInstagram style={{ width: '32px', height: '32px' }} />,
];

function Social() {
    return (
        <SocialWrapper>
            <Heading
                color="$primary"
                size={2}
            >
                Social
            </Heading>
            <Box
                css={{ display: 'flex', gap: '90px', justifyContent: 'center' }}
            >
                {icons.map((icon, i) => {
                    return (
                        <Button
                            key={i}
                            css={{ padding: '22px 26px' }}
                            variant="secondary"
                        >
                            {icon}
                        </Button>
                    );
                })}
            </Box>
        </SocialWrapper>
    );
}

export default Social;
