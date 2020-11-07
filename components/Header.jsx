import styled from 'styled-components';

const HeaderContainer = styled.header`
    padding: 3rem;
    display: flex;
    justify-content: center;
    a {
        border-bottom: 0;
    }
`;

const BrandingContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    display: block;
    width: 60px;
    margin-right: 1rem;
`;

const Title = styled.h1`
    font-weight: lighter;
    margin: 0;
    font-size: 2.75rem;
`;

const Header = () => (
    <HeaderContainer>
        <a href="/" rel="noreferrer noopener">
            <BrandingContainer>
                    <Logo>
                        <img src="tombstone.svg" alt="Tombstone" />
                    </Logo>
                    <Title>Killed by Google</Title>
            </BrandingContainer>
        </a>
    </HeaderContainer>
);

export default Header;