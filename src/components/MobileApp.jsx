import { Heading } from '../styles/Heading.styled';
import { MobileAppInner, MobileAppWrapper } from '../styles/MobileApp.styled';
import { Subhead } from '../styles/Subhead.styled';

function MobileApp() {
    return (
        <MobileAppWrapper>
            <MobileAppInner>
                <Heading size={3}>Don’t forget our app</Heading>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eget lectus urna. Nulla magna tortor, bibendum in
                    molestie sed, gravida nec felis. Sed id egestasegestas
                    risus, ut imperdiet augue.
                </span>
                <Subhead style={{ color: 'rgba(255, 255, 255, 0.60)' }}>
                    Download now:
                </Subhead>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '12px',
                    }}
                >
                    <img
                        style={{ cursor: 'pointer' }}
                        src="./assets/mobileapp/googleplay.svg"
                    />
                    <img
                        style={{ cursor: 'pointer' }}
                        src="./assets/mobileapp/appstore.svg"
                    />
                </div>
            </MobileAppInner>
        </MobileAppWrapper>
    );
}

export default MobileApp;
