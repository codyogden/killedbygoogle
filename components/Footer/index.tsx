import { FC } from 'react';
import { PressCoverage } from 'components';
import Link from 'next/link';
import styles from './Footer.module.css';

const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
    url,
    imgSrc,
    altText,
}) => {
    return (
        <Link href={url} className={styles.socialLink} target='_blank' rel='noopener noreferrer'>
            <img
                className={styles.socialImage}
                width='24px'
                height='24px'
                src={imgSrc}
                alt={altText}
            />
        </Link>
    );
};

// Components now use CSS modules

const Footer = () => (
    <>
        <PressCoverage />
        <footer className={styles.footerContainer}>
            <div className={styles.flexWrap}>
                <div className={styles.footerTitle}>
                    <div className={styles.tombstoneIcon}>
                        <img height="60px" width="60px" src='https://static.killedbygoogle.com/com/tombstone-alt.svg' alt="Tombstone" />
                    </div>
                    <div className={styles.title}>Killed by Google</div>
                </div>
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
            <a href="https://github.com/codyogden/killedbygoogle">GitHub</a>. A project
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
                <div className={styles.copyNotice}>
                    <a href="https://github.com/codyogden/killedbygoogle/blob/main/LICENSE">
                        &copy; {(new Date()).getFullYear()} Cody Ogden.
          </a>
          &nbsp;-&nbsp;
          <a href="https://analytics.kbg.rip" target="_blank" rel="noopener noreferrer">
                        Analytics
          </a>
                </div>
                <div className={styles.socialWrapper}>
                    <SocialLink
                        url="https://killedbygoogle.blue"
                        altText="BlueSky"
                        imgSrc='https://static.killedbygoogle.com/com/bsky.svg'
                    />
                    <SocialLink
                        url="https://github.com/codyogden/killedbygoogle"
                        altText="GitHub"
                        imgSrc='https://static.killedbygoogle.com/com/github.svg'
                    />
                </div>
            </div>
        </footer>
    </>
);
export default Footer;
