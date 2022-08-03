import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Import Styled Components
import { FooterContainer, FlexWrap } from 'components/Footer/Footer.atoms';
import { PressCoverage } from 'components';
import Link from 'next/link';

const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
    url,
    imgSrc,
    altText,
}) => {
    const style = {
        border: 'none',
    };

    return (
        <Link href={url} passHref>
            <a
                css={{
                    border: 'none',
                }}
                target='_blank'
                rel='noopener noreferrer'
            >
                <img
                    css={{
                        width: '24px',
                        height: '24px',
                    }}
                    width='24px'
                    height='24px'
                    src={imgSrc}
                    alt={altText}
                />
            </a>
        </Link>
    );
};

const CopyNotice = styled.div(() => css({
    fontSize: '0.75em',
    margin: '30px 0 20px 0',
    textAlign: 'center',
}));


const Title = styled.div(() => css({
    color: '#fafafa',
    fontSize: '2.5em',
    fontWeight: 'lighter',
}));

const FooterTitle = styled.div(() => css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
}));

const SocialWrapper = styled.div(() => css({
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',

    ['a']: {
        display: 'block',
        margin: '0 10px',
    },
}));

const Footer = () => (
    <>
        <PressCoverage />
        <FooterContainer>
            <FlexWrap>
                <FooterTitle>
                    <div css={{
                        marginRight: '10px',
                    }}>
                        <img height="60px" width="60px" src='https://static.killedbygoogle.com/com/tombstone-alt.svg' alt="Tombstone" />
                    </div>
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
                        &copy; 2022 Cody Ogden.
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
                        imgSrc='https://static.killedbygoogle.com/com/github.svg'
                    />
                    <SocialLink
                        url="https://twitter.com/killedbygoogle"
                        altText="Twitter"
                        imgSrc='https://static.killedbygoogle.com/com/twitter.svg'
                    />
                </SocialWrapper>
            </FlexWrap>
        </FooterContainer>
    </>
);
export default Footer;
