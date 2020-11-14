import { Component } from 'react';
import styled from 'styled-components';

// Compoents
import List from './List';
import Filter from './Filter';
import Search from './Search';
import Loader from './Loader';

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

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listOfItems: [],
            fullList: [],
            activeFilter: false,
            term: '',
        };

        // Bindings
        this.searchFilter = this.searchFilter.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.search = this.search.bind(this);
    }

    async componentDidMount() {
        const req = await fetch('/graveyard.json');
        const res = await req.json();
        const data = await res.sort(
            (a, b) => new Date(b.dateClose) - new Date(a.dateClose)
        );
        this.setState({
            listOfItems: data,
            fullList: data
        });
    }

    setFilter(val) {
        this.setState(
            {
                activeFilter: val,
            },
            this.search
        );
    }
    searchFilter(term) {
        this.setState(
            {
                term,
            },
            this.search
        );
    }
    search() {
        const { fullList, activeFilter, term } = this.state;
        const regexp = new RegExp(term.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        // If a filter is active, only search through those results
        const list = activeFilter
            ? fullList.filter(el => el.type === activeFilter)
            : fullList;
        // If search goes empty
        if (term === '') {
            // Reset the list.
            this.setState({
                listOfItems: list,
            });
        } else {
            // Otherwise filter the list by name and description
            this.setState({
                listOfItems: list.filter(
                    el =>
                        regexp.test(el.name.toLowerCase()) ||
                        regexp.test(el.description.toLowerCase())
                ),
            });
        }
    }
    
    render() {
        const { listOfItems, activeFilter, fullList } = this.state;

        return (
            <>
                {listOfItems.length ? <>
                    <Controls>
                        <Search search={this.searchFilter} />
                        <Filter
                            current={activeFilter}
                            filterHandler={this.setFilter}
                            items={fullList}
                        />
                    </Controls>
                    <List items={listOfItems} />
                </> : <Loader />}
            </>
        );
    }
};
