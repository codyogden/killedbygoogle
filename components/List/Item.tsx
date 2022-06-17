import React from 'react';
import dynamic from 'next/dynamic';
import {
  format,
  formatDistance,
  parseISO,
  formatDistanceToNow,
} from 'date-fns';

import { ProductWithSlug } from '../../types/Product';
import Badge from '../Badge'; 

const DeathIdiom = dynamic(() => import('./LeadPhrase'), { ssr: false });

// Import Styled Components
import {
  AgeRange,
  ContentContainer,
  Description,
  Icon,
  IconContainer,
  ListItem,
} from './Item.atoms';

export default function Item(props: ProductWithSlug) {

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
      <Icon src='https://static.killedbygoogle.com/com/tombstone.svg' alt="Tombstone" />
    ) : (
      <Icon src='https://static.killedbygoogle.com/com/guillotine.svg' alt="Guillotine" />
    );
  };


  const dateCloseISO = parseISO(props.dateClose);
  const relativeDate = formatDistanceToNow(dateCloseISO);

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
        <Badge content={props.type} />
        <Description>
          {(isPast()) ? `Killed ${relativeDate} ago, ` : <DeathIdiom relativeDate={relativeDate} /> }
          {props.description}
          {getYears()}
        </Description>
      </ContentContainer>
    </ListItem>
  );
}
