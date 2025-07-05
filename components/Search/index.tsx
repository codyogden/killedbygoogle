'use client';

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import SRT from 'components/SRT';

// Import CSS Module
import styles from './Search.module.css';

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
    <div className={styles.searchContainer}>
      <label htmlFor="searchBox" aria-label="Search">
        <SRT>Search</SRT>
        <input
          id="searchBox"
          className={styles.searchBox}
          placeholder="Search"
          type="text"
          value={searchValue}
          onChange={(event: React.FormEvent<HTMLInputElement>) => updateValue(event.currentTarget.value)}
        />
      </label>
    </div>
    );
}
