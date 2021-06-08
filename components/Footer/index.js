import React from 'react';
import styled from 'styled-components';

// Import Styled Components
import { FooterContainer, FlexWrap } from './Footer.atoms';
import PressCoverage from '../PressCoverage';

// Images

const SocialLink = ({
    url,
    imgSrc,
    altText,
}) => {
    const style = {
        border: 'none',
    };

    return (
        <a style={style} href={url}>
            <img src={imgSrc} alt={altText} />
        </a>
    );
};

const CopyNotice = styled.div`
  font-size: 0.75em;
  text-align: center;
  margin: 30px 0 20px 0;
`;

const TombstoneStyle = {
    width: '60px',
    marginRight: '10px',
};

const Title = styled.div`
  font-size: 2.5em;
  color: #fafafa;
  font-weight: lighter;
`;

const FooterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

const SocialWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  a {
    display: block;
    margin: 0 10px;
  }
`;

const Footer = () => (
    <>
        <PressCoverage />
        <FooterContainer>
            <FlexWrap>
                <FooterTitle>
                    <img style={TombstoneStyle} src='tombstone-alt.svg' alt="Tombstone" />
                    <Title>Killed by Google</Title>
                </FooterTitle>
                <div>
                    <p>
                        Killed by Google is the Google graveyard; a free and open source
                        list of discontinued Google services, products, devices, and apps.
                        We aim to be a source of factual information about the history
                        surrounding Google&apos;s dead projects.
          </p>
                    <p>
                        <a
                            href="https://github.com/codyogden/killedbygoogle/graphs/contributors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contributors
            </a>
            &nbsp;from around the world help compile, research, and maintain the
            information about dying and dead Google products. You can join the
            discussion on&nbsp;
            <a href="https://github.com/codyogden/killedbygoogle">GitHub</a>, or
            follow us on&nbsp;
            <a href="https://twitter.com/killedbygoogle">Twitter</a>. A project
            by&nbsp;
            <a
                            href="https://codyogden.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cody Ogden
            </a>
            .
          </p>
                    <p>
                        Press inquiries and other assorted death threats?
            <br />
            Throw a&nbsp;
            <a href="mailto:knife@killedbygoogle.com">
                            knife@killedbygoogle.com
            </a>
            .
          </p>
                </div>
                <CopyNotice>
                    <a href="https://github.com/codyogden/killedbygoogle/blob/main/LICENSE">
                        &copy; 2020 Cody Ogden.
          </a>
          &nbsp;-&nbsp;
          <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">
                        This site is powered by Netlify.
          </a>
          &nbsp;-&nbsp;
          <a href="https://analytics.kbg.rip" target="_blank" rel="noopener noreferrer">
                        Analytics
          </a>
                </CopyNotice>
                <SocialWrapper>
                    <SocialLink
                        url="https://github.com/codyogden/killedbygoogle"
                        altText="GitHub"
                        imgSrc='github.svg'
                    />
                    <SocialLink
                        url="https://twitter.com/killedbygoogle"
                        altText="Twitter"
                        imgSrc='twitter.svg'
                    />
                </SocialWrapper>
            </FlexWrap>
        </FooterContainer>
    </>
);
export default Footer;