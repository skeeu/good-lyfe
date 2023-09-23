import { FaFacebookF } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { AiOutlineInstagram } from 'react-icons/ai';
import Button from './Button';
import { Heading } from '../styles/Heading.styled';
import { IconsContainer, SocialWrapper } from '../styles/Social.styled';

const icons = [<FaFacebookF />, <ImYoutube2 />, <AiOutlineInstagram />];

function Social() {
    return (
        <SocialWrapper>
            <Heading
                color="primary"
                size={2}
            >
                Social
            </Heading>
            <IconsContainer>
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
            </IconsContainer>
        </SocialWrapper>
    );
}

export default Social;
