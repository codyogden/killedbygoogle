'use client';

import { SRT } from 'components';
import { Product } from 'types/Product';
import { FilterType } from 'types/Filter';
import styles from './Filter.module.css';

type Props = {
  items: Product[];
  filterHandler: (b: FilterType) => void;
}

const Filter: React.FC<Props> = ({ items, filterHandler }) => {

  const getCount = (type: string) => items.filter(item => item.type === type).length;

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const filterVal = event.target.value as FilterType;
    filterHandler(filterVal);
    if (window.umami?.trackEvent)
      window.umami.trackEvent(filterVal, 'filter');
  }

  return (
    <label id="listFilter" className={styles.filterLabel}>
      <SRT>Filter Graveyard List</SRT>
      <select 
        className={styles.filterSelect}
        defaultValue={FilterType.ALL} 
        onChange={changeHandler}
        id="filter-select"
      >
        <option value={FilterType.ALL}>All ({items.length})</option>
        <option value={FilterType.APP}>Apps ({getCount('app')})</option>
        <option value={FilterType.SERVICE}>Services ({getCount('service')})</option>
        <option value={FilterType.HARDWARE}>Hardware ({getCount('hardware')})</option>
      </select>
    </label>
  );
}
export default Filter;
