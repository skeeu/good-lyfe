import Header from './components/Header/Header';
import MYNB from './components/MYNB/MYNB';
import PremiumFacilities from './components/PremiumFacilities/PremiumFacilities';
import RealStories from './components/RealStories';
// import Section from './UI/Section/Section';
// import MobileApp from './components/MobileApp/MobileApp';
// import Social from './components/Social/Social';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/Global.styled';
import BecomeMore from './components/BecomeMore';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <MYNB />
            <BecomeMore />
            <PremiumFacilities />
            <RealStories />
            {/* <Section>
                <MobileApp />
                <Social />
            </Section> */}
        </ThemeProvider>
    );
}

export default App;
