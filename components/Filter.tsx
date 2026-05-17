'use client';

import { useMemo } from 'react';

import SRT from '@/components/SRT';
import { Product } from '@/types/Product';
import { FilterType } from '@/types/Filter';

type Props = {
  items: Product[];
  filterHandler: (b: FilterType) => void;
};

const CHEVRON_BG = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
  backgroundPosition: 'right 8px center',
  backgroundSize: '16px 16px',
} as const;

const Filter: React.FC<Props> = ({ items, filterHandler }) => {
  const counts = useMemo(() => {
    const c = { app: 0, service: 0, hardware: 0 };
    for (const item of items) {
      if (item.type in c) c[item.type as keyof typeof c]++;
    }
    return c;
  }, [items]);

  return (
    <label id="listFilter" className="block">
      <SRT>Filter Graveyard List</SRT>
      <select
        id="filter-select"
        defaultValue={FilterType.ALL}
        onChange={(event) => filterHandler(event.target.value as FilterType)}
        style={CHEVRON_BG}
        className="block w-full min-w-[200px] cursor-pointer appearance-none rounded border border-input bg-popover bg-no-repeat px-3 py-2 pr-8 font-[inherit] text-sm text-foreground hover:border-input-hover focus:border-ring focus:ring-2 focus:ring-ring/25 focus:outline-none"
      >
        <option value={FilterType.ALL}>All ({items.length})</option>
        <option value={FilterType.APP}>Apps ({counts.app})</option>
        <option value={FilterType.SERVICE}>Services ({counts.service})</option>
        <option value={FilterType.HARDWARE}>Hardware ({counts.hardware})</option>
      </select>
    </label>
  );
};

export default Filter;
