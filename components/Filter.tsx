'use client';

import { useMemo } from 'react';

import SRT from '@/components/SRT';
import { Product } from '@/types/Product';
import { FilterType } from '@/types/Filter';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  items: Product[];
  filterHandler: (b: FilterType) => void;
};

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
      <Select
        defaultValue={FilterType.ALL}
        onValueChange={(value) => filterHandler(value as FilterType)}
      >
        <SelectTrigger id="filter-select" className="w-full min-w-[200px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={FilterType.ALL}>All ({items.length})</SelectItem>
          <SelectItem value={FilterType.APP}>Apps ({counts.app})</SelectItem>
          <SelectItem value={FilterType.SERVICE}>Services ({counts.service})</SelectItem>
          <SelectItem value={FilterType.HARDWARE}>Hardware ({counts.hardware})</SelectItem>
        </SelectContent>
      </Select>
    </label>
  );
};

export default Filter;
