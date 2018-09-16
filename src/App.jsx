import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import './global.scss';

import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfItems: [],
      fullList: [],
    };

    this.searchFilter = this.searchFilter.bind(this);
  }

  componentWillMount() {
    const { data } = this.props;
    this.setState({
      listOfItems: data,
      fullList: data,
    });
  }

  searchFilter(term) {
    const { fullList } = this.state;
    const regexp = new RegExp(term.toLowerCase(), 'i');
    if (term === '') {
      this.setState({
        listOfItems: fullList,
      });
    } else {
      this.setState({
        listOfItems: fullList.filter(el => (
          regexp.test(el.name.toLowerCase())
          || regexp.test(el.description.toLowerCase())
        )),
      });
    }
  }


  render() {
    const { listOfItems } = this.state;
    return (
      <div>
        <Header />
        <Search search={this.searchFilter} />
        <List items={listOfItems} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

fetch('graveyard.json')
  .then((response) => {
    response.json().then((data) => {
      const graveyard = data.sort((a, b) => new Date(b.dateClose) - new Date(a.dateClose));
      render(<App data={graveyard} />, document.querySelector('#killedbygoogle'));
    });
  });
