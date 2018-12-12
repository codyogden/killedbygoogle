import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const FilterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 15px 0;
  font-size: 0.8em;
  @media screen and ( min-width: 700px ) {
    li:not(:first-of-type):before {
      display: inline-block;
      content: ' - ';
      margin: 0 2px;
      padding: 0 5px;
    }
  }
`;

const ListItem = styled.li`
  button {
    background-color: transparent;
    border: none;
    display: inline-block;
    padding: 10px 10px;
    margin: 0;
    text-align: center;
    font-size: 1em;
    min-width: 40px;
  }
  &.active {
    button {
      font-weight: bold;
    }
  }
`;

const FilterItem = (props) => {
  const {
    active,
    clickHandler,
    item,
    index,
    counts,
  } = props;
  return (
    <ListItem className={(active) ? 'active' : 'inactive'}>
      <button onClick={() => { clickHandler(item[1], index); }} type="button">
        {item[0]}
        {' '}
        (
        {counts[index]}
        )
      </button>
    </ListItem>
  );
};

FilterItem.propTypes = {
  active: PropTypes.bool.isRequired,
  item: PropTypes.arrayOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  counts: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      counts: [],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillMount() {
    const { items } = this.props;
    const counts = [
      'app',
      'service',
      'hardware',
    ].map(type => items.filter(item => item.type === type).length);
    counts.unshift(items.length);
    this.setState({ counts });
  }

  clickHandler(filter, index) {
    const { filterHandler } = this.props;
    this.setState({
      active: index,
    });
    filterHandler(filter);
  }

  render() {
    const { active, counts } = this.state;
    return (
      <FilterList>
        {
        [
          ['all', false],
          ['apps', 'app'],
          ['services', 'service'],
          ['hardware', 'hardware'],
        ]
          .map((type, index) => (
            <FilterItem
              clickHandler={this.clickHandler}
              item={type}
              key={type[1]}
              active={(active === index)}
              index={index}
              counts={counts}
            />
          ))}
      </FilterList>
    );
  }
}

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};
