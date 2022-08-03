import Select, { Options, SingleValue } from 'react-select';

import { SRT } from 'components';
import { Product, ProductType } from 'types/Product';
import { FilterType } from 'types/Filter';

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
      value: FilterType.ALL,
      label: `All (${items.length})`,
    },
    {
      value: FilterType.APP,
      label: `Apps (${getCount('app')})`,
    },
    {
      value: FilterType.SERVICE,
      label: `Services (${getCount('service')})`,
    },
    {
      value: FilterType.HARDWARE,
      label: `Hardware (${getCount('hardware')})`,
    }
  ];

  const changeHandler = (arg: SingleValue<Option>): void => {
    const filterVal = arg?.value as FilterType;
      filterHandler(filterVal);
    if (window.umami?.trackEvent)
      window.umami.trackEvent(filterVal, 'filter');
  }

  return (
    <label id="listFilter">
      <SRT>Filter Graveyard List</SRT>
      <Select defaultValue={selectOptions[0]} options={selectOptions} onChange={changeHandler} instanceId="filter-select" />
    </label>
  );
}
export default Filter;
