import React from 'react';
import { shallow } from 'enzyme';
import Item from '../../src/components/Item';
import { willDieInFutureFixedDate, diedInPast } from '../fixtures/graveyard.jsx';

describe.skip('Using Current Theme Halloween Items', () => {

    test('with death date in past should render correctly', () => {   
        const wrapper = shallow(<Item {...diedInPast[0]} />);
        expect(wrapper).toMatchSnapshot();
    });

    //Need to figure out the way to handle the random {this.timePhrase()} that fails snapshot in each run
    test.skip('with death date in future should render correctly', () => {   
        const wrapper = shallow(<Item {...willDieInFutureFixedDate[0]} />);
        expect(wrapper).toMatchSnapshot();
    });    
});