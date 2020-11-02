import React from 'react';
import PropTypes from 'prop-types';

// Import Styled Components
import { ListContainer } from './List.atoms';
import {
  ListItem,
} from './Item.atoms';

// Import External Components
import Item from './Item';

const List = ({ items }) => (
  <ListContainer>
    <ListItem>
      <script async type="text/javascript" src="https://cdn.carbonads.com/carbon.js?serve=CK7I653N&placement=killedbygooglecom" id="_carbonads_js">{}</script>
    </ListItem>
    {items.map(item => (
      <Item key={item.name} {...item} />
    ))}
  </ListContainer>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};

export default List;
