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


  const dateOpen = parseISO(props.dateOpen);
  const dateClose = parseISO(props.dateClose);
  const relativeDate = formatDistanceToNow(dateClose);

  const getYears = () => {
    const duration = formatDistance(dateClose, dateOpen);

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

  const ageRange = () => {
    const yearOpen = dateOpen.getFullYear();
    const yearClose = dateClose.getFullYear();
    if (!isPast()) {
      const monthClose = format(dateClose, 'LLLL');
      return (
        <AgeRange>
          <time dateTime={props.dateClose}>
            {monthClose}
            <br />
            {yearClose}
          </time>
        </AgeRange>
      );
    }
    return (
      <AgeRange>
        <time dateTime={props.dateOpen}>
          {yearOpen}
        </time>
        {' - '}
        <time dateTime={props.dateClose}>
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
        <Badge content={props.type} />
      </IconContainer>
      <ContentContainer>
        <h2>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
        </h2>
        <Description>
          {(isPast()) ? `Killed ${relativeDate} ago, ` : <DeathIdiom relativeDate={relativeDate} /> }
          {props.description}
          {getYears()}
        </Description>
      </ContentContainer>
    </ListItem>
  );
}

