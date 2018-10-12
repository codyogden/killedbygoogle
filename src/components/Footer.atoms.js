import styled from 'styled-components';

export const FooterContainer = styled.footer`
  color: #fafafa;
  background-color: #000;
  text-align: center;
  padding: 30px 0;
  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 1px dotted currentColor;
    &:hover {
      border-bottom: 1px solid currentColor;
    }
  }
`;

export default {
  FooterContainer,
};
