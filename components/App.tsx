'use client';

import { FC, startTransition, useEffect, useState } from 'react';

import { FilterType } from '@/types/Filter';
import { ProductType } from '@/types/Product';
import { Controls } from '@/components/Controls';
import Filter, { FilterCounts } from '@/components/Filter';
import Search from '@/components/Search';

const App: FC<{ counts: FilterCounts }> = ({ counts }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] =
        useState<ProductType | FilterType>(FilterType.ALL);

    useEffect(() => {
        const apply = () => {
            const items =
                document.querySelectorAll<HTMLLIElement>('li[data-product]');
            const needle = searchTerm.toLowerCase();
            for (const li of items) {
                const matchesType =
                    activeFilter === FilterType.ALL ||
                    li.dataset.type === activeFilter;
                const matchesSearch =
                    !needle ||
                    li.dataset.name?.includes(needle) ||
                    li.dataset.description?.includes(needle);
                const hide = !(matchesType && matchesSearch);
                if (li.hidden !== hide) li.hidden = hide;
            }
        };
        startTransition(apply);
    }, [searchTerm, activeFilter]);

    return (
        <Controls>
            <Search searchCallback={setSearchTerm} />
            <Filter counts={counts} filterHandler={setActiveFilter} />
        </Controls>
    );
};

export default App;
