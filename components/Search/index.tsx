/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import SRT from 'components/SRT';

// Import Styled Components
import { SearchContainer, SearchBox } from 'components/Search/Search.atoms';

interface SearchProps {
  searchCallback: Function
}

export default function Search({ searchCallback }: SearchProps) {
  const [searchValue, updateValue] = useState('');

  useEffect(() => {
    const delayFn = setTimeout(() => searchCallback(searchValue), 350);
    return () => clearTimeout(delayFn);
  }, [searchValue, searchCallback]);

  return (
    <SearchContainer>
      <label htmlFor="searchBox" aria-label="Search">
        <SRT>Search</SRT>
        <SearchBox
          id="searchBox"
          placeholder="Search"
          type="text"
          value={searchValue}
          onChange={(event: React.FormEvent<HTMLInputElement>) => updateValue(event.currentTarget.value)}
        />
      </label>
    </SearchContainer>
    );
}
