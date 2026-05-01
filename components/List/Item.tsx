import { formatDistanceToNow } from 'date-fns';

import { ProductWithSlug } from '@/types/Product';
import Badge from '@/components/Badge';

const TOMBSTONE_SRC = 'https://static.killedbygoogle.com/com/tombstone.svg';
const GUILLOTINE_SRC = 'https://static.killedbygoogle.com/com/guillotine.svg';

const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;

const soonToDieIdioms = [
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
  "Getting KO'd",
  'Running out of juice',
  'Fading into darkness',
  'Floating belly up',
];

function getIdiom(relativeDate: string) {
  const seed = relativeDate
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return soonToDieIdioms[seed % soonToDieIdioms.length];
}

function Item(props: ProductWithSlug) {
  const now = Date.now();
  const past = now > props.dateCloseMs;
  const recentlyKilled = past && now - props.dateCloseMs < ONE_MONTH_MS;
  const relative = formatDistanceToNow(props.dateCloseMs);

  const iconSrc = past ? TOMBSTONE_SRC : GUILLOTINE_SRC;
  const iconAlt = past ? 'Tombstone' : 'Guillotine';
  const yearsLine = past
    ? ` It was ${props.duration} old.`
    : ` It will be ${props.duration} old.`;

  const lead = past
    ? recentlyKilled
      ? 'Killed recently, '
      : `Killed ${relative} ago, `
    : `${getIdiom(relative)} in ${relative}, `;

  const ageRange = past ? (
    <div className="text-[0.75em]">
      <time dateTime={props.dateOpen} title={props.dateOpen}>
        {props.dateOpenYear}
      </time>
      {' - '}
      <time dateTime={props.dateClose} title={props.dateClose}>
        {props.dateCloseYear}
      </time>
    </div>
  ) : (
    <div className="text-[0.75em]">
      <time dateTime={props.dateClose} title={props.dateClose}>
        {props.dateCloseMonth}
        <br />
        {props.dateCloseYear}
      </time>
    </div>
  );

  return (
    <li
      data-product
      data-type={props.type}
      data-name={props.name.toLowerCase()}
      data-description={props.description.toLowerCase()}
      className="box-border flex gap-5 px-4 [content-visibility:auto] [contain-intrinsic-size:auto_140px] [&_h2]:m-0 [&_h2]:font-light min-[701px]:px-0"
    >
      <div className="shrink-0 basis-[80px] text-center min-[901px]:basis-[100px]">
        <img
          className="invert-on-dark mx-auto h-[50px] w-[50px]"
          src={iconSrc}
          alt={iconAlt}
          width="50"
          height="50"
          loading="lazy"
          decoding="async"
        />
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
          {lead}
          {props.description}
          {yearsLine}
        </p>
      </div>
    </li>
  );
}

export default Item;
