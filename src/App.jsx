import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Header from './components/Header/Header';
import MYNB from './components/MYNB/MYNB';
import BecomeMore from './components/BecomeMore/BecomeMore';
import PremiumFacilities from './components/PremiumFacilities/PremiumFacilities';
import RealStories from './components/RealStories/RealStories';
import Section from './UI/Section/Section';
import MobileApp from './components/MobileApp/MobileApp';
import Social from './components/Social/Social';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Theme>
                <Header />
                {/* <MYNB /> */}
                <BecomeMore />
                {/* <PremiumFacilities /> */}
                {/* <RealStories /> */}
                {/* <Section>
                <MobileApp />
                <Social />
            </Section> */}
            </Theme>
        </ThemeProvider>
    );
}

export default App;
