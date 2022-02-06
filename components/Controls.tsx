import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Controls = styled.div(() => css({
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: '1fr 200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '600px',
    padding: '1rem 0 4rem 0',

    ['@media screen and ( max-width: 700px )']: {
        gap: '8px',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 1fr',
        maxWidth: '80%'
    }
}));