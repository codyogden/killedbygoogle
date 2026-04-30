import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import {
  format,
  formatDistance,
  formatDistanceToNow,
  parseISO,
} from 'date-fns';

import { ProductWithSlug } from '@/types/Product';
import Badge from '@/components/Badge';
import styles from './Item.module.css';

const DeathIdiom = dynamic(() => import('./LeadPhrase'));

const TOMBSTONE = {
  src: 'https://static.killedbygoogle.com/com/tombstone.svg',
  alt: 'Tombstone',
};
const GUILLOTINE = {
  src: 'https://static.killedbygoogle.com/com/guillotine.svg',
  alt: 'Guillotine',
};

function Item(props: ProductWithSlug) {
  const dateOpen = parseISO(props.dateOpen);
  const dateClose = parseISO(props.dateClose);
  const past = Date.now() > dateClose.getTime();
  const relativeDate = formatDistanceToNow(dateClose);
  const duration = formatDistance(dateClose, dateOpen);
  const icon = past ? TOMBSTONE : GUILLOTINE;
  const yearsLine = past ? ` It was ${duration} old.` : ` It will be ${duration} old.`;

  let ageRange: React.ReactNode;
  if (past) {
    ageRange = (
      <div className={styles.ageRange}>
        <time dateTime={props.dateOpen} title={props.dateOpen}>
          {dateOpen.getFullYear()}
        </time>
        {' - '}
        <time dateTime={props.dateClose} title={props.dateClose}>
          {dateClose.getFullYear()}
        </time>
      </div>
    );
  } else {
    ageRange = (
      <div className={styles.ageRange}>
        <time dateTime={props.dateClose} title={`${props.dateClose}`}>
          {format(dateClose, 'LLLL')}
          <br />
          {dateClose.getFullYear()}
        </time>
      </div>
    );
  }

  return (
    <li className={styles.listItem}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={icon.src} alt={icon.alt} />
        {ageRange}
        <Badge content={props.type} />
      </div>
      <div className={styles.contentContainer}>
        <h2>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
        </h2>
        <p className={styles.description}>
          {past ? `Killed ${relativeDate} ago, ` : <DeathIdiom relativeDate={relativeDate} />}
          {props.description}
          {yearsLine}
        </p>
      </div>
    </li>
  );
}

export default memo(Item);
