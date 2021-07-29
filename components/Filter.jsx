import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import Item from './List/Item';
import SRT from './SRT';

export default function Filter({ items, filterHandler }) {
  const [active, updateActiveValue] = useState(0);

  const getCount = (type) => items.filter(item => item.type === type).length;

  const selectOptions = [
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

  const changeHandler = (arg) => {
    const filterVal = (arg.value === 'all') ? false : arg.value;
    updateActiveValue(filterVal);
    filterHandler(filterVal);
  }

  return (
    <label>
      <SRT>Filter Graveyard List</SRT>
      <Select defaultValue={selectOptions[0]} options={selectOptions} onChange={changeHandler} disabled={true} instanceId="filter-select"/>
    </label>
  );
}

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};
