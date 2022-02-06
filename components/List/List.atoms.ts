import { css } from '@emotion/react';
import styled from '@emotion/styled';

const minwidth = 300;
export const ListContainer = styled.ul(() => css({
  display: 'grid',
  gap: '3rem',
  gridTemplateColumns: `repeat(3, minmax( ${minwidth}px, 1fr ) )`,
  listStyleType: 'none',
  margin: '0 auto',
  maxWidth: '1400px',
  padding: 0,

  [`@media screen and ( max-width: ${(minwidth * 4) + 100}px )`]: {
    gridTemplateColumns: `repeat(2, minmax( ${minwidth}px, 1fr ) )`,
  },

  [`@media screen and ( max-width: ${(minwidth * 2.5) + 100}px )`]: {
    gridTemplateColumns: '5px 2fr 5px',
    
    ['& > li']: {
      gap: 0,
      gridColumn: 2,
    },
  },
}));
