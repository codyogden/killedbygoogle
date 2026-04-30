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
      <div className="text-[0.75em]">
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
      <div className="text-[0.75em]">
        <time dateTime={props.dateClose} title={`${props.dateClose}`}>
          {format(dateClose, 'LLLL')}
          <br />
          {dateClose.getFullYear()}
        </time>
      </div>
    );
  }

  return (
    <li className="box-border flex gap-5 px-4 [&_h2]:m-0 [&_h2]:font-light min-[701px]:px-8">
      <div className="shrink-0 basis-[80px] text-center min-[901px]:basis-[100px]">
        <img className="mx-auto h-[50px] w-[50px]" src={icon.src} alt={icon.alt} />
        {ageRange}
        <Badge content={props.type} />
      </div>
      <div className="min-w-0 flex-1 pb-5">
        <h2 className="text-[1.15em]">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
        </h2>
        <p className="mx-0 mt-2 mb-0 text-[0.9em] leading-[1.5]">
          {past ? `Killed ${relativeDate} ago, ` : <DeathIdiom relativeDate={relativeDate} />}
          {props.description}
          {yearsLine}
        </p>
      </div>
    </li>
  );
}

export default memo(Item);
