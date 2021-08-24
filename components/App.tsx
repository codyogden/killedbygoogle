import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Compoents
import List from './List';
import Filter, { FilterType } from './Filter';
import Search from './Search';
import Loader from './Loader';
import { ProductWithSlug } from '../types/Product';

const Controls = styled.div`
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 2rem;
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    padding: 1rem 0 4rem 0;
    @media screen and ( max-width: 700px ) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 8px;
        max-width: 80%;
        margin-right: auto;
        margin-left: auto;
    }
`;


const App: React.FC<{ items: ProductWithSlug[] }> = ({ items }) => {
    const [listItems, updateListItems] = useState(items);
    const [searchTerm, updateSearchTerm] = useState('');
    const [activeFilter, updateActiveFilter] = useState<FilterType>('all');

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
    }, [searchTerm, activeFilter]);

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
