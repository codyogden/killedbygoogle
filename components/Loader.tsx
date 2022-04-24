import { css } from '@emotion/react';
import styled from '@emotion/styled';

const LoaderContainer = styled.div(() => css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '60px auto',
}));

const Loader = () => <LoaderContainer>
    <img
        css={css({
            width: '60px',
        })}
        width="60px"
        src="https://static.killedbygoogle.com/com/knife.svg"
        alt="Knife"
    />
</LoaderContainer>;

export default Loader;
