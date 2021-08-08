import styled from 'styled-components';

const LoaderContainer = styled.div`
    margin: 60px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Knife = styled.img`
    width: 60px;
`;

const Loader = () => <LoaderContainer>
    <Knife width="60px" src="/knife.svg" alt="Knife"/>
</LoaderContainer>;

export default Loader;
