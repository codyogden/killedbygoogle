import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  format,
  formatDistance,
  parseISO,
  formatDistanceToNow,
} from 'date-fns';

// Import Styled Components
import {
  AgeRange,
  ContentContainer,
  Description,
  Icon,
  IconContainer,
  ListItem,
} from './Item.atoms';

const soonToDieIdiom = () => {
  const items = [
    'Sentenced to death',
    '"Off with their heads!"',
    'Kicking the bucket',
    'Dead as a doorknob',
    'Done for',
    'Expiring',
    'Biting the big one',
    'Off to the glue factory',
    'Another one bites the dust',
    'To be turned off',
    'Like a fork stuck in the outlet',
    'Scheduled to be killed',
    'To be exterminated',
    'To be flushed',
    'Getting unplugged',
    'Vanishing',
    'Going poof',
    'Turning to ashes',
    'Getting KO\'d',
    'Running out of juice',
    'Fading into darkness',
    'Floating belly up'
  ];
  return items[Math.floor(Math.random() * items.length)];
};


export default class Item extends Component {
  getIcon() {
    return this.isPast() ? (
      <Icon src='tombstone.svg' alt="Tombstone" />
    ) : (
      <Icon src='guillotine.svg' alt="Guillotine" />
    );
  }

  getYears() {
    const { dateClose, dateOpen } = this.props;
    const duration = formatDistance(parseISO(dateClose), parseISO(dateOpen));

    return ` It was ${duration} old.`;
  }

  isPast() {
    const { dateClose } = this.props;
    return new Date() > new Date(dateClose);
  }

  timePhrase() {
    const { dateClose } = this.props;
    const relativeDate = formatDistanceToNow(parseISO(dateClose), new Date());
    if (!this.isPast()) {
      return <span>{`${soonToDieIdiom()} in ${relativeDate}, `}</span>;
    }
    return <span>{`Killed ${relativeDate} ago, `}</span>;
  }

  ageRange(grave) {
    const monthOpen = format(parseISO(grave.dateClose), 'LLLL');
    const yearOpen = format(parseISO(grave.dateOpen), 'uuuu');
    const yearClose = format(parseISO(grave.dateClose), 'uuuu');
    if (!this.isPast()) {
      const date = parseISO(grave.dateClose);
      return (
        <AgeRange>
          <time dateTime={format(date, 'uuuu-LL-dd')}>
            {monthOpen}
            <br />
            {format(date, 'uuuu')}
          </time>
        </AgeRange>
      );
    }
    return (
      <AgeRange>
        <time dateTime={format(parseISO(grave.dateOpen), 'uuuu-LL-dd')}>
          {yearOpen}
        </time>
        {' - '}
        <time dateTime={format(parseISO(grave.dateClose), 'uuuu-LL-dd')}>
          {yearClose}
        </time>
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
        <ContentContainer>
          <h2>
            <a href={grave.link} target="_blank" rel="noopener noreferrer">
              {grave.name}
            </a>
          </h2>
          <Description>
            {this.timePhrase()}
            {grave.description}
            {this.getYears()}
          </Description>
        </ContentContainer>
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
  type: PropTypes.string.isRequired,
};
