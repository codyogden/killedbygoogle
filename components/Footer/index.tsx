import { FC } from 'react';
import Link from 'next/link';

import PressCoverage from '@/components/PressCoverage';

const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
    url,
    imgSrc,
    altText,
}) => (
    <Link href={url} className="border-0" target="_blank" rel="noopener noreferrer">
        <img
            className="h-6 w-6 dark:filter-none"
            width="24px"
            height="24px"
            src={imgSrc}
            alt={altText}
        />
    </Link>
);

const Footer = () => (
    <>
        <PressCoverage />
        <footer className="bg-footer-bg text-footer-text py-[50px] text-base [&_img]:dark:filter-none">
            <div className="mx-auto w-[38em] max-w-[90%] text-center [&>div_p]:leading-[1.75]">
                <div className="flex items-center justify-center pb-5">
                    <div className="mr-[10px]">
                        <img height="60px" width="60px" src="https://static.killedbygoogle.com/com/tombstone-alt.svg" alt="Tombstone" />
                    </div>
                    <div className="text-footer-text text-[2.5em] font-thin">Killed by Google</div>
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
                        <a href="mailto:knife@killedbygoogle.com">knife@killedbygoogle.com</a>
                        .
                    </p>
                </div>
                <div className="mt-[30px] mb-5 text-center text-[0.75em]">
                    <a href="https://github.com/codyogden/killedbygoogle/blob/main/LICENSE">
                        &copy; {new Date().getFullYear()} Cody Ogden.
                    </a>
                </div>
                <div className="flex justify-center py-[15px] [&>a]:mx-[10px] [&>a]:block">
                    <SocialLink
                        url="https://x.com/killedbygoogle"
                        altText="Twitter"
                        imgSrc="https://static.killedbygoogle.com/com/twitter.svg"
                    />
                    <SocialLink
                        url="https://killedbygoogle.blue"
                        altText="BlueSky"
                        imgSrc="https://static.killedbygoogle.com/com/bsky.svg"
                    />
                    <SocialLink
                        url="https://github.com/codyogden/killedbygoogle"
                        altText="GitHub"
                        imgSrc="https://static.killedbygoogle.com/com/github.svg"
                    />
                </div>
            </div>
        </footer>
    </>
);

export default Footer;
