import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from './Filter.atoms';

const FilterItem = (props) => {
  const {
    active,
    clickHandler,
    counts,
    index,
    item,
  } = props;
  return (
    <ListItem className={(active) ? 'active' : 'inactive'}>
      <button onClick={() => { clickHandler(item[1], index); }} type="button">
        {item[0]}
        {' '}
        (
        {counts[index]}
        )
      </button>
    </ListItem>
  );
};

FilterItem.propTypes = {
  active: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  counts: PropTypes.arrayOf(PropTypes.number).isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default FilterItem;
