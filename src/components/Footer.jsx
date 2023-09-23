import {
    FooterInner,
    FooterLinks,
    FooterList,
    FooterListWrapper,
    FooterWrapper,
    SubFooter,
} from '../styles/Footer.styled';
import { Heading } from '../styles/Heading.styled';
import Logo from './Logo';
import { IoMdMail } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';

const links = [
    {
        header: 'Quick Links',
        items: ['classes', 'timetable', 'clubs', 'nutrition', 'free trial'],
    },
    {
        header: 'Guides',
        items: [
            'Weight Loss',
            'Strength Gain',
            'Crossfit',
            'Washbaord Abs',
            'Dieting',
        ],
    },
];

function Footer() {
    return (
        <FooterWrapper>
            <FooterInner>
                <FooterLinks>
                    <FooterListWrapper>
                        <Logo
                            style={{ fontSize: '24px' }}
                            colorTwo="primary"
                        />
                        <FooterList>
                            <li>
                                Lorem ipsum dolor amet, consectetur adipiscing
                                elit. Eget nisl nunc quam ac sed turpis
                                volutpat. Cursus sed massa non nisi, placerat.
                            </li>
                        </FooterList>
                    </FooterListWrapper>
                    {links.map((el, i) => {
                        return (
                            <FooterListWrapper key={i}>
                                <Heading>{el.header}</Heading>
                                <FooterList>
                                    {el.items.map((link, i) => {
                                        return (
                                            <li key={i}>
                                                <a href="">{link}</a>
                                            </li>
                                        );
                                    })}
                                </FooterList>
                            </FooterListWrapper>
                        );
                    })}
                    <FooterListWrapper>
                        <Heading>Reach us</Heading>
                        <FooterList>
                            <li>
                                <a href="">
                                    <IoMdMail /> admin@goodlyfe.co
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    {' '}
                                    <MdPhoneInTalk /> +88 98765 43210
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <HiLocationMarker /> 90210 Beverly Hills
                                    California USA
                                </a>
                            </li>
                        </FooterList>
                    </FooterListWrapper>
                </FooterLinks>
                <SubFooter>
                    <div>© 2020 GoodLyfe. All rights reserved</div>
                    <ul>
                        <li>
                            <a href="">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Sitemap</a>
                        </li>
                        <li>
                            <a href="">Disclaimer</a>
                        </li>
                    </ul>
                </SubFooter>
            </FooterInner>
        </FooterWrapper>
    );
}
export default Footer;
