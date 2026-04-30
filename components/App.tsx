'use client';

import { FC, useMemo, useState } from 'react';

import { FilterType } from '@/types/Filter';
import { ProductType, ProductWithSlug } from '@/types/Product';
import { Controls } from '@/components/Controls';
import Filter from '@/components/Filter';
import List from '@/components/List';
import Loader from '@/components/Loader';
import Search from '@/components/Search';

const App: FC<{ items: ProductWithSlug[] }> = ({ items }) => {
    const [searchTerm, updateSearchTerm] = useState('');
    const [activeFilter, updateActiveFilter] = useState<ProductType|FilterType>(FilterType.ALL);

    const listItems = useMemo(() => {
        const base = activeFilter === FilterType.ALL
            ? items
            : items.filter((el) => el.type === activeFilter);

        if (!searchTerm) return base;

        const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(escaped, 'i');
        return base.filter((el) => re.test(el.name) || re.test(el.description));
    }, [items, activeFilter, searchTerm]);

    return (
        <>
            {items.length ? <>
                <Controls>
                    <Search searchCallback={updateSearchTerm} />
                    <Filter
                        filterHandler={updateActiveFilter}
                        items={items}
                    />
                </Controls>
                <List items={listItems} />
            </> : <Loader />}
        </>
    );
}
export default App;
