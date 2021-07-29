import React from 'react';

import {
  format,
  formatDistance,
  parseISO,
  formatDistanceToNow,
} from 'date-fns';

import { Product } from '../../types/Product';

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

export default function Item(props: Product) {

  const isPast = () => {
    return new Date() > new Date(props.dateClose);
  };

  const getYears = () => {
    const duration = formatDistance(parseISO(props.dateClose), parseISO(props.dateOpen));

    if (!isPast()) {
      return ` It will be ${duration} old.`;
    }
    return ` It was ${duration} old.`;
  };

  const getIcon = () => {
    return isPast() ? (
      <Icon src='tombstone.svg' alt="Tombstone" />
    ) : (
      <Icon src='guillotine.svg' alt="Guillotine" />
    );
  };

  const timePhrase = () => {
    let dateCloseISO = parseISO(props.dateClose);
    const relativeDate = formatDistanceToNow(dateCloseISO);
    if (!isPast()) {
      return <span suppressHydrationWarning>{`${soonToDieIdiom()} in ${relativeDate}, `}</span>;
    }
    return <span>{`Killed ${relativeDate} ago, `}</span>;
  };

  const ageRange = () => {
    const monthOpen = format(parseISO(props.dateClose), 'LLLL');
    const yearOpen = format(parseISO(props.dateOpen), 'uuuu');
    const yearClose = format(parseISO(props.dateClose), 'uuuu');
    if (!isPast()) {
      const date = parseISO(props.dateClose);
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
        <time dateTime={format(parseISO(props.dateOpen), 'uuuu-LL-dd')}>
          {yearOpen}
        </time>
        {' - '}
        <time dateTime={format(parseISO(props.dateClose), 'uuuu-LL-dd')}>
          {yearClose}
        </time>
      </AgeRange>
    );
  };
  return (
    <ListItem>
      <IconContainer>
        {getIcon()}
        {ageRange()}
      </IconContainer>
      <ContentContainer>
        <h2>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
        </h2>
        <Description>
          {timePhrase()}
          {props.description}
          {getYears()}
        </Description>
      </ContentContainer>
    </ListItem>
  );
}
