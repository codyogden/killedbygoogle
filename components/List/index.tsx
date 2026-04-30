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
    <ul className="mx-auto grid max-w-[1400px] list-none gap-12 p-0 grid-cols-[5px_2fr_5px] [&>li]:[grid-column:2] min-[851px]:grid-cols-[repeat(2,minmax(300px,1fr))] min-[851px]:[&>li]:[grid-column:auto] min-[1301px]:grid-cols-[repeat(3,minmax(300px,1fr))]">
        <li className="ad-container mx-auto my-2 box-border flex max-w-full flex-[0_0_50%] items-center justify-center border-b-0 [&_h2]:m-0 [&_h2]:font-light min-[901px]:my-4 min-[901px]:flex-[0_0_30%]">
            <SRT>Advertisement</SRT>
            {showAd()}
        </li>
        {items.map((item) => (
            <Item key={item.slug} {...item} />
        ))}
    </ul>
);

export default List;
