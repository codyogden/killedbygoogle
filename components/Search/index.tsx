'use client';

import React, { useEffect, useState } from 'react';

import SRT from '@/components/SRT';
import { Input } from '@/components/ui/input';

interface SearchProps {
  searchCallback: (value: string) => void;
}

export default function Search({ searchCallback }: SearchProps) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const id = setTimeout(() => searchCallback(searchValue), 350);
    return () => clearTimeout(id);
  }, [searchValue, searchCallback]);

  return (
    <div className="box-border">
      <label htmlFor="searchBox" aria-label="Search">
        <SRT>Search</SRT>
        <Input
          id="searchBox"
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
        />
      </label>
    </div>
  );
}
