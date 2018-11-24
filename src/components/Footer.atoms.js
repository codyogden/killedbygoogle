import styled from 'styled-components';

export const FooterContainer = styled.footer`
  color: #fafafa;
  background-color: #333;
  text-align: center;
  padding: 30px 0;
  font-size: 1em;
  span {
    display: block;
  }
  @media screen and ( max-width: 700px ) {
    /* text-align: left; */
    padding: 30px 1em 50px 1em;
    font-size: 1.25em;
    span {
      display: inline;
    }
  }
  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 1px dotted currentColor;
    &:hover {
      border-bottom: 1px solid currentColor;
    }
  }
  p {
    line-height: calc( 1em + 8px );
  }
  .socials {
    text-align: center;
  }
`;

export const CreatorTag = styled.div`
  font-size: 0.8em;
  margin-top: 1em;
  text-align: center;
`;

export default {
  FooterContainer,
};
