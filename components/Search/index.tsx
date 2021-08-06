/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SRT from '../SRT';

// Import Styled Components
import { SearchContainer, SearchBox } from './Search.atoms';

interface SearchProps {
  searchCallback: Function
}

export default function Search({ searchCallback }: SearchProps) {

  const [value, updateValue] = useState('');

  const updateSearch = (event: React.FormEvent<HTMLInputElement>) => {
    updateValue(event.currentTarget.value);
    searchCallback(event.currentTarget.value);
  };

  return (
    <SearchContainer>
      <label htmlFor="searchBox" aria-label="Search">
        <SRT>Search</SRT>
        <SearchBox
          id="searchBox"
          placeholder="Search"
          type="text"
          value={value}
          onChange={updateSearch}
        />
      </label>
    </SearchContainer>
    );
}
