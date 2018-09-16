import React, { Component } from 'react';
import styled from 'styled-components';

const Masthead = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-sizing: border-box;
`;

const imgSize = 50;

const Logo = styled.img`
  display: block;
  width: ${imgSize}px;
  height: ${imgSize}px;
  margin: 0 15px 0 20px;
  @media screen and ( max-width: 600px ) {
    width: ${imgSize - (imgSize * 0.125)}px;
    height: ${imgSize - (imgSize * 0.125)}px;
  }
`;

const Title = styled.h1`
  font-weight: lighter;
  text-align: center;
  margin: 0;
  font-size: 2em;
  @media screen and ( max-width: 600px ) {
    font-size: 1.75em;
  }
`;

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Masthead>
        <Logo src="assets/tombstone.svg" alt="Tombstone Icon" />
        <Title>
          Killed by Google
        </Title>
      </Masthead>
    );
  }
}
