import React from 'react';
import { shallow } from 'enzyme';
import { diedInPast } from '../fixtures/graveyard.jsx';
import List from '../../src/components/List';

test('should render List with elements having dateClose in past', () => {
    const wrapper = shallow(<List items={ diedInPast } />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Item")).toHaveLength(diedInPast.length);
});