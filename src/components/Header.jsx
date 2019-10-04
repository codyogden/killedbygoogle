import React from 'react';

import Tombstone from '../assets/tombstone.svg';

// Import Styled Components
import { Logo, Masthead, Title } from './Header.atoms';

export default () => (
  <Masthead>
    <Logo src="assets/halloween/tombstone.svg" alt="Tombstone" />
    <Title>Killed by Google</Title>
  </Masthead>
);
