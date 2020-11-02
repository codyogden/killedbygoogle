import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FilterList } from './Filter.atoms';
import FilterItem from './FilterItem';
import Item from './Item';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0, // Make All the default active
      counts: [], // no counts yet
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillMount() {
    const { items } = this.props;
    // Get the counts for each time
    const counts = ['app', 'service', 'hardware'].map(
      type => items.filter(item => item.type === type).length
    );
    // Unshift the total count for the `all` option
    counts.unshift(items.length);
    // Add the counts to the for consumption
    this.setState({ counts });
  }

  clickHandler(filter, index) {
    const { filterHandler } = this.props;
    // Set the active button
    this.setState({
      active: index,
    });
    // Apply the filter
    filterHandler(filter);
  }

  render() {
    const { active, counts } = this.state;
    return (
      <FilterList>
        {[
          ['all', false],
          ['apps', 'app'],
          ['services', 'service'],
          ['hardware', 'hardware'],
        ].map((type, index) => (
          <FilterItem
            active={active === index}
            clickHandler={this.clickHandler}
            counts={counts}
            key={type[1]}
            index={index}
            item={type}
          />
        ))}
      </FilterList>
    );
  }
}

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};
