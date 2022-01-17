import Select, { Options, SingleValue } from 'react-select';

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

  type Option = {
    value: string;
    label: string;
  }
  const selectOptions: Option[] = [
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

  const changeHandler = (arg: SingleValue<Option>): void => {
    const filterVal = arg?.value;
    if (isFilterType(filterVal)) {
      filterHandler(filterVal);
    }
    window.umami.trackEvent(filterVal, 'filter');
  }

  return (
    <label>
      <SRT>Filter Graveyard List</SRT>
      <Select defaultValue={selectOptions[0]} options={selectOptions} onChange={changeHandler} instanceId="filter-select" />
    </label>
  );
}
export default Filter;
