import Header from './components/Header/Header';
import MYNB from './components/MYNB/MYNB';
import PremiumFacilities from './components/PremiumFacilities/PremiumFacilities';
import RealStories from './components/RealStories';
import MobileApp from './components/MobileApp';
import Social from './components/Social';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/Global.styled';
import BecomeMore from './components/BecomeMore';
import Footer from './components/Footer';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <MYNB />
            <BecomeMore />
            <PremiumFacilities />
            <RealStories />
            <MobileApp />
            <Social />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
