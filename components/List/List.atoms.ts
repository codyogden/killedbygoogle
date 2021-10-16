import styled from 'styled-components';

const minwidth = 300;
export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax( ${minwidth}px, 1fr ) );
  gap: 3rem;
  list-style-type: none;
  padding: 0;
  max-width: 1400px;
  margin: 0 auto;
  @media screen and ( max-width: ${(minwidth * 4) + 100}px ) {
    grid-template-columns: repeat(2, minmax( ${minwidth}px, 1fr ) );
  }
  @media screen and ( max-width: ${(minwidth * 2.5) + 100}px ) {
    grid-template-columns: 5px 2fr 5px;
    & > li {
      gap: 0;
      grid-column: 2;
    }
  }
`;

