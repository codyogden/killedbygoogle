import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const HeaderContainer = styled.header(() => css({
    display: 'flex',
    justifyContent: 'center',
    padding: '3rem',
}));

const BrandingContainer = styled.div(() => css({
    alignItems: 'center',
    display: 'flex',
}));

const Logo = styled.div(() => css({
    display: 'block',
    marginRight: '1rem',
    width: '60px',
}));

const Title = styled.h1(() => css({
    fontSize: '2.75rem',
    fontWeight: 'lighter',
    margin: 0,
}));

const Header = () => (
    <HeaderContainer>
        <Link href="/" passHref>
            <a rel="noreferrer noopener" css={{
                borderBottom: 0,
            }}>
                <BrandingContainer>
                        <Logo>
                            <img width="60px" src="/tombstone.svg" height="60px" alt="Tombstone" />
                        </Logo>
                        <Title>Killed by Google</Title>
                </BrandingContainer>
            </a>
        </Link>
    </HeaderContainer>
);

export default Header;