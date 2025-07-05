import React from 'react';
import dynamic from 'next/dynamic';
import {
  format,
  formatDistance,
  parseISO,
  formatDistanceToNow,
} from 'date-fns';

import { ProductWithSlug } from 'types/Product';
import Badge from 'components/Badge'; 
import styles from './Item.module.css';

const DeathIdiom = dynamic(() => import('./LeadPhrase'));

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
    return isPast() ? {
      src: 'https://static.killedbygoogle.com/com/tombstone.svg',
      alt: 'Tombstone'
    } : {
      src: 'https://static.killedbygoogle.com/com/guillotine.svg',
      alt: 'Guillotine'
    };
  };

  const ageRange = () => {
    const yearOpen = dateOpen.getFullYear();
    const yearClose = dateClose.getFullYear();
    if (!isPast()) {
      const monthClose = format(dateClose, 'LLLL');
      return (
        <div className={styles.ageRange}>
          <time dateTime={props.dateClose} title={`${props.dateClose}`}>
            {monthClose}
            <br />
            {yearClose}
          </time>
        </div>
      );
    }
    return (
      <div className={styles.ageRange}>
        <time dateTime={props.dateOpen} title={props.dateOpen}>
          {yearOpen}
        </time>
        {' - '}
        <time dateTime={props.dateClose} title={props.dateClose}>
          {yearClose}
        </time>
      </div>
    );
  };
  return (
    <li className={styles.listItem}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={getIcon().src} alt={getIcon().alt} />
        {ageRange()}
        <Badge content={props.type} />
      </div>
      <div className={styles.contentContainer}>
        <h2>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
        </h2>
        <p className={styles.description}>
          {(isPast()) ? `Killed ${relativeDate} ago, ` : <DeathIdiom relativeDate={relativeDate} /> }
          {props.description}
          {getYears()}
        </p>
      </div>
    </li>
  );
}

