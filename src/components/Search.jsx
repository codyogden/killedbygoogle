import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 500px;
  max-width: 95%;
  box-sizing: border-box;
  margin: 20px auto 0 auto;
`;

const SearchBox = styled.input`
  font-size: 2em;
  border: none;
  height: 100%;
  display: block;
  width: 95%;
  background-color: transparent;
  border-bottom: 1px solid #cfcfcf;
  box-sizing: border-box;
  margin: 0 auto;
  outline: none;
  transition: all 100ms linear;
  font-weight: lighter;

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #cfcfcf;
    transition: all 100ms linear;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #cfcfcf;
    transition: all 100ms linear;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #cfcfcf;
    transition: all 100ms linear;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: #cfcfcf;
    transition: all 100ms linear;
  }

  &:hover,
  &:focus {
    border-bottom: 1px solid #cfcfcf;
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #cfcfcf;
    }
    ::-moz-placeholder { /* Firefox 19+ */
      color: #cfcfcf;
    }
    :-ms-input-placeholder { /* IE 10+ */
      color: #cfcfcf;
    }
    :-moz-placeholder { /* Firefox 18- */
      color: #cfcfcf;
    }
  }

`;

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
        <SearchBox placeholder="Search" type="text" value={inputValue} onChange={event => this.updateSearch(event)} />
      </SearchContainer>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
};
