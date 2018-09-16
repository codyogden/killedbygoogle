import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: #fafafa;
  background-color: #333;
  min-height: 300px;
  text-align: center;
  padding: 30px 0 0 0;
  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 1px dotted currentColor;
    &:hover {
      border-bottom: 1px solid currentColor;
    }
  }
`;

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <FooterContainer>
        <p>{'Can\'t find your favorite obituary?'}</p>
        <a href="https://github.com/codyogden/killedbygoogle">Contribute on Github</a>
        {' - '}
        <a href="https://codyogden.com" rel="nofollow">Cody Ogden</a>
      </FooterContainer>
    );
  }
}
