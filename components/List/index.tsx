import { ProductWithSlug } from '@/types/Product';

import Carbon from '@/components/Carbon';
import SRT from '@/components/SRT';
import Item from '@/components/List/Item';

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
    return <FallbackAd />;
};

type Props = {
    items: ProductWithSlug[];
};

const List: React.FC<Props> = ({ items }) => (
    <ul className="mx-auto grid max-w-[1400px] list-none grid-cols-1 gap-y-8 p-0 min-[851px]:gap-12 min-[851px]:grid-cols-[repeat(2,minmax(300px,1fr))] min-[1301px]:grid-cols-[repeat(3,minmax(300px,1fr))]">
        <li className="ad-container mx-auto box-border flex items-center justify-center border-b-0 [&_h2]:m-0 [&_h2]:font-light">
            <SRT>Advertisement</SRT>
            {showAd()}
        </li>
        {items.map((item) => (
            <Item key={item.slug} {...item} />
        ))}
    </ul>
);

export default List;
