import styled from 'styled-components';

export const FooterContainer = styled.footer`
  color: #fafafa;
  background-color: #212121;
  padding: 50px 0;
  font-size: 1em;
`;

export const FlexWrap = styled.div`
  /* display: flex; */
  /* flex-flow: row wrap; */
  max-width: 90%;
  width: 38em;
  margin: 0 auto;
  /* justify-content: space-between; */
  text-align: center;
  & > div {
    &:nth-child(1) {
      flex: 0 0 ${(1.5 / 3) * 100}%;
    }
    &:nth-child(2) {
      flex: 0 0 ${(1.25 / 3) * 100}%;
    }
    p {
      line-height: 1.75;
    }
  }
`;

export const CreatorTag = styled.div`
  font-size: 0.8em;
  margin-top: 1.5em;
  text-align: center;
`;

export default {
  FooterContainer,
};
