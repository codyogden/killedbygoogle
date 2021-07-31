import React, { Component, useState } from 'react';
import Select from 'react-select';

import SRT from './SRT';
import { Product } from '../types/Product';

type Props = {
  items: Product[];
  filterHandler: (b: boolean) => void;
}

const Filter: React.FC<Props> = ({ items, filterHandler }) => {
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
      <Select defaultValue={selectOptions[0]} options={selectOptions} onChange={changeHandler} disabled={true} instanceId="filter-select" />
    </label>
  );
}
export default Filter;
