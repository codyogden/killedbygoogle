import React from 'react';
import { shallow, mount } from 'enzyme';
import { willDieInFuture, diedInPast } from '../fixtures/graveyard.jsx';
import Item from '../../src/components/Item';

describe('Items with death dates (dateClose) in the past', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<Item {...diedInPast[0]} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render Icon image with tombstone', () => {
        const wrapper = mount(<Item {...diedInPast[1]} />);
        expect(
            wrapper.find("IconContainer").containsMatchingElement(
            <img src="assets/tombstone.svg" alt="Tombstone" />
            )
        ).toBeTruthy();
    });
});

describe('Items with death dates (dateClose) in the future', () => {
    test('should render Icon image with guillotine', () => {
        const wrapper = mount(<Item {...willDieInFuture[0]} />);    
        expect(
            wrapper.find("IconContainer").containsMatchingElement(
            <img src="assets/guillotine.svg" alt="Guillotine" />
            )
        ).toBeTruthy();
    });
});