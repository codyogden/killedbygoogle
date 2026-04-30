'use client';

import { useMemo } from 'react';

import { SRT } from '@/components';
import { Product } from '@/types/Product';
import { FilterType } from '@/types/Filter';
import styles from './Filter.module.css';

type Props = {
  items: Product[];
  filterHandler: (b: FilterType) => void;
}

const Filter: React.FC<Props> = ({ items, filterHandler }) => {

  const counts = useMemo(() => {
    const c = { app: 0, service: 0, hardware: 0 };
    for (const item of items) {
      if (item.type in c) c[item.type as keyof typeof c]++;
    }
    return c;
  }, [items]);

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const filterVal = event.target.value as FilterType;
    filterHandler(filterVal);
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
        <option value={FilterType.APP}>Apps ({counts.app})</option>
        <option value={FilterType.SERVICE}>Services ({counts.service})</option>
        <option value={FilterType.HARDWARE}>Hardware ({counts.hardware})</option>
      </select>
    </label>
  );
}
export default Filter;
