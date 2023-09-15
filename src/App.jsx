import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Header from './components/Header/Header';
import MYNB from './components/MYNB/MYNB';
import BecomeMore from './components/BecomeMore/BecomeMore';
import PremiumFacilities from './components/PremiumFacilities/PremiumFacilities';
import RealStories from './components/RealStories/RealStories';

function App() {
    return (
        <Theme>
            <Header />
            <MYNB />
            <BecomeMore />
            <PremiumFacilities />
            <RealStories />
        </Theme>
    );
}

export default App;
