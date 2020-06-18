import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

// Global CSS (e.g. body)
import './global.scss';

// Major Components
import BannerMessage from './components/BannerMessage';
import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';
import Filter from './components/Filter';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      listOfItems: data,
      fullList: data,
      activeFilter: false,
      term: '',
    };

    // Bindings
    this.searchFilter = this.searchFilter.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(val) {
    this.setState(
      {
        activeFilter: val,
      },
      this.search
    );
  }

  searchFilter(term) {
    this.setState(
      {
        term,
      },
      this.search
    );
  }

  search() {
    const { fullList, activeFilter, term } = this.state;
    const regexp = new RegExp(term.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    // If a filter is active, only search through those results
    const list = activeFilter
      ? fullList.filter(el => el.type === activeFilter)
      : fullList;
    // If search goes empty
    if (term === '') {
      // Reset the list.
      this.setState({
        listOfItems: list,
      });
    } else {
      // Otherwise filter the list by name and description
      this.setState({
        listOfItems: list.filter(
          el =>
            regexp.test(el.name.toLowerCase()) ||
            regexp.test(el.description.toLowerCase())
        ),
      });
    }
  }

  render() {
    const { listOfItems, activeFilter, term, fullList } = this.state;
    return (
      <div>
        <BannerMessage>
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/index.html">
            {'Learn more about what you can do to stop the spread of COVID-19 in your community.'}
          </a>
        </BannerMessage>
        <Header />
        <Search search={this.searchFilter} term={term} />
        <Filter
          current={activeFilter}
          filterHandler={this.setFilter}
          items={fullList}
        />
        <List items={listOfItems} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

// Retrieve static json
fetch('graveyard.json').then(response => {
  // Process it
  response.json().then(data => {
    // Sort by the dateClose (date discontinued)
    const graveyard = data.sort(
      (a, b) => new Date(b.dateClose) - new Date(a.dateClose)
    );
    // Render the app
    render(<App data={graveyard} />, document.querySelector('#killedbygoogle'));
  });
});
