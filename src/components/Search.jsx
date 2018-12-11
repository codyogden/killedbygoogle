import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Styled Components
import { SearchContainer, SearchBox } from './Search.atoms';

export default class Search extends Component {
  constructor(props) {
    super(props);
    const { term } = props;
    this.state = {
      inputValue: term,
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
        <SearchBox placeholder="Search" type="text" value={inputValue} onChange={event => this.updateSearch(event)} />
      </SearchContainer>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
};
