/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SRT from '../SRT';

// Import Styled Components
import { SearchContainer, SearchBox } from './Search.atoms';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }

  updateSearch(event) {
    const { search } = this.props;

    this.setState({
      inputValue: event.target.value,
    });

    search(event.target.value);
  }

  render() {
    const { inputValue } = this.state;
    return (
      <SearchContainer>
        <label htmlFor="searchBox" aria-label="Search">
          <SRT>Search</SRT>
          <SearchBox
            id="searchBox"
            placeholder="Search"
            type="text"
            value={inputValue}
            onChange={event => this.updateSearch(event)}
          />
        </label>
      </SearchContainer>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
};
