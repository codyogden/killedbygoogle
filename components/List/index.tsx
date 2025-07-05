import { ProductWithSlug } from 'types/Product';

import { Carbon, SRT } from 'components';
import Item from 'components/List/Item';
import styles from './List.module.css';
import Link from 'next/link';


// Components now use CSS modules

export const FallbackAd = () => <></>;

const showAd = () => {
    if (process.env.NODE_ENV === 'production')
        return (
            <Carbon
                name="kbg-carbon"
                placement="killedbygooglecom"
                serve="CK7I653N"
                fallback={<FallbackAd />}
            />
        );
    return <FallbackAd />
};

type Props = {
    items: ProductWithSlug[]
}

const List: React.FC<Props> = ({ items }) => (
    <ul className={styles.listContainer}>
        <li className={styles.adContainer}>
            <SRT>Advertisement</SRT>
            {showAd()}
        </li>
        {items.map(item => (
            <Item key={item.slug} {...item} />
        ))}
    </ul>
);


export default List;
