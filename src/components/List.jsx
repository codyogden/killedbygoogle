import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Knife from '../assets/knife.svg';

// Import Styled Components
import { ListContainer } from './List.atoms';
import {
  ListItem,
  IconContainer,
  ContentContainer,
  Description,
  Icon,
  AgeRange,
} from './Item.atoms';

// Import External Components
import Item from './Item';

const List = ({ items }) => (
  <ListContainer>
    <ListItem id="mobile-hide">
      <IconContainer>
        <Icon src={Knife} alt="Knife" />
        <AgeRange>
          {format(new Date(), 'MMMM')}
          <br />
          {format(new Date(), 'Y')}
        </AgeRange>
      </IconContainer>
      <ContentContainer>
        <h2><a href="https://github.com/codyogden/killedbygoogle" rel="noopener noreferrer" target="_blank">Missing something?</a></h2>
        <Description>
          We rely on contributors to proofread,
          check accuracy, and keep this list up to date. The Google Graveyard
          is ad free and open source. Feel free to get involved on&nbsp;
          <a href="https://github.com/codyogden/killedbygoogle" target="_blank" rel="noopener noreferrer">GitHub</a>
          . Follow us on&nbsp;
          <a href="https://twitter.com/killedbygoogle">Twitter</a>
          &nbsp; to get instant updates.
        </Description>
      </ContentContainer>
    </ListItem>
    {items.map(item => <Item key={item.name} {...item} />)}
  </ListContainer>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};

export default List;
