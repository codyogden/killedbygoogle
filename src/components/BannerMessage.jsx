import styled from 'styled-components';

export default styled.div`
  background-color: #474747;
  color: #fafafa;
  padding: 30px 5px;
  @media screen and (max-width: 700px) {
    padding: 40px 8px;
  }
  text-align: center;
  box-sizing: border-box;
  font-size: 2em;
  a {
    color: currentColor;
    display: block;
    max-width: 95%;
    text-decoration: underline;
    &,
    &:active,
    &:hover {
      border: none;
    }
  }
`;
