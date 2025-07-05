import { FC } from 'react';

interface Props {
    relativeDate: string;
}

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
    'Getting KO\'d',
    'Running out of juice',
    'Fading into darkness',
    'Floating belly up'
];

const getIdiom = (relativeDate: string) => {
    // Use relativeDate as seed for deterministic selection to avoid hydration mismatches
    const seed = relativeDate.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return soonToDieIdioms[seed % soonToDieIdioms.length];
};

const LeadPhrase: FC<Props> = ({ relativeDate }) => {
    const idiom = getIdiom(relativeDate);
    return <span>{`${idiom} in ${relativeDate}, `}</span>;
};

export default LeadPhrase;
