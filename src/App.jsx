import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Header from './components/Header/Header';
import { Box } from './components/Box/Box';
import { StyledSection } from './components/Section/StyledSection';
import Logo from './components/Logo/Logo';
import { StyledHeading } from './components/Heading/StyledHeading';
import H1 from './assets/5.jpg'
import Button from './components/Button/Button';

function App() {

  return (
    <Theme>
      <Box css={{ minHeight: '100lvh' }}>
        <Header />
        <StyledSection css={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', color: 'white' }} >
          <Box css={{ position: 'absolute' }}>
            <StyledHeading size={1}>
              Welcome to <br /> <Logo /> Gyms
            </StyledHeading>
            <Button variant='primary' css={{ marginBlock: '12px' }}>See the benefits</Button>
          </Box>
          <img src={H1} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        </StyledSection>
      </Box>
      {/* <Button></Button> */}
    </Theme>
  )
}

export default App
