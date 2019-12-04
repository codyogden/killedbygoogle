import React from 'react';

import Tombstone from '../assets/tombstone.svg';

// Import Styled Components
import { Logo, Masthead, Title } from './Header.atoms';

export default () => (
  <Masthead>
    <Logo src={Tombstone} alt="Tombstone" />
    <Title>Killed by Google</Title>
  </Masthead>
);
