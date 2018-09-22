import React from 'react';

// Import Styled Components
import { FooterContainer } from './Footer.atoms';

export default () => (
  <FooterContainer>
    <a href="https://twitter.com/killedbygoogle">@killedbygoogle</a>
    {' - '}
    <a href="https://github.com/codyogden/killedbygoogle">GitHub</a>
    {' - '}
    <a href="https://codyogden.com">Cody Ogden</a>
  </FooterContainer>
);
