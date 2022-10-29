import React from 'react'
import { animateScroll as scroll } from "react-scroll";
import Logo from '../../images/Logo_Merach.png';

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle, 
    FooterLink,
    WebsiteRights,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    LogoImg
} from './FooterElements';

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
const Footer = () => {
    
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin"> Testimonials</FooterLink>
                        <FooterLink to="signin"> Carrers</FooterLink>
                        <FooterLink to="signin"> Investors</FooterLink>
                        <FooterLink to="signin"> Terms of service</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin"> Testimonials</FooterLink>
                        <FooterLink to="signin"> Carrers</FooterLink>
                        <FooterLink to="signin"> Investors</FooterLink>
                        <FooterLink to="signin"> Terms of service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin"> Testimonials</FooterLink>
                        <FooterLink to="signin"> Carrers</FooterLink>
                        <FooterLink to="signin"> Investors</FooterLink>
                        <FooterLink to="signin"> Terms of service</FooterLink>
                    </FooterLinkItems>
                    
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                        <FooterLink to="signin">How it works</FooterLink>
                        <FooterLink to="signin"> Testimonials</FooterLink>
                        <FooterLink to="signin"> Carrers</FooterLink>
                        <FooterLink to="signin"> Investors</FooterLink>
                        <FooterLink to="signin"> Terms of service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <LogoImg src={Logo} alt="logo" />
                        </SocialLogo>
                        <WebsiteRights> Mery ACHEMLAL @{ new Date().getFullYear()}&nbsp;
                            All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/www.facebook.com' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/www.instagram.com' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/www.youtube.com' target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/www.twitter.com' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/www.linkedin.com' target="_blank" aria-label="faLinkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer