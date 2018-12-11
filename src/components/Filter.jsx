import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const { item, clickHandler } = props;
  return (
    <li>
      <button onClick={() => { clickHandler(item[1]); }} type="button">{item[0]}</button>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.arrayOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { filterHandler } = this.props;

    return (
      <ul>
        {
        [
          ['all', false],
          ['app', 'app'],
          ['service', 'service'],
          ['hardware', 'hardware'],
        ]
          .map((type, index) => <Item clickHandler={filterHandler} item={type} key={type[1]} {...index} />)}
      </ul>
    );
  }
}

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};
