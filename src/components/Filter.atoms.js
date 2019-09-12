import styled from 'styled-components';

export const FilterList = styled.ul`
  align-items: center;
  display: flex;
  font-size: 0.8em;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0 0 15px 0;
  @media screen and (min-width: 700px) {
    li:not(:first-of-type):before {
      content: ' - ';
      display: inline-block;
      margin: 0 2px;
      padding: 0 5px;
    }
  }
`;

export const ListItem = styled.li`
  button {
    background-color: transparent;
    border: none;
    display: inline-block;
    font-size: 1em;
    margin: 0;
    min-width: 40px;
    padding: 10px 10px;
    text-align: center;
  }
  &.active {
    button {
      font-weight: bold;
    }
  }
`;
