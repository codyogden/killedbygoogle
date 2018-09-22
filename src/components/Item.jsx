import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format, formatDistance } from 'date-fns';

// Import Styled Components
import {
  AgeRange,
  Description,
  Icon,
  IconContainer,
  ListItem,
} from './Item.atoms';

const eolIdiom = () => {
  const items = [
    'Sentenced to death',
    '"Off with their heads!"',
    'Kicking the bucket',
    'Dead as a doorknob',
    'Done for',
    'Expires',
    'Bites the big one',
    'Off to the glue factory',
    'Another one bites the dust',
  ];
  return items[Math.floor(Math.random() * items.length)];
};

export default class Item extends Component {
  getIcon() {
    return (this.isPast()) ? <Icon src="assets/tombstone.svg" alt="Tombstone" /> : <Icon src="assets/guillotine.svg" alt="Guillotine" />;
  }

  getYears() {
    const { dateClose, dateOpen } = this.props;
    const diff = Math.floor(new Date(dateClose).getTime() - new Date(dateOpen).getTime());
    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(diff / day);
    const months = Math.floor(days / 31);
    const years = Math.round(months / 12, 1);

    return years;
  }

  isPast() {
    const { dateClose } = this.props;
    return new Date() > new Date(dateClose);
  }

  timePhrase() {
    const { dateClose } = this.props;
    const relativeDate = formatDistance(new Date(dateClose), new Date());
    const exactDate = format(new Date(dateClose), 'MMMM yyyy');
    const yearFromNow = new Date().setFullYear(new Date().getFullYear() + 1);

    if (!this.isPast()) {
      if (new Date(dateClose) < yearFromNow) {
        return (
          <span>
            {`${eolIdiom()} in ${relativeDate}, `}
          </span>
        );
      }
      return (
        <span>
          {`${eolIdiom()} in ${exactDate}, `}
        </span>
      );
    }
    return (
      <span>
        {`Killed ${relativeDate} ago, `}
      </span>
    );
  }

  ageRange(grave) {
    if (!this.isPast()) {
      const date = new Date(grave.dateClose);
      return (
        <AgeRange>
          {date.toLocaleDateString('en-US', { month: 'long' })}
          <br />
          {date.toLocaleDateString('en-US', { year: 'numeric' })}
        </AgeRange>
      );
    }
    return (
      <AgeRange>
        {new Date(grave.dateOpen).getFullYear()}
        {' - '}
        {new Date(grave.dateClose).getFullYear()}
      </AgeRange>
    );
  }

  render() {
    const { ...grave } = this.props;
    return (
      <ListItem>
        <IconContainer>
          {this.getIcon()}
          {this.ageRange(grave)}
        </IconContainer>
        <div>
          <h2><a href={grave.link}>{grave.name}</a></h2>
          <Description>
            {this.timePhrase()}
            {grave.description}
            {` It was ${this.getYears()} years old.`}
          </Description>
        </div>
      </ListItem>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dateClose: PropTypes.string.isRequired,
  dateOpen: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
