import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import Item from './List/Item';
import SRT from './SRT';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0, // Make All the default active
      options: []
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(arg) {
    const { filterHandler } = this.props;
    const filterVal = (arg.value === 'all') ? false : arg.value;
    this.setState({
      active: filterVal,
    });
    filterHandler(filterVal);
  }

  render() {
    const { items } = this.props;
    const getCount = (type) => items.filter(item => item.type === type).length;
    const options = [
      {
        value: 'all',
        label: `All (${items.length})`,
      },
      {
        value: 'app',
        label: `Apps (${getCount('app')})`,
      },
      {
        value: 'service',
        label: `Services (${getCount('service')})`,
      },
      {
        value: 'hardware',
        label: `Hardware (${getCount('hardware')})`,
      }
    ];
    return (
      <label>
        <SRT>Filter Graveyard List</SRT>
        <Select defaultValue={options[0]} options={options} onChange={this.changeHandler} disabled={true} />
      </label>
    );
  }
}

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};
