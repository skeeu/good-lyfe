import Heading from '../../UI/Heading/Heading';
import { StyledHeading } from '../../UI/Heading/StyledHeading';
import { Box } from '../../UI/Box/Box';
import Button from '../../UI/Button/Button';
import { SectionContent, SectionContentInner, SectionWrapper } from '../../UI/Section/Section';

export default function MYNB() {
    return (
        <SectionWrapper>
            <SectionContent>
                <SectionContentInner>
                    <Box
                        css={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            height: '100%',
                            alignItems: 'center',
                            justifyItems: 'start',
                            textAlign: 'left'
                        }}
                    >
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
                        <Box
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                maxWidth: '560px',
                                lineHeight: '37px',
                                gap: '24px',
                            }}
                        >
                            <Heading size={2} color='$primary'>
                                Meet your new body
                            </Heading>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus eget lectus urna. Nulla magna tortor, bibendum
                                in molestie sed, gravida nec felis. Sed id
                                egestasegestas risus, ut imperdiet augue.
                            </span>
                            <Button
                                variant="secondary"
                                css={{ width: '236px' }}
                            >
                                View the FAQ
                            </Button>
                        </Box>
                    </Box>
                </SectionContentInner>
            </SectionContent>
        </SectionWrapper>
    );
}
