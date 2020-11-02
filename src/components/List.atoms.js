import styled from 'styled-components';

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 1400px;
  margin: 0 auto;
  @media screen and (min-width: 800px) {
    display: flex;
    flex-flow: row wrap;
  }
`;

export default {
  ListContainer,
};
