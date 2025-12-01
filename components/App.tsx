'use client';

import { FC, useEffect, useState } from 'react';

import { FilterType } from 'types/Filter';
import { ProductType, ProductWithSlug } from 'types/Product';
import {
    Controls,
    Filter,
    List,
    Loader,
    Search,
} from 'components';

const App: FC<{ items: ProductWithSlug[] }> = ({ items }) => {
    const [listItems, updateListItems] = useState(items);
    const [searchTerm, updateSearchTerm] = useState('');
    const [activeFilter, updateActiveFilter] = useState<ProductType|FilterType>(FilterType.ALL);

    useEffect(() => {
        const regexp = new RegExp(searchTerm.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        const list = activeFilter === 'all' ? items :
            items.filter(el => el.type === activeFilter);
        // If search goes empty
        if (searchTerm === '') {
            // Reset the list.
            updateListItems(list);
        } else {
            // Otherwise filter the list by name and description
            updateListItems(list.filter(el =>
                regexp.test(el.name.toLowerCase()) ||
                regexp.test(el.description.toLowerCase())
            ));
        }
    }, [searchTerm, activeFilter, items]);

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
