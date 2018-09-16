import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  min-height: 70vh;
  max-width: 1400px;
  margin: 0 auto;
  @media screen and ( min-width: 800px ) {
    display: flex;
    flex-flow: row wrap;
  }
`;

export default class List extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { items } = this.props;
    return (
      <ListContainer>
        {items.map(item => <Item key={item.name} {...item} />)}
      </ListContainer>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};
