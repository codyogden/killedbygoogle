import { formatDistanceToNow, parseISO } from 'date-fns';
import { FC, useMemo } from 'react';

interface Props {
    relativeDate: string;
}

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

const LeadPhrase: FC<Props> = ({ relativeDate }) => {
    const idiom = useMemo(soonToDieIdiom, []);
    return <span>{`${idiom} in ${relativeDate}, `}</span>;
};

export default LeadPhrase;
