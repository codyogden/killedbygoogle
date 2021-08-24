import React, { Component, useState } from 'react';
import Select from 'react-select';

import SRT from './SRT';
import { Product } from '../types/Product';

export type FilterType = Product['type'] | 'all';

function isFilterType(x: unknown): x is FilterType {
  switch (x) {

    case "app":
    case "hardware":
    case "service":
    case "all":
      return true;
    default:
      return false;
  }
}

type Props = {
  items: Product[];
  filterHandler: (b: FilterType) => void;
}

const Filter: React.FC<Props> = ({ items, filterHandler }) => {

  const getCount = (type: string) => items.filter(item => item.type === type).length;

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

  type OnChange = Select["onChange"];
  const changeHandler: OnChange = (arg) => {
    const filterVal = arg?.value;
    if (isFilterType(filterVal)) {
      filterHandler(filterVal);
    }
  }

  return (
    <label>
      <SRT>Filter Graveyard List</SRT>
      <Select defaultValue={selectOptions[0]} options={selectOptions} onChange={changeHandler} disabled={true} instanceId="filter-select" />
    </label>
  );
}
export default Filter;
