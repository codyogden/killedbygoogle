'use client';

import SRT from '@/components/SRT';
import { FilterType } from '@/types/Filter';

export type FilterCounts = {
  all: number;
  app: number;
  service: number;
  hardware: number;
};

type Props = {
  counts: FilterCounts;
  filterHandler: (b: FilterType) => void;
};

const CHEVRON_BG = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
  backgroundPosition: 'right 8px center',
  backgroundSize: '16px 16px',
} as const;

const Filter: React.FC<Props> = ({ counts, filterHandler }) => (
  <label id="listFilter" className="block">
    <SRT>Filter Graveyard List</SRT>
    <select
      id="filter-select"
      defaultValue={FilterType.ALL}
      onChange={(event) => filterHandler(event.target.value as FilterType)}
      style={CHEVRON_BG}
      className="block w-full min-w-[200px] cursor-pointer appearance-none rounded border border-input bg-popover bg-no-repeat px-3 py-2 pr-8 font-[inherit] text-sm text-foreground hover:border-input-hover focus:border-ring focus:ring-2 focus:ring-ring/25 focus:outline-none"
    >
      <option value={FilterType.ALL}>All ({counts.all})</option>
      <option value={FilterType.APP}>Apps ({counts.app})</option>
      <option value={FilterType.SERVICE}>Services ({counts.service})</option>
      <option value={FilterType.HARDWARE}>Hardware ({counts.hardware})</option>
    </select>
  </label>
);

export default Filter;
