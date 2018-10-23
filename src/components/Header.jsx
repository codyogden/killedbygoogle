import React from 'react';

// Import Styled Components
import { Logo, Masthead, Title } from './Header.atoms';

export default () => (
  <Masthead>
    <Logo src="assets/tombstone.svg" alt="Tombstone" />
    <Title>
      {'Killed by Google'}
    </Title>
  </Masthead>
);
